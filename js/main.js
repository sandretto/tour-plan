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