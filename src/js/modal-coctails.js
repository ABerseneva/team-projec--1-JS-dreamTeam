// =====================открвтие модалки=================

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-cockt-open]'),
    closeModalBtn: document.querySelector('[data-modal-cockt-close]'),
    modal: document.querySelector('[data-modal-cockt]'),
    body: document.querySelector('body'),
  };

  //   for (item of refs.openModalList) {
  //     item.addEventListener('click', toggleModal);
  //   }
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// ===========================================

import axios from 'axios';

const favoriteCard = document.querySelector('.favorite-card');
const name = document.querySelector('.modal-cockt__name');
const instractions = document.querySelector('.modal-cockt__instr-text');
const perList = document.querySelector('.modal-cockt__per-list');
const image = document.querySelector('.modal-cockt__img');

favoriteCard.addEventListener('click', e => {
  const cocktaiId = Number(e.currentTarget.dataset.cocktail);
  console.log(cocktaiId);
  getCocktailData(cocktaiId);
});

async function getCocktailData(cocktaiId) {
  const cocktail = await fetchCocktail(cocktaiId);

  console.log(cocktail);
  renderCocktailCard(cocktail);
}

async function fetchCocktail(queryToFetch) {
  try {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${queryToFetch}`
    );

    return result.data.drinks[0];
  } catch (error) {
    console.log(error);
  }
}

function renderCocktailCard(cocktail) {
  image.src = `${cocktail.strDrinkThumb}`;
  name.textContent = `${cocktail.strDrink}`;
  instractions.textContent = `${cocktail.strInstructions}`;
}
