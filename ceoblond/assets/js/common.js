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

    $('.m-menu-button').click(function () {
        menu.fadeToggle(300);
        menu.addClass('fixed');
    });
    $('.m-close-menu').click(function () {
        menu.fadeToggle(300);
        menu.removeClass('fixed');
    });
    /* --------------------------------------------------------
                        ONE PAGE SCROLL
----------------------------------------------------------- */
    $(".main-wrap").onepage_scroll({
        sectionContainer: "section",
        easing: "ease-in-out", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
        animationTime: 1000, // время анимации
        pagination: true, // скрыть или отобразить пагинатор
        updateURL: false // обновлять URL или нет
    });

    $('.scroll-wrap').click(function () {
        $(".main").moveTo(2);
    });

    $(".onepage-pagination").wrap("<div class='right-pagen'></div>");
    $('.right-pagen').append('<span class="top"></span>\n' + '<span class="down"></span>\n');
    $('.right-pagen').css('display','none');

    $('.top').on('click',function () {
        $('section.active').moveUp();
    });
    $('.down').on('click',function () {
        $('section.active').moveDown();
    });

    $(".main-wrap").onepage_scroll({
        afterMove: function(index) {
            if($('body').hasClass('viewing-page-1')){
                $('.right-pagen').css('display','none');
            }else{
                $('.right-pagen').css('display','block');
            }
        }
    });

    /* --------------------------------------------------------
                   ADD ELEMENTS
----------------------------------------------------------- */
    $('.circle-wrap').html('<span class="circle-1"></span>\n' +
        '<span class="circle-2"></span>');
    $('.circle-dotted').html('<span class="circle-3"></span>\n' +
        '<span class="circle-4"></span>');

    $('.onepage-pagination li a').each(function (index) {
        $(this).html('0'+ (index + 1));
    });


    /* --------------------------------------------------------
          MENU
----------------------------------------------------------- */

    var mnu = $('.main-menu');

    $('.menu-button').click(function () {
        mnu.animate({right: '0'}, 400);
        $('.main-menu ul li').addClass('animated fadeInUp');
    });

    $('.close-menu').click(function () {
        mnu.animate({right: '-999'}, 400);
        $('.main-menu ul li').removeClass('animated fadeInUp');
    });
    /* --------------------------------------------------------
           ANIMATIONS
----------------------------------------------------------- */
    $('.citata-wrap p:first-child').addClass('animated fadeInLeft');
    $('.citata-wrap p:nth-child(2)').addClass('animated fadeInRight');
});


