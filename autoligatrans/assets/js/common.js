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
         INDEX OWL CARUSEL
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $(".main-slider").length > 0 ) {

            $('.main-slider').owlCarousel({
                items:3,
                nav:true,
                navText:["",""],
                dots:false,
                loop:true,
                center:true,
                autoplay:false,
                margin:107
            });
        }

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
/* --------------------------------------------------------
                  MAP SELECT
----------------------------------------------------------- */
$('#map').change(function (e) {
    e.preventDefault();
    var mapsrc = $('.shema-list img');
    mapsrc.fadeOut(600);
    var mapnumber = $('#map option:selected').val();
    mapsrc.fadeIn(500);
    mapsrc.attr('src','assets/images/map-' + mapnumber + '.jpg');

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