const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let e=null;function a(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function n(){const e=t.btnStart.hasAttribute("disabled"),a=t.btnStop.hasAttribute("disabled");switch(e){case!0:t.btnStart.removeAttribute("disabled");break;case!1:t.btnStart.setAttribute("disabled","")}switch(a){case!0:t.btnStop.removeAttribute("disabled");break;case!1:t.btnStop.setAttribute("disabled","")}}t.btnStop.setAttribute("disabled",""),t.btnStart.addEventListener("click",(()=>{a(),n(),e=setInterval(a,1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),n()}));
//# sourceMappingURL=01-color-switcher.a0e3fc1c.js.map
