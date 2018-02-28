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


    /* --------------------------------------------------------
                        MOBILE MENU
----------------------------------------------------------- */

    var menu = $('.mobile-menu');

    $('.m-menu-button').click(function () {
        menu.fadeToggle(300);
        menu.addClass('fixed');
    });
    $('.m-close-menu').click(function () {
        menu.fadeToggle(300);
        menu.removeClass('fixed');
    });


    /* --------------------------------------------------------
                   ADD ELEMENTS
----------------------------------------------------------- */
    if(document.body.clientWidth > 768) {
        $('.center-galaktiki').html('<span class="circle-1"></span>\n' +
            '<span class="circle-2"></span>\n' + '<span class="circle-5"></span>\n' + '<span class="circle-6"></span>');
        $('.circle-5').css('animation', 'orbit2 34s linear infinite');
        $('.circle-6').css('animation', 'orbit1 64s linear infinite');

    }

    if(document.body.clientWidth < 768) {

    }

    /* --------------------------------------------------------
          MENU
----------------------------------------------------------- */

    var mnu = $('.main-menu');

    $('.menu-button').click(function () {
        mnu.animate({right: '0'}, 400);
        $('.main-menu ul li').addClass('animated fadeInUp');
    });

    $('.close-menu').click(function () {
        mnu.animate({right: '-9999'}, 400);
        $('.main-menu ul li').removeClass('animated fadeInUp');
    });

    /* --------------------------------------------------------
       ANIMATIONS
----------------------------------------------------------- */

    $('.citata-wrap p:first-child').animated('fadeInLeft','fadeOutLeft');
    $('.citata-wrap p:nth-child(2)').animated('fadeInRight','fadeOutRight');
    $('.scroll-wrap').addClass('flipInX animated');

});


