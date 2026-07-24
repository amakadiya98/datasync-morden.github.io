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