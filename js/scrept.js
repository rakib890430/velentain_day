var navber = document.getElementById("navber");
var back_to_top = document.querySelector(".back_to_top");
window.addEventListener("scroll",function(){

  navber.classList.toggle("sticky",window.scrollY > 200);
  back_to_top.classList.toggle("back_to_top_hiden",window.scrollY > 200);

})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Set the date we're counting down to
var countDownDate = new Date("feb 14, 2022 12:00:00").getTime();
    
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector(".days").innerHTML = days + "";
  document.querySelector(".hours").innerHTML = hours + "";
  document.querySelector(".minutes").innerHTML = minutes + "";
  document.querySelector(".seconds").innerHTML = seconds + "";

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// slider start


$(document).ready(function(){
  $('.slider').slick({
      // autoplay:true,
      autoplaySpeed:1000,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:true,
      prevArrow: '<i class="fas fa-angle-left prev_Arrow"></i>',
      nextArrow: '<i class="fas fa-angle-right next_Arrow"></i>',
      // dots:true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  });
});


// preloader js

var preloader = document.querySelector(".preloader");
window.addEventListener("load",function(){
    preloader.classList.add("preloader_hide")
})

// banner js slick slider

$('.slick_slider').slick({
  autoplay:true,
  autoplaySpeed:1000,
  infinite: true,
  speed: 500,
  fade: true,
  prevArrow: "none",
  nextArrow: "none",
  // cssEase: 'linear'
});

// navbar hover button
$(function(){
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");
 
 });
})