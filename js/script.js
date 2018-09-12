function initMap() {
    var e= {
        lat: 59.964143, lng: 30.241558
    }
    ,
    n=new google.maps.Map(document.getElementById("map1"), {
        zoom:14.8, center:e, disableDefaultUI:!0, zoomControl:!0, scrollwheel:!1,
    }
    ),
    o=new google.maps.Map(document.getElementById("map2"), {
        zoom:12.3, center:e, disableDefaultUI:!0, zoomControl:!0, scrollwheel:!1,
    }
    );
    new google.maps.Marker( {
        position:e, map:n, icon: {
            url: "img/icons/map/1.png", size: new google.maps.Size(149, 60), origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(40, 40)
        }
    }
    ),
    new google.maps.Marker( {
        position: {
            lat: 59.964919, lng: 30.236969
        }
        , map:n, icon: {
            url: "img/icons/map/2.png", size: new google.maps.Size(81, 60)
        }
    }
    ),
    new google.maps.Marker( {
        position: {
            lat: 59.960155, lng: 30.233611
        }
        , map:n, icon: {
            url: "img/icons/map/3.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    new google.maps.Marker( {
        position: {
            lat: 59.956868, lng: 30.264553
        }
        , map:n, icon: {
            url: "img/icons/map/4.png", size: new google.maps.Size(149, 60)
        }
    }
    ),
    marker1=new google.maps.Marker( {
        position: {
            lat: 60.000876, lng: 30.295053
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString1='<div id="content1"><p class="content-map">Пн-Пт: с 8:00 до 20:00 (без обеда)<br>Сб-Вс: с 10:00 до 19:00</p></div>',
    infowinow1=new google.maps.InfoWindow( {
        content: contentString1
    }
    ),
    marker1.addListener("click", function() {
        infowinow1.open(n, marker1)
    }
    ),
    marker2=new google.maps.Marker( {
        position: {
            lat: 59.924902, lng: 30.382501
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString2='<div id="content2"><p class="content-map">Пн-Пт: с 9:00 до 20:00 (без обеда)<br>Сб-Вс: с 10:00 до 19:00</p></div>',
    infowinow2=new google.maps.InfoWindow( {
        content: contentString2
    }
    ),
    marker2.addListener("click", function() {
        infowinow2.open(n, marker2)
    }
    ),
    marker3=new google.maps.Marker( {
        position: {
            lat: 59.888265, lng: 30.318688
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString3='<div id="content3"><p class="content-map">Пн-Пт: с 9:00 до 20:00 (без обеда)<br>Сб-Вс: с 10:00 до 19:00</p></div>',
    infowinow3=new google.maps.InfoWindow( {
        content: contentString3
    }
    ),
    marker3.addListener("click", function() {
        infowinow3.open(n, marker3)
    }
    ),
    marker4=new google.maps.Marker( {
        position: {
            lat: 59.948532, lng: 30.263412
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString4='<div id="content4"><p class="content-map">Пн-Пт: с 9:00 до 20:00 (без обеда)<br>Сб-Вс: с 10:00 до 19:00</p></div>',
    infowinow4=new google.maps.InfoWindow( {
        content: contentString4
    }
    ),
    marker4.addListener("click", function() {
        infowinow4.open(n, marker4)
    }
    ),
    marker5=new google.maps.Marker( {
        position: {
            lat: 59.899483, lng: 30.429492
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString5='<div id="content5"><p class="content-map">Вт-Пт: с 10:00 до 19:00 <br>Сб: с 10:00 до 18:00<br>Вс-Пн: выходной</p></div>',
    infowinow5=new google.maps.InfoWindow( {
        content: contentString5
    }
    ),
    marker5.addListener("click", function() {
        infowinow5.open(n, marker5)
    }
    ),
    marker6=new google.maps.Marker( {
        position: {
            lat: 59.907847, lng: 30.308671
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString6='<div id="content6"><p class="content-map">Пн-Пт: с 10:00 до 19:00<br>(обед с 13.00 до 14.00))<br>Сб-Вс: с 10:00 до 18:00</p></div>',
    infowinow6=new google.maps.InfoWindow( {
        content: contentString6
    }
    ),
    marker6.addListener("click", function() {
        infowinow6.open(n, marker6)
    }
    ),
    marker7=new google.maps.Marker( {
        position: {
            lat: 59.989026, lng: 30.367494
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString7='<div id="content7"><p class="content-map">Пн-Пт: с 10:00 до 19:00<br>(обед с 13:00 до 14:00)<br>Сб-Вс: с 10:00 до 18:00</p></div>',
    infowinow7=new google.maps.InfoWindow( {
        content: contentString7
    }
    ),
    marker7.addListener("click", function() {
        infowinow7.open(n, marker7)
    }
    ),
    marker8=new google.maps.Marker( {
        position: {
            lat: 59.925575, lng: 30.366659
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString8='<div id="content8"><p class="content-map">Пн-Пт: с 9:00 до 20:00<br>(обед с 13:00 до 14:00)<br>Сб-Вс: с 10:00 до 18:00</p></div>',
    infowinow8=new google.maps.InfoWindow( {
        content: contentString8
    }
    ),
    marker8.addListener("click", function() {
        infowinow8.open(n, marker8)
    }
    ),
    marker9=new google.maps.Marker( {
        position: {
            lat: 59.974815, lng: 30.321834
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString9='<div id="content9"><p class="content-map">Пн-Ср: с 10:00 до 19:00<br>(обед с 13:00 до 14:00)</p></div>',
    infowinow9=new google.maps.InfoWindow( {
        content: contentString9
    }
    ),
    marker9.addListener("click", function() {
        infowinow9.open(n, marker9)
    }
    ),
    marker10=new google.maps.Marker( {
        position: {
            lat: 59.864701, lng: 30.511264
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString10='<div id="content10"><p class="content-map">Пн, Чт, Пт: с 9:00 до 18:00 <br>(обед с 13:00 до 14:00)<br>Сб-Вс: с 10:00 до 17:00</p></div>',
    infowinow10=new google.maps.InfoWindow( {
        content: contentString10
    }
    ),
    marker10.addListener("click", function() {
        infowinow10.open(n, marker10)
    }
    ),
    marker11=new google.maps.Marker( {
        position: {
            lat: 59.982182, lng: 30.364199
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString11='<div id="content11"><p class="content-map">Вт.: с 9:00 до 18:00<br>(обед с 13:00 до 14:00)<br>Сб.: с 10:00 до 17:00</p></div>',
    infowinow11=new google.maps.InfoWindow( {
        content: contentString11
    }
    ),
    marker11.addListener("click", function() {
        infowinow11.open(n, marker11)
    }
    ),
    marker12=new google.maps.Marker( {
        position: {
            lat: 59.968152, lng: 30.429185
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString12='<div id="content12"><p class="content-map">Ср, Чт, Пт: с 9:00 до 18:00<br>(13:00-14:00 обед)</p></div>',
    infowinow12=new google.maps.InfoWindow( {
        content: contentString12
    }
    ),
    marker12.addListener("click", function() {
        infowinow12.open(n, marker12)
    }
    ),
    marker13=new google.maps.Marker( {
        position: {
            lat: 59.867117, lng: 30.469046
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString13='<div id="content13"><p class="content-map">Сб: по предварительной записи</p></div>',
    infowinow13=new google.maps.InfoWindow( {
        content: contentString13
    }
    ),
    marker13.addListener("click", function() {
        infowinow13.open(n, marker13)
    }
    ),
    marker14=new google.maps.Marker( {
        position: {
            lat: 59.84161, lng: 30.502887
        }
        , map:o, icon: {
            url: "img/icons/map/5.png", size: new google.maps.Size(129, 60)
        }
    }
    ),
    contentString14='<div id="content14"><p class="content-map">Сб: по предварительной записи</p></div>',
    infowinow14=new google.maps.InfoWindow( {
        content: contentString14
    }
    ),
    marker14.addListener("click", function() {
        infowinow14.open(n, marker14)
    }
    )
}

document.addEventListener("invalid", function(e) {
    e.preventDefault(), document.getElementById("name").focus()
}

, !0),
$(document).ready(function() {
    $(".slider-img").click(function() {
        $(".modal-overlay").css("display", "block");
        var e=$(".modal-img .img-cont"), n=$(this).clone();
        $(".modal-img").css("display", "flex"), $(".modal-img").addClass("img-cont-show"), $("html, body").css("overflow", "hidden"), e.append(n)
    }
    );
    var e=$(".modal-form"), n=$(".submit");
    e.find("input").addClass("empty_field"), n.click(function() {
        e.find("input").each(function() {
            ""!=$(this).val()?$(this).removeClass("empty_field"): $(this).addClass("empty_field")
        }
        ), e.find(".empty_field").css("border-color", "#d8512d"), setTimeout(function() {
            e.find(".empty_field").removeAttr("style")
        }
        , 500)
    }
    ), $(".block7").slick( {
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
    var o, i, t, a, l, s, r=$("html, body");
    $('a[href*="#"]').click(function() {
        return r.animate( {
            scrollTop: $($.attr(this, "href")).offset().top
        }
        , 1e3), !1
    }
    ), window.matchMedia("(min-width: 1024px)").matches&&$(".wowa").addClass("wow"), i=($(window).width()-(o=$(".modal-div")).width()-120)/2, o.css("left", i+"px"), window.matchMedia("(max-width: 440px)").matches&&(a=($(window).width()-(t=$(".modal-div")).width()-120)/2, t.css("left", a+"px")), window.matchMedia("(max-width: 376px)").matches&&(s=($(window).width()-(l=$(".modal-div")).width()-75)/2, l.css("left", s+"px")), window.matchMedia("(max-width: 361px)").matches&&$(".modal-div").css("left", 0), $(".button").click(function() {
        $(".modal-overlay").css("display", "block"), $(".modal-div").css("display", "flex"), $(".modal-div").addClass("modal-div-show"), $("body, html").css("overflow", "hidden"), $(".name").attr("autofocus", !0), $(".name").select()
    }
    ), $(".close-modal").click(function() {
        $(".modal-overlay").css("display", "none"), $(".modal-div").css("display", "none"), $("body, html").css("overflow", "auto"), $(".name").attr("autofocus", !1), $(".modal-img").css("display", "none"), $(".modal-img img").remove()
    }
    ), $(".modal-overlay").click(function() {
        $(".modal-overlay").css("display", "none"), $(".modal-div").css("display", "none"), $("body, html").css("overflow", "auto"), $(".name").attr("autofocus", !1), $(".modal-img").css("display", "none"), $(".modal-img img").remove()
    }
    ), window.addEventListener("keydown", function(e) {
        27===e.keyCode&&(e.preventDefault(), $(".modal-overlay").css("display", "none"), $(".modal-div").css("display", "none"), $("body, html").css("overflow", "auto"), $(".name").attr("autofocus", !1), $(".modal-img").css("display", "none"), $(".modal-img img").remove())
    }
    )
}

);