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
        navText:[]

    });

    var startSlide = 1;
    var slides = $('#letters .owl-item');
    var slideCount = slides.length;


    $('.owl-prev').after('<div class="slide-number"><span>0' + startSlide + '</span> <sup>/' + slideCount + '</sup></div>');


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


$('.vopros').click(function () {
    var modal = $('.modal');
    modal.css('display','flex')
    modal.fadeIn();
})
    $('.close').click(function () {
        var modal = $('.modal');
        modal.fadeOut();
        modal.css('display','none')
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

    $('.mb-button').click(function () {
        $('#mobile-menu').toggleClass('active');
    });


});
var map;
var marker;

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 56.336486, lng: 43.924856},
        zoom:17,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: {lat: 56.334987, lng: 43.924813},
        map: map,
        title: 'Auto Tuning Garage',
        icon: 'https://atg52.ru/catalog/view/theme/atg52/js/position-marker.png'
    });
}