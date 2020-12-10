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
  var modalInput = $('.input');
  var label = $('label');

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

  function hideModal(modalOverlay, modalDialog) {
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    $('.modal__form').validate().resetForm();
    $('.modal__form').trigger('reset');
  }

  function closeModal(event) {
    event.preventDefault();
    hideModal(modalOverlay, modalDialog);
  }

  $(document).keydown(function(event) {
    var code = event.keyCode || event.which;
    if (code == 27) {
      hideModal(modalOverlay, modalDialog);
    }
  });

  //form validation
  $.validator.addMethod( 'mobileRU', function( phone_number, element ) {
    var ruPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
    return this.optional( element ) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test( ruPhone_number );
  }, "Your mobile number must be in the format of +79999999999" );

  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          mobileRU: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name should not be shorter than 2 symbols"
        },
        phone: {
          required: "We need your mobile phone to contact you",
          phone: "Your mobile number must be in the format of +79999999999"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
    });
  });

  //animation with AOS
  AOS.init();
});

