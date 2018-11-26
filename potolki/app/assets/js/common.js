$(document).ready(function () {
    /* --------------------------------------------------------
       PRICE SLIDER
----------------------------------------------------------- */
    if ($("#price-slider").length >0){

        $("#price-slider").slider({
            value:25,
            min: 0,
            max: 50,
            step: 1,
            slide: function( event, ui ) {
                $( "#amount" ).val(ui.value + ' кв.м' );
                var arg =  parseInt(ui.value);
                $( ".summa" ).html( number_format((arg*300),'','',' ') + ' - ' + number_format((arg*400),'','',' ')  + ' руб');
            }
        });

        $('#amount').on("click",function () {
            $(this).val("");
            $("#price-slider").slider({value:0});
        });

        $('#amount').on("input",function () {
            var arg =  $(this).val();
            $("#price-slider").slider({value:arg});
            $( ".summa" ).html( number_format((arg*300),'','',' ') + ' - ' + number_format((arg*400),'','',' ')  + ' руб');
        });

    }
/* --------------------------------------------------------
    SLIDERS
----------------------------------------------------------- */

    $('#cascade-slider').cascadeSlider({
        itemClass: 'cascade-slider_item',
        arrowClass: 'cascade-slider_arrow'
    });

    /* --------------------------------------------------------
PHONE MASK
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($("#phone").length  || $("#phone-1").length || $("#phone-2").length ) {
            $("#phone, #phone-1, #phone-2").mask("+7(999) 999-99-99");
        }
    })
});
    /* --------------------------------------------------------
POPUP
----------------------------------------------------------- */
    $('[data-action="back-call"]').click(function (e) {
        e.preventDefault();
        $('.overlay').addClass('active');
        $('.content').addClass('blured');
    });
    $('.close').click(function (e) {
        e.preventDefault();
        $('.overlay').removeClass('active');
        $('.content').removeClass('blured');
    });

/* --------------------------------------------------------
NUMBER FORMAT
----------------------------------------------------------- */
number_format = function (number, decimals, dec_point, thousands_sep) {
    number = number.toFixed(decimals);

    var nstr = number.toString();
    nstr += '';
    x = nstr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? dec_point + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + thousands_sep + '$2');

    return x1 + x2;
};

