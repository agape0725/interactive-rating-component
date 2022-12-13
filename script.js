'use strict'

let rateButtons = document.querySelectorAll('.rate-number');
let buttonClick = document.querySelectorAll('.rate-number').length;
let result = document.querySelector('.result');
let errorMessage = document.querySelector('.error-message');

document.querySelectorAll('.rate-number').forEach((highlight) => highlight.addEventListener('click', () => {
  if (highlight.classList.contains("highlight")) {
    highlight.classList.add('highlight');
  } else {
    document.querySelectorAll('.rate-number').forEach((highlight) => highlight.classList.remove('highlight'))
    highlight.classList.add('highlight');
  }
}))

document.querySelectorAll('.rate-number').forEach((clicked) => clicked.addEventListener('click', () => {
  if (clicked.classList.contains('clicked')) {
    clicked.classList.add('clicked');
  } else {
    document.querySelectorAll('.rate-number').forEach((clicked) => clicked.classList.remove('clicked'))
    clicked.classList.add('clicked');
  }
}))

document.querySelectorAll('.rate-number').forEach((removeError) => removeError.addEventListener('click', () => {
  errorMessage.classList.remove('show');
}))

document.getElementById('submit-button').addEventListener('click', function (e) {



  if (result.textContent === '') {
    document.querySelector('.feedback__container').classList.remove('show');
    errorMessage.textContent = `Please give us some feedback to improve our services.`;
    errorMessage.classList.add('show');

  } else {
    document.querySelector('.feedback__container').classList.add('show');
  }
})

for (let button = 0; button <= buttonClick; button++) {
  document.querySelectorAll('.rate-number')[button].addEventListener('click', function (e) {
    let selectedButton = parseInt(rateButtons[button].textContent);
    selectedRate(selectedButton);
    console.log(selectedButton);
  })
}

function selectedRate(chose) {
  switch (chose) {
    case 1:
      result.textContent = `1`;
      break;

    case 2:
      result.textContent = `2`;
      break;

    case 3:
      result.textContent = `3`;
      break;

    case 4:
      result.textContent = `4`;
      break;

    case 5:
      result.textContent = `5`;
      break;

    default: 'zxc'
  }
}




