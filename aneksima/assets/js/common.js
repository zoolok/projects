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
            OTZYVY OWL CARUSEL
   ----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $(".otz-carousel").length > 0 ) {

            $('.otz-carousel').owlCarousel({
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
    var ham = $('.hamburger');

    ham.click(function () {
        ham.toggleClass('is-active');
         menu.toggleClass('active');
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
          SHEMA
----------------------------------------------------------- */
    $('[class^="step-"]').animated("fadeIn", "fadeOut");

    /* --------------------------------------------------------
        MASKED INPUT
----------------------------------------------------------- */
    $('#phone').mask("+7 (999) 999-99-99");

    /* --------------------------------------------------------
        ORDER POP UP
----------------------------------------------------------- */
    $('.order').click(function () {
        $('.modal-wrap').addClass('flex');
        $('.form-wrap').addClass('animated fadeInUp')
    });
    $('.close').click(function () {
        $('.modal-wrap').removeClass('flex');
        $('.form-wrap').removeClass('animated');
    });
});

/* --------------------------------------------------------
            SEND FORM
----------------------------------------------------------- */

$('#zakaz').submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.modal-close').trigger("click");
        alert('Спасибо за обращение!' +
            'Мы свяжемся с Вами в ближайшее время')
    });
    return false;
});