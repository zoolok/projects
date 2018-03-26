$(document).ready(function () {

    /* --------------------------------------------------------
          FANCYBOX POP-UP
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $("[data-fancybox]").length > 0 ) {
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
        if ( $(".main-slider").length > 0 ) {

            $('.main-slider').owlCarousel({
                items:1,
                nav:true,
                navText:["",""],
                dots:false,
                loop:true,
                center:true,
                autoplay:true
            });
        }
    });

    $(function() {
        "use strict";
        if ( $(".otzyv-slider").length > 0 ) {
            $('.otzyv-slider').owlCarousel({
                items:1,
                nav:true,
                navText:["",""],
                dots:false,
                loop:true,
                center:true,
                autoplay:true
            });
        }
    });


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

    /* --------------------------------------------------------
              SCROLL DOWN
----------------------------------------------------------- */
    $('.down').click(function () {
        var hs = $('.main').height();
        /*console.log(hs);*/
        $('html, body').stop().animate({
            scrollTop: hs +'px'
        },1000);
    });
    /* --------------------------------------------------------
          FOTO VIDEO TABS
----------------------------------------------------------- */
    $('.foto').click(function () {
        $(this).addClass('active');
        $('.slider-foto').addClass('visible');
        $('.slider-foto').removeClass('hidden');
        $('.video').removeClass('active');
        $('.slider-video').removeClass('visible');
        $('.slider-video').addClass('hidden');
    });
    $('.video').click(function () {
        $(this).addClass('active');
        $('.slider-video').addClass('visible');
        $('.slider-video').removeClass('hidden');
        $('.foto').removeClass('active');
        $('.slider-foto').removeClass('visible');
        $('.slider-foto').addClass('hidden');
    });

    /* --------------------------------------------------------
          NEWS & BLOG MIXITUP
----------------------------------------------------------- */

    if ($("#news-grid").length > 0) {
        $("#news-grid").mixItUp();
    }

    $('.controls li').click(function () {
        $(".controls li").removeClass("active");
        $(this).addClass("active");
    });

    /* --------------------------------------------------------
        MASKED INPUT
----------------------------------------------------------- */
    $('#phone').mask("+7 (999) 999-99-99");

    /* --------------------------------------------------------
        ORDER POP UP
----------------------------------------------------------- */
    $('.popup').click(function () {
        $('.content-wrap').addClass('blured');
        $('.popup-wrap').addClass('flex');
    });
    $('.close').click(function () {
        $('.popup-wrap').removeClass('flex');
        $('.content-wrap').removeClass('blured');
    });
});