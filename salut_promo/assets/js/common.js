$(document).ready(function () {
    /* --------------------------------------------------------
    MAGNIFIC POP-UP
    ----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( ".image-popup-no-margins" ).length > 0 ) {

            $('.image-popup-no-margins').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });
        }
    });

    /* --------------------------------------------------------
      FANCYBOX POP-UP
    ----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( "[data-fancybox]" ).length > 0 ) {
            $("[data-fancybox]").fancybox({
                // Options will go here
            });
        }
    });

    /* --------------------------------------------------------
      FAQ
    ----------------------------------------------------------- */
    $('.question').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('down');
    })

    /* --------------------------------------------------------
     INDEX OWL CARUSEL
    ----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( "#letter" ).length > 0 ) {

            $('#letter').owlCarousel({
                items:1,
                nav:true,
                navText:[],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }

            });
        }
    });
    /* --------------------------------------------------------
     SLIDER PORTFOLIO
    ----------------------------------------------------------- */

    $('.other-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.other-slider .slick-next').html('right');
    $('.other-slider .slick-prev').html('left');

    $('.slider-adv').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-adv-nav'
    });

    var cnticon = 3;

    if (document.body.clientWidth < 769){
        cnticon = 1;
    }
    $('.slider-adv-nav').slick({

        slidesToShow:  cnticon,
        slidesToScroll: 1,
        asNavFor: '.slider-adv',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    /* --------------------------------------------------------
                    MOBILE MENU
    ----------------------------------------------------------- */

    var menu = $('.mobile-menu');
    var blured = $('.wrapper-content, footer');

    $('.has-sub > a').click(function (e) {
        e.preventDefault();
    });

    $('.m-menu').click(function () {
        menu.animate({left: '0'}, 300);
        menu.addClass('fixed');
        blured.addClass('blured');
    });

    $('.mobile-menu span').click(function () {
        menu.animate({left: "-999px"}, 300);
        menu.removeClass('fixed');
        blured.removeClass('blured');
    });


    $('.mobile-menu li a[href="/services/"]').on('click touchmove' ,function (e) {
        var dw = document.body.clientWidth;
        var wu = 2*dw/3-1;
        var bm = $('.mobile-menu li a[href^="/services/"]~ul');

        e.preventDefault(e);

        $('.mobile-menu~ul').css('position','relative');
        $('.mobile-menu~ul').animate({left: "-999px"}, 1000);

        $('.mobile-menu li a[href^="/services/"]~ul').animate({top: "-93px"}, 500);

        bm.css('position','relaive');
        bm.append('<span class="back-arrow"></span>');

        $('.mobile-menu li a[href^="/services/"]~ul').css({
            "position": "absolute",
            "display": "flex",
            "flex-direction": "column",
            "width": "300vw",
            "top": "500px",
            "left":"-" + wu + "px"
        });
        $('.back-arrow').on('click  touchmove', function () {
            $('.mobile-menu li a[href^="/services/"]~ul').animate({top: "-5000px"}, 2000);
            $(".back-arrow").remove();
        });
    });

    /* --------------------------------------------------------
       XHy&2xAD7$bn             SHOW MODAL ORDER
    ----------------------------------------------------------- */

    var overlay = $('.modal-overlay');

    $('.order-button, .m-order').click(function () {
        overlay.fadeIn();
        overlay.css('display','flex')
    });

    $('.close').click(function () {
        overlay.fadeOut();
        $('#order-form').trigger("reset");
    });

    /* --------------------------------------------------------
                    BLOG MIXITUP
    ----------------------------------------------------------- */
    $(function($) {
        if ( $( ".mix" ).length > 0 ) {
            var mixer = mixitup('.blog-wrap', {
                controls: {
                    toggleDefault: 'all',
                    toggleLogic: 'or'
                }
            });
        }
    });
    /* --------------------------------------------------------
                   ANIMATION
    ----------------------------------------------------------- */

    $(".animation-1").animated("fadeInUp", "fadeOutDown");

    /* --------------------------------------------------------
                    SEND FORM
    ----------------------------------------------------------- */
    $('#order-form').submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.modal-overlay').fadeOut();
            $('#order-form').trigger("reset");
            alert('Спасибо за обращение!' +
                'Мы свяжемся с Вами в ближайшее время')
        });
        return false;

    });
    $('#contact-form').submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#contact-form').trigger("reset");
            alert('Спасибо за обращение!' +
                'Мы свяжемся с Вами в ближайшее время')
        });
        return false;

    });
    /* --------------------------------------------------------
                    INDEX COUNTS
    ----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( "#counts" ).length > 0 ) {

            var show = true;
            var countbox = "#counts";

            $(window).on("scroll load resize", function () {

                if (!show) return false;

                var w_top = $(window).scrollTop();
                var e_top = $(countbox).offset().top;

                var w_height = $(window).height();
                var d_height = $(document).height();

                var e_height = $(countbox).outerHeight();

                if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $(".spincrement").spincrement({
                        thousandSeparator: "",
                        duration: 2500
                    });

                    show = false;
                }
            });
        }
    });
    /* --------------------------------------------------------
                CHARTS
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( ".graph-container" ).length > 0 ) {
            Morris.Area({
                element: 'hero-area-1',
                data: [
                    {period: '2010 Q1', iphone: 2666},
                    {period: '2010 Q2', iphone: 2778},
                    {period: '2010 Q3', iphone: 4912},
                    {period: '2010 Q4', iphone: 3767},
                    {period: '2011 Q1', iphone: 6810},
                    {period: '2011 Q2', iphone: 5670},
                    {period: '2011 Q3', iphone: 4820},
                    {period: '2011 Q4', iphone: 15073},
                    {period: '2012 Q1', iphone: 10687},
                    {period: '2012 Q2', iphone: 8432}
                ],
                xkey: 'period',
                ykeys: ['iphone'],
                labels: ['iPhone'],
                pointSize: 2,
                hideHover: 'auto'
            });
            Morris.Area({
                element: 'hero-area-2',
                data: [
                    {period: '2010 Q1', iphone: 2666},
                    {period: '2010 Q2', iphone: 2778},
                    {period: '2010 Q3', iphone: 4912},
                    {period: '2010 Q4', iphone: 3767},
                    {period: '2011 Q1', iphone: 6810},
                    {period: '2011 Q2', iphone: 5670},
                    {period: '2011 Q3', iphone: 4820},
                    {period: '2011 Q4', iphone: 15073},
                    {period: '2012 Q1', iphone: 10687},
                    {period: '2012 Q2', iphone: 8432}
                ],
                xkey: 'period',
                ykeys: ['iphone'],
                labels: ['iPhone'],
                pointSize: 2,
                hideHover: 'auto'
            });
            Morris.Area({
                element: 'hero-area-3',
                data: [
                    {period: '2010 Q1', iphone: 2666},
                    {period: '2010 Q2', iphone: 2778},
                    {period: '2010 Q3', iphone: 4912},
                    {period: '2010 Q4', iphone: 3767},
                    {period: '2011 Q1', iphone: 6810},
                    {period: '2011 Q2', iphone: 5670},
                    {period: '2011 Q3', iphone: 4820},
                    {period: '2011 Q4', iphone: 15073},
                    {period: '2012 Q1', iphone: 10687},
                    {period: '2012 Q2', iphone: 8432}
                ],
                xkey: 'period',
                ykeys: ['iphone'],
                labels: ['iPhone'],
                pointSize: 2,
                hideHover: 'auto'
            });
            Morris.Area({
                element: 'hero-area-4',
                data: [
                    {period: '2010 Q1', iphone: 2666},
                    {period: '2010 Q2', iphone: 2778},
                    {period: '2010 Q3', iphone: 4912},
                    {period: '2010 Q4', iphone: 3767},
                    {period: '2011 Q1', iphone: 6810},
                    {period: '2011 Q2', iphone: 5670},
                    {period: '2011 Q3', iphone: 4820},
                    {period: '2011 Q4', iphone: 15073},
                    {period: '2012 Q1', iphone: 10687},
                    {period: '2012 Q2', iphone: 8432}
                ],
                xkey: 'period',
                ykeys: ['iphone'],
                labels: ['iPhone'],
                pointSize: 2,
                hideHover: 'auto'
            });
        }
    });

      arg = 10000;
      prClick = 4;
      argConv = 0.5;
      argSumm = 1000;
    calculate();
});
/* --------------------------------------------------------
    PRICE
   ----------------------------------------------------------- */
$('.click-item label').click(function () {
    prClick = $(this).children('span').attr('data-price');
    $( ".summa" ).html( number_format((arg/prClick), 0, '.', ' ') + ' человек');
    calculate();
});

if ($("#price-slider").length >0){
    $("#price-slider").slider({
        value:10000,
        min: 0,
        max: 100000,
        step: 100,
        slide: function( event, ui ) {
            $( "#amount" ).val(number_format(ui.value, 0, '.', ' ') + ' руб' );
            arg =  parseInt(ui.value);
            prClick =  parseInt($('.radio:checked').next().attr('data-price'));
            $( ".summa" ).html( number_format((arg/prClick), 0, '.', ' ') + ' человек');
            calculate();
        }
    });

    $('#amount').on("click",function () {
        $(this).val("");
        $("#price-slider").slider({value:0});
        calculate();
    });

    $('#amount').on("input",function () {
        var arg =  $(this).val();
        var prClick =  parseInt($('.radio:checked').next().attr('data-price'));
        $("#price-slider").slider({value:arg});
        $( ".summa" ).html( number_format(arg/prClick, 0, '.', ' ') + ' человек');
        calculate();
    });
}

if ($("#convert-slider").length >0) {
    $("#convert-slider").slider({
        value: 0.5,
        min: 0.5,
        max: 10,
        step: 0.5,
        slide: function (event, ui) {
            argConv = parseFloat(ui.value);
            $("#convert-val").html(number_format(argConv, 1) + ' %');
            calculate();
        }
    });
}

if ($("#midsumm-slider").length >0) {
    $("#midsumm-slider").slider({
        value: 1000,
        min: 1000,
        max: 500000,
        step: 1000,
        slide: function (event, ui) {
            argSumm = parseInt(ui.value);
            $("#midsumm--val").html(number_format(argSumm, 0, '.', ' ')  + ' руб');
            calculate();
        }
    });
}
/***
 number - исходное число
 decimals - количество знаков после разделителя
 dec_point - символ разделителя
 thousands_sep - разделитель тысячных
 ***/
function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec);
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
            .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}

//  Пример 1: number_format(1234.56);
//  Результат: '1,235'

//  Пример 2: number_format(1234.56, 2, ',', ' ');
//  Результат: '1 234,56'

//  Пример 3: number_format(1234.5678, 2, '.', '');
//  Результат: '1234.57'

//  Пример 4: number_format(67, 2, ',', '.');
//  Результат: '67,00'

//  Пример 5: number_format(1000);
//  Результат: '1,000'

//  Пример 6: number_format(67.311, 2);
//  Результат: '67.31'

//  Пример 7: number_format(1000.55, 1);
//  Результат: '1,000.6'

//  Пример 8: number_format(67000, 5, ',', '.');
//  Результат: '67.000,00000'

//  Пример 9: number_format(0.9, 0);
//  Результат: '1'

//  Пример 10: number_format('1.20', 2);
//  Результат: '1.20'

//  Пример 11: number_format('1.20', 4);
//  Результат: '1.2000'

//  Пример 12: number_format('1.2000', 3);
//  Результат: '1.200'

//  Пример 13: number_format('1 000,50', 2, '.', ' ');
//  Результат: '100 050.00'

//  Пример 14: number_format(1e-8, 8, '.', '');
//  Результат: '0.00000001'

function calculate(){
    var grossClient = arg/prClick;
    var convert = argConv/100;
    var srSumm = argSumm;
    var budget = arg;

    var clientcount = grossClient*convert;
    var grossmargin = grossClient*convert*srSumm;
    var netmargin = (grossClient*convert*srSumm) - budget;
    var roi = netmargin/budget*100;

    $('#client-count').html(number_format(clientcount, 0, '.', ' ') + ' чел.');
    $('#gross-margin').html(number_format(grossmargin, 0, '.', ' ') + ' р.');
    $('#net-margin').html(number_format(netmargin, 0, '.', ' ') + ' р.');
    $('#roi').html(number_format(roi, 0, '.', ' ') + '%');

    $('#invest').html(number_format(budget, 0, '.', ' '));
    $('#srcheck').html(number_format(srSumm, 0, '.', ' '));
    $('#chistprib').html(number_format(netmargin, 0, '.', ' '));
    $('#roitext').html(number_format(roi, 0, '.', ' '));
    $('#celclient').html(number_format(grossClient, 0, '.', ' '));
    $('#convertclient').html(number_format(clientcount, 0, '.', ' '));
    $('#converttext').html(number_format(argConv, 1, '.', ' '));
}
