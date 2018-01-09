$(document).ready(function () {
    $(window).scroll(function () {
            $('.shapes').css('transform','translate('+ $(this).scrollTop()/-1150  +'%,' + $(this).scrollTop() /150 +'%)');
    });

});