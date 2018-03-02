$(document).ready(function () {

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
                loop:false,
                center:true,
                autoplay:true
            });
        }
        $('.owl-dots').wrap("<div class='container'></div>");
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
        $('.shema h1').css('delay-3');
        $('[data-shema="1"]').css('delay-2');
        $('[data-shema="2"]').css('delay-3');
        $('[data-shema="3"]').css('delay-4');
        $('[data-shema="4"]').css('delay-5');
        $('.serv-desc h2').css('delay-3');
        $('.gallery-line h2').css('delay-3');
        $('[class^="figovina-"]').css('delay-4');
    }

    if(document.body.clientWidth < 768) {

    }
    /* --------------------------------------------------------
       SHEMA SLIDER
----------------------------------------------------------- */
    if(document.body.clientWidth > 768) {
        var pi = $('.stage ul li');
    }else{
        var pi = $('.nav-dots span');
    }
    var shema_img = $('[class^="shema-item-"]');
    /*console.log(shema_img);*/

    pi.click(function () {

        pi.each(function (index) {
            pi.removeClass('active');
        });

        $(this).addClass('active');
        shema_img.fadeOut(300);

        var numit = parseInt($(this).attr('data-shema'));

        /* console.log(numit);*/

        var cur = numit-1;

        /* console.log(cur);*/

        shema_img.each(function (index) {
            if (index == cur) {
                $(this).fadeIn(300);
            }
        });
    });

    function nextStepFn () {
        var ns = $('.stage ul li.active');
        ns.removeClass('active');
        if(ns.is('.stage ul li:last')){
            var nsNext = $('.stage ul li:first');
        }else{
            var nsNext = ns.next('.stage ul li');
        }
        nsNext.addClass('active').trigger('click');
    }
    setInterval(nextStepFn, 3000);

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

    $('.shema h1').animated('fadeIn','fadeOut');
    $('.serv-desc h2').animated('fadeIn','fadeOut');
    $('.gallery-line h2').animated('fadeIn','fadeOut');
    $('li[data-shema]').animated('fadeIn','fadeOut');
    $('[class^="figovina-"]').animated('slideInDown','slideInUp');

    /* --------------------------------------------------------
       PRICE SLIDER
----------------------------------------------------------- */
    $("#price-slider").slider({
        value:0,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#amount" ).val(ui.value + ' kvm' );
            var arg =  parseInt(ui.value);
            switch(true){
                case arg <= 30:
                    $( ".summa" ).html( (arg*45) + ' SEK');
                    break;
                case arg > 30 && arg <= 45:
                    $( ".summa" ).html( (arg*40) + ' SEK');
                    break;
                case arg > 45 && arg <= 60:
                    $( ".summa" ).html( (arg*35) + ' SEK');
                    break;
                case arg > 60 :
                    $( ".summa" ).html( (arg*30) + ' SEK');
                    break;
            }
        }
    });

    $('#amount').change(function () {
        var arg =  $(this).val();
        switch(true){
            case arg <= 30:
                $( ".summa" ).html( (arg*45) + ' SEK');
                break;
            case arg > 30 && arg <= 45:
                $( ".summa" ).html( (arg*40) + ' SEK');
                break;
            case arg > 45 && arg <= 60:
                $( ".summa" ).html( (arg*35) + ' SEK');
                break;
            case arg > 60 :
                $( ".summa" ).html( (arg*30) + ' SEK');
                break;
        }
    });
});


