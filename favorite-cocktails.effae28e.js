!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("eCjfi"),o("5BqCj"),o("3vjbM"),o("cs7FV"),o("5FLIq"),o("jf9PO"),o("51we0"),o("jcFG7");var a=document.querySelector(".cocktail__list"),c=(document.querySelector(".paginator"),document.querySelector(".pagination__list"),document.querySelector(".cocktail__section"),document.querySelector(".favorit-coct__wrapper")),i=0;i=function(){window.matchMedia("(min-width: 320px)").matches&&(i=3);window.matchMedia("(min-width: 768px)").matches&&(i=6);window.matchMedia("(min-width: 1200px)").matches&&(i=9);return i}();localStorage.getItem("coctailse")||localStorage.setItem("coctailse",JSON.stringify([]));var r,l=JSON.parse(localStorage.getItem("coctailse"));"[]"!==localStorage.getItem("coctailse")&&(c.innerHTML="",c.style.display="none",a.innerHTML="",r=l.map((function(e){var t=e.id,n=e.name,o=e.src;return"   <li class='cocktail__item item' data-id='".concat(t,"''>\n      <img class='cocktail__image image' src=\"").concat(o,"\" alt='cocktail'/>\n      <h3 class='cocktail__title name'>").concat(n,"</h3>\n      <div class='cocktail__btn--box'>\n      <button class='learnmore__btn' type='button' data-modal-cockt-open>Learn More</button>\n      <button class='add__btn' type='button' data-add>Remove\n     <svg class=\"icon-hert\" width=\"19\" height=\"17\">\n            <use href=\"./symbol-defs.a8b2e413.svg#icon-heart-transparent\"></use>\n    </svg>\n     </button>\n      </div>\n      </li>")})),a.insertAdjacentHTML("beforeend",r.join(""))),o("1hbPv"),o("5g02X"),o("FpPQF")}();
//# sourceMappingURL=favorite-cocktails.effae28e.js.map
