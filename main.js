var addSnackBtn = document.querySelector('.add-snack-input');
var snackName = document.querySelector('.snack-item');
var snackDescription = document.querySelector('.snack-description');
var groceryList = document.querySelector('.grocery-list');
var deleteBtn = document.querySelector('.delete-btn');

snackName.addEventListener('keyup', checkInputs);
snackDescription.addEventListener('keyup', checkInputs);
addSnackBtn.addEventListener('click', makeNewCard);
groceryList.addEventListener('click', removeCard);

addSnackBtn.disabled = true;

function checkInputs() {
  if (snackName.value.length > 0 && snackDescription.value.length > 0) {
    addSnackBtn.disabled = false;
  } else if (snackName.value.length < 1 || snackDescription.value.length < 1) {
    addSnackBtn.disabled = true;
  }
}

function makeNewCard() {
  groceryList.innerHTML += `<div style="background-color:${getRandomColor()}
  "class="card" contenteditable="true"><h3>${snackName.value}</h3><p>
  ${snackDescription.value}</p><button class="delete-btn">DELETE</button></div>`;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function removeCard(event) {
  if (event.target.classList.contains('delete-btn')) {
    // console.log('hit the delete btn');
    event.target.closest('.card').remove();
  }
}
