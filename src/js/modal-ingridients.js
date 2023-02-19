import axios from 'axios';












(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-ingrid-open]"),
    closeModalBtn: document.querySelector("[data-modal-ingrid-close]"),
    modal: document.querySelector("[data-modal-ingrid]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();