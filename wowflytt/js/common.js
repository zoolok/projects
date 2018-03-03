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
                dotsContainer: '.dots',
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
        $('.serv-desc h2').css('delay-2');
        $('.gallery-line h2').css('delay-3');
        $('[class^="figovina-"]').css('delay-4');
    }

    if(document.body.clientWidth < 768) {

    }
    /* --------------------------------------------------------
       SHEMA SLIDER
----------------------------------------------------------- */

    var pi = $('.stage ul li');

    var shema_img = $('[class^="shema-item-"]');
    /*console.log(shema_img);*/

    pi.click(function () {

        pi.each(function (index) {
            pi.removeClass('active');
        });

        $(this).addClass('active');
        shema_img.fadeOut(0);

        var numit = parseInt($(this).attr('data-shema'));

        /* console.log(numit);*/

        var cur = numit-1;

        /* console.log(cur);*/

        shema_img.each(function (index) {
            if (index == cur) {
                $(this).fadeIn(0);
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
    setInterval(nextStepFn, 5000);

    /* --------------------------------------------------------
          MENU
----------------------------------------------------------- */

    var mnu = $('.mob-header nav');

    $('.menu-button').click(function () {
        mnu.slideDown(800);
        $('.mob-header nav ul li').addClass('animated fadeInLeft');
        $('.menu-button span').css('background-color','#fc0000')
    });

    $('.close-menu').click(function () {
        mnu.slideUp(800);
        $('.menu-button span').css('background-color','#000')
    });

    $('.mob-header nav ul li').each(function (index) {
        $(this).addClass('delay-' + (index+1));
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
    if ($("#price-slider").length >0){

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

        $('#amount').on("click",function () {
            $(this).val("");
        });

        $('#amount').on("input",function () {
            var arg =  $(this).val();
            $("#price-slider").slider({value:arg});
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

    }
    /* --------------------------------------------------------
  POP UP
----------------------------------------------------------- */
    $('[name="popup"]').click(function () {
        $('.worm-wrap').css('display','flex');
    });
    $('.close').click(function () {
        $('.worm-wrap').css('display','none');
    });
});


