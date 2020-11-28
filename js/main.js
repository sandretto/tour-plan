var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
    speed: 900,
    keyboard: {
      enabled: true,
      onlyInViewPort: true,
      pageUpDown: true
    }
  });