const box = document.querySelector('.cocktail__list');
const paginator = document.querySelector('.paginator');
const paginatorList = document.querySelector('.pagination__list');
const sectionGallery = document.querySelector('.cocktail__section');
const wrapper = document.querySelector('.favorit-coct__wrapper');

let currentPage = 1;
let perPage = 0;
perPage = pagesMediaCheck();

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

const coctailse = [];

if (!localStorage.getItem('coctailse')) {
  localStorage.setItem('coctailse', JSON.stringify(coctailse));
}

const coctailList = JSON.parse(localStorage.getItem('coctailse'));
// console.log(coctailList);

if (localStorage.getItem('coctailse') !== '[]') {
  wrapper.innerHTML = '';
  wrapper.style.display = 'none';
  box.innerHTML = '';
  buildMarkup(coctailList);
}

function buildMarkup(data) {
  const markup = data.map(({ id, name, src }) => {
    // console.log(src);
    return `   <li class='cocktail__item item' data-id='${id}''>
      <img class='cocktail__image image' src="${src}" alt='cocktail'/>
      <h3 class='cocktail__title name'>${name}</h3>
      <div class='cocktail__btn--box'>
      <button class='learnmore__btn' type='button' data-modal-cockt-open>Learn More</button>
      <button class='add__btn' type='button' data-add>Remove
     <svg class="icon-hert" width="19" height="17">
            <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
    </svg>
     </button>
      </div>
      </li>`;
  });
  box.insertAdjacentHTML('beforeend', markup.join(''));
}

// document.addEventListener('click', event => {
//   if (event.target.dataset.add != undefined) {
//     const coctailList = JSON.parse(localStorage.getItem('coctailse'));
//     const card = event.target.closest('.item');
//     console.log(card);
//     const coctId = card.dataset.id;

//     const numbers = coctailList.map(({ id }) => id);
//     console.log(coctailList.map(({ id }) => id));
//     if (
//       numbers.every(value => value !== coctId) ||
//       localStorage.getItem('coctailse') === '[]'
//     ) {
//       const coctImg = card.querySelector('.image').src;
//       const coctName = card.querySelector('.name').textContent;

//       const favoritCoct = {
//         id: coctId,
//         name: coctName,
//         src: coctImg,
//       };
//       coctailList.push(favoritCoct);
//       console.log(coctailList);
//       localStorage.setItem('coctailse', JSON.stringify(coctailList));

//       changeToRemove(event);
//     } else if (numbers.some(value => value === coctId)) {
//       const filteredCoctails = coctailList.filter(({ id }) => id !== coctId);
//       console.log(filteredCoctails);
//       localStorage.setItem('coctailse', JSON.stringify(filteredCoctails));
//       changeToAdd(event);
//       box.innerHTML = '';
//       buildMarkup(coctailList);
//     }
//   }
// });
