!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},c=e.parcelRequired7c6;null==c&&((c=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var c={id:t,exports:{}};return n[t]=c,e.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired7c6=c),c.register("jf9PO",(function(e,n){var o=c("bpxeT"),r=c("2TvXO"),a=c("dIxxU"),d={closeModalBtn:document.querySelector("[data-modal-cockt-close]"),addRemlBtn:document.querySelector(".modal-cockt__add-rem-btn"),modal:document.querySelector("[data-modal-cockt]"),body:document.querySelector("body")};function i(){d.modal.classList.toggle("is-hidden"),d.body.classList.toggle("no-scroll")}console.log(d.modal),d.modal.addEventListener("click",(function(t){t.target===t.currentTarget&&i()})),d.closeModalBtn.addEventListener("click",i),d.addRemlBtn.addEventListener("click",i),document.addEventListener("click",(function(t){t.target.dataset.cocktail&&(!function(t){m.apply(this,arguments)}(Number(t.target.dataset.cocktail)),i())}));var l=document.querySelector(".modal-cockt__name"),s=document.querySelector(".modal-cockt__instr-text"),u=document.querySelector(".modal-cockt__per-list"),p=document.querySelector(".modal-cockt__img"),f=document.querySelector(".modal-cockt__card");function m(){return(m=t(o)(t(r).mark((function e(n){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n);case 2:v(t.sent,n);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function g(t){return k.apply(this,arguments)}function k(){return(k=t(o)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.default.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(n));case 3:return o=t.sent,t.abrupt("return",o.data.drinks[0]);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(t,e){f.dataset.id="".concat(e),p.src="".concat(t.strDrinkThumb),l.textContent="".concat(t.strDrink),s.textContent="".concat(t.strInstructions);var n=[];u.innerHTML="";for(var o=1;o<15;o++)if(t["strMeasure".concat(o)]||t["strIngredient".concat(o)]){if(!t["strMeasure".concat(o)]){n.push('<li class="modal-cockt__ingred">\n          <a>\n            <p>\n            <span data-ingredient="'.concat(t["strIngredient".concat(o)],'">\n              ').concat(t["strIngredient".concat(o)],"\n            </span></p>\n          </a>\n        </li>"));break}n.push('<li class="modal-cockt__ingred">\n          <a>\n            <p>'.concat(t["strMeasure".concat(o)],'\n            <span data-ingredient="').concat(t["strIngredient".concat(o)],'">\n              ').concat(t["strIngredient".concat(o)],"\n            </span></p>\n          </a>\n        </li>"))}u.insertAdjacentHTML("beforeend",n.join("")),document.querySelectorAll("[data-add]").forEach((function(t){var e=t.closest(".item").dataset.id;JSON.parse(localStorage.getItem("coctailse")).map((function(t){return t.id})).some((function(t){return t===e}))?null!=t.dataset.modal&&(t.textContent="Remove from favorite"):null!=t.dataset.modal&&(t.textContent="Add to favorite")}))}}))}();
//# sourceMappingURL=favorite-cocktails.a3cb9d1e.js.map
