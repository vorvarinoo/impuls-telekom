const thanksPageMessage = () => {
  const params = new URLSearchParams(window.location.search);

  const message = params.get('message-thanks');

  const messageElement = document.querySelector('#message-thanks');

  if (messageElement) {
    const messageText = messageElement.querySelector('#message-thanks-text');

    messageText.textContent = message;

    setTimeout(() => {
      messageElement.classList.remove('is-hidden');
    }, 50);
  }
};


export {
  thanksPageMessage
};
