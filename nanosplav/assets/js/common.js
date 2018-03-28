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
                       PODDOMENY
    ----------------------------------------------------------- */
    $('#region').change(function (e) {
        e.preventDefault();
        var url = $('#region option:selected').val();
        $(location).attr('href',url);
    });

    /* --------------------------------------------------------
                    FULL MENU
    ----------------------------------------------------------- */

    var menu = $('.full-menu');

    $('.menu-button').click(function () {
        menu.css('left','0px');

    });
    $('.close-menu').click(function () {
        menu.css('left','-454px');
    });


});

/* --------------------------------------------------------
           MODAL
----------------------------------------------------------- */
var mw = $('.modal-wrap');

$('a.order').click(function (e) {
    e.preventDefault();
    mw.addClass('flex');
});

$('.modal-close').click(function (e) {
    e.preventDefault();
    mw.removeClass('flex');
});
