'use strict';

document.getElementById('city').addEventListener('change', function() {
  const selectedCity = this.value;

  const cityInfoBlock = document.querySelectorAll('.contacts-city-wrap');

  cityInfoBlock.forEach(function(block) {
    block.style.display = 'none';
  });

  document.querySelector('.contacts-city-wrap[data-city=' + selectedCity + ']').style.display = 'block';
});