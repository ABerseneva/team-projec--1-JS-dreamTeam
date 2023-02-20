import axios from 'axios';
import {
  fetchRandomCoctails,
  fetchCocktailByName,
  fetchCocktailByLetter,
} from './fetch';
import { markupingBtn } from './add-from-gallery';
import { onLetterClick } from './hero-alphabet';
import personalheart from '../images/personalheart.svg';

const box = document.querySelector('.cocktail__list');
const paginator = document.querySelector('.paginator');
const paginatorList = document.querySelector('.pagination__list');
const sectionGallery = document.querySelector('.cocktail__section');
const form = document.querySelector('.header-search-icon');
const title = document.querySelector('.gallery__title');

form.addEventListener('submit', onSearch);

let randomList = [];
export let currentPage = 1;
export let perPage = 0;
perPage = pagesMediaCheck();

export async function onClick(e) {
  e.preventDefault();
  title.classList.remove('visually-hidden');
  const searchValue = e.target.dataset.letter;
  console.log(e.target.dataset.letter);

  paginator.classList.add('visually-hidden');

  box.innerHTML = '';
  const requestedData = await fetchCocktailByLetter(searchValue);
  console.log(requestedData);
  if (requestedData === null) {
    return errorMarkup();
  }
  renderCocktails(requestedData, perPage, currentPage);
}

async function onSearch(e) {
  e.preventDefault();
  title.classList.remove('visually-hidden');
  const searchValue = e.target.elements.searchQuery.value;

  paginator.classList.add('visually-hidden');

  box.innerHTML = '';
  const requestedData = await fetchCocktailByName(searchValue);
  console.log(requestedData);
  if (requestedData === null) {
    return errorMarkup();
  }
  renderCocktails(requestedData, perPage, currentPage);
  form.reset();
}

async function renderRandomCocktails() {
  title.classList.remove('visually-hidden');
  paginator.classList.add('visually-hidden');
  randomList = await fetchRandomCoctails(perPage);
  box.innerHTML = '';
  buildMarkup(randomList);
}
renderRandomCocktails();

async function buildGallery(searchValue) {
  const cocktails = await fetchCocktailByName(searchValue);
  // console.log(cocktails);
  // if (cocktails === null) {
  //   const noMatch = `<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
  //                    <div class='noresult__box'></div>`;
  //   sectionGallery.innerHTML = noMatch;
  //   return;
  // }

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
      <button class='learnmore__btn' type='button' data-modal-cockt-open >Learn More</button>
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

function renderCocktails(cocktailList, perPage, page) {
  page--;
  box.innerHTML = '';

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

function errorMarkup() {
  const noMatch = `<div class='noresult__container'>
                     <p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
                     <div class='noresult__box'></div></div>`;
  title.classList.add('visually-hidden');
  return (box.innerHTML = noMatch);
}
