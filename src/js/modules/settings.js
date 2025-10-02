import SmoothScroll from 'smooth-scroll';

import {
  smoothScrollConfig
} from './configs.js';

import {
  iosVhFix
} from './utils.js';

import {
  initScrollObserver,
} from './scroll-observer.js';

import {
  initBurgerMenu
} from './burger.js';

import {
  initFixedBackgrounds
} from './background-image.js';


const initSiteSettings = () => {
  iosVhFix();
  initScrollObserver();
  initBurgerMenu();
  initFixedBackgrounds();
  new SmoothScroll( 'a[href*="#"]', smoothScrollConfig );
  new AcceptCookiePopup();
};

export {
  initSiteSettings,
};
