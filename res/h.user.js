// ==UserScript==
// @name         高度限制
// @namespace    https://lll69.github.io/
// @version      1.0
// @author       lll69
// @updateURL    https://lll69.github.io/tools/res/h.user.js
// @match        https://gitblock.cn/*
// @match        https://aerfaying.com/*
// @match        https://3eworld.cn/*
// @match        http://gitblock.cn/*
// @match        http://aerfaying.com/*
// @match        http://3eworld.cn/*
// @icon         https://aerfaying.com/Content/logo.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==


var st = document.createElement("style");
st.innerHTML = ".user-home_userInfo_2szc4{max-height:max-content!important}"
document.head.appendChild(st);

