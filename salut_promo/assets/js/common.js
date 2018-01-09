$(document).ready(function () {
    $(window).scroll(function () {
            $('.shape').css('transform','translate('+ $(this).scrollTop()  +'%,' + $(this).scrollTop() / 50 +'%)');
    });

});