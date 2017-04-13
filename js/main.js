var submitButton = document.getElementById('snack-submit');
var inputField = document.getElementById('snack-input');
var message = document.getElementById('flash-message');
var purchases = document.getElementById('snack-purchases');
var snackCollection = document.getElementById('snack-collection');

submitButton.addEventListener('click', function(){
  var value = inputField.value;
  var snack = document.getElementById(value);
  if(snack) {
    purchases.appendChild(snack);
    message.textContent = 'Enjoy your ' + value;
  } else {
    message.textContent = 'Sorry! I am out of that!';
  }
});

shake.addEventListener('click', function(){
  snackCollection.classList.toggle('shake');
});

snackCollection.addEventListener('click', function(event){
  if(event.target.className == 'snack'){
    var snack = event.target;
    var snackName = snack.id;
    inputField.value = snackName;
    purchases.appendChild(snack);
    message.textContent = 'Enjoy your ' + snackName;
  }
});

purchases.addEventListener('click', function(event){
  if(event.target.className == 'snack'){
    var snack = event.target;
    snack.remove()
  };
});