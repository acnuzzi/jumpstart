
$(document).ready(function () {
  $(".carousel").slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 4000,
   fade: true,
   dots: true,
   pauseOnHover: false,
   pauseOnFocus: false

 });



var distanceScroll = 0;
$(window).scroll(function() {
  var distanceStores = $(this).distanceStores();
  if (distanceStores - distanceScroll > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + naveHeight}, 150);
    distanceScroll = distanceStores;
  } else if (distanceScroll - distanceStores > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    distanceScroll = distanceStores;
  }
 });
});

/*
var lastScrollTop = 0;
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop - lastScrollTop > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 150);
    lastScrollTop = scrollTop;
  } else if (lastScrollTop - scrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    lastScrollTop = scrollTop;
  }
});
*/
