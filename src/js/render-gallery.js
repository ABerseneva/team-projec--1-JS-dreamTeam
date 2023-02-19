import axios from 'axios';
import { fetchRandomCoctails, fetchCocktailByName } from './fetch';

const box = document.querySelector('.cocktail__list');
const paginator = document.querySelector('.paginator');
const paginatorList = document.querySelector('.pagination__list');
const sectionGallery = document.querySelector('.cocktail__section');
const input = document.querySelector('.header-search-input');

input.addEventListener('input', onSearch);

let randomList = [];
let currentPage = 1;
let perPage = 0;
perPage = pagesMediaCheck();

async function onSearch(e) {
  e.preventDefault();
  const searchValue = e.target.value;

  paginator.classList.add('visually-hidden');

  box.innerHTML = '';
  const requestedData = await fetchCocktailByName(searchValue);
  renderCocktails(requestedData, perPage, currentPage);

  // buildMarkup(requestedData);

  // renderCocktails(requestedData, perPage, currentPage);
  // return searchResult;
}

async function renderRandomCocktails() {
  paginator.classList.add('visually-hidden');
  randomList = await fetchRandomCoctails(perPage);
  box.innerHTML = '';
  console.log(randomList);
  buildMarkup(randomList);
}
renderRandomCocktails();

async function buildGallery(searchValue) {
  const cocktails = await fetchCocktailByName(searchValue);
  // console.log(cocktails);
  if (cocktails === null) {
    const noMatch = `<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
                     <div class='noresult__box'></div>`;
    sectionGallery.innerHTML = noMatch;
    return;
  }

  perPage = pagesMediaCheck();

  renderCocktails(cocktails, perPage, currentPage);

  function displayPagination(cocktailList, perPage) {
    const totalPages = Math.ceil(cocktailList.length / perPage);
    for (let i = 0; i < totalPages; i++) {
      const cocktailItem = displayPaginationBtn(i + 1);
      paginatorList.append(cocktailItem);
    }
  }

  function displayPaginationBtn(number) {
    const cocktailItem = document.createElement('li');
    cocktailItem.classList.add('pagination__item');
    cocktailItem.textContent = number;

    if (currentPage === number) {
      cocktailItem.classList.add('pagination__item--active');
    }

    cocktailItem.addEventListener('click', () => {
      currentPage = number;
      renderCocktails(cocktails, perPage, currentPage);

      let currentActive = document.querySelector('li.pagination__item--active');
      currentActive.classList.remove('pagination__item--active');

      cocktailItem.classList.add('pagination__item--active');
    });
    return cocktailItem;
  }

  displayPagination(cocktails, perPage);
}

// buildGallery('a');

function pagesMediaCheck() {
  if (window.matchMedia('(min-width: 320px)').matches) {
    perPage = 3;
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    perPage = 6;
  }
  if (window.matchMedia('(min-width: 1200px)').matches) {
    perPage = 9;
  }

  return perPage;
}

function buildMarkup(data) {
  if (data === null) {
    const noMatch = `<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
                     <div class='noresult__box'></div>`;
    sectionGallery.innerHTML = noMatch;
    return;
  }
  const markup = data.map(({ strDrinkThumb, strDrink, idDrink }) => {
    return `<li class='cocktail__item item' data-id='${idDrink}''>
      <img class='cocktail__image image' src='${strDrinkThumb}' alt='cocktail'/>
      <h3 class='cocktail__title name'>${strDrink}</h3>
      <div class='cocktail__btn--box'>
      <button class='learnmore__btn' type='button' data-modal-cockt-open>Learn More</button>
      <button class='add__btn' type='button' data-add>Add to
     <svg class="icon-hert" width="19" height="17">
            <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
    </svg>
     </button>
      </div>
      </li>`;
  });
  box.insertAdjacentHTML('beforeend', markup.join(''));
  // markupingBtn();
}

// function markupingBtn() {
//   const btns = document.querySelectorAll('[data-add]');
//   console.log(btns);
//   btns.forEach(btn => {
//     const card = btn.closest('.item');
//     const coctId = card.dataset.id;
//     const coctailList = JSON.parse(localStorage.getItem('coctailse'));
//     const numbers = coctailList.map(({ id }) => id);
//     if (numbers.some(value => value === coctId)) {
//       const tekst = btn.textContent === 'Add to favorite';
//       if (tekst) {
//         btn.textContent = 'Remove from favorite';
//       } else {
//         btn.innerHTML = `Remove
//      <svg class="icon-hert" width="19" height="17">
//             <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
//     </svg>`;
//       }
//     }
//   });
// }

function renderCocktails(cocktailList, perPage, page) {
  page--;
  box.innerHTML = '';

  if (cocktailList === null) {
    const noMatch = `<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
                     <div class='noresult__box'></div>`;
    sectionGallery.innerHTML = noMatch;
    return;
  }

  const begin = perPage * page;
  const end = begin + perPage;
  const paginatedData = cocktailList.slice(begin, end);
  return buildMarkup(paginatedData);
}

function arrowBtnControl(number) {
  const backward = document.querySelector('.backward');
  const forward = document.querySelector('.forward');
  backward.addEventListener('click', () => number--);
  forward.addEventListener('click', () => number++);

  return number;
}
