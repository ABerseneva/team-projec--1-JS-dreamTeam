function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"1DxYL":"favorite-ingridients.3be0380d.js","3P3sM":"personalheart.8137e271.svg","2bNYR":"favorite-cocktails.f9c902b4.js","9a7Wv":"favorite-cocktails.5f4ccef3.js"}')),o("kmKSM"),o("e1bJr"),o("8FnLx"),o("jxBsZ");var a;a=new URL(o("kyEFX").resolve("3P3sM"),import.meta.url).toString();const s=document.querySelector(".cocktail__list"),l=JSON.parse(localStorage.getItem("ingridients")),c=document.querySelector(".favorit-coct__wrapper");let d=0;function u(e){const n=e.map((({name:e,type:n})=>`   <li class='cocktail__item item ing-item'>\n      <h3 class='cocktail__title name modal-ingrid__name ing-name'>${e}</h3>\n      <p class="ing-type">${n}</p>\n      <div class='cocktail__btn--box'>\n     <button class='learnmore__btn' type='button' data-ingredient='${e}'>Learn More</button>\n      <button class='add__btn' type='button' data-add>Remove\n     <svg class="icon-hert-remove" width="17" height="15">\n     <use href="${t(a)+"#fullorrange"}"></use>\n   </svg>\n     </button>\n      </div>\n      </li>`));s.insertAdjacentHTML("beforeend",n.join(""))}d=function(){window.matchMedia("(min-width: 320px)").matches&&(d=3);window.matchMedia("(min-width: 768px)").matches&&(d=6);window.matchMedia("(min-width: 1200px)").matches&&(d=9);return d}(),localStorage.getItem("ingridients")||localStorage.setItem("ingridients",JSON.stringify([])),"[]"!==localStorage.getItem("ingridients")&&(c.innerHTML="",c.style.display="none",s.innerHTML="",u(l)),document.addEventListener("click",(e=>{if(null!=e.target.dataset.add){console.log("hello");const t=JSON.parse(localStorage.getItem("ingridients")),n=e.target.closest(".ing-item").querySelector(".ing-name").textContent;console.log(n);if(t.map((({name:e})=>e)).some((e=>e===n))){const e=t.filter((({name:e})=>e!==n));localStorage.setItem("ingridients",JSON.stringify(e)),s.innerHTML="",u(e),"[]"===localStorage.getItem("ingridients")&&function(){c.style.display="block";const e='<p class="favorit-coct__text ing-text">You haven\'t added any <br> favorite ingridients yet</p>';c.insertAdjacentHTML("beforeend",e)}()}}})),o("g43k3"),o("cyIMT"),o("7GzVo"),o("iQIUW");var g=o("9OeKo");const f=document.querySelector(".header-search-icon"),m=document.querySelector(".favorit-coct__wrapper"),p=document.querySelector(".cocktail__list"),_=JSON.parse(localStorage.getItem("ingridients"));let v="";f.addEventListener("input",t(g)((function(e){e.preventDefault();const t=f.searchQuery.value.trim().toLowerCase();v=t,function(e){if(_.map((({name:e})=>e.toLowerCase())).some((t=>t===e||t.includes(e)))){const t=_.filter((({name:t})=>t.toLowerCase()===e||t.toLowerCase().includes(e)));p.innerHTML="",u(t)}else m.innerHTML="",m.style.display="none",function(){const e="<div class='noresult__container'>\n                     <p class='noresult__text'>Sorry, we didn't find this ingridient for you in favorite ingridients</p>\n                     <div class='noresult__box'></div></div>";y.classList.add("visually-hidden"),p.innerHTML=e}()}(v)}),500));const y=document.querySelector(".gallery__title");
//# sourceMappingURL=favorite-ingridients.3be0380d.js.map
