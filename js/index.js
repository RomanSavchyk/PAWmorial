$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  autoplay: true,
  autospeed: 300,
  dots: false,
  arrows: true,
  prevArrow: '<i class="fa fa-angle-left prev1"></i>',
  nextArrow: '<i class="fa fa-angle-left next1"></i>',
  focusOnSelect: true
});
$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});

const hamburger = $('.hamburger')
const headerNav = $('.header-nav')

hamburger.click(function() {
  hamburger.toggleClass('hamburger__active')
  headerNav.toggleClass('header-nav__active')
})