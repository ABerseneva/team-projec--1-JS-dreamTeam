// =====================открвтие модалки=================

const refs = {
  closeModalBtn: document.querySelector('[data-modal-cockt-close]'),
  addRemlBtn: document.querySelector('.modal-cockt__add-rem-btn'),
  modal: document.querySelector('[data-modal-cockt]'),
  body: document.querySelector('body'),
};

//   for (item of refs.openModalList) {
//     item.addEventListener('click', toggleModal);
//   }
refs.modal.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
});

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.addRemlBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

document.addEventListener('click', e => {
  if (e.target.dataset.cocktail) {
    const cocktaiId = Number(e.target.dataset.cocktail);
    getCocktailData(cocktaiId);
    toggleModal();
  }
  return;
});

// ===========================================

import axios from 'axios';
import { markupingBtn } from './add-from-gallery';

// const learnMoreBtn = document.querySelector('.learn-more-btn');
const name = document.querySelector('.modal-cockt__name');
const instractions = document.querySelector('.modal-cockt__instr-text');
const list = document.querySelector('.modal-cockt__per-list');
const image = document.querySelector('.modal-cockt__img');
const item = document.querySelector('.modal-cockt__card');

async function getCocktailData(cocktaiId) {
  const cocktail = await fetchCocktail(cocktaiId);

  renderCocktailCard(cocktail, cocktaiId);
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

function renderCocktailCard(cocktail, cocktaiId) {
  item.dataset.id = `${cocktaiId}`;
  image.src = `${cocktail.strDrinkThumb}`;
  name.textContent = `${cocktail.strDrink}`;
  instractions.textContent = `${cocktail.strInstructions}`;
  let perList = [];
  list.innerHTML = '';
  for (let i = 1; i < 15; i++) {
    if (cocktail[`strMeasure${i}`] || cocktail[`strIngredient${i}`]) {
      if (!cocktail[`strMeasure${i}`]) {
        perList.push(
          `<li class="modal-cockt__ingred">
          <a>
            <p>
            <span data-ingredient="${cocktail[`strIngredient${i}`]}">
              ${cocktail[`strIngredient${i}`]}
            </span></p>
          </a>
        </li>`
        );
        break;
      }
      perList.push(
        `<li class="modal-cockt__ingred">
          <a>
            <p>${cocktail[`strMeasure${i}`]}
            <span data-ingredient="${cocktail[`strIngredient${i}`]}">
              ${cocktail[`strIngredient${i}`]}
            </span></p>
          </a>
        </li>`
      );
    }
  }
  list.insertAdjacentHTML('beforeend', perList.join(''));
  markupingBtn();
}


