var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var c={id:t,exports:{}};return e[t]=c,o.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o("kmKSM"),o("e1bJr"),o("bXemP"),o("agKsv"),o("8FnLx");var c=o("2shzp");(()=>{const t={openModalBtn:document.querySelector("[data-modal-cockt-open]"),closeModalBtn:document.querySelector("[data-modal-cockt-close]"),modal:document.querySelector("[data-modal-cockt]"),body:document.querySelector("body")};function e(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})();const a=document.querySelector(".favorite-card"),i=document.querySelector(".modal-cockt__name"),r=document.querySelector(".modal-cockt__instr-text"),l=(document.querySelector(".modal-cockt__per-list"),document.querySelector(".modal-cockt__img"));a.addEventListener("click",(t=>{const e=Number(t.currentTarget.dataset.cocktail);console.log(e),async function(t){const e=await async function(t){try{return(await c.default.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`)).data.drinks[0]}catch(t){console.log(t)}}(t);console.log(e),function(t){l.src=`${t.strDrinkThumb}`,i.textContent=`${t.strDrink}`,r.textContent=`${t.strInstructions}`}(e)}(e)})),o("2nhTy");var s=o("cyIMT"),d=o("agKsv");const u=document.querySelector(".cocktail__list"),m=document.querySelector(".paginator"),y=(document.querySelector(".pagination__list"),document.querySelector(".cocktail__section")),f=document.querySelector(".header-search-icon");f.addEventListener("submit",(async function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;m.classList.add("visually-hidden"),u.innerHTML="";g(await(0,s.fetchCocktailByName)(e),_,h),f.reset()}));let p=[],h=1,_=0;function k(){return window.matchMedia("(min-width: 320px)").matches&&(_=3),window.matchMedia("(min-width: 768px)").matches&&(_=6),window.matchMedia("(min-width: 1200px)").matches&&(_=9),_}function b(t){if(null===t){const t="<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>\n                     <div class='noresult__box'></div>";return void(y.innerHTML=t)}const e=t.map((({strDrinkThumb:t,strDrink:e,idDrink:n})=>`<li class='cocktail__item item' data-id='${n}''>\n      <img class='cocktail__image image' src='${t}' alt='cocktail'/>\n      <h3 class='cocktail__title name'>${e}</h3>\n      <div class='cocktail__btn--box'>\n      <button class='learnmore__btn' type='button' data-modal-cockt-open>Learn More</button>\n      <button class='add__btn' type='button' data-add>Add to\n     <svg class="icon-hert" width="19" height="17">\n            <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>\n    </svg>\n     </button>\n      </div>\n      </li>`));u.insertAdjacentHTML("beforeend",e.join("")),(0,d.markupingBtn)()}function g(t,e,n){if(n--,u.innerHTML="",null===t){const t="<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>\n                     <div class='noresult__box'></div>";return void(y.innerHTML=t)}const o=e*n,c=o+e;return b(t.slice(o,c))}_=k(),async function(){m.classList.add("visually-hidden"),p=await(0,s.fetchRandomCoctails)(_),u.innerHTML="",b(p)}(),o("g43k3"),o("cyIMT"),o("7GzVo");
//# sourceMappingURL=favorite-ingridients.97e443d1.js.map
