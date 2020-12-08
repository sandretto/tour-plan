$(document).ready(function () {
  
  //hotel slider
  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    speed: 900,
    keyboard: {
      enabled: true,
      onlyInViewPort: true,
      pageUpDown: true,
    },
  });

  //yandex map
  var myMap;

  ymaps.ready(init);

  function init() {
    myMap = new ymaps.Map(
      "map",
      {
        center: [59.763561, 30.35599],
        zoom: 10,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    myMap.geoObjects.add(
      new ymaps.Placemark(
        [59.763561, 30.35599],
        {
          iconCaption: "Хилтон Санкт-Петербург Экспофорум",
        },
        {
          preset: "islands#greenDotIconWithCaption",
        }
      )
    );
  }

  //reviews slider
  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    speed: 900,
    keyboard: {
      enabled: true,
      onlyInViewPort: true,
      pageUpDown: true,
    },
  });

  //mobile menu
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  //modal dialog

  var modalButton = $('[data-toggle=modal]');
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');

  modalButton.on('click', openModal);

  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal)
      .find('.modal__overlay')
      .addClass('modal__overlay--visible');
    $(targetModal)
      .find('.modal__dialog')
      .addClass('modal__dialog--visible');
  }

  var closeButton = $('.modal__close');

  closeButton.on('click', closeModal);

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  $(document).keydown(function(event) {
    var code = event.keyCode || event.which;
    if (code == 27) {
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
});
