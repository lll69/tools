// ==UserScript==
// @name        40code软键盘
// @match       http://40code.com/*
// @match       https://40code.com/*
// @grant       none
// @version     1.0
// @author      lll69
// @description 40code添加软键盘
// @run-at      document-start
// ==/UserScript==

var keyhtml;
var keySettings;
{
    keySettings = `<html>

    <head>
        <meta charset="utf-8" />
        <title>软键盘设置</title>
    </head>
    
    <body>
        <h1>软键盘设置</h1>
        <form onsubmit="return false">
            <ul>
                <li>
                    <label>连击等待时间(ms): <input required name="waitTime" type="number" value="500" min="1" /></label>
                </li>
                <li>
                    <label>连击间隔(ms): <input required name="keySpeed" type="number" value="31" min="1" /></label>
                </li>
                <li>
                    <label>按键大小(px): <input required name="keySize" type="number" value="48" min="16" /></label>
                </li>
            </ul>
            <input type="submit" value="保存" />
            <input type="reset" />
        </form>
        <script>
            function submit(e) {
                console.log(e);
                var f = new FormData(this);
                f.forEach(function (v, k) {
                    localStorage.setItem(k, v);
                });
                alert("保存成功，下次进入作品页面生效");
            }
            function load(s) {
                var p = new URLSearchParams(s);
                p.forEach(function (v, k) {
                    if (v)
                        document.querySelector(\`*[name=\${k}]\`).value = v;
                });
            }
            function getItem(k) {
                k = localStorage.getItem(k);
                return k ? k : "";
            }
            document.querySelector("form").addEventListener("submit", submit);
            if (localStorage) {
                load({
                    waitTime: getItem("waitTime"),
                    keySpeed: getItem("keySpeed"),
                    keySize: getItem("keySize"),
                });
            }
        </script>
    </body>
    
    </html>`;
    keySettings = URL.createObjectURL(new Blob([keySettings], { type: 'text/html' }));
}
var keySize = 48;
function refreshH() {
    keyhtml = `<summary>软键盘</summary>
    <div oncontextmenu="return false" ondragstart="return false"
        style="user-select: none;-moz-user-select: none;-ms-user-select: none;-webkit-user-select: none;">
        <style>
            .placeholder {
                border-color: transparent;
                display: inline-block;
                opacity: 0;
            }
    
    
            .placeholder,
            .leftKey>img,
            .rightKey>img,
            .centerKey>img {
                border-radius: 50%;
                border-style: solid;
                width: ${keySize}px;
                height: ${keySize}px;
                padding: 8px;
                border-color: black;
            }
    
    
            .l90 {
                transform: rotate(-90deg);
            }
    
            .leftKey,
            .rightKey,
            .centerKey {
                display: inline-block;
            }
    
            .y180 {
                transform: rotateX(180deg);
            }
        </style>
        <div class="leftKey">
            <img class="placeholder" />
            <img id="up"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMCA3MzAiPg0KICAgIDxwYXRoIGQ9Ik0yOTkgLTEwbC0yODkgMjQ2djEwNWwxODYgLTE1OHEyMiAtMTkgMzYgLTMzdDE4IC0yMGgxMHEtMSAxMyAtMyAzNS41dC0yIDQ0LjV2NTIwaDkwdi01MjBxMCAtMjIgLTEuNSAtNDQuNXQtMy41IC0zNS41aDEwcTEwIDE1IDU1IDU0bDE4NSAxNTh2LTEwNXoiIC8+DQo8L3N2Zz4=" />
            <img class="placeholder" />
            <br />
            <img id="left" class="l90"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMCA3MzAiPg0KICAgIDxwYXRoIGQ9Ik0yOTkgLTEwbC0yODkgMjQ2djEwNWwxODYgLTE1OHEyMiAtMTkgMzYgLTMzdDE4IC0yMGgxMHEtMSAxMyAtMyAzNS41dC0yIDQ0LjV2NTIwaDkwdi01MjBxMCAtMjIgLTEuNSAtNDQuNXQtMy41IC0zNS41aDEwcTEwIDE1IDU1IDU0bDE4NSAxNTh2LTEwNXoiIC8+DQo8L3N2Zz4=" />
            <img id="space" class="l90"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtMTAwIDYwMCA5MzAiPg0KICAgIDxwYXRoIGQ9Ik0yMDUgLTExMHY5NDBoMjQ1di04MGgtMTU1di03ODBoMTU1di04MGgtMjQ1eiIgLz4NCjwvc3ZnPg==" />
            <img id="right" class="l90"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMCA3MzAiPg0KICAgIDxwYXRoIGQ9Ik0yNTUgMHY1MjBxMCAyMiAyIDQ0LjV0MyAzNS41aC0xMHEtMTAgLTE1IC01NSAtNTRsLTE4NSAtMTU4djEwNWwyOTEgMjQ3bDI4OSAtMjQ2di0xMDVsLTE4NiAxNThxLTIyIDE5IC0zNS41IDMzdC0xOC41IDIwaC0xMHEyIC0xMyAzLjUgLTM1LjV0MS41IC00NC41di01MjBoLTkweiIgLz4NCjwvc3ZnPg==" />
            <br />
            <img class="placeholder" />
            <img id="down"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMCA3MzAiPg0KICAgIDxwYXRoIGQ9Ik0yNTUgMHY1MjBxMCAyMiAyIDQ0LjV0MyAzNS41aC0xMHEtMTAgLTE1IC01NSAtNTRsLTE4NSAtMTU4djEwNWwyOTEgMjQ3bDI4OSAtMjQ2di0xMDVsLTE4NiAxNThxLTIyIDE5IC0zNS41IDMzdC0xOC41IDIwaC0xMHEyIC0xMyAzLjUgLTM1LjV0MS41IC00NC41di01MjBoLTkweiIgLz4NCjwvc3ZnPg==" />
            <img class="placeholder" />
        </div>
        <div class="centerKey">
            <img id="settings"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PGc+PHBhdGggZD0iTTAsMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5LjE0LDEyLjk0YzAuMDQtMC4zLDAuMDYtMC42MSwwLjA2LTAuOTRjMC0wLjMyLTAuMDItMC42NC0wLjA3LTAuOTRsMi4wMy0xLjU4YzAuMTgtMC4xNCwwLjIzLTAuNDEsMC4xMi0wLjYxIGwtMS45Mi0zLjMyYy0wLjEyLTAuMjItMC4zNy0wLjI5LTAuNTktMC4yMmwtMi4zOSwwLjk2Yy0wLjUtMC4zOC0xLjAzLTAuNy0xLjYyLTAuOTRMMTQuNCwyLjgxYy0wLjA0LTAuMjQtMC4yNC0wLjQxLTAuNDgtMC40MSBoLTMuODRjLTAuMjQsMC0wLjQzLDAuMTctMC40NywwLjQxTDkuMjUsNS4zNUM4LjY2LDUuNTksOC4xMiw1LjkyLDcuNjMsNi4yOUw1LjI0LDUuMzNjLTAuMjItMC4wOC0wLjQ3LDAtMC41OSwwLjIyTDIuNzQsOC44NyBDMi42Miw5LjA4LDIuNjYsOS4zNCwyLjg2LDkuNDhsMi4wMywxLjU4QzQuODQsMTEuMzYsNC44LDExLjY5LDQuOCwxMnMwLjAyLDAuNjQsMC4wNywwLjk0bC0yLjAzLDEuNTggYy0wLjE4LDAuMTQtMC4yMywwLjQxLTAuMTIsMC42MWwxLjkyLDMuMzJjMC4xMiwwLjIyLDAuMzcsMC4yOSwwLjU5LDAuMjJsMi4zOS0wLjk2YzAuNSwwLjM4LDEuMDMsMC43LDEuNjIsMC45NGwwLjM2LDIuNTQgYzAuMDUsMC4yNCwwLjI0LDAuNDEsMC40OCwwLjQxaDMuODRjMC4yNCwwLDAuNDQtMC4xNywwLjQ3LTAuNDFsMC4zNi0yLjU0YzAuNTktMC4yNCwxLjEzLTAuNTYsMS42Mi0wLjk0bDIuMzksMC45NiBjMC4yMiwwLjA4LDAuNDcsMCwwLjU5LTAuMjJsMS45Mi0zLjMyYzAuMTItMC4yMiwwLjA3LTAuNDctMC4xMi0wLjYxTDE5LjE0LDEyLjk0eiBNMTIsMTUuNmMtMS45OCwwLTMuNi0xLjYyLTMuNi0zLjYgczEuNjItMy42LDMuNi0zLjZzMy42LDEuNjIsMy42LDMuNlMxMy45OCwxNS42LDEyLDE1LjZ6Ii8+PC9nPjwvc3ZnPg==" />
            <br>
            <img class="placeholder" />
            <br>
            <img class="placeholder" />
        </div>
        <div class="rightKey">
            <img class="placeholder" />
            <img id="w" class="y180"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtNzAgNjAwIDkwMCI+DQogICAgPHBhdGggZD0iTTEwOSAwbC04NCA3MzBoODZsNTUgLTU0MHEzIC0zMyA1LjUgLTY4LjV0My41IC01Ni41cTIgMjEgNS41IDU2LjV0Ny41IDY4LjVsNjggNTQwaDkzbDYyIC01NDBxNCAtMzMgOCAtNjguNXQ2IC01Ni41cTIgMjEgNC41IDU2LjV0Ni41IDY4LjVsNTcgNTQwaDgybC04NiAtNzMwaC0xMTNsLTYyIDU1MHEtNCAzNCAtNyA2Ni41dC01IDUwLjVxLTIgLTE4IC01LjUgLTUwLjV0LTcuNSAtNjYuNWwtNjcgLTU1MGgtMTEzeiIgLz4NCjwvc3ZnPg==" />
            <img class="placeholder" />
            <br />
            <img id="a" class="y180"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtNzAgNjAwIDkwMCI+DQogICAgPHBhdGggZD0iTTUwIDBsMTkwIDczMGgxMjFsMTg5IC03MzBoLTkxbC00OCAxOTRoLTIyMWwtNDggLTE5NGgtOTJ6TTIwOCAyNzBoMTg0bC01NiAyMjVxLTE2IDY0IC0yNSAxMDd0LTExIDU2cS0yIC0xMyAtMTEgLTU2dC0yNSAtMTA2eiIgLz4NCjwvc3ZnPg==" />
            <img id="enter" class="y180"
                src="data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtNTAgNzAwIDEyMDAiPg0KICAgIDxwYXRoIGQ9Ik0wIDMzOGwyODcgMzM5di05NGwtMTQ0IC0xODFoNDcxdjYxNWgxMjN2LTczOGgtNTk0bDE0NCAtMTg0di05NXoiIC8+DQo8L3N2Zz4=" />
            <img id="d" class="y180"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtNzAgNjAwIDkwMCI+DQogICAgPHBhdGggZD0iTTkyIDB2NzMwaDE4OXE3MSAwIDEyMi41IC0yN3Q4MCAtNzZ0MjguNSAtMTE2di0yOTFxMCAtNjcgLTI4LjUgLTExNi41dC04MCAtNzYuNXQtMTIyLjUgLTI3aC0xODl6TTE4MiA4MGg5OXE2NiAwIDEwMy41IDM3dDM3LjUgMTAzdjI5MXEwIDY1IC0zNy41IDEwMnQtMTAzLjUgMzdoLTk5di01NzB6IiAvPg0KPC9zdmc+" />
            <br />
            <img class="placeholder" />
            <img id="s" class="y180"
                src="data:image/svg+xml;base64,PCEtLSBodHRwczovL2dpdGh1Yi5jb20vSmV0QnJhaW5zL0pldEJyYWluc01vbm8gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAtNzAgNjAwIDkwMCI+DQogICAgPHBhdGggZD0iTTMwNCAtMTBxLTEwNiAwIC0xNjkgNTV0LTYzIDE0N2g5MHEwIC01NSAzOSAtODguNXQxMDMgLTMzLjVxNjIgMCA5OSAzMy41dDM3IDg4LjVxMCA0MyAtMjIuNSA3NS41dC02MS41IDQ0LjVsLTEwOCAzNHEtNzMgMjMgLTExNC41IDc2dC00MS41IDEyM3EwIDg5IDU4LjUgMTQydDE1NS41IDUzdDE1NSAtNTN0NTggLTE0MmgtOTBxMCA1MyAtMzMuNSA4NHQtODkuNSAzMXEtNTcgMCAtOTEuNSAtMzF0LTM0LjUgLTgycTAgLTQwIDIzIC02OQ0KICAgIHQ2MyAtNDJsMTEyIC0zNnE2OSAtMjIgMTA5LjUgLTc4dDQwLjUgLTEzMHEwIC05MiAtNjEgLTE0N3QtMTYzIC01NXoiIC8+DQo8L3N2Zz4=" />
            <img class="placeholder" />
        </div>
    </div>`;
}
refreshH();
function refreshK() {
    function getLocal(s, d) {
        if (localStorage) {
            s = localStorage.getItem(s);
        }
        return s ? s : d;
    }
    keySpeed = getLocal("keySpeed", 31);
    waitTime = getLocal("waitTime", 500);
    keySize = getLocal("keySize", 48);
    refreshH();
}
var keySpeed = 31;
var waitTime = 500;
function bindK(element, vm) {
    function bindKey(elem, keyName, scratchName, keyCode) {
        var intervalId = -1;
        var timeId = -1;
        function pressEvent() {
            vm.runtime.startHats('event_whenkeypressed', { KEY_OPTION: scratchName });
        }
        elem.onmousedown = elem.ontouchstart = function () {
            elem.style.background = "#2196f3";
            vm.postIOData('keyboard', {
                key: keyName,
                keyCode: keyCode,
                isDown: true
            });
            clearInterval(intervalId);
            timeId = setTimeout(function () {
                intervalId = setInterval(pressEvent, keySpeed);
            }, waitTime);
            pressEvent();
            return false;
        }
        elem.onmouseup = elem.ontouchend = function () {
            elem.style.background = null;
            vm.postIOData('keyboard', {
                key: keyName,
                keyCode: keyCode,
                isDown: false
            });
            clearTimeout(timeId);
            clearInterval(intervalId);
            return false;
        }
    }
    var div = document.createElement("details");
    div.className = "col";
    div.innerHTML = keyhtml;
    bindKey(div.querySelector("#up"), "ArrowUp", "up arrow", 38);
    bindKey(div.querySelector("#down"), "ArrowDown", "down arrow", 40);
    bindKey(div.querySelector("#left"), "ArrowLeft", "left arrow", 37);
    bindKey(div.querySelector("#right"), "ArrowRight", "right arrow", 39);
    bindKey(div.querySelector("#space"), " ", "space", 32);
    bindKey(div.querySelector("#w"), "w", "w", 119);
    bindKey(div.querySelector("#a"), "a", "a", 97);
    bindKey(div.querySelector("#s"), "s", "s", 115);
    bindKey(div.querySelector("#d"), "d", "d", 100);
    bindKey(div.querySelector("#enter"), "Enter", "enter", 13);
    div.querySelector("#settings").onclick = function () {
        window.open(keySettings);
    }
    element.appendChild(div);
    return div;
}
if (location.host == "40code.com" && !window.reg40) {
    function reg() {
        var iframe = document.querySelector("iframe");
        if (iframe && iframe.contentWindow && iframe.contentWindow.vm)
            window.reg40 = bindK(iframe.parentElement.parentElement.parentElement, iframe.contentWindow.vm);
        else
            window.reg40 = setTimeout(reg, 1000);
    }
    function changes() {
        refreshK();
        if (location.hash.startsWith("#page=work")) {
            window.reg40 = setTimeout(reg, 10);
        } else {
            if (typeof window.reg40 == "number")
                clearTimeout(window.reg40);
            else if (window.reg40.remove)
                window.reg40.remove();
        }
    }
    refreshK();
    window.reg40 = true;
    window.addEventListener("hashchange", changes);
    changes();
}