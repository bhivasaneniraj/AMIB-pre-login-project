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

  //for request a call back Date

  $(".date").val(new Date().toJSON().slice(0, 10))

  var dateTime = $(".date").val(new Date().toJSON().slice(0, 10))

  console.log(dateTime, "Hello")
  function updateDateTimeField() {
    var datetimeField = document.getElementById("datetimeField")
    var currentDateTime = new Date()

    // Format hours, minutes, and seconds to ensure 2-digit representation
    var hours = String(currentDateTime.getHours()).padStart(2, "0")
    var minutes = String(currentDateTime.getMinutes()).padStart(2, "0")

    // Format the date and time string in the desired format
    var formattedDateTime = `${currentDateTime.toISOString().slice(0, 10)}T${hours}:${minutes}`

    datetimeField.value = formattedDateTime

    // Store the current time in local storage
    localStorage.setItem("currentDateTime", formattedDateTime)
  }

  // Retrieve and display the stored time initially
  var storedDateTime = localStorage.getItem("currentDateTime")
  if (storedDateTime) {
    document.getElementById("datetimeField").value = storedDateTime
  }

  // Update the field initially
  updateDateTimeField()

  // Update the field every second
  setInterval(updateDateTimeField, 1000)
  //for request a call back Date for Awards section
  function updateDateTimeField() {
    var datetimeField = document.getElementById("datetimeFields")
    var currentDateTime = new Date()

    // Format hours, minutes, and seconds to ensure 2-digit representation
    var hours = String(currentDateTime.getHours()).padStart(2, "0")
    var minutes = String(currentDateTime.getMinutes()).padStart(2, "0")

    // Format the date and time string in the desired format
    var formattedDateTime = `${currentDateTime.toISOString().slice(0, 10)}T${hours}:${minutes}`

    datetimeField.value = formattedDateTime

    // Store the current time in local storage
    localStorage.setItem("currentDateTime", formattedDateTime)
  }

  // Retrieve and display the stored time initially
  var storedDateTime = localStorage.getItem("currentDateTime")
  if (storedDateTime) {
    document.getElementById("datetimeFields").value = storedDateTime
  }

  // Update the field initially
  updateDateTimeField()

  // Update the field every second
  setInterval(updateDateTimeField, 1000)

  //Stay with us

  function updateDateTimeField() {
    var datetimeField = document.getElementById("datetimeFieldTime")
    var currentDateTime = new Date()

    // Format hours, minutes, and seconds to ensure 2-digit representation
    var hours = String(currentDateTime.getHours()).padStart(2, "0")
    var minutes = String(currentDateTime.getMinutes()).padStart(2, "0")

    // Format the date and time string in the desired format
    var formattedDateTime = `${currentDateTime.toISOString().slice(0, 10)}T${hours}:${minutes}`

    datetimeField.value = formattedDateTime

    // Store the current time in local storage
    localStorage.setItem("currentDateTime", formattedDateTime)
  }

  // Retrieve and display the stored time initially
  var storedDateTime = localStorage.getItem("currentDateTime")
  if (storedDateTime) {
    document.getElementById("datetimeFieldTime").value = storedDateTime
  }

  // Update the field initially
  updateDateTimeField()

  // Update the field every second
  setInterval(updateDateTimeField, 1000)

  //for request a call back

  $(".request-call").click(function () {
    $("#box form").toggle("slow")
    return false
  })

  // FAQ Section

  // Get the search input and search results container
  const searchInput = document.getElementById("searchInput")
  const searchResults = document.getElementById("searchResults")

  // Function to perform the search
  function searchFAQ() {
    // Get the search query
    const query = searchInput.value.toLowerCase()

    // Clear previous search results
    searchResults.innerHTML = ""

    // Loop through each FAQ item
    const faqItems = document.querySelectorAll(".faq-paragraph")
    faqItems.forEach((item, index) => {
      const faqText = item.textContent.toLowerCase()

      // Check if the FAQ text contains the search query
      if (faqText.includes(query)) {
        // Create a new result item
        const resultItem = document.createElement("div")
        resultItem.classList.add("result-item")

        // Set the result item content
        resultItem.innerHTML = `
          <h5>Question ${index + 1}</h5>
          <p>${item.textContent}</p>
        `

        // Append the result item to the search results container
        searchResults.appendChild(resultItem)
      }
    })

    // Check if no results found
    if (searchResults.children.length === 0) {
      const noResults = document.createElement("p")
      noResults.textContent = "No results found."
      searchResults.appendChild(noResults)
    }
  }

  // Add an event listener for the search input
  searchInput.addEventListener("input", searchFAQ)

  //FAQ Plus Minus Button Functoinality

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
      1500,
      "easeInOutExpo" // Add easing for smooth animation
    )
  })

  //=====
})
