function initMap() {
    var e= {
        lat: 59.964143, lng: 30.241558
    }
    ,
    l=new google.maps.Map(document.getElementById("map1"), {
        zoom:14.8, center:e, disableDefaultUI:!0, zoomControl:!0, scrollwheel:!1, styles:[ {
            featureType:"administrative", elementType:"labels.text.fill", stylers:[ {
                color: "#444444"
            }
            ]
        }
        , {
            featureType:"administrative.country", elementType:"geometry.fill", stylers:[ {
                visibility: "on"
            }
            ]
        }
        , {
            featureType:"landscape", elementType:"all", stylers:[ {
                color: "#f2f2f2"
            }
            ]
        }
        , {
            featureType:"poi", elementType:"all", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"road", elementType:"all", stylers:[ {
                saturation: -100
            }
            , {
                lightness: 45
            }
            ]
        }
        , {
            featureType:"road.highway", elementType:"all", stylers:[ {
                visibility: "simplified"
            }
            ]
        }
        , {
            featureType:"road.arterial", elementType:"labels.icon", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"transit", elementType:"all", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"water", elementType:"all", stylers:[ {
                color: "#2a72c1"
            }
            , {
                visibility: "on"
            }
            ]
        }
        ]
    }
    ),
    o=new google.maps.Map(document.getElementById("map2"), {
        zoom:13.3, center:e, disableDefaultUI:!0, zoomControl:!0, scrollwheel:!1, styles:[ {
            featureType:"administrative", elementType:"labels.text.fill", stylers:[ {
                color: "#444444"
            }
            ]
        }
        , {
            featureType:"administrative.country", elementType:"geometry.fill", stylers:[ {
                visibility: "on"
            }
            ]
        }
        , {
            featureType:"landscape", elementType:"all", stylers:[ {
                color: "#f2f2f2"
            }
            ]
        }
        , {
            featureType:"poi", elementType:"all", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"road", elementType:"all", stylers:[ {
                saturation: -100
            }
            , {
                lightness: 45
            }
            ]
        }
        , {
            featureType:"road.highway", elementType:"all", stylers:[ {
                visibility: "simplified"
            }
            ]
        }
        , {
            featureType:"road.arterial", elementType:"labels.icon", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"transit", elementType:"all", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"water", elementType:"all", stylers:[ {
                color: "#2a72c1"
            }
            , {
                visibility: "on"
            }
            ]
        }
        ]
    }
    );
    new google.maps.Marker( {
        position:e, map:l, icon: {
            url: "img/icons/map/1.png", size: new google.maps.Size(149, 60),origin: new google.maps.Point(0,0),anchor: new google.maps.Point(40, 40),
        }
    }
    ),
    new google.maps.Marker( {
        position: {
            lat: 59.964919, lng: 30.236969
        }
        , map:l, icon: {
            url: "img/icons/map/2.png", size: new google.maps.Size(81, 60)
        }
    }
    ),
    new google.maps.Marker( {
        position: {
            lat: 59.960155, lng: 30.233611
        }
        , map:l, icon: {
            url: "img/icons/map/3.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    new google.maps.Marker( {
        position: {
            lat: 59.956868, lng: 30.264553
        }
        , map:l, icon: {
            url: "img/icons/map/4.png", size: new google.maps.Size(149, 60)
        }
    }
    ),
    
    new google.maps.Marker({
        position: {
            lat: 60.000876, lng: 30.295053
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.924902, lng: 30.382501
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.888265, lng: 30.318688
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.948532, lng: 30.263412
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.899483, lng: 30.429492
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.907847, lng: 30.308671
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.989026, lng: 30.367494
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
     new google.maps.Marker({
        position: {
            lat: 59.925575, lng: 30.366659
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.974815, lng: 30.321834
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.864701, lng: 30.511264
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.982182, lng: 30.364199
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.968152, lng: 30.429185
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.867117, lng: 30.469046
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    new google.maps.Marker({
        position: {
            lat: 59.841610, lng: 30.502887
        }, map: o, icon: {url: "img/icons/map/5.png", size: new google.maps.Size(129,60)}
    })
    
    
}

$(document).ready(function() {
    $(".block7").slick( {
        arrows:!1, focusOnSelect:!0, dots:!0, centerMode:!0, slidesToShow:3, centerPadding:"120px", responsive:[ {
            breakpoint:1025, settings: {
                centerMode: !1, slidesToShow: 2
            }
        }
        , {
            breakpoint:440, settings: {
                centerMode: !1, slidesToShow: 1
            }
        }
        ]
    }
    ), $(".burger-menu").click(function() {
        $(".mobile-menu").hasClass("close-menu")&&($(".mobile-menu").removeClass("close-menu"), $(".mobile-menu").addClass("show-menu"), $("html, body").css("overflow", "hidden"))
    }
    ), $(".close-menu_btn, .mobile-item a").click(function() {
        $(".mobile-menu").removeClass("show-menu"), $(".mobile-menu").addClass("close-menu"), $("html, body").css("overflow", "auto")
    }
    );
    var e, l, o, i, a, s, t=$("html, body");
    $('a[href*="#"]').click(function() {
        return t.animate( {
            scrollTop: $($.attr(this, "href")).offset().top
        }
        , 1e3), !1
    }
    ), window.matchMedia("(min-width: 1024px)").matches&&$(".wowa").addClass("wow"), l=($(window).width()-(e=$(".modal-div")).width()-120)/2, e.css("left", l+"px"), window.matchMedia("(max-width: 440px)").matches&&(i=($(window).width()-(o=$(".modal-div")).width()-120)/2, o.css("left", i+"px")), window.matchMedia("(max-width: 376px)").matches&&(s=($(window).width()-(a=$(".modal-div")).width()-75)/2, a.css("left", s+"px")), window.matchMedia("(max-width: 361px)").matches&&$(".modal-div").css("left", 0), $(".button").click(function() {
        $(".modal-overlay").css("display", "block"), $(".modal-div").css("display", "flex"), $(".modal-div").addClass("modal-div-show"), $("body, html").css("overflow", "hidden"), $(".name").attr("autofocus", !0), $(".name").select()
    }
    ), $(".close-modal").click(function() {
        $(".modal-overlay").css("display", "none"), $(".modal-div").css("display", "none"), $("body, html").css("overflow", "auto"), $(".name").attr("autofocus", !1)
    }
    ), $(".modal-overlay").click(function() {
        $(".modal-overlay").css("display", "none"), $(".modal-div").css("display", "none"), $("body, html").css("overflow", "auto"), $(".name").attr("autofocus", !1)
    }
    ), window.addEventListener("keydown", function(e) {
        27===e.keyCode&&(e.preventDefault(), $(".modal-overlay").css("display", "none"), $(".modal-div").css("display", "none"), $("body, html").css("overflow", "auto"), $(".name").attr("autofocus", !1))
    }
    )
}

);