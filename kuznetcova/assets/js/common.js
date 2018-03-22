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
                      BR MOBILE REMOVE
----------------------------------------------------------- */
    if(document.body.clientWidth < 768) {
        var br = $('body').find($('br'));
        br.remove();
    }

    /* --------------------------------------------------------
                       PODDOMENY
----------------------------------------------------------- */
    $('#region').change(function (e) {
        e.preventDefault();
        var url = $('#region option:selected').val();
        $(location).attr('href',url);
    });
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