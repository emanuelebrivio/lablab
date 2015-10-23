(function () {
  
  'use strict';
  
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
    spaceBetween: 30,
  });
  
  smoothScroll.init({
    offset: 80,
  });
  
})();