(function($) {
  "use strict"; // Start of use strict

  // Кнопка "наверх"

  var btn = $('.scroll-to-top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
  // Меню-гамбургер

  $('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('ul.menu').toggleClass('show');
  });

  if (  $(window).width()  <  768) {
    $('ul.menu li a').click(function(e) {
      e.preventDefault();
      $('ul.menu').toggleClass('show');
    });
  };

  // Плавная прокрутка

  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  // Popup-окно

  $('a.modal-btn').click(function (e) {
    e.preventDefault();
    var destinationPopup = $(this).attr("href");
    $(destinationPopup).addClass('show');
    $(destinationPopup + ' .popup__close').click(function  () {
      $(destinationPopup).removeClass('show');
    });
    $(destinationPopup + ' .popup__overlay').click(function  () {
      $(destinationPopup).removeClass('show');
    });
  });

  // Слайдер

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
      }
  });

  // 3D-эффекты

  
 

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);
