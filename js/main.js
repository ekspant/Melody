$(document).ready(function () {
  var currentFloor = 2; //переменная, в которой хранится текущий этаж
  var floorPath = $('.home-image path'); //каждый отдельный этаж в svg
  var counterUp = $('.counter-up'); //кнопка увеличения этажа
  var counterDown = $('.counter-down'); //кнопка уменьшения этажа
  var modal = $('.modal');
  var modelCloseButton = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');
  
  var flatPath =$('.flats path'); //каждая отдельная квартира на этаже в SVG
  var currentFlat =0;//переменная хранящая номер квартиры


  //Выделяется этаж при наведении мышкой
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); //удаляем активный класс (у выделенного этажа)
    currentFloor = $(this).attr('data-floor'); //получаем значение текущего этажа
    $('.counter').text(currentFloor); //записываем значения этажа в счетчик справа
  });

  floorPath.on('click', toggleModal); //при клике на этаж открыть модальное окно
  modelCloseButton.on('click', toggleModal); //при клике на кнопку закрыть - закрыть модальное окно
  viewFlatsButton.on('click', toggleModal); //открытие модального окна по нажатию кнопки

  //увеличение этажа и его выделение по кнопке вверх
  counterUp.on('click', function () {
    //проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) {
      currentFloor++; //увеличиваем значение этажа
      //дописываем 0 перед цифрами в номере этажа в счетчике
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
      $('.counter').text(usCurrentFloor); //записываем значения этажа в счетчик справа
      floorPath.removeClass('current-floor'); //удаляем активный класс (у выделенного этажа)
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечиваем текущий этаж
    }
  });

  //уменьшение этажа и его выделение по кнопке вниз
  counterDown.on('click', function () {
    //проверяем значение этажа, оно не должно быть меньше 2
    if (currentFloor > 2) {
      currentFloor--; //уменьшаем 1 этаж
      //дописываем 0 перед цифрами в номере этажа в счетчике
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
      $('.counter').text(usCurrentFloor); //записываем значения этажа в счетчик справа
      floorPath.removeClass('current-floor'); //удаляем активный класс (у выделенного этажа)
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечиваем текущий этаж
    }
  });

  //функция закрытия-открытия модального окна
  function toggleModal() {
    modal.toggleClass('is-open');
  };

   //Выделяется КВАРТИРА при наведении мышкой
    flatPath.on('mouseover', function () {
    //flatPath.removeClass('current-flat'); //удаляем активный класс (у выделенного этажа)
    currentFlat = $(this).attr('data-flat'); //получаем значение текущей квартиры
    $('.counter').text(currentFlat); //записываем значения этажа в счетчик справа
    
  });


});
