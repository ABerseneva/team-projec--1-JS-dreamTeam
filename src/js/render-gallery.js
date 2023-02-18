import axios from 'axios';
import { fetchRandomCoctails } from './fetch';

let randomList = [];

const box = document.querySelector('.cocktail__list');
const paginator = document.querySelector('.paginator');
const paginatorList = document.querySelector('.pagination__list');
const sectionGallery = document.querySelector('.cocktail__section');

let currentPage = 1;
let perPage = 0;
perPage = pagesMediaCheck();

async function renderRandomCocktails() {
  paginator.classList.add('visually-hidden');
  randomList = await fetchRandomCoctails(perPage);
  box.innerHTML = '';
  buildMarkup(randomList);
}
renderRandomCocktails();

async function fetchCocktail(queryToFetch) {
  if (queryToFetch.lentgh === 1) {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${queryToFetch}`
    );
    const cocktails = await result.data.drinks;
    return cocktails;
  }
  const result = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryToFetch}`
  );
  const cocktails = await result.data.drinks;
  return cocktails;
}

// async function buildGallery() {
//   const cocktails = await fetchCocktail('a');

//   if (cocktails === null) {
//     const noMatch = `<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>`;
//     sectionGallery.innerHTML = noMatch;
//     return;
//   }

//   perPage = pagesMediaCheck();

//   renderCocktails(cocktails, perPage, currentPage);

//   function displayPagination(cocktailList, perPage) {
//     const totalPages = Math.ceil(cocktailList.length / perPage);
//     for (let i = 0; i < totalPages; i++) {
//       const cocktailItem = displayPaginationBtn(i + 1);
//       paginatorList.append(cocktailItem);
//     }
//   }

//   function displayPaginationBtn(number) {
//     const cocktailItem = document.createElement('li');
//     cocktailItem.classList.add('pagination__item');
//     cocktailItem.textContent = number;

//     if (currentPage === number) {
//       cocktailItem.classList.add('pagination__item--active');
//     }

//     cocktailItem.addEventListener('click', () => {
//       currentPage = number;
//       renderCocktails(cocktails, perPage, currentPage);

//       let currentActive = document.querySelector('li.pagination__item--active');
//       currentActive.classList.remove('pagination__item--active');

//       cocktailItem.classList.add('pagination__item--active');
//     });
//     return cocktailItem;
//   }

//   displayPagination(cocktails, perPage);
// }

// buildGallery();

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
  const markup = data.map(({ strDrinkThumb, strDrink, idDrink }) => {
    return `<li class='cocktail__item data-id='${idDrink}''>
      <div class='cocktail__card'>
      <img class='cocktail__image' src='${strDrinkThumb}' alt='cocktail'/>
      <div class='cocktail__thumb'>
      <h3 class='cocktail__title'>${strDrink}</h3>
      <div class='cocktail__btn--box'>
      <button class='learnmore__btn' type='button' data-learn>Learn More</button>
      <button class='add__btn' type='button' data-add>Add to
     <svg class="icon-hert" width="19" height="17">
            <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
    </svg>
     </button>
      </div>
      </div>
      </div>
      </li>`;
  });
  box.insertAdjacentHTML('beforeend', markup.join(''));
}

function renderCocktails(cocktailList, perPage, page) {
  page--;
  box.innerHTML = '';

  const begin = perPage * page;
  const end = begin + perPage;
  const paginatedData = cocktailList.slice(begin, end);
  buildMarkup(paginatedData);
}

function arrowBtnControl(number) {
  const backward = document.querySelector('.backward');
  const forward = document.querySelector('.forward');
  backward.addEventListener('click', () => number--);
  forward.addEventListener('click', () => number++);

  return number;
}

// `<picture>
//   <source
//     media="(min-width: 1200px)"
//     srcset="
//                   ./images/hero-error/people.png    1x,
//                   ./images/hero-error/people-2x.png 2x
//                 "
//   />
//   <source
//     media="(min-width: 768px)"
//     srcset="./images/hero-error/people-tab.png    1x,
//             ./images/hero-error/people-tab-2x.png 2x"
//   />
//   <source
//     media="(max-width: 767px)"
//     srcset="./images/hero-error/people-mob.png    1x,
//             ./images/hero-error/people-mob-2x.png 2x"
//   />
//   <img
//     class="gallery__photo"
//     src="./images/hero-error/people.png    1x,
//                   ./images/hero-error/people-2x.png 2x"
//     alt="icecream"
//     width="345"
//     height="382"
//   />
// </picture>;`;

// const sectionGallery = document.querySelector('.cocktail__section');
// const noMatch = `<img
//     class="gallery__photo"
//     src="/images/hero-error/people.png"
//     alt="icecream"
//     width="345"
//     height="382"
//    />`;
// sectionGallery.innerHTML = noMatch;
