$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
})

$(document).ready(function() {
    $('#slides').superslides({
        animation: "fade",
        play: 0,
        pagination: false
    });
    var typed = new Typed(".typed", {
        strings: ["A Tropical Paradise", "Fun for the whole family", "Dream"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $(".owl-carousel").owlCarousel( {
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

     

    $(".fancybox-media").fancybox({
        openEffect : "none",
        closeEffect : "none",
        helpers : {
            media : {}
        }
    });

    $("[data-fancybox").fancybox();

   
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    $("#navigation #smoothScroll li a").click(function(e) {
        e.preventDefault();
        
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
        $('.navbar-collapse').collapse('toggle');
    });   
});






