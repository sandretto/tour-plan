function init() {
    var myMap = new ymaps.Map(
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