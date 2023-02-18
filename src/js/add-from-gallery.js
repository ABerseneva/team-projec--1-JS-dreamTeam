const addBtn = document.querySelectorAll('.add__btn');
const coctailse = [];

if (!localStorage.getItem('coctailse')) {
  localStorage.setItem('coctailse', JSON.stringify(coctailse));
}

const coctailList = JSON.parse(localStorage.getItem('coctailse'));
// console.log(localStorage.getItem('coctailse'));
console.log(coctailList);

document.addEventListener('click', event => {
  const coctailList = JSON.parse(localStorage.getItem('coctailse'));
  const card = event.target.closest('li');
  const coctId = card.dataset.id;

  const numbers = coctailList.map(({ id }) => id);
  console.log(coctailList.map(({ id }) => id));

  if (event.target.dataset.add != undefined) {
    // console.log(coctailList.some(({ id }) => id !== coctId));

    if (
      numbers.every(value => value !== coctId) ||
      localStorage.getItem('coctailse') === '[]'
    ) {
      const coctImg = card.querySelector('.cocktail__image').src;
      const coctName = card.querySelector('.cocktail__title').textContent;

      const favoritCoct = {
        id: coctId,
        name: coctName,
        src: coctImg,
      };
      coctailList.push(favoritCoct);
      console.log(coctailList);
      localStorage.setItem('coctailse', JSON.stringify(coctailList));

      changeToRemove(event);
    } else if (numbers.some(value => value === coctId)) {
      const filteredCoctails = coctailList.filter(({ id }) => id !== coctId);
      console.log(filteredCoctails);
      localStorage.setItem('coctailse', JSON.stringify(filteredCoctails));
      changeToAdd(event);
    }
  }
});

// document.addEventListener('click', event => {
//   const card = event.target.closest('li');
//   const coctId = card.dataset.id;
//   console.log(coctId);
//   if (event.target.dataset.remove != undefined) {
//     console.log('hello');
//     const coctailList = JSON.parse(localStorage.getItem('coctailse'));
//     console.log(coctailList);
//     const coctId = card.dataset.id;
//     console.log(coctId);
//     const filteredCoctails = coctailList.filter(({ id }) => id !== coctId);
//     console.log(filteredCoctails);
//     localStorage.setItem('coctailse', JSON.stringify(filteredCoctails));

//     // changeToAdd(event);
//   }
// });

function changeToAdd(event) {
  // event.target.removeAttribute('data-remove');
  // event.target.setAttribute('data-add', true);
  const tekst = event.target.textContent === 'Remove from favorite';
  // if (tekst) {
  //   event.target.textContent = 'Add to favorite';
  // } else {
  event.target.textContent = 'Add to';
  // }
}

function changeToRemove(event) {
  //   event.target.removeAttribute('data-add');
  //   event.target.setAttribute('data-remove', true);

  event.target.textContent = 'Remove';
}
