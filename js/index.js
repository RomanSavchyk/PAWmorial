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

// Hamburger menu
  $('.hamburger').click(function() {
    $('.hamburger').toggleClass('hamburger__active')
    $('.header-nav').toggleClass('header-nav__active')
  })

// Login drop down
  $('.loggedIn-user').click(function() {
    $('.dropdown-content__pet').css('display', 'none')
    $('.pet-dropdown').css('transform', 'rotate(0)')
    if ($('.dropdown-content__user').css('display') == 'none') {
      $('.dropdown-content__user').css('display', 'flex')
    } else {
      $('.dropdown-content__user').css('display', 'none')
    }
  })
  $('.loggedIn-pet').click(function() {
    $('.dropdown-content__user').css('display', 'none')
    if ($('.dropdown-content__pet').css('display') == 'none') {
      $('.dropdown-content__pet').css('display', 'flex')
      $('.pet-dropdown').css('transform', 'rotate(-90deg)')
    } else {
      $('.dropdown-content__pet').css('display', 'none')
      $('.pet-dropdown').css('transform', 'rotate(0)')
    }
  })

 // Login Modal
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

  // $(".user-name, .user-image").click(function() {
  //   $(".dropdown-content__user").css("display", "flex");
  // });
  
  $('.content-gallery').masonry({
    columnWidth: 262,
    itemSelector: '.content-gallery__item',
    isFitWidth: true
  });
})

