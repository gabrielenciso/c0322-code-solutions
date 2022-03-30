var $form = document.forms[0];

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  var formResult = {};
  formResult[$form.elements.name.name] = $form.elements.name.value;
  formResult[$form.elements.email.name] = $form.elements.email.value;
  formResult[$form.elements.message.name] = $form.elements.message.value;

  console.log('formResult: ', formResult);
  $form.reset();
});
