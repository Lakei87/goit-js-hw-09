!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i"),r={form:document.querySelector(".form")};function a(e,o){return new Promise((function(n,t){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();for(var o=+r.form.elements.delay.value,n=+r.form.elements.step.value,t=+r.form.elements.amount.value,l=1;l<=t;l+=1)a(l,o).then((function(e){var o=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"),{timeout:5e3})})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"),{timeout:5e3})})),o+=n}))}();
//# sourceMappingURL=03-promises.c787735f.js.map