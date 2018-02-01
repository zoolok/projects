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
                loop:false,
                center:true,
                margin:10,
                URLhashListener:true,
                autoplayHoverPause:true,
                startPosition: 'URLHash'


            });
        }
    });



    /* --------------------------------------------------------
                        MOBILE MENU
----------------------------------------------------------- */

    var menu = $('.mobile-menu');
    var blured = $('.wrapper-content, footer');

    $('.m-menu').click(function () {
        menu.animate({left: '0'}, 300);
        menu.addClass('fixed');
        blured.addClass('blured');
    });

    $('.mobile-menu span').click(function () {
        menu.animate({left: "-999px"}, 300);
        menu.removeClass('fixed');
        blured.removeClass('blured');
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



