var $message = document.querySelector('.message');

function handleMessage() {
  $message.textContent = 'Hello There';
}

setTimeout(handleMessage, 2000);
