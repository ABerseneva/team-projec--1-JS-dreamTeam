var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var c={id:e,exports:{}};return t[e]=c,n.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("kmKSM"),n("e1bJr"),n("bXemP"),n("agKsv"),n("8FnLx");var c=n("2shzp");(()=>{const e={openModalBtn:document.querySelector("[data-modal-cockt-open]"),closeModalBtn:document.querySelector("[data-modal-cockt-close]"),modal:document.querySelector("[data-modal-cockt]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const r=document.querySelector(".favorite-card"),l=document.querySelector(".modal-cockt__name"),d=document.querySelector(".modal-cockt__instr-text"),a=(document.querySelector(".modal-cockt__per-list"),document.querySelector(".modal-cockt__img"));r.addEventListener("click",(e=>{const t=Number(e.currentTarget.dataset.cocktail);console.log(t),async function(e){const t=await async function(e){try{return(await c.default.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e}`)).data.drinks[0]}catch(e){console.log(e)}}(e);console.log(t),function(e){a.src=`${e.strDrinkThumb}`,l.textContent=`${e.strDrink}`,d.textContent=`${e.strInstructions}`}(t)}(t)})),n("2nhTy"),n("34HY9"),n("g43k3"),n("cyIMT"),n("7GzVo");
//# sourceMappingURL=favorite-ingridients.4b670173.js.map