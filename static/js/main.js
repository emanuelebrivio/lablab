(function () {
  
  'use strict';
  
  // Add a listener to the Scroll Event
  window.addEventListener('scroll', function () {
    
    // Get the scroll position of the page
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Top position', top);
    
  });
  
  var productSwiper = new Swiper('.product-container', {
    pagination: '.product-pagination',
    slidesPerView: 4,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30
  });
  
})();