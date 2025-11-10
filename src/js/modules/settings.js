import SmoothScroll from 'smooth-scroll';

import { smoothScrollConfig, cookieConfig } from './configs.js';

import { iosVhFix } from './utils.js';

import { initScrollObserver } from './scroll-observer.js';

import { initBurgerMenu } from './burger.js';

const initSiteSettings = () => {
  iosVhFix();
  initScrollObserver();
  initBurgerMenu();
  new SmoothScroll('a[href*="#"]', smoothScrollConfig);
  new AcceptCookiePopup(cookieConfig);
  AOS.init({
    duration: 1000,
    easing: 'ease-out',
  });
};

export { initSiteSettings };
