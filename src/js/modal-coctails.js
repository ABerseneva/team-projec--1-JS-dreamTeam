import axios from 'axios';

// const box = document.querySelector('.cocktail__list');
// const paginator = document.querySelector('.paginator');
// const paginatorList = document.querySelector('.pagination__list');

// let currentPage = 1;
// let perPage = 0;
// let randomArray = [];

// async function fetchRandomCoctails() {
//   perPage = pagesMediaCheck();

//   for (let i = 0; i < perPage; i++) {
//     const randomCoctail = await axios.get(
//       'https://www.thecocktaildb.com/api/json/v1/1/random.php'
//     );

//     randomArray.push(...randomCoctail.data.drinks);
//   }
//   return await randomArray;
// }
// console.log(randomArray);

// async function renderRandomCocktails() {
//   const randomList = await fetchRandomCoctails();
//   box.innerHTML = '';
//   buildMarkup(randomList);
// }
// renderRandomCocktails();

// async function fetchCocktail(queryToFetch) {
//   if (queryToFetch.lentgh === 1) {
//     const result = await axios.get(
//       `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${queryToFetch}`
//     );
//     const cocktails = await result.data.drinks;
//     return cocktails;
//   }
//   const result = await axios.get(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryToFetch}`
//   );
//   const cocktails = await result.data.drinks;
//   return cocktails;
// }
// function pagesMediaCheck() {
//   if (window.matchMedia('(min-width: 320px)').matches) {
//     perPage = 3;
//   }
//   if (window.matchMedia('(min-width: 768px)').matches) {
//     perPage = 6;
//   }
//   if (window.matchMedia('(min-width: 1200px)').matches) {
//     perPage = 9;
//   }

//   return perPage;
// }

// function buildMarkup(data) {
//   const markup = data.map(({ strDrinkThumb, strDrink, idDrink }) => {
//     return `<li class='cocktail__item'>
//       <div class='cocktail__card'>
//       <img class='cocktail__image' src='${strDrinkThumb}' alt='cocktail'/>
//       <div class='cocktail__thumb'>
//       <h3 class='cocktail__title'>${strDrink}</h3>
//       <div class='cocktail__btn--box'>
//       <button class='learnmore__btn' type='button'>Learn More</button>
//       <button class='add__btn' data-id='${idDrink}' type='button'>Add to
//      <svg class="icon-hert" width="19" height="17">
//             <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
//     </svg>
//      </button>
//       </div>
//       </div>
//       </div>
//       </li>`;
//   });
//   box.insertAdjacentHTML('beforeend', markup.join(''));
// }

// function renderCocktails(cocktailList, perPage, page) {
//   page--;
//   box.innerHTML = '';

//   const begin = perPage * page;
//   const end = begin + perPage;
//   const paginatedData = cocktailList.slice(begin, end);
//   buildMarkup(paginatedData);
// }
