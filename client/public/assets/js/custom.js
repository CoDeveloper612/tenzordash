(function ($) {
  "use strict";
  $(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });
  $(".side-nav-responsive .dot-menu").on("click", function () {
    $(".side-nav-responsive .container-max .container").toggleClass("active");
  });
  $(".banner-item-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
  });
  $(".trending-slider").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
    navText: [
      "<i class='ri-arrow-left-s-line'></i>",
      "<i class='ri-arrow-right-s-line'></i>",
    ],
  });
  $(".auctions-slider").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 1000: { items: 3 } },
  });
  $(".auctions-slider-two").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 576: { items: 2 }, 1000: { items: 3 } },
  });
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
  });
  $(".testimonial-slider-two").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
  });
  $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
  $(".tab ul.tabs li a").on("click", function (g) {
    var tab = $(this).closest(".tab"),
      index = $(this).closest("li").index();
    tab.find("ul.tabs > li").removeClass("current");
    $(this).closest("li").addClass("current");
    tab
      .find(".tab_content")
      .find("div.tabs_item")
      .not("div.tabs_item:eq(" + index + ")")
      .slideUp();
    tab
      .find(".tab_content")
      .find("div.tabs_item:eq(" + index + ")")
      .slideDown();
    g.preventDefault();
  });
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime("%D:%H:%M:%S"));
    });
  });
  $(".promoted")
    .find(".promoted-title")
    .on("click", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle("fast");
      $(".promoted-content").not($(this).next()).slideUp("fast");
      $(".promoted-title").not($(this)).removeClass("active");
    });
  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });
  function makeTimer() {
    var endTime = new Date("October 30, 2022 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 300);
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly");
      } else {
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }
  $(".newsletter-form").ajaxChimp({
    url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    callback: callbackFunction,
  });
  $("body").append(
    "<div class='go-top'><i class='ri-arrow-up-s-line'></i></div>"
  );
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $(".go-top").addClass("active");
    if (scrolled < 600) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });
  $("body").append(
    "<a href='https://themeforest.net/checkout/from_item/33813418?license=regular&support=bundle_6month&_ga=2.79309395.634514020.1646539215-1425290503.1590986634' target='_blank' class='buy-now-btn'><img src='assets/images/envato.png' alt='envato'/>Buy Now</a>"
  );
  $("body").append(
    "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
  );
})($);
function setTheme(themeName) {
  localStorage.setItem("tezor_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("tezor_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
(function () {
  if (localStorage.getItem("tezor_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
