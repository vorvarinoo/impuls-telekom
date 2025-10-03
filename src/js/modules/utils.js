const debounce = ( cb, delay ) => {
  let timer;
  return function( ...args ) {
    clearTimeout( timer );
    timer = setTimeout( () => {
      cb.apply( this, args );
    }, delay );
  };
};

const iosChecker = () => {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes( navigator.platform )
    // iPad on iOS 13 detection
    ||
    ( navigator.userAgent.includes( 'Mac' ) && 'ontouchend' in document );
};

const iosVhFix = () => {
  if ( !( !!window.MSInputMethodContext && !!document.documentMode ) ) {
    if ( iosChecker() ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( '--vh', `${vh}px` );

      window.addEventListener( 'resize', function() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty( '--vh', `${vh}px` );
      } );
    }
  }
};

const lockScroll = () => {
  if ( !document.documentElement.classList.contains( 'is-lock-scroll' ) ) {
    const offset = window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.setProperty( '--page-offset-right', `${offset}px` );
    document.documentElement.classList.add( 'is-lock-scroll' );
  }
};

const unlockScroll = () => {
  document.documentElement.style.setProperty( '--page-offset-right', '' );
  document.documentElement.classList.remove( 'is-lock-scroll' );
};

const isEscKey = ( evt ) => evt.key === 'Escape';

const initModal = ( name, handler = 'data-hystmodal' ) => {
  name.config.linkAttributeName = handler;
  name.init();
};


const disableSubmitBtn = ( form ) => {
  if ( !form.querySelector( '[type="submit"]' ) ) return;
  form.querySelector( '[type="submit"]' ).setAttribute( 'disabled', 'disabled' );
};

const enableSubmitBtn = ( form ) => {
  if ( !form.querySelector( '[type="submit"]' ) ) return;
  form.querySelector( '[type="submit"]' ).removeAttribute( 'disabled' );
};

const sendData = (evt, url, isOk, isError) => {
  const errorNode = evt.target;
  const form = evt.target;

  const formData = new FormData(form);

  formData.delete('thanks');

  const napravlenieAll = form.querySelectorAll('[name="Направление"]');
  if (napravlenieAll.length > 1) {
    formData.delete('Направление');
    const values = [];
    napravlenieAll.forEach(el => {
      if (el.checked) {
        values.push(el.value);
      }
    });
    formData.append('Направление', values.join(', '));
  }

  disableSubmitBtn(form);
  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((data) => {
      if (data.ok) {
        isOk(form);
        form.reset();
      } else {
        isError(errorNode);
      }
    })
    .catch(() => {
      isError(errorNode);
    })
    .finally(() => {
      enableSubmitBtn(form);
    });
};


export {
  debounce,
  iosVhFix,
  isEscKey,
  lockScroll,
  unlockScroll,
  initModal,
  sendData
};
