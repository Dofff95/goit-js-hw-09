!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){t.setAttribute("disabled",!0),color=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(color)}))}();
//# sourceMappingURL=01-color-switcher.fa53f9f7.js.map
