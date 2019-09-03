$(document).ready(function() {
  // Testimonials slider
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

  // Home slider
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
      $('body').css('overflow', 'hidden');
  });
  $('.black-fill, .close-modal').click(function() {
      $('.modal-login, .modal-login_invited, .black-fill').hide();
      $('body').css('overflow', 'visible');
  });
  // Create memorial modal
  $('.modal-create-memorial, .black-fill').hide();
  $('.main-about__btn').click(function() {
      $('body').css('overflow', 'hidden');
      $('.modal-create-memorial, .black-fill').show();
  });
  $('.black-fill, .create-memorial__cancel, .close-modal').click(function(e) {
      e.preventDefault()
      $('.modal-create-memorial, .black-fill').hide();
      $('body').css('overflow', 'visible');
  });
  // Create memory modal
  $('.modal-create-memory, .black-fill').hide();
  $('.memorial-new__button_btn').click(function() {
      $('body').css('overflow', 'hidden');
      $('.modal-create-memory, .black-fill').show();
  });
  $('.black-fill, .close-modal').click(function() {
      $('.modal-create-memory, .black-fill').hide();
      $('body').css('overflow', 'visible');
  });
  // Memorial modal toggle passed away pickers
  $('#passed-away').click(function() {
    $('.create-memorial__left_pickers_passed').toggleClass('create-memorial__left_pickers_passed_checked')
    $('#passing-away-place, #passing-away-date').prop('disabled', function(i, v) { return !v; });
  })

  // Memorial modal Date picker
  $.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
  }
  $('.datepicker-here').datepicker({
      language: 'en'
  })
  // Show Password
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
  // Memorials page, Masonry layout
  $('.content-gallery').masonry({
    columnWidth: 262,
    itemSelector: '.content-gallery__item',
    isFitWidth: true
  });
  // Share button
  $('.jB-close').click(function(){
    $('.black-fill').show()
  })
{/* <div class="jB-close">
  <img src="./images/vektor/close-black.svg" alt="close this window">
</div> */}
  new jBox('Tooltip', {
    attach: '.share-btn',
    content: `<div class="jB-container">
      <div class="jB-header">
        Share this page
      </div>
      <div class="jB-links">
        <div class="share-item">
          <a href="#"><img src="./images/vektor/facebook.svg" alt="share on facebook"></a>
          <span>Facebook</span>
        </div>
        <div class="share-item">
          <a href="#"><img src="./images/vektor/twitter.svg" alt="share on twitter"></a>
          <span>Twitter</span>
        </div>
        <div class="share-item">
          <a href="#"><img src="./images/vektor/messenger.svg" alt="share on messenger"></a>
          <span>Messenger</span>
        </div>
        <div class="share-item">
          <a href="#"><img src="./images/vektor/whatsapp.svg" alt="share on whatsapp"></a>
          <span>WhatsApp</span>
        </div>
        <div class="share-item">
          <a class="share-item-bg" href="#"><img src="./images/vektor/link.svg" alt="copy link"></a>
          <span>Copy link</span>
        </div>
        <div class="share-item">
          <a class="share-item-bg" href="#"><img src="./images/vektor/close-envelope.svg" alt="email"></a>
          <span>Email</span>
        </div>
      </div>
      <div class="jB-invite">
        <span class="jB-invite__text">
          Or send an invite
        </span>
        <input class="jB-invite__email" type="email" name="" id="" placeholder="Type email">
        <button class="red-btn jB-invite__btn">Send</button>
      </div>
    </div>`,
    animation: 'zoomIn',
    trigger: 'click',
    closeButton: true,
    closeOnEsc: true,
    closeOnClick: 'body',
    position: {
      x: 'left',
      y: 'top'
    },
    outside: 'x'
  });
})

