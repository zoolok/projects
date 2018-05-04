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
        var dots = false;
        var nav = true;

        if(document.body.clientWidth < 768) {
            var dots = true;
            var nav = false;
        }
        if ( $( ".nacka-slider" ).length > 0 ) {

            $('.nacka-slider').owlCarousel({
                items:1,
                nav:nav,
                navText:["",""],
                dots:dots,
                loop:true,
                center:true,
                autoplay:true
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
        $('.serv-desc h2').css('delay-2');
        $('.gallery-line h2').css('delay-3');

    }




    /* --------------------------------------------------------
          MENU
----------------------------------------------------------- */

    var mnu = $('.mob-header nav');

    $('.menu-button').click(function () {
        mnu.slideDown(0);
        $('.mob-header nav ul li').addClass('animated fadeInLeft');
        $('.menu-button span').css('background-color','#fc0000')
    });

    $('.close-menu').click(function () {
        mnu.slideUp(600);
        $('.menu-button span').css('background-color','#000')
    });

    $('.mob-header nav ul li').each(function (index) {
        /* $(this).addClass('delay-' + (index+1));*/
        console.log('0,'+ index +'s');
        $(this).css('animation-delay', '0.'+ index +'s');
    });
    /* --------------------------------------------------------
       ANIMATIONS
----------------------------------------------------------- */
    if(document.body.clientWidth > 768) {
        $('.header').animated('fadeInRight','fadeOutLeft');
        $('.subheader').animated('fadeInLeft','fadeOutRight');
        $('.service-item').animated('fadeIn','fadeOut');
        $('.serv-list-1 h2').animated('fadeInLeft','fadeOutRight');
        $('.serv-list-2 h2').animated('fadeInRight','fadeOutLeft');
        $('.gallery-line h2').animated('fadeIn','fadeOut');
    }
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
            $("#price-slider").slider({value:0});
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
    $('[name="order"]').click(function () {
        $('.worm-wrap-order').css('display','flex');
    });
    $('.close').click(function () {
        $('.worm-wrap, .worm-wrap-order').css('display','none');
        $('#pop-up, #order').trigger("reset");
    });

    /* --------------------------------------------------------
                   SEND FORM
   ----------------------------------------------------------- */
    $('#pop-up').submit(function () {
        $('.worm-wrap').fadeOut();
        alert('Tack att ni kontaktade oss!' +
            'Ci kontaktar er inom kort!')
    });
    $('#order').submit(function () {
        $('.worm-wrap-order').fadeOut();
        alert('Tack att ni kontaktade oss!' +
            'Ci kontaktar er inom kort!')
    });
    $('#footer-form').submit(function () {
        alert('Tack att ni kontaktade oss!' +
            'Vi kontaktar er inom kort!')
    })
});


