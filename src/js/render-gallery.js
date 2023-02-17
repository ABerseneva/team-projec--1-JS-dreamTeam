import axios from 'axios';

const box = document.querySelector('.cocktail__list');
const paginator = document.querySelector('.paginator');
const paginatorList = document.querySelector('.pagination__list');

async function fetchCocktail() {
  const result = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
  );
  const cocktails = await result.data.drinks;
  return cocktails;
}

async function main() {
  const cocktails = await fetchCocktail();

  let currentPage = 1;
  let perPage = 3;

  function renderCocktails(cocktailList, perPage, page) {
    page--;

    box.innerHTML = '';
    const begin = perPage * page;
    const end = begin + perPage;
    const paginatedData = cocktailList.slice(begin, end);

    const render = paginatedData.map(({ strDrink, strDrinkThumb }) => {
      const markup = `<li class='cocktail__item'>
      <div class='cocktail__card'>
      <img class='cocktail__image' src='${strDrinkThumb}' alt='cocktail'/>
      <div class='cocktail__thumb'>
      <h3 class='cocktail__title'>${strDrink}</h3>
      <div class='cocktail__btn--box'>
      <button class='learnmore__btn' type='button'>Learn More</button>
      <button class='add__btn' type='button'>Add to<svg class="icon-hert" width="19" height="17">
            <use href="./images/symbol-defs.svg#icon-heart-transparent"></use>
          </svg></button>
      </div>
      </div>
      </div>
      </li>`;
      box.insertAdjacentHTML('beforeend', markup);
    });
  }

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
    cocktailItem.addEventListener('click', () => {
      currentPage = number;
      renderCocktails(cocktails, perPage, currentPage);
    });
    return cocktailItem;
  }
  renderCocktails(cocktails, perPage, currentPage);
  displayPagination(cocktails, perPage);
}

main();
