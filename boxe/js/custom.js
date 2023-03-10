(function ($) {
  "use strict";

  $('#datepicker').datepicker();

  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $(document).ready(function () {
    $('select').niceSelect();
  });

  var phone = $('.input-phone');
  if (phone.length) {
    phone.intlInputPhone();
  }

  var deliveries = $('.deliveries_slider');
  if (deliveries.length) {
    deliveries.owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      smartSpeed: 2000,
      margin: 30,
      navText: [
        '<i class="flatfa fa-left-arrow"></i>',
        '<i class="flatfa fa-right-arrow"></i>'
      ],
      responsive: {
        0: {
          nav: false,
          items: 1,
        },
        768: {
          nav: true,
          items: 2,
        },
        992: {
          nav: true,
          items: 3,
        }
      }
    });
  }
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });


  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


}(jQuery));