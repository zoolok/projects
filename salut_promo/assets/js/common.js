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
    $('.m-menu').click(function () {

        $('.mobile-menu').animate({
            left: '0'
        }, 300);

        $('.mobile-menu').addClass('fixed');
        $('.wrapper-content, footer').addClass('blured');
    });

    $('.mobile-menu span').click(function () {
        $('.mobile-menu').animate({
            left: "-999px"
        }, 300);

        $('.mobile-menu').removeClass('fixed');
        $('.wrapper-content, footer').removeClass('blured');
    });

    /* --------------------------------------------------------
                        BLOG MIXITUP
----------------------------------------------------------- */
    $(function($) {
        var mixer = mixitup('.blog-wrap', {
            controls: {
                toggleDefault: 'all',
                toggleLogic: 'or'
            }
        });
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
});



