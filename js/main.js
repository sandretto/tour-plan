var hotelSlider = new Swiper('.hotel-slider', {
    loop: true,
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    speed: 900,
    keyboard: {
      enabled: true,
      onlyInViewPort: true,
      pageUpDown: true
    }
  });

var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.763561, 30.355990],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([59.763561, 30.355990], {
            iconCaption: 'Хилтон Санкт-Петербург Экспофорум'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }));
}

var reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  speed: 900,
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
    pageUpDown: true
  }
});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
  document
  .querySelector('.navbar-bottom')
  .classList
  .toggle('navbar-bottom--visible');
});

