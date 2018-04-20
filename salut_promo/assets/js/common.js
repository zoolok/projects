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
});



