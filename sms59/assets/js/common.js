$('document').ready(function () {

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

    $('#letters').owlCarousel({
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
    $('#news-list').owlCarousel({
        items:3,
        margin:25,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    var startSlide = 1;
    var slides = $('#letters .owl-item');
    var slideCount = slides.length;


    $('#letters .owl-prev').after('<div class="slide-number"><span>0' + startSlide + '</span> <sup>/' + slideCount + '</sup></div>');


    $('.owl-prev, .owl-next').click(function () {
        sl_number = slides.index($('.active'))+1;
        $('.slide-number').html('<span>0' + sl_number + '</span> <sup>/' + slideCount + '</sup>');
    });


    var owl = $('#letters');
    owl.owlCarousel();

    owl.on('dragged.owl.carousel', function(event) {
        sl_number = slides.index($('.active'))+1;
        $('.slide-number').html('<span>0' + sl_number + '</span> <sup>/' + slideCount + '</sup>');
    });

    $('.modal-form').click(function () {
        $('#modal').toggleClass('md-show');
    });

    $('.close').click(function () {
        var modal = $('#modal');
        modal.removeClass('md-show');
    })

    $('#vopros').submit(function () {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.modal').hide();
                $('#vopros').trigger("reset");
                alert('Спасибо за обращение!' +
                    'Мы свяжемся с Вами в ближайшее время')
            });
            return false;

    });
    $('#phone').mask("+7 (999) 999-99-99");

    $('.mob-menu-button').click(function () {
        $('.mob-menu').toggleClass('visible');
        $('.content-wrap').toggleClass('blured');

    });


});

var map;
var marker;

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 57.996571, lng: 56.199527},
        zoom:17,
        styles:[{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f4f6f7"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"off"},{"color":"#dee2e4"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"lightness":-25},{"saturation":-97},{"color":"#a4afb6"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]}]
    });

    var marker = new google.maps.Marker({
        position: {lat: 57.996474, lng: 56.203132},
        map: map,
        title: 'Auto Tuning Garage',
        icon: 'https://atg52.ru/catalog/view/theme/atg52/js/position-marker.png'
    });
}