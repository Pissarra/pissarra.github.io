$(function() {

  "use strict";

  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Toggle Menu Page switcher
  ===============================================*/
  $('.menu ul li').on("click", function(){
    var page_id = $(this).attr('data-page');

    $('.menu ul li').removeClass('active-page');
    $('.page-content').removeClass('active-page');

    $(this).addClass('active-page');
    $("#"+page_id).addClass('active-page');
  });

  // See Works button in Home Page
  $(".home-content a").on("click", function (){
    $('.menu ul li').removeClass('active-page');
    $('.page-content').removeClass('active-page');

    $(".menu ul li[data-page='portfolio']").addClass("active-page");
    $("#portfolio").addClass('active-page');
  });

  /*===============================================
    Toggle Menu
  ===============================================*/
  var menu = $(".menu");
  var toggleBtn = $(".toggle-btn");

  toggleBtn.on("click", function(e) {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    else {
      menu.addClass("show-menu");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

  // Close Menu
  $(document).on("click", function() {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
  });

  /*===============================================
    MixItUp
  ===============================================*/
  $('#mix-container').mixItUp();

  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox').magnificPopup({ 
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Owl Carousel Sliders
  ===============================================*/
  // Testimonial Slider
  $("#testimonialSlider").owlCarousel({
    items:1,
    margin:30,
    dotsSpeed:300
  });

  // Blog Slider
  $("#blogSlider").owlCarousel({
    items:3,
    margin:10,
    dots:false,
    rewind:true,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 768 up
      768 : {
        items: 2
      }, 
      // breakpoint from 960 up
      960 : {
        items: 3
      }
    }
  });

  // Custom Navigation of Blog
  var blogNavigation = $("#blogSlider");
  // Events
  $("#next").on("click", function(){
    blogNavigation.trigger('next.owl.carousel', [300]);
  });
  $("#prev").on("click", function(){
    blogNavigation.trigger('prev.owl.carousel', [300]);
  });
  // end Custom Navigation of Blog

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (email == '') {
      $("#email").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    if (message == '') {
      $("#message").css('border-color','rgba(255, 0, 0, 0.5)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault();
  });

  /*===============================================
    Google Maps
  ===============================================*/
  var markerIcon = "images/marker.png";
  // Map Initial Location
  var initLatitude = 51.513569; // <- Latitude here
  var initLongitude = -0.123443; // <- Longitude here
  
  var map = new GMaps({
    el: '#map-canvas',
    lat: initLatitude,
    lng: initLongitude,
    zoom: 16,
    scrollwheel: false
  });
  map.addMarker({
    lat : initLatitude,
    lng : initLongitude,
    icon: markerIcon
  });

});