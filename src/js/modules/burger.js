import {
  isEscKey,
  lockScroll,
  unlockScroll,
} from './utils.js';

const burgerBtn = document.querySelector( '.header__burger' );
const burgerMenu = document.querySelector( '.burger-menu' );
const burgerMenuLinks = burgerMenu.querySelectorAll('.menu__link');

const OPEN_MENU_CLASSNAME = 'is-open';

const openMenu = () => {
  lockScroll();
  burgerBtn.classList.add( OPEN_MENU_CLASSNAME );
  burgerMenu.classList.add( OPEN_MENU_CLASSNAME );

  burgerMenuLinks.forEach(link => {
    link.addEventListener('click', onBurgerMenuLinkClick);
  });
};

const closeMenu = () => {
  burgerBtn.classList.remove( OPEN_MENU_CLASSNAME );
  burgerMenu.classList.remove( OPEN_MENU_CLASSNAME );
  unlockScroll();

  burgerMenuLinks.forEach(link => {
    link.removeEventListener('click', onBurgerMenuLinkClick);
  });
};

const burgerBtnHandler = () => {
  burgerBtn.classList.contains( OPEN_MENU_CLASSNAME ) ?
    closeMenu() :
    openMenu();
};

const onEscKeydown = ( evt ) => {
  if ( burgerBtn.classList.contains( OPEN_MENU_CLASSNAME ) && isEscKey( evt ) ) {
    closeMenu();
  }
};

const onBurgerMenuLinkClick = () => {
  closeMenu();
};

export const initBurgerMenu = () => {
  if ( burgerBtn && burgerMenu ) {
    burgerBtn.addEventListener( 'click', burgerBtnHandler );
    document.addEventListener( 'keydown', onEscKeydown );
  }
};
