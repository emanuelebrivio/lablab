(function () {
  
  'use strict';
  
  // Add a listener to the Scroll Event
  window.addEventListener('scroll', function () {
    
    // Get the scroll position of the page
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    var introHeight = document.getElementById('intro').getBoundingClientRect().height;
    console.log('Top position', top, introHeight);
    
    if (top > introHeight) {
      document.querySelector('header').classList.add('fixed');
    } else {
      document.querySelector('header').classList.remove('fixed');
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