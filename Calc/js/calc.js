$(document).ready(function () {
    /*-------------------------------------------------------
    -------------------------/TABS/--------------------------*/
    var btn = $('button.tab');
    btn.click(function () {
        btn.removeClass('active');
        $(this).addClass('active');
        var at = $(this).attr('tab');
        console.log(at);
        $('.granit-list, .mramor-list').removeClass('visible');
        $(at).addClass('visible');
    });

    $('.material-wrap label').click(function () {
        $('#mat').html($(this).next('input').val());
    });
    /* --------------------------------------------------------
                                  INDEX OWL CARUSEL
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $(".model-slider").length > 0 ) {

            $('.model-slider').owlCarousel({
                items:3,
                nav:true,
                navText:["&lsaquo;","&rsaquo;"],
                dots:false,
                loop:true,
                center:true,
                autoplay:true
            });
        }
    });
});