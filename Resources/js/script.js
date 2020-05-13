/*__________________________________________Sticky navigation _________________________________________________________*/

$(document).ready(function () {
    $('.jq-section').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    },
        {
            offset: '60px;'
        });
    /*__________________________________________Scrolling buttons ________________________________________________________*/

    $('.jq-scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.jq-price-plans').offset().top }, 2000);
    });
    $('.jq-scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.jq-section').offset().top }, 1000);
    });

    /*_________________________________ Navigation Scroll (plug-in)_______________________________________________________*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            1000,
            'linear'
        )
    });

    /*_________________________________ Navigation Scroll (plug-in)_______________________________________________________*/

    $('.scroll-animation-1').waypoint(function (direction) {
        $('.scroll-animation-1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    $('.scroll-animation-2').waypoint(function (direction) {
        $('.scroll-animation-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });
    $('.scroll-animation-3').waypoint(function (direction) {
        $('.scroll-animation-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    $('.scroll-animation-4').waypoint(function (direction) {
        $('.scroll-animation-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });
    /*________________________________________Mobile Navigation_______________________________________________________*/

    $('.jq-mobile-nav').click(function () {
        var nav = $('.jq-main-nav');
        nav.slideToggle(200);
        var cross = $('.jq-mobile-nav i');
        if(cross.hasClass('ion-navicon-round'))
        {
            cross.addClass('ion-close-round');
            cross.removeClass('ion-navicon-round');
        }
        else
        {
            cross.addClass('ion-navicon-round');
            cross.removeClass('ion-close-round');
        }
    });
});

