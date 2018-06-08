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
                dots:false,
                loop:true,
                center:true,
                autoplay:false
            });
        }

    });

    /* --------------------------------------------------------
       ANIMATIONS
----------------------------------------------------------- */

    $('.subheader').animated('fadeInUp','fadeOutDown');
    $('.preheader, .main-content h1').animated('fadeInDown','fadeOutUp');
    $('.second h3').animated('fadeInDown','fadeOutUp');
    $('.second-content h5, .second-content p').animated('fadeInLeft','fadeOutLeft');
    $('.section-subheader, .main-slider').animated('fadeInDown','fadeOutUp');
    $('.more-button').animated('fadeInUp','fadeOutDown');
    $('.places h3, .places-wrap').animated('fadeIn','fadeOut');

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

/* --------------------------------------------------------
FIXED HEADER
----------------------------------------------------------- */
var header = $('header');

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }

    if( header.hasClass('fixed')){
        $('header .logo img').attr('src','assets/images/logo.svg');
    }else{
        $('header .logo img').attr('src','assets/images/logo-inverted.svg');
    }
});