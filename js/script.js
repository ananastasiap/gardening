'use strict';

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

// POPUP
function showModalByTime (modalSelector, time) {
  setTimeout(function () {
    document.querySelector(modalSelector).style.display = 'block';
  }, time);
}

showModalByTime('.popup', 3000);