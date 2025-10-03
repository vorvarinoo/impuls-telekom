const thanksPageMessage = () => {
  const params = new URLSearchParams(window.location.search);

  const message = params.get('message-thanks');

  const messageElement = document.querySelector('#message-thanks');
   // элемент, куда выводить сообщение
  if (messageElement) {
    messageElement.textContent = message; // вывести текст в элемент
  }
};


export {
  thanksPageMessage
};
