$(document).ready(function () {
    /*-------------------------------------------------------
                                TABS
    ---------------------------------------------------*/
    var btn = $('button.tab');
    btn.click(function () {
        btn.removeClass('active');
        $(this).addClass('active');
        var at = $(this).attr('tab');
        console.log(at);
        $('.granit-list, .mramor-list').removeClass('visible');
        $(at).addClass('visible');
    });

    /* --------------------------------------------------------
                    SELECT LIST
----------------------------------------------------------- */
    $('.material-wrap label').click(function () {
        $('#mat').html($(this).children('input').val());
    });
    $('.model-slider label').click(function () {
        $('#form').html($(this).children('input').val());
        $('#FigureFon').html("<img src=" + $(this).prev().attr('src') + ">");
    });
    $('#sizeStone').change(function () {
        $('#razm').html($('#sizeStone option:selected').text());
    });
    $('.portret label').click(function () {
        if($(this).attr('for') == 'port-da'){
            $('.port-select').addClass('flex');
            $('#imgLoad').css('display','block')
        }else{
            $('.port-select').removeClass('flex');
            $('#port').html('нет');
            $('#imgLoad').css('display','none')
        }
    });
    $('.port-select label').click(function () {
        $('#port').html($(this).children('input').val());
    });
    $('.select-font label').click(function () {
        $('#NameLoad').css('font-family',$(this).children('input').val());
    });
    $('.cvetnik label').click(function () {
        $('#cvetn').html($(this).children('input').val());
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