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
                  BR MOBILE REMOVE
----------------------------------------------------------- */
    if(document.body.clientWidth < 768) {
        var br = $('body').find($('br'));
        br.remove();
    }
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
    $(function() {
        "use strict";
        if ( $(".uslugi-wrap").length > 0 && document.body.clientWidth < 768) {
            $(".kuhnya").unwrap();
            $('.uslugi-wrap').owlCarousel({
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

                       MENU
----------------------------------------------------------- */

    var menu = $('.catalog-menu');

    $('.catalog-button').click(function () {
        menu.fadeToggle();

    });
    $('.close-menu').click(function () {
        menu.fadeToggle();
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