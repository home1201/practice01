import './sass/style.scss';

const menuEl = document.querySelector("[data-menu]");

const openMenuBtnEl = document.querySelector("[data-openMenuBtn]");
openMenuBtnEl.addEventListener('click', () => {
  menuEl.dataset.menu = 'open';
});


const closeMenuBtnEl = document.querySelector("[data-closeMenuBtn]");
closeMenuBtnEl.addEventListener('click', () => {
  menuEl.dataset.menu = 'close';
})
