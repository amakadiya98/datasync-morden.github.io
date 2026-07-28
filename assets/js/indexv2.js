$(document).ready(function () {
    $('.mobile-cards').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        center: true,
        autoplay: false,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1.4
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        dots: false,
        center: false,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 700,
        navText: [
          "<img src='assets/images/icons/arrow-left.svg'>",
          "<img src='assets/images/icons/arrow-right.svg'>",
        ],
        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    });
});

$('.intro-mobile-slider').owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 24,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 1200,
    items: 1,

    onInitialized: setActiveCard,
    onTranslated: setActiveCard,

    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        }
    }
});

function setActiveCard(event) {

    $('.intro-mobile-slider .intro-card').removeClass('active');

    $(event.target)
        .find('.owl-item.active .intro-card')
        .addClass('active');
}

$('.transforming-mobile-slider').owlCarousel({

    loop: true,
    items: 1,
    margin: 16,
    stagePadding: 32,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 1200,

    onInitialized: setTransformCard,
    onTranslated: setTransformCard

});

function setTransformCard(event){

    $('.transforming-mobile-slider .Transforming-card')
        .removeClass('active');

    $(event.target)
        .find('.owl-item.active .Transforming-card')
        .addClass('active');

}

$('.fair-pricing-slider').owlCarousel({
    center: true,
    loop: true,
    dots: true,
    nav: false,
    margin: 16,
    stagePadding: 40,  
    items: 1,
    autoWidth: false,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 1200,
    responsive: {
        0: {
            stagePadding: 30,
            margin: 12
        },
        480: {
            stagePadding: 40,
            margin: 16
        },
        768: {
            stagePadding: 60,
            margin: 20
        }
    }
});
