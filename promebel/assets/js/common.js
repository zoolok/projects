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

        var dots = false;

        if (document.body.clientWidth < 768) {
            var dots = true;
        }
        "use strict";
        if ( $(".otzyv-slider").length > 0 ) {
            $('.otzyv-slider').owlCarousel({
                items:1,
                nav:true,
                navText:["",""],
                dots:dots,
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
        menu.animate({right: "0"}, 500);

    });
    $('.close-menu').click(function () {
        menu.animate({right: "-5999"}, 500);
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
    $('[data="order"]').click(function () {
        $('.modal-wrap').addClass('flex');
    });
    $('.modal-close').click(function () {
        $('.modal-wrap').removeClass('flex');
    });
});