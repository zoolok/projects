$(document).ready(function () {

    /* --------------------------------------------------------
          FANCYBOX POP-UP
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $("[data-fancybox]").length > 0 ) {
            $("[data-fancybox]").fancybox({

            });
        }
    });
    /* --------------------------------------------------------
         INDEX OWL CARUSEL
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $(".owl-carousel").length > 0 ) {

            $('.owl-carousel').owlCarousel({
                items:1,
                nav:false,
                dots:true,
                loop:true,
                center:true,
                autoplay:true
            });
        }

    });
    /* --------------------------------------------------------
                      BR MOBILE REMOVE
----------------------------------------------------------- */
    if(document.body.clientWidth < 768) {
        var br = $('body').find($('br'));
        br.remove();
    }

    /* --------------------------------------------------------
                        MOBILE MENU
----------------------------------------------------------- */

    var menu = $('.mob-menu');

    $('.m-menu-button').click(function () {
        menu.fadeToggle();
        menu.addClass('fixed');
        $('.mob-menu li').each(function (index) {
            $(this).addClass('animated fadeInLeft delay-' + (index+1));
        });

    });
    $('.m-close-menu').click(function () {
        menu.fadeToggle(300);
        menu.removeClass('fixed');
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

/* --------------------------------------------------------
    MASKED INPUT
----------------------------------------------------------- */
$('#phone').mask("+7 (999) 999-99-99");


/* --------------------------------------------------------
    ORDER POP UP
----------------------------------------------------------- */
$('[data="order"]').click(function (e) {
    e.preventDefault();
    $('.modal-wrap').addClass('flex');
    $('#zakaz').addClass('animated fadeInDown');
});
$('.modal-close').click(function () {
    $('.modal-wrap').removeClass('flex');
    $('#zakaz').removeClass('animated fadeInDown');
});

/* --------------------------------------------------------
    HOVER IMG
----------------------------------------------------------- */

$('.service-item img').hover(function () {
        var hi = $(this).attr('hover-data');
        var ci = $(this).attr('src');
        $(this).attr('src', hi);
        $(this).attr('hover-data', ci);
        $(this).addClass('animated fadeIn');
    },
    function(){
        var hi = $(this).attr('hover-data');
        var ci = $(this).attr('src');
        $(this).attr('src', hi);
        $(this).attr('hover-data', ci);
        $(this).removeClass('animated fadeIn');
    });


