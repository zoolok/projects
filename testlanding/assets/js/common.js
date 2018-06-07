$(document).ready(function () {

    /* --------------------------------------------------------
         INDEX OWL CARUSEL
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $(".main-slider").length > 0 ) {

            $('.main-slider').owlCarousel({
                items:1,
                nav:true,
                navText:["",""],
                dots:true,
                loop:true,
                center:true,
                autoplay:true
            });
        }

    });

    /* --------------------------------------------------------
       ANIMATIONS
----------------------------------------------------------- */

    $('.subheader').animated('fadeInUp','fadeOutDown');
    $('.preheader, .main-content h1').animated('fadeInDown','fadeOutUp');

    /* --------------------------------------------------------
                        MOBILE MENU
----------------------------------------------------------- */

    var menu = $('.mob-menu');

    $('.menu-button').click(function () {
        menu.fadeToggle(300);
        menu.addClass('fixed');
    });
    $('.m-close-menu').click(function () {
        menu.fadeToggle(300);
        menu.removeClass('fixed');
    });

});

/* --------------------------------------------------------
LOGO REFRESH
----------------------------------------------------------- */

$('.logo').click(function () {
    window.location.reload(true);
});
