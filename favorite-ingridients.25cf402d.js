function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"favorite-ingridients.25cf402d.js","3P3sM":"personalheart.4b9536a1.svg","4qnKo":"people-mob.898db292.png","fpBFr":"people-mob-2x.00899545.png","crApi":"people-tab.2ae2bc95.png","Xiv01":"people-tab-2x.e2a01e14.png","kbbIL":"people.ed4f2a0e.png","5QmMM":"people-2x.958f6639.png","dcAXX":"favorite-cocktails.a83aea58.js"}')),a("kmKSM"),a("e1bJr");var i=a("cyIMT");document.querySelectorAll(".add__btn");localStorage.getItem("coctailse")||localStorage.setItem("coctailse",JSON.stringify([]));JSON.parse(localStorage.getItem("coctailse"));function c(){document.querySelectorAll("[data-add]").forEach((e=>{const t=e.closest(".item").dataset.id;if(JSON.parse(localStorage.getItem("coctailse")).map((({id:e})=>e)).some((e=>e===t))){"Add to favorite"===e.textContent?e.textContent="Remove from favorite":e.innerHTML=`Remove\n    <svg class="icon-hert" width="17" height="15">\n     <use href="${personalheart+"#icon-black"}"></use>\n   </svg>`}}))}document.addEventListener("click",(e=>{if(null!=e.target.dataset.add){const t=JSON.parse(localStorage.getItem("coctailse")),n=e.target.closest(".item"),o=n.dataset.id,r=t.map((({id:e})=>e));if(r.every((e=>e!==o))||"[]"===localStorage.getItem("coctailse")){const e=n.querySelector(".image").src,r=n.querySelector(".name").textContent,a={id:o,name:r,src:e};t.push(a),localStorage.setItem("coctailse",JSON.stringify(t)),c()}else if(r.some((e=>e===o))){const n=t.filter((({id:e})=>e!==o));localStorage.setItem("coctailse",JSON.stringify(n)),function(e){"Remove from favorite"===e.target.textContent?e.target.textContent="Add to favorite":e.target.innerHTML=`Add to\n   <svg class="icon-hert" width="17" height="15">\n     <use href="${personalheart+"#icon-black"}"></use>\n   </svg>`}(e)}}}));var l;l=new URL(a("kyEFX").resolve("3P3sM"),import.meta.url).toString();const s=document.querySelector(".cocktail__list"),d=document.querySelector(".paginator"),u=(document.querySelector(".pagination__list"),document.querySelector(".cocktail__section")),m=document.querySelector(".header-search-icon"),p=document.querySelector(".gallery__title");m.addEventListener("submit",(async function(e){e.preventDefault(),p.classList.remove("visually-hidden");const t=e.target.elements.searchQuery.value;d.classList.add("visually-hidden"),s.innerHTML="";const n=await(0,i.fetchCocktailByName)(t);if(console.log(n),null===n)return b();h(n,v,g),m.reset()}));let f=[],g=1,v=0;async function _(e){e.preventDefault(),p.classList.remove("visually-hidden");const t=e.target.dataset.letter;d.classList.remove("visually-hidden"),s.innerHTML="";const n=await(0,i.fetchCocktailByLetter)(t);if(console.log(n),null===n)return b();h(n,v,g)}function y(e){if(null===e){const e="<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>\n                     <div class='noresult__box'></div>";return void(u.innerHTML=e)}const n=e.map((({strDrinkThumb:e,strDrink:n,idDrink:o})=>`<li class='cocktail__item item' data-id='${o}''>\n      <img class='cocktail__image image' src='${e}' alt='cocktail'/>\n      <h3 class='cocktail__title name'>${n}</h3>\n      <div class='cocktail__btn--box'>\n      <button class='learnmore__btn' type='button' data-cocktail='${o}'>Learn More</button>\n      <button class='add__btn' type='button' data-add>Add to\n     <svg class="icon-hert" width="17" height="15">\n            <use href="${t(l)+"#icon-black"}"></use>\n    </svg>\n     </button>\n      </div>\n      </li>`));s.insertAdjacentHTML("beforeend",n.join("")),c()}function h(e,t,n){n--,s.innerHTML="";const o=t*n,r=o+t;return y(e.slice(o,r))}function b(){return p.classList.add("visually-hidden"),s.innerHTML="<div class='noresult__container'>\n                     <p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>\n                     <div class='noresult__box'></div></div>"}v=function(){window.matchMedia("(min-width: 320px)").matches&&(v=3);window.matchMedia("(min-width: 768px)").matches&&(v=6);window.matchMedia("(min-width: 1200px)").matches&&(v=9);return v}(),async function(){p.classList.remove("visually-hidden"),d.classList.add("visually-hidden"),f=await(0,i.fetchRandomCoctails)(v),s.innerHTML="",y(f)}();new URL(a("kyEFX").resolve("4qnKo"),import.meta.url).toString();new URL(a("kyEFX").resolve("fpBFr"),import.meta.url).toString();new URL(a("kyEFX").resolve("crApi"),import.meta.url).toString();new URL(a("kyEFX").resolve("Xiv01"),import.meta.url).toString();new URL(a("kyEFX").resolve("kbbIL"),import.meta.url).toString();new URL(a("kyEFX").resolve("5QmMM"),import.meta.url).toString();const S=document.querySelector("#select"),k=document.querySelector(".hero__list"),L=document.querySelector(".select__input"),w=(document.querySelector(".gallery__title"),document.querySelector(".cocktail__list"),document.querySelector(".input-span")),M=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];function q(){const e=`<div class="select__dropdown">\n      <ul class="select__list">\n      ${M.map((e=>`\n      <li class="select__item" data-letter="${e}">${e.toUpperCase()}</li>\n      `)).join("")}\n      </ul>\n      </div>`;S.insertAdjacentHTML("beforeend",e)}document.querySelector(".select__input");let x=document.querySelector(".gallery__title");k.addEventListener("click",_),L.addEventListener("click",(function(){if(x.classList.add("mob-open"),S.children.length>1)return x.classList.remove("mob-open"),void S.lastChild.remove();q(),S.lastChild.addEventListener("click",(e=>{_(e),w.textContent=e.target.dataset.letter.toUpperCase(),S.lastChild.remove(),x.classList.remove("mob-open")}))})),a("8FnLx");var H=a("2shzp");const E={closeModalBtn:document.querySelector("[data-modal-cockt-close]"),modal:document.querySelector("[data-modal-cockt]"),body:document.querySelector("body")};function $(){E.modal.classList.toggle("is-hidden"),E.body.classList.toggle("no-scroll")}E.closeModalBtn.addEventListener("click",$);document.querySelector(".learn-more-btn");const R=document.querySelector(".modal-cockt__name"),A=document.querySelector(".modal-cockt__instr-text"),F=document.querySelector(".modal-cockt__per-list"),I=document.querySelector(".modal-cockt__img");document.addEventListener("click",(e=>{if(e.target.dataset.cocktail){!async function(e){!function(e){I.src=`${e.strDrinkThumb}`,R.textContent=`${e.strDrink}`,A.textContent=`${e.strInstructions}`;let t=[];F.innerHTML="";for(let n=1;n<15;n++)if(e[`strMeasure${n}`]||e[`strIngredient${n}`]){if(!e[`strMeasure${n}`]){t.push(`<li class="modal-cockt__ingred">\n          <a>\n            <p>\n            <span data-ingredient="${e[`strIngredient${n}`]}">\n              ${e[`strIngredient${n}`]}\n            </span></p>\n          </a>\n        </li>`);break}t.push(`<li class="modal-cockt__ingred">\n          <a>\n            <p>${e[`strMeasure${n}`]}\n            <span data-ingredient="${e[`strIngredient${n}`]}">\n              ${e[`strIngredient${n}`]}\n            </span></p>\n          </a>\n        </li>`)}F.insertAdjacentHTML("beforeend",t.join("")),document.querySelectorAll("[data-add]").forEach((e=>{const t=e.closest(".item").dataset.id;JSON.parse(localStorage.getItem("coctailse")).map((({id:e})=>e)).some((e=>e===t))&&("Add to favorite"===e.textContent?e.textContent="Remove from favorite":e.innerHTML='Remove\n     <svg class="icon-hert" width="19" height="17">\n            <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>\n    </svg>')}))}(await async function(e){try{return(await H.default.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e}`)).data.drinks[0]}catch(e){console.log(e)}}(e))}(Number(e.target.dataset.cocktail)),$()}})),a("2nhTy"),a("g43k3"),a("cyIMT"),a("7GzVo");
//# sourceMappingURL=favorite-ingridients.25cf402d.js.map
