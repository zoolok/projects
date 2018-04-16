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
         OWL CARUSEL
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $(".good-slider").length > 0 ) {

            $('.good-slider').owlCarousel({
                items:1,
                nav:true,
                navText:["",""],
                dots:true,
                loop:true,
                center:true,
                autoplay:true
            });
        }
        var news = $(".slider-news");

        if ( news.length > 0 ) {
            news.owlCarousel({
                items:4,
                nav:true,
                navText:["",""],
                dots:false,
                loop:true,
                margin:20,
                autoplay:true
            });
        }

        var article = $(".slider-article");

        if ( article.length > 0 ) {
            article.owlCarousel({
                items:4,
                nav:true,
                navText:["",""],
                dots:false,
                loop:true,
                margin:20,
                autoplay:true
            });
        }
    });

    /* --------------------------------------------------------
          NEWS ARTICLE TABS
----------------------------------------------------------- */
    var newstab = $('.news-tab');
    var articlestab = $('.article-tab');
    var slidernews =  $('.slider-news');
    var sliderarticle =  $('.slider-article');

    newstab.click(function () {
        $(this).toggleClass('active',false);
        slidernews.toggleClass('visible hidden');
        articlestab.toggleClass('active',false);
        sliderarticle.toggleClass('visible hidden');
    });
    articlestab.click(function () {
        $(this).toggleClass('active',false);
        sliderarticle.toggleClass('visible hidden');
        newstab.toggleClass('active',false);
        slidernews.toggleClass('visible hidden');
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
              SCROLL UP
----------------------------------------------------------- */
    var arrow = $('.arrow-up');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            arrow.fadeIn();
        } else {
            arrow.fadeOut();
        }
    });
    arrow.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
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




