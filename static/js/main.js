(function () {
  
  'use strict';
  
  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };
  
  // Add a listener to the Scroll Event
  window.addEventListener('scroll', function () {
    
    // Get the scroll position of the page
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('header');
    console.log('Top position', top);
    
    if (top > 360) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
    
  });
  
  var productSwiper = new Swiper('.product-container', {
    pagination: '.product-pagination',
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
  });
  
  smoothScroll.init({
    offset: 80,
  });
  
  document.querySelectorAll('.product-overlay').on('click', function () {
    document.querySelectorAll('#overlay input').forEach(function (input) {
      input.value = '';
    });
    document.getElementById('overlay').classList.add('visible');
  });
  
  document.querySelector('#overlay form').addEventListener('submit', function () {
    document.getElementById('overlay').classList.remove('visible');
  });
  
  
})();