$(document).ready(function () {
    $(window).scroll(function () {
            $('.shape').css('transform','translate('+ $(this).offset().top  +'%,' + $(this).scrollTop() /10 +'%)');
    });

});