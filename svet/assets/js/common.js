$(document).ready(function () {
    /* --------------------------------------------------------
       MAGNIFIC POP-UP
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( ".image-popup-no-margins" ).length > 0 ) {

            $('.image-popup-no-margins').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });
        }
    });

    /* --------------------------------------------------------
          FANCYBOX POP-UP
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( "[data-fancybox]" ).length > 0 ) {
            $("[data-fancybox]").fancybox({
                // Options will go here
            });
        }
    });
    /* --------------------------------------------------------
         INDEX OWL CARUSEL
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( ".main-slider" ).length > 0 ) {

            $('.main-slider').owlCarousel({
                items:1,
                nav:true,
                navText:["",""],
                dots:true,
                dotsContainer: '.slide-nav',
                loop:false,
                center:true
            });
           var od = $('.owl-dot');
           $('.owl-nav').addClass('flex');
            $('.owl-dot.active').html('01');
            od.each(function (index, value){
               $(this).next().html('0'+ (index + 2));
            });
        }
    });

    $(function() {
        "use strict";
        if ( $( ".catalog-slider" ).length > 0 ) {

            $('.catalog-slider').owlCarousel({
                items:1,
                nav:true,
                navText:["",""],
                dots:true,
                dotsContainer: '.slide-nav',
                loop:false,
                center:true
            });
            var od = $('.owl-dot');
            $('.owl-nav').addClass('flex');
            $('.owl-dot.active').html('01');
            od.each(function (index, value){
                $(this).next().html('0'+ (index + 2));
            });
        }
    });
    /* --------------------------------------------------------
                        MOBILE MENU
----------------------------------------------------------- */

    var menu = $('.mobile-menu');
    var blured = $('.wrapper-content, footer');

    $('.menu-button').click(function () {
        menu.fadeToggle(600);
        menu.addClass('fixed');
    });
    $('.close-menu').click(function () {
        menu.fadeToggle(600);
        menu.removeClass('fixed');

    });



    /* --------------------------------------------------------
                  SHOW MODAL ORDER
----------------------------------------------------------- */

    var overlay = $('.modal-overlay');

    $('.order-button, .m-order').click(function () {
        overlay.fadeIn();
        overlay.css('display','flex')
    });

    $('.close').click(function () {
        overlay.fadeOut();
    });



});



