const addBtn = document.querySelectorAll('.add__btn');
const coctailse = [];
// const btn = document.querySelectorAll('[data-add]');
// console.log(btn);
if (!localStorage.getItem('coctailse')) {
  localStorage.setItem('coctailse', JSON.stringify(coctailse));
}

const coctailList = JSON.parse(localStorage.getItem('coctailse'));

console.log(coctailList);

document.addEventListener('click', event => {
  if (event.target.dataset.add != undefined) {
    const coctailList = JSON.parse(localStorage.getItem('coctailse'));
    const card = event.target.closest('.item');
    // console.log(card);
    const coctId = card.dataset.id;

    const numbers = coctailList.map(({ id }) => id);
    // console.log(coctailList.map(({ id }) => id));
    if (
      numbers.every(value => value !== coctId) ||
      localStorage.getItem('coctailse') === '[]'
    ) {
      const coctImg = card.querySelector('.image').src;
      const coctName = card.querySelector('.name').textContent;

      const favoritCoct = {
        id: coctId,
        name: coctName,
        src: coctImg,
      };
      coctailList.push(favoritCoct);
      // console.log(coctailList);
      localStorage.setItem('coctailse', JSON.stringify(coctailList));

      markupingBtn();
    } else if (numbers.some(value => value === coctId)) {
      const filteredCoctails = coctailList.filter(({ id }) => id !== coctId);
      console.log(filteredCoctails);
      localStorage.setItem('coctailse', JSON.stringify(filteredCoctails));
      changeToAdd(event);
    }
  }
});

function changeToAdd(event) {
  const tekst = event.target.textContent === 'Remove from favorite';
  if (tekst) {
    event.target.textContent = 'Add to favorite';
  } else {
    event.target.innerHTML = `Add to
     <svg class="icon-hert" width="19" height="17">
            <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
    </svg>`;
  }
}

function changeToRemove(event) {
  const tekst = event.target.textContent === 'Add to favorite';

  if (tekst) {
    event.target.textContent = 'Remove from favorite';
  } else {
    event.target.innerHTML = `Remove
     <svg class="icon-hert" width="19" height="17">
            <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
    </svg>`;
  }
}

export function markupingBtn() {
  const btns = document.querySelectorAll('[data-add]');
  console.log(btns);
  btns.forEach(btn => {
    const card = btn.closest('.item');
    const coctId = card.dataset.id;
    const coctailList = JSON.parse(localStorage.getItem('coctailse'));
    const numbers = coctailList.map(({ id }) => id);
    if (numbers.some(value => value === coctId)) {
      const tekst = btn.textContent === 'Add to favorite';

      if (tekst) {
        btn.textContent = 'Remove from favorite';
      } else {
        btn.innerHTML = `Remove
     <svg class="icon-hert-fill" width="19" height="17">
            <use href="./symbol-defs.a8b2e413.svg#icon-heart-orange"></use>
    </svg>`;
      }
    }
  });
}
