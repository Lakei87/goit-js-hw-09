!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},e=null;function n(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}function o(){var e=t.btnStart.hasAttribute("disabled"),n=t.btnStop.hasAttribute("disabled");if(!0===e)t.btnStart.removeAttribute("disabled");else t.btnStart.setAttribute("disabled","");if(!0===n)t.btnStop.removeAttribute("disabled");else t.btnStop.setAttribute("disabled","")}t.btnStop.setAttribute("disabled",""),t.btnStart.addEventListener("click",(function(){n(),o(),e=setInterval(n,1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),o()}))}();
//# sourceMappingURL=01-color-switcher.df27e7ba.js.map