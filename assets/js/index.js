//on scroll bg effect in header

window.addEventListener("scroll", function () {
  const headerLinks = document.querySelector(".header-links");
  const header = document.querySelector(".header-part");

  if (window.scrollY > 10) {
    headerLinks.classList.add("active");
    header.classList.add("active");
  } else {
    headerLinks.classList.remove("active");
    header.classList.remove("active");
  }
});
//end

$(document).ready(function () {
  $(".dropdown").each(function () {
    let $dropdown = $(this);
    let $menu = $dropdown.find(".dropdown-menu");

    $dropdown.on("show.bs.dropdown", function () {
      $("body").append($menu);

      let rect = $dropdown[0].getBoundingClientRect();

      //   $menu.css({
      //     position: "absolute",
      //     top: rect.bottom + "px",
      //     left: rect.left + "px",
      //     zIndex: 9999,
      //   });

      $menu.css({
        position: "fixed",
        top: rect.bottom + "px",
        left: rect.left + "px",
        zIndex: 9999,
      });
    });

    $dropdown.on("hide.bs.dropdown", function () {
      $dropdown.append($menu);
      $menu.removeAttr("style");
    });
  });

  $(".header-links .nav-link").on("click", function () {
    $(".header-links .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  function checkWidth() {
    if ($(window).width() <= 766) {
      $(".company-carousel").trigger("destroy.owl.carousel");
      $(".company-carousel").addClass("owl-loaded");
      $(".company-carousel").find(".owl-stage-outer").children().unwrap();
    } else {
      $(".company-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        navText: [
          "<img src='assets/images/icons/arrow-left.svg'>",
          "<img src='assets/images/icons/arrow-right.svg'>",
        ],
        responsive: {
          767: { items: 2 },
          1100: { items: 3 },
        },
      });
    }
  }

  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });

  $(".review-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: [
      "<img src='assets/images/icons/arrow-left.svg'>",
      "<img src='assets/images/icons/arrow-right.svg'>",
    ],
  });

  $(".profit-slider").owlCarousel({
    loop: true,
    margin: 20,
    center: true,
    items: 4.2,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1.4,
        center: true,
      },
      440: {
        items: 1.7,
        center: true,
      },
      620: {
        items: 2,
        center: true,
      },
      1000: {
        items: 2.2,
      },
      1300: {
        items: 3.2,
      },
      1700: {
        items: 4.2,
      },
    },
  });
});

$(document).on("click", function (e) {
  let $navbar = $("#navbarContent");
  let $toggler = $(".navbar-toggler");

  if ($navbar.hasClass("show")) {
    if (
      !$navbar.is(e.target) &&
      $navbar.has(e.target).length === 0 &&
      !$toggler.is(e.target) &&
      $toggler.has(e.target).length === 0
    ) {
      $navbar.collapse("hide");
    }
  }
});
