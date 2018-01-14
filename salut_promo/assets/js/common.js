$(document).ready(function () {

/*    $(window).scroll(function () {
            $('.shape').css('transform','translate('+ $(this).offset().top  +'%,' + $(this).scrollTop() /10 +'%)');
    });*/

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

    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 2500
            });

            show = false;
        }
    });
});