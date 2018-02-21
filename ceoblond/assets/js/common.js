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
        updateURL: false, // обновлять URL или нет
        loop: false
    });

    $('.scroll-wrap').click(function () {
        $(".main").moveTo(2);
    });

    $(".onepage-pagination").wrap("<div class='right-pagen'></div>");
    $('.right-pagen').append('<span class="top"></span>\n' + '<span class="down"></span>\n');
    $('.right-pagen').css('display','none');

    $('.top').on('click',function () {
        var cursect =  $('section.active');
        var cernnum = parseInt($('.onepage-pagination li a.active').attr('data-index'));
        cursect.moveTo(cernnum - 1);

    });
    $('.down').on('click',function () {
        var cursect =  $('section.active');
        var cernnum = parseInt($('.onepage-pagination li a.active').attr('data-index'));
        cursect.moveTo(cernnum + 1);
    });

    $(".main-wrap").onepage_scroll({
        afterMove: function(index) {
            if($('body').hasClass('viewing-page-1')){
                $('.right-pagen').css('display','none');
            }else{
                $('.right-pagen').css('display','block');
            }
            $('.serv-slog').addClass('animated fadeIn');
            $('[class^="serv-item-"]').addClass('animated fadeIn');

            if($('body').hasClass('viewing-page-3')){
                $('.portfolio-list li').addClass('flipInX animated');
                $('h2.portfolio').addClass('pulse animated');
                $('.circle-5').css('animation','orbit2 34s linear infinite');
                $('.circle-6').css('animation','orbit1 64s linear infinite');
            }
            if($('body').hasClass('viewing-page-4')){
                $('.serv-slog').addClass('animated fadeIn');
                $('.down').css('display','none');
                $('.circle-5').css('animation','orbit2 34s linear infinite');
                $('.circle-6').css('animation','orbit1 64s linear infinite');

            }else{
                $('.down').css('display','block');
            }
        }
    });

    /* --------------------------------------------------------
                   ADD ELEMENTS
----------------------------------------------------------- */
    $('.circle-wrap, .center-galaktiki').html('<span class="circle-1"></span>\n' + '<span class="circle-2"></span>');
    $('.center-galaktiki').html('<span class="circle-1"></span>\n' +
        '<span class="circle-2"></span>\n' + '<span class="circle-5"></span>\n' + '<span class="circle-6"></span>');

    $('.circle-dotted').html('<span class="circle-3"></span>\n' +
        '<span class="circle-4"></span>');

    $('.onepage-pagination li a').each(function (index) {
        $(this).html('0'+ (index + 1));
    });

    if($('body').hasClass('viewing-page-4')){

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
        mnu.animate({right: '-999'}, 400);
        $('.main-menu ul li').removeClass('animated fadeInUp');
    });

    /* --------------------------------------------------------
       ANIMATIONS
----------------------------------------------------------- */

    $('.citata-wrap p:first-child').animated('fadeInLeft','fadeOutLeft');
    $('.citata-wrap p:nth-child(2)').animated('fadeInRight','fadeOutRight');
    $('.scroll-wrap').addClass('flipInX animated');


    /* --------------------------------------------------------
       PORTFOLIO SLIDE
----------------------------------------------------------- */
    var pi= $('.portfolio ul li');
    var portfolio = $('[class^="portfolio-item-"]');
    console.log(portfolio);

    pi.click(function () {

        pi.each(function (index) {
            pi.removeClass('active');
        });

        $(this).addClass('active');
        portfolio.fadeOut();

        var numit = parseInt($(this).attr('data-portfolio'));

        console.log(numit);

        var cur = numit-1;

        console.log(cur);

        portfolio.each(function (index) {
            if (index == cur) {
                $(this).fadeIn();
            }
        });
    });

    /* --------------------------------------------------------
      PORTFOLIO LIST ()
----------------------------------------------------------- */
    var slideHeight = parseInt($('.portfolio-list').css('height')); //высота видимой области
    var lentaMargin = parseInt($('.lenta').css('margin-top')); // отступ сверху списка, если он есть
    var lentaPosition = lentaMargin; // начальная позиция
    var lentaHeight = parseInt($('.lenta').css('height')); // Высота списка
    var lentaElements = parseInt($('.lenta li').length); // Количество элементов
    var lentaStep = Math.round(lentaHeight / lentaElements)*6; // Шаг прокрутки
    var steps = Math.floor(lentaElements/6);
    var i = 0;

    $('.more-list').click(function () {
        i++;
        if(steps > i) {
            lentaPosition = lentaPosition - lentaStep;
            $('.lenta').animate({'margin-top': (lentaPosition)});
            $('.more-list').html('меньше');
            $('.more-list').addClass('minus');
            $('.more-list').removeClass('more-list');
        }else{
            $('.minus').html('больше');
            $('.minus').addClass('more-list');
            $('.minus').removeClass('minus');

            i = 0;
            if(steps > i) {
                lentaPosition = lentaPosition + lentaStep;
                $('.lenta').animate({'margin-top': (lentaPosition)});
            }
        }
    });

});


