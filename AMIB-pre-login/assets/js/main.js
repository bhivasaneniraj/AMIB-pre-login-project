$(function () {
  ;("use strict")

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500)
  })

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop()
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky")
      $(".navbar-area img").attr("src", "assets/images/logo.svg")
    } else {
      $(".navbar-area").addClass("sticky")
      $(".navbar-area img").attr("src", "assets/images/logo-2.svg")
    }
  })

  //===== Section Menu Active

  var scrollLink = $(".page-scroll")
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop()

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active")
        $(this).parent().siblings().removeClass("active")
      }
    })
  })

  var scrollLink = $(".page-scroll")
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop()

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active")
        $(this).parent().siblings().removeClass("active")
      }
    })
  })

  //for request a call back

  $("#button").click(function () {
    $("#box form").toggle("slow")
    return false
  })

  $("#button_call").click(function () {
    $("#box form").toggle("slow")
    return false
  })

  //For Faq Plus Minus image

  // function changeImage() {
  //   var img = document.getElementsByClassName("minus_plus")
  //   var src = img.getAttribute("src")
  //   if (src == "assets/images/amib_plus.png") {
  //     img.setAttribute("src", "assets/images/amib_minus.png")
  //   } else {
  //     img.setAttribute("src", "assets/images/amib_plus.png")
  //   }
  // }

  // window.onload = function () {
  //   var img = document.getElementsByClassName("minus_plus")
  //   img.addEventListener("click", changeImage)
  // }

  $(".minus_plus").on("click", function () {
    $(".minus_plus ").attr("src", "assets/images/amib_plus.png")
    if ($(this).attr("class") == "img2 minus_plus collapsed") {
      $(this).attr("src", "assets/images/amib_minus.png")
    } else {
      $(this).attr("src", "assets/images/amib_plus.png")
    }
  })

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show")
  })

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active")
  })

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active")
  })

  //===== Sidebar

  $('[href="#side-menu-left"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").addClass("open")
  })

  $('[href="#close"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").removeClass("open")
  })

  //===== Slick

  $(".slider-items-active").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  })

  //===== Isotope Project 4

  $(".container").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      // options
      transitionDuration: "1s",
    })

    // filter items on button click
    $(".portfolio-menu ul").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter")
      $grid.isotope({
        filter: filterValue,
      })
    })

    //for menu active class
    $(".portfolio-menu ul li").on("click", function (event) {
      $(this).siblings(".active").removeClass("active")
      $(this).addClass("active")
      event.preventDefault()
    })
  })

  //===== slick Testimonial Four

  $(".testimonial-active").slick({
    dots: false,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
  })

  //====== Magnific Popup

  $(".video-popup").magnificPopup({
    type: "iframe",
    // other options
  })

  //===== Magnific Popup

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  })

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200)
    } else {
      $(".back-to-top").fadeOut(200)
    }
  })

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault()

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    )
  })

  //=====
})
