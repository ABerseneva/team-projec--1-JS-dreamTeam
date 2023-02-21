// import { renderCocktails, perPage } from './render-gallery';

// const paginatorList = document.querySelector('.pagination__list');
// const forward = document.querySelector('.forward');
// const backward = document.querySelector('.backward');

// export function arrowControl(currentPage, totalPages, searchValue) {
//   forward.removeEventListener('click', moveFore);
//   backward.removeEventListener('click', moveBack);
//   if (currentPage === 1) {
//     backward.disabled = true;
//     forward.disabled = false;
//   }
//   backward.addEventListener('click', moveBack);

//   function moveBack() {
//     currentPage--;
//     paginatorList.innerHTML = '';
//     renderCocktails(searchValue, perPage, currentPage);
//     displayPagination();
//     forward.disabled = false;

//     if (currentPage === 1) {
//       backward.disabled = true;
//     }
//   }
//   forward.addEventListener('click', moveFore);

//   function moveFore() {
//     currentPage++;
//     paginatorList.innerHTML = '';
//     renderCocktails(searchValue, perPage, currentPage);
//     displayPagination();
//     backward.disabled = false;

//     if (currentPage === totalPages) {
//       forward.disabled = true;
//     }
//   }
// }

// export function displayPagination(totalPages, currentPage, searchValue) {
//   for (let i = 0; i < totalPages; i++) {
//     const cocktailItem = displayPaginationBtn(
//       i + 1,
//       currentPage,
//       searchValue,
//       totalPages
//     );
//     paginatorList.append(cocktailItem);
//   }
// }

// function displayPaginationBtn(number, currentPage, searchValue, totalPages) {
//   const cocktailItem = document.createElement('li');
//   cocktailItem.classList.add('pagination__item');
//   cocktailItem.textContent = number;

//   if (currentPage === number) {
//     cocktailItem.classList.add('pagination__item--active');
//   }

//   cocktailItem.addEventListener('click', () => {
//     currentPage = number;
//     renderCocktails(searchValue, perPage, currentPage);
//     backward.disabled = true;
//     backward.classList.add('move__btn-disabled');
//     forward.disabled = true;
//     forward.classList.add('move__btn-disabled');

//     if (currentPage !== 1) {
//       backward.disabled = false;
//       backward.classList.remove('move__btn-disabled');
//     }

//     if (currentPage !== totalPages) {
//       forward.disabled = false;
//       forward.classList.remove('move__btn-disabled');
//     }

//     let currentActive = document.querySelector('li.pagination__item--active');
//     currentActive.classList.remove('pagination__item--active');

//     cocktailItem.classList.add('pagination__item--active');
//   });
//   return cocktailItem;
// }

// export function createPaginationMarkup(totalCount) {
//   let pagesCount = [];
//   for (let i = 0; i < totalCount; i++) {
//     let pageNumber = i + 1;
//     pagesCount.push(pageNumber);
//   }
//   const pagBtn = pagesCount.map(digit => {
//     return `<li class='pagination__item'>${digit}</li>`;
//   });

//   paginatorList.insertAdjacentHTML('beforeend', pagBtn.join(''));
// }

// export function handlePagination(searchResult, totalPages, currentPage) {
//   createPaginationMarkup(totalPages);
//   //   arrowBtnControl(searchResult, totalPages, currentPage);

//   const liElems = document.querySelectorAll('.pagination__item');

//   liElems.forEach(liEl => {
//     if (currentPage === Number(liEl.textContent)) {
//       liEl.classList.add('pagination__item--active');
//     }
//   });

//   liElems.forEach(liEl => {
//     liEl.addEventListener('click', e => {
//       let digit = Number(e.target.textContent);
//       currentPage = digit;
//       console.log(currentPage);
//       handleActiveBtn(liEl);
//       if (currentPage !== 1) {
//         backward.disabled = false;
//       }
//       if (currentPage !== totalPages) {
//         forward.disabled = false;
//       } else {
//         forward.disabled = true;
//       }
//       renderCocktails(searchResult, perPage, currentPage);
//     });
//   });
// }

// export function handleActiveBtn(element) {
//   let currentActive = document.querySelector('li.pagination__item--active');
//   currentActive.classList.remove('pagination__item--active');

//   element.classList.add('pagination__item--active');
// }

// export function checkPagLi(activePage) {
//   const liElems = document.querySelectorAll('.pagination__item');

//   liElems.forEach(liEl => {
//     if (activePage === Number(liEl.textContent)) {
//       liEl.classList.add('pagination__item--active');
//     }
//     handleActiveBtn(liEl);
//   });

//   return liElems;
// }

// export function arrowBtnControl(searchValue, totalPages, currentPage) {
//   const forward = document.querySelector('.forward');
//   const backward = document.querySelector('.backward');

//   forward.removeEventListener('click', foreFoo);
//   backward.removeEventListener('click', backFoo);

//   if (currentPage === 1) {
//     backward.disabled = true;
//   }

//   backward.addEventListener('click', backFoo);

//   function backFoo() {
//     if (currentPage === 1) {
//       backward.disabled = true;
//     }
//     currentPage--;
//     console.log(currentPage);
//     renderCocktails(searchValue, perPage, currentPage);
//     const liElems = document.querySelectorAll('.pagination__item');
//     checkActive(liElems, currentPage);
//     forward.disabled = false;
//   }

//   forward.addEventListener('click', foreFoo);

//   function foreFoo() {
//     console.log(currentPage);
//     currentPage++;

//     renderCocktails(searchValue, perPage, currentPage);

//     const liElems = document.querySelectorAll('.pagination__item');
//     let currentActive = document.querySelector('li.pagination__item--active');
//     currentActive.classList.remove('pagination__item--active');
//     liElems.forEach(liEl => {
//       if (currentPage === Number(liEl.textContent)) {
//         liEl.classList.add('pagination__item--active');
//       }
//     });
//     // checkActive(liElems, currentPage);
//     backward.disabled = false;
//     console.log(currentPage);
//     if (currentPage === totalPages) {
//       forward.disabled = true;
//     }
//   }
//   return currentPage;
// }

// function checkActive(liElems) {
//   let currentActive = document.querySelector('li.pagination__item--active');
//   currentActive.classList.remove('pagination__item--active');
//   liElems.forEach(liEl => {
//     if (currentPage === Number(liEl.textContent)) {
//       liEl.classList.add('pagination__item--active');
//     }
//   });
// }
