$(document).ready(function() {
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
  
  $('.main-image').slick({
      arrows: false,
      dots: false,
      fade: true,
      autoplay: true,
      autoplayspeed: 300
    });

  
  // $('a[data-slide]').click(function(e) {
  //   e.preventDefault();
  //   var slideno = $(this).data('slide');
  //   $('.slider-nav').slick('slickGoTo', slideno - 1);
  // });
  
  const hamburger = $('.hamburger')
  const headerNav = $('.header-nav')
  
  hamburger.click(function() {
    hamburger.toggleClass('hamburger__active')
    headerNav.toggleClass('header-nav__active')
  })

  
  $('.modal-login, .modal-login_invited, .black-fill').hide();
  $('.login-btn').click(function() {
      $('.modal-login, .modal-login_invited, .black-fill').show();
  });

  $('.black-fill, .close-modal').click(function() {
      $('.modal-login, .modal-login_invited, .black-fill').hide();
  });

  
  $('.login-password__eye').click(function() {
    let PWinput = document.getElementById("login-password__field");
    let src = $(this).attr('src');
    let newsrc = (src=='./images/vektor/eye.svg') ? './images/vektor/closed-eye.svg' : './images/vektor/eye.svg';
    $(this).attr('src', newsrc );
    if (PWinput.type === "password") {
      PWinput.type = "text";
    } else {
      PWinput.type = "password";
    }
  })

  // $('.content-gallery').masonry({
  //   columnWidth: '.content-gallery__item',
  //   itemSelector: '.content-gallery__item'
  // })
})

