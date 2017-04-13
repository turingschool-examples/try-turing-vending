// Find buy button

var submitButton = document.getElementById('snack-submit');
var inputField = document.getElementById('snack-input');
var message = document.getElementById('flash-message');

submitButton.addEventListener('click', function(event){
  var value = inputField.value;
  var snack = document.getElementById(value);
  if(snack) {
    snack.classList.add('hide')
  } else {
    message.textContent = 'Sorry! I am out of that!';
  }
});