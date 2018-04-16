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
        $(this).addClass('active');
        slidernews.addClass('visible');
        slidernews.removeClass('hidden');
        articlestab.removeClass('active');
        sliderarticle.removeClass('visible');
        sliderarticle.addClass('hidden');
    });
    articlestab.click(function () {
        $(this).addClass('active');
        sliderarticle.addClass('visible');
        sliderarticle.removeClass('hidden');
        newstab.removeClass('active');
        slidernews.removeClass('visible');
        slidernews.addClass('hidden');
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