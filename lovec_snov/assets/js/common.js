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
    $("#datepicker").datepicker();

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
/* --------------------------------------------------------
       COUNT
----------------------------------------------------------- */
var curCount = parseInt($('#count').html());

$('.ticket-count span:first-of-type').click(function () {
    if ( curCount > 0){
        $('#count').html(curCount --);
    }else{
        return;
    }
});

$('.ticket-count span:last-of-type').click(function () {
        $('#count').html(curCount ++);
});
/* --------------------------------------------------------
      ANCOR
----------------------------------------------------------- */
$('a.ancor').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});


$("#datepicker").datepicker({
    onSelect: function(dateText, inst) {
        var arrayLimited = $(this).val().split("/", 3);
        console.log(arrayLimited);
        $("#datepicker").html('66654');
    }
});