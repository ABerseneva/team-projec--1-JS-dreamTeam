(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-ingrid-open]"),
    closeModalBtn: document.querySelector("[data-modal-ingrid-close]"),
    modal: document.querySelector("[data-modal-ingrid]"),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", closeModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll');
  }

  function closeModal(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll');
  }
}

})();


import axios from 'axios';

const box = document.querySelector('.box-ingrid');
const ingridClick = Array.from(document.querySelectorAll('.test'));

ingridClick.forEach((ingrid) => {
  ingrid.addEventListener('click', async () => {
    const ingridName = ingrid.dataset.name;
    const ingridData = await fetchIngridient(ingridName);
    buildMarkup(ingridData);
  });
});

async function fetchIngridient(queryToFetch) {
  try {
    const result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${queryToFetch}`
    );
    return result.data.ingredients[0];
  } catch (error) {
    console.log(error);
  }
}

function buildMarkup(data) {
    const {
    strIngredient: name,
    strType: type,
    strDescription: description,
  } = data;
    const markup = `<h2 class="modal-ingrid__name">${name}</h2>
                <h3 class="modal-ingrid__title">${name}</h3>
                <div class="line"></div>
    
                <p class="modal-ingrid__descrip">${description}</p>
                <ul class="modal-ingrid__list">
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Type: ${type}</p></li>
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Country of origin: Italy</p> </li>
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Alcohol by volume: 20.5–28.5%</p> </li>
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Flavour: Bitter, spicy and sweet</p></li>
                </ul>`;
    box.innerHTML = markup;
}
