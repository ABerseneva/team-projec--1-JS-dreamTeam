import { buildMarkup } from './render-favor-coctail';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.header-search-icon');
const wrapper = document.querySelector('.favorit-coct__wrapper');
const box = document.querySelector('.cocktail__list');
const coctailList = JSON.parse(localStorage.getItem('coctailse'));
let keyWord = '';

form.addEventListener('submit', handSubmit);
function handSubmit(event) {
  event.preventDefault();
  const inputValue = form.searchQuery.value.trim();
  if (!inputValue || keyWord === inputValue) {
    return;
  }
  keyWord = inputValue;
  //   page = 1;

  onSerch(keyWord);
  form.searchQuery.value = '';
}

function onSerch(keyWord) {
  const names = coctailList.map(({ name }) => name);

  if (names.some(value => value === keyWord)) {
    const filteredCoctails = coctailList.filter(({ name }) => name === keyWord);
    box.innerHTML = '';
    buildMarkup(filteredCoctails);
  } else {
    Notify.warning(
      "Sorry, we didn't find this cocktail for you in favorite cocktails"
    );
    // renderErrortMarkup();
  }
}

function renderErrortMarkup() {
  wrapper.style.display = 'block';
  wrapper.innerHTML = '';
  const startMarkup = `<p class="favorit-coct__text">Sorry, we didn't find this cocktail for you in favorite cocktails</p>`;
  wrapper.insertAdjacentHTML('beforeend', startMarkup);
}
