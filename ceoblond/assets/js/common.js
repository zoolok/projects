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

    $('.menu-button').click(function () {
        menu.fadeToggle(300);
        menu.addClass('fixed');
    });
    $('.close-menu').click(function () {
        menu.fadeToggle(300);
        menu.removeClass('fixed');
    });
    /* --------------------------------------------------------
                        ONE PAGE SCROLL
----------------------------------------------------------- */
/*    $(".main-wrap").onepage_scroll({
        sectionContainer: "section",
        easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
        animationTime: 1000, // время анимации
        pagination: true, // скрыть или отобразить пагинатор
        updateURL: false // обновлять URL или нет
    });*/
    $.scrollify({
        section : ".main",
        scrollbars: true
    });
    /*https://github.com/lukehaas/Scrollify*/
    /* --------------------------------------------------------
                   ADD ELEMENTS
----------------------------------------------------------- */
    $('.circle-wrap').html('<span class="circle-1"></span>\n' +
                    '<span class="circle-2"></span>\n' +
                    '<span class="circle-3"></span>\n' +
                    '<span class="circle-4"></span>')
});



