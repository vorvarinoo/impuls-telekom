import {
  isEscKey,
  lockScroll,
  unlockScroll,
} from './utils.js';

const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuLinks = burgerMenu ? burgerMenu.querySelectorAll('.menu__link') : [];

const OPEN_MENU_CLASSNAME = 'is-open';

const openMenu = () => {
  if (!burgerBtn || !burgerMenu) return;
  lockScroll();
  burgerBtn.classList.add(OPEN_MENU_CLASSNAME);
  burgerMenu.classList.add(OPEN_MENU_CLASSNAME);

  burgerMenuLinks.forEach(link => {
    link.addEventListener('click', onBurgerMenuLinkClick);
  });
};

const closeMenu = () => {
  if (!burgerBtn || !burgerMenu) return;
  burgerBtn.classList.remove(OPEN_MENU_CLASSNAME);
  burgerMenu.classList.remove(OPEN_MENU_CLASSNAME);
  unlockScroll();

  burgerMenuLinks.forEach(link => {
    link.removeEventListener('click', onBurgerMenuLinkClick);
  });
};

const burgerBtnHandler = () => {
  if (!burgerBtn) return;
  burgerBtn.classList.contains(OPEN_MENU_CLASSNAME) ? closeMenu() : openMenu();
};

const onEscKeydown = (evt) => {
  if (!burgerBtn) return;
  if (burgerBtn.classList.contains(OPEN_MENU_CLASSNAME) && isEscKey(evt)) {
    closeMenu();
  }
};

const onBurgerMenuLinkClick = () => {
  closeMenu();
};

export const initBurgerMenu = () => {
  if (burgerBtn && burgerMenu) {
    burgerBtn.addEventListener('click', burgerBtnHandler);
    document.addEventListener('keydown', onEscKeydown);
  }
};
