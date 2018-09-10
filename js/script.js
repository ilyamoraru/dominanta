function initMap() {
    var center = {lat: 59.961281, lng: 30.243471};

    var map = new google.maps.Map(
        document.getElementById('map1'), {
            zoom: 14.8,
            center: center,
            disableDefaultUI: true,
            scrollwheel: false,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#2a72c1"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
        }
    )

    var map1 = new google.maps.Map(
        document.getElementById('map2'), {
            zoom: 14.3,
            center: center,
            disableDefaultUI: true,
            scrollwheel: false,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#2a72c1"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
        }
    )

    var marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: {
            url: '../img/icons/map/1.png',
            size: new google.maps.Size(232,150),
        }
    });

   var marker1 = new google.maps.Marker({
       position: {lat: 59.964919,lng: 30.236969},
       map: map,
       icon: {
           url: '../img/icons/map/2.png',
           size: new google.maps.Size(81,60)
       }
   });

    var marker2 = new google.maps.Marker({
        position: {lat: 59.960155,lng: 30.233611},
        map: map,
        icon: {
            url: '../img/icons/map/3.png',
            size: new google.maps.Size(129,60)
        }
    });

    var marker3 = new google.maps.Marker({
        position: {lat: 59.956868,lng: 30.264553},
        map: map,
        icon: {
            url: '../img/icons/map/4.png',
            size: new google.maps.Size(149,60)
        }
    });

    var marker4 = new google.maps.Marker({
        position: {lat:59.955998 ,lng: 30.244372},
        map: map1,
        icon: {
            url: '../img/icons/map/5.png',
            size: new google.maps.Size(129,60)
        }
    });

    var marker5 = new google.maps.Marker({
        position: {lat:59.957679 ,lng: 30.288274},
        map: map1,
        icon: {
            url: '../img/icons/map/5.png',
            size: new google.maps.Size(129,60)
        }
    });

    var marker6 = new google.maps.Marker({
        position: {lat: 59.966460 ,lng: 30.297308},
        map: map1,
        icon: {
            url: '../img/icons/map/5.png',
            size: new google.maps.Size(129,60)
        }
    });


}

$(document).ready(function() {

    //slider

   $('.block7').slick({
       arrows: false,
       dots: true,
       centerMode: true,
       slidesToShow: 3,
       centerPadding: '120px',
       responsive: [
           {
               breakpoint: 1025,
               settings: {
                   centerMode: false,
                   slidesToShow: 2
               }
           },
           {
               breakpoint: 440,
               settings: {
                   centerMode: false,
                   slidesToShow: 1
               }
           }
       ]
   });

   //menu

   $('.burger-menu').click(function() {
      if($('.mobile-menu').hasClass('close-menu')) {
          $('.mobile-menu').removeClass('close-menu');
          $('.mobile-menu').addClass('show-menu');
          $('html, body').css('overflow', 'hidden');
      }
   });

   $('.close-menu_btn, .mobile-item a').click(function() {
       $('.mobile-menu').removeClass('show-menu');
       $('.mobile-menu').addClass('close-menu');
       $('html, body').css('overflow','auto');
   });

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    if (window.matchMedia("(min-width: 1024px)").matches) {
        $('.wowa').addClass('wow');
    };

    function center() {
        var width = $(window).width();
        var popup = $('.modal-div');
        var pos = (width - popup.width()  - 120) / 2;

        popup.css('left', pos + 'px');
    };

    center();

    function center1() {
        var width = $(window).width();
        var popup = $('.modal-div');
        var pos = (width - popup.width()  - 120) / 2;

        popup.css('left', pos + 'px');
    }

    if (window.matchMedia("(max-width: 440px)").matches) {
        center1();
    };

    function center2() {
        var width = $(window).width();
        var popup = $('.modal-div');
        var pos = (width - popup.width()  - 75) / 2;

        popup.css('left', pos + 'px');
    }

    if (window.matchMedia("(max-width: 376px)").matches) {
        center2();
    };

    if (window.matchMedia("(max-width: 361px)").matches) {
        var popup = $('.modal-div');
        popup.css('left', 0);
    };






    $('.button').click(function() {
        $('.modal-overlay').css('display','block');
        $('.modal-div').css('display','flex');
        $('.modal-div').addClass('modal-div-show');
        $('body, html').css('overflow', 'hidden');
    });

    $('.close-modal').click(function() {
       $('.modal-overlay').css('display','none');
        $('.modal-div').css('display','none');
        $('body, html').css('overflow', 'auto');
    });

});