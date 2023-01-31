'use strict';

// POPUP
// function showModalByTime (modalSelector, time) {
//   setTimeout(function () {
//     document.querySelector(modalSelector).style.display = 'block';
//   }, time);
// }

// showModalByTime('.popup', 3000);

// function closeModal(closeSelector, modalSelector) {

//   const close = document.querySelector(closeSelector),
//         modal = document.querySelector(modalSelector);

//   document.addEventListener('click', (event) => {
//     if (event.target) {
//       event.preventDefault();
//     }
//   });

//   close.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });
// }

// closeModal('.popup__close', '.popup');

// HAMBURGER MENU
function handleCityChange() {
  document.getElementById('city').addEventListener('change', function() {
    const selectedCity = this.value;

    const cityInfoBlock = document.querySelectorAll('.contacts-city-wrap');

  cityInfoBlock.forEach(function(block) {
    block.style.display = 'none';
  });

  document.querySelector('.contacts-city-wrap[data-city=' + selectedCity + ']').style.display = 'block';
  });
}