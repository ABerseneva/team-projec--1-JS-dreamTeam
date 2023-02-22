import {
  fetchRandomCoctails,
  fetchCocktailByName,
  fetchCocktailByLetter,
} from './fetch';
import { markupingBtn } from './add-from-gallery';
import personalheart from '../images/personalheart.svg';

const box = document.querySelector('.cocktail__list');
const paginator = document.querySelector('.paginator');
const paginatorList = document.querySelector('.pagination__list');
const sectionGallery = document.querySelector('.cocktail__section');
const form = document.querySelector('.header-search-icon');
const title = document.querySelector('.gallery__title');
const forwardBox = document.querySelector('.fore__wrapper');
const backwardBox = document.querySelector('.back__wrapper');
const meuform = document.querySelector('.menu-search-icon');


form.addEventListener('submit', onSearch);
meuform.addEventListener('submit', onSearch);

let randomList = [];
let currentPage = 1;
export let perPage = 0;
let totalPages = 0;
perPage = pagesMediaCheck();

export async function onClick(e) {
  e.preventDefault();
  currentPage = 1;
  paginator.classList.add('visually-hidden');
  title.classList.remove('visually-hidden');
  const searchValue = e.target.dataset.letter;

  box.innerHTML = '';
  const requestedData = await fetchCocktailByLetter(searchValue);
  if (requestedData === null) {
    return errorMarkup();
  }

  renderCocktails(requestedData, perPage, currentPage);
  if (requestedData.length > perPage) {
    buildGallery(requestedData);
  }
}

async function onSearch(e) {
  e.preventDefault();
  paginator.classList.add('visually-hidden');
  title.classList.remove('visually-hidden');
  const searchValue = e.target.elements.searchQuery.value.trim().toLowerCase();

  box.innerHTML = '';
  const requestedData = await fetchCocktailByName(searchValue);
  if (requestedData === null) {
    return errorMarkup();
  }

  renderCocktails(requestedData, perPage, currentPage);
  if (requestedData.length > perPage) {
    buildGallery(requestedData);
  }
  form.reset();
  meuform.reset();
}

async function renderRandomCocktails() {
  title.classList.remove('visually-hidden');
  paginator.classList.add('visually-hidden');
  randomList = await fetchRandomCoctails(perPage);
  box.innerHTML = '';
  buildMarkup(randomList);
}
renderRandomCocktails();

function buildGallery(searchValue) {
  paginatorList.innerHTML = '';
  backwardBox.innerHTML = '';
  forwardBox.innerHTML = '';
  paginator.classList.remove('visually-hidden');
  currentPage = 1;

  totalPages = Math.ceil(searchValue.length / perPage);

  createBackArrowMarkup();
  createForeArrowMarkup();
  const forward = document.querySelector('.forward');
  const backward = document.querySelector('.backward');

  if (currentPage === 1) {
    backward.disabled = true;
    forward.disabled = false;
  }

  backward.addEventListener('click', moveBack);
  function moveBack() {
    currentPage--;

    paginatorList.innerHTML = '';
    renderCocktails(searchValue, perPage, currentPage);
    displayPagination();
    forward.disabled = false;

    if (currentPage === 1) {
      backward.disabled = true;
    }
  }

  forward.addEventListener('click', moveFore);
  function moveFore() {
    currentPage++;
    paginatorList.innerHTML = '';
    renderCocktails(searchValue, perPage, currentPage);
    displayPagination();
    backward.disabled = false;

    if (currentPage === totalPages) {
      forward.disabled = true;
    }
  }

  function displayPagination() {
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
      renderCocktails(searchValue, perPage, currentPage);
      backward.disabled = true;
      forward.disabled = true;

      if (currentPage !== 1) {
        backward.disabled = false;
      }

      if (currentPage !== totalPages) {
        forward.disabled = false;
      }

      let currentActive = document.querySelector('li.pagination__item--active');
      currentActive.classList.remove('pagination__item--active');

      cocktailItem.classList.add('pagination__item--active');
    });
    return cocktailItem;
  }

  displayPagination();
}

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
      <button class='learnmore__btn' type='button' data-cocktail='${idDrink}'>Learn More</button>
      <button class='add__btn' type='button' data-add>Add to
     <svg class="icon-hert" width="17" height="15">
            <use href="${personalheart + '#icon-black'}"></use>
    </svg>
     </button>
      </div>
      </li>`;
  });
  box.insertAdjacentHTML('beforeend', markup.join(''));
  markupingBtn();
}

export function renderCocktails(cocktailList, perPage, page) {
  page--;
  box.innerHTML = '';

  const begin = perPage * page;
  const end = begin + perPage;
  const paginatedData = cocktailList.slice(begin, end);
  return buildMarkup(paginatedData);
}

function errorMarkup() {
  const noMatch = `<div class='noresult__container'>
                     <p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
                     <div class='noresult__box'></div></div>`;
  title.classList.add('visually-hidden');
  paginatorList.innerHTML = '';
  return (box.innerHTML = noMatch);
}

function createBackArrowMarkup() {
  const markupBack = `<button class="backward" type="button">
        <svg class="arrow__back" width="8" height="13">
          <use href='${personalheart + '#icon-arrow-left'}'></use>
        </svg>
      </button>`;
  return backwardBox.insertAdjacentHTML('afterbegin', markupBack);
}
function createForeArrowMarkup() {
  const markupFore = `<button class="forward" type="button">
      <svg class="arrow__fore" width="8" height="13">
        <use href="${personalheart + '#icon-arrow-right-black'}"></use>
      </svg>
    </button>`;

  return forwardBox.insertAdjacentHTML('beforeend', markupFore);
}
