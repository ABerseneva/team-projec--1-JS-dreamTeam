function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"1DxYL":"favorite-ingridients.1350c396.js","3P3sM":"personalheart.4b9536a1.svg","2bNYR":"favorite-cocktails.50545415.js","9a7Wv":"favorite-cocktails.2735a0a3.js"}')),i("kmKSM"),i("e1bJr"),i("8FnLx"),i("jxBsZ"),i("2nhTy");var a;a=new URL(i("kyEFX").resolve("3P3sM"),import.meta.url).toString();const c=document.querySelector(".cocktail__list"),s=(document.querySelector(".paginator"),document.querySelector(".pagination__list"),document.querySelector(".cocktail__section"),JSON.parse(localStorage.getItem("ingridients"))),l=document.querySelector(".favorit-coct__wrapper");console.log(l);let d=0;function u(e){const n=e.map((({name:e,type:n})=>`   <li class='cocktail__item item'>\n      <h3 class='cocktail__title name modal-ingrid__name'>${e}</h3>\n      <p class="ing-type">${n}</p>\n      <div class='cocktail__btn--box'>\n     <button class='learnmore__btn' type='button' data-ingredient='${e}'>Learn More</button>\n      <button class='add__btn' type='button' data-add>Remove\n     <svg class="icon-hert-remove" width="17" height="15">\n     <use href="${t(a)+"#fullorrange"}"></use>\n   </svg>\n     </button>\n      </div>\n      </li>`));c.insertAdjacentHTML("beforeend",n.join(""))}d=function(){window.matchMedia("(min-width: 320px)").matches&&(d=3);window.matchMedia("(min-width: 768px)").matches&&(d=6);window.matchMedia("(min-width: 1200px)").matches&&(d=9);return d}(),localStorage.getItem("ingridients")||localStorage.setItem("ingridients",JSON.stringify([])),"[]"!==localStorage.getItem("ingridients")&&(l.innerHTML="",l.style.display="none",c.innerHTML="",u(s)),document.addEventListener("click",(e=>{if(null!=e.target.dataset.add){const t=JSON.parse(localStorage.getItem("ingridients")),n=e.target.closest(".modal-ingrid").querySelector(".modal-ingrid__name").textContent;console.log(n);if(t.map((({name:e})=>e)).some((e=>e===n))){const e=t.filter((({name:e})=>e!==n));localStorage.setItem("ingridients",JSON.stringify(e)),c.innerHTML="",u(e),"[]"===localStorage.getItem("ingridients")&&function(){l.style.display="block";const e='<p class="favorit-coct__text">You haven\'t added any favorite cocktails yet</p>';l.insertAdjacentHTML("beforeend",e)}()}}})),i("g43k3"),i("cyIMT"),i("7GzVo"),i("iQIUW");const g=document.querySelector(".header-search-icon"),f=(document.querySelector(".favorit-coct__wrapper"),document.querySelector(".cocktail__list")),m=JSON.parse(localStorage.getItem("ingridients"));let _="";g.addEventListener("submit",(function(e){e.preventDefault();const t=g.searchQuery.value.trim().toLowerCase();if(!t||_===t)return void(g.searchQuery.value="");_=t,console.log(_),function(e){const t=m.map((({name:e})=>e.toLowerCase()));if(console.log(t),t.some((t=>t===e||t.includes(e)))){const t=m.filter((({name:t})=>t.toLowerCase()===e||t.toLowerCase().includes(e)));console.log(t),f.innerHTML="",u(t)}else!function(){const e="<div class='noresult__container'>\n                     <p class='noresult__text'>Sorry, we didn't find this ingridient for you in favorite ingridients</p>\n                     <div class='noresult__box'></div></div>";p.classList.add("visually-hidden"),f.innerHTML=e}()}(_),g.searchQuery.value=""}));const p=document.querySelector(".gallery__title");
//# sourceMappingURL=favorite-ingridients.1350c396.js.map
