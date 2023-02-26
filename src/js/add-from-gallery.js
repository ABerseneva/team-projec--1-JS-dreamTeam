import personalheart from '../images/personalheart.svg';

const coctailse = [];

if (!localStorage.getItem('coctailse')) {
  localStorage.setItem('coctailse', JSON.stringify(coctailse));
}

document.addEventListener('click', event => {
  if (event.target.dataset.add != undefined) {
    const coctailList = JSON.parse(localStorage.getItem('coctailse'));
    const card = event.target.closest('.item');
    const coctId = card.dataset.id;

    const numbers = coctailList.map(({ id }) => id);

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
      localStorage.setItem('coctailse', JSON.stringify(coctailList));

      markupingBtn();
    } else if (numbers.some(value => value === coctId)) {
      const filteredCoctails = coctailList.filter(({ id }) => id !== coctId);

      localStorage.setItem('coctailse', JSON.stringify(filteredCoctails));
      markupingBtn();
    }
  }
});

export function markupingBtn() {
  const btns = document.querySelectorAll('[data-add]');
  btns.forEach(btn => {
    const card = btn.closest('.item');
    const coctId = card.dataset.id;
    const coctailList = JSON.parse(localStorage.getItem('coctailse'));
    const numbers = coctailList.map(({ id }) => id);
    if (numbers.some(value => value === coctId)) {
      if (btn.dataset.modal != undefined) {
        btn.textContent = 'Remove from favorite';
      } else {
        btn.innerHTML = `Remove
    <svg class=""icon-hert-remove" width="17" height="15">
     <use href="${personalheart + '#fullorrange'}"></use>
   </svg>`;
      }
    } else {
      if (btn.dataset.modal != undefined) {
        btn.textContent = 'Add to favorite';
      } else {
        btn.innerHTML = `Add to
   <svg class="icon-hert" width="17" height="15">
     <use href="${personalheart + '#icon-black'}"></use>
   </svg>`;
      }
    }
  });
}
