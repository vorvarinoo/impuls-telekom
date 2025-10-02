
const bgOne = document.querySelector('.main-background-image--one');
const bgTwo = document.querySelector('.main-background-image--two');
const targetBlockTwo = document.querySelector('.ecosystem');

const addFixedShow = (el) => {
  if (!el) return;
  el.style.position = 'fixed';
  el.style.display = 'block';
  el.style.top = '0';
  el.style.left = '0';
  el.style.width = '100%';
};

const removeFixedHide = (el) => {
  if (!el) return;
  el.style.position = 'absolute';
  el.style.display = 'none';
  el.style.top = '';
  el.style.left = '';
  el.style.width = '';
};

const checkScroll = () => {
  if (!bgOne) return;
  if (!bgTwo) return;
  if (!targetBlockTwo) return;


  const ecosystemTop = targetBlockTwo.getBoundingClientRect().top + window.scrollY;
  const ecosystemHeight = targetBlockTwo.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight / 2;


  if (scrollY >= ecosystemTop && scrollY <= ecosystemTop + ecosystemHeight) {
    addFixedShow(bgTwo);
    removeFixedHide(bgOne);
  } else if (scrollY < ecosystemTop) {
    addFixedShow(bgOne);
    removeFixedHide(bgTwo);
  } else if (scrollY > ecosystemTop + ecosystemHeight) {
    addFixedShow(bgTwo);
    removeFixedHide(bgOne);
  }
};

const initFixedBackgrounds = () => {
  addFixedShow(bgOne);
  removeFixedHide(bgTwo);

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);
  checkScroll();
};

export { initFixedBackgrounds };
