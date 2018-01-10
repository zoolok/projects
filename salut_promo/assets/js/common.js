$(document).ready(function () {

    $(window).scroll(function () {
            $('.shape').css('transform','translate('+ $(this).offset().top  +'%,' + $(this).scrollTop() /10 +'%)');
    });

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
});