// Find buy button

var submitButton = document.getElementById('snack-submit');
var inputField = document.getElementById('snack-input');
var message = document.getElementById('flash-message');
var purchases = document.getElementById('snack-purchases');

submitButton.addEventListener('click', function(event){
  var value = inputField.value;
  var snack = document.getElementById(value);
  if(snack) {
    purchases.appendChild(snack);
    message.textContent = 'Enjoy your ' + value;
  } else {
    message.textContent = 'Sorry! I am out of that!';
  }
});