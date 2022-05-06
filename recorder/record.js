var start = document.querySelector("#start");
var stopButton = document.querySelector("#stop");
var saveButton = document.querySelector("#save");
var playButton = document.querySelector("#play");
var preview = document.querySelector("#preview");
var format = document.querySelector("#format");
var recorder;
var stream;
var video = null;
var type = "webm";
var playUrl = null;
function record(){
    video = [];
    playUrl = null;
    type = format.value;
    format.style.display = "none";
    navigator.mediaDevices.getDisplayMedia().then(success);
}
function success(s){
    stream=s;
    preview.srcObject=s;
    stopButton.removeAttribute("disabled");
    saveButton.removeAttribute("disabled");
    playButton.removeAttribute("disabled");
    recorder = new MediaRecorder(s,{
            mimeType: 'video/' + type
        });
    recorder.ondataavailable = function(data){
        video.push(data.data);
    }
    recorder.start(500);
}
function stop(){
    if (stream){
        for (var track of stream.getTracks()) {
            track.stop();
        }
    }
    stream = null;
    if(recorder)recorder.stop();
    recorder = null;
    stopButton.addAttribute("disabled");
}
function save(){
    if (video == null || video.length == 0){
        alert("没有视频");
        return;
    }
    var url = URL.createObjectURL(new Blob(video, {type: "video/" + type}));
    var a = document.createElement("a");
    a.href = url;
    a.download = "录屏." + type;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
function play(){
    if (video == null || video.length == 0){
        alert("没有视频");
        return;
    }
    if(!playUrl)
    playUrl = URL.createObjectURL(new Blob(video, {type: "video/" + type}));
    var a = document.createElement("a");
    a.href = playUrl;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}