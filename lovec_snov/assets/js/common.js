$(document).ready(function () {
    /* --------------------------------------------------------
         INDEX OWL CARUSEL
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($(".main-slider").length > 0) {

            $('.main-slider').owlCarousel({
                items: 1,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: true,
                center: true,
                autoplay: true
            });
        }
    });

    /* --------------------------------------------------------
        MASKED INPUT
----------------------------------------------------------- */
    $('#phone').mask("+7 (999) 999-99-99");

});
/* --------------------------------------------------------
       FIXED MENU
----------------------------------------------------------- */
var nav = $('header');
var pos = nav.offset().top;
$(window).scroll(function () {
    var fix = ($(this).scrollTop() >= pos) ? true : false;
    nav.toggleClass("fixed", fix);
});