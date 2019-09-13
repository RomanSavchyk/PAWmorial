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
    $('.dropdown-content__pet').hide()
    $('.pet-dropdown').css('transform', 'rotate(0)')
    if ($('.dropdown-content__user').css('display') == 'none') {
      $('.dropdown-content__user').show()
    } else {
      $('.dropdown-content__user').hide()
    }
  })
  $('.loggedIn-pet').click(function() {
    $('.dropdown-content__user').hide()
    if ($('.dropdown-content__pet').css('display') == 'none') {
      $('.dropdown-content__pet').show()
      $('.pet-dropdown').css('transform', 'rotate(-90deg)')
    } else {
      $('.dropdown-content__pet').hide()
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
  $('#passed-away, #about-memorial-passed-away').click(function() {
    $('.create-memorial__left_pickers_passed, .section-information__passed').toggleClass('checked')
    $('#passing-away-place, #passing-away-date, #passed-date, #passed-place').prop('disabled', function(i, v) { return !v; });
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
  })

  // Memory popup
  $('.content-gallery__item').magnificPopup({
    items:
      {
        src: $(`<div class="memory-popup">
        <div class="memory-popup__container">
          <div class="memory-popup__left">
            <div class="memory-popup__image">
              <img src="./images/1.jpg" alt="doge with ball" />
              <div class="memory-popup__image_nav">
                <!-- change later -->
              </div>
            </div>
          </div>
          <div class="memory-popup__right">
            <div class="memory-popup__heading">
              <div class="memory-popup__heading_name">
                <div class="memory-popup__heading_name_icon">
                  <img src="./images/1.jpg" alt="picture of post" />
                </div>
                <div class="memory-popup__heading_name_pet">
                  <span>Marvel</span>
                </div>
              </div>
              <div class="memory-popup__heading_date">
                <span>Sept 12, 2018</span>
              </div>
            </div>
            <div class="memory-popup__title">
              <span class="memory-popup__title_text">
                First days of their friendship. Forever love
                <span class="memory-popup__title_hashtag">#friendshipLily</span>
              </span>
            </div>
            <div class="memory-popup__comments">
              <div class="memory-popup__comment">
                <div class="memory-popup__comment_data">
                  <div class="comment-author">
                    <span>Lea</span>
                  </div>
                  <div class="comment-text">
                    <span>Remember this moment so clearly!</span>
                  </div>
                </div>
                <div class="memory-popup__comment_info">
                  <div class="comment-time">
                    <span>1h</span>
                  </div>
                  <div class="comment-reply">
                    <button>Reply</button>
                  </div>
                </div>
              </div>
              <div class="memory-popup__comment">
                <div class="memory-popup__comment_data">
                  <div class="comment-author">
                    <span>PapaJohn</span>
                  </div>
                  <div class="comment-text">
                    <span>This days was tottally amazing</span>
                  </div>
                </div>
                <div class="memory-popup__comment_info">
                  <div class="comment-time">
                    <span>30m</span>
                  </div>
                  <div class="comment-reply">
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="memory-popup__footer">
              <div class="memory-popup__options">
                <div class="memory-popup__options_like">
                  <img src="./images/vektor/like-icon.svg" alt="like" />
                  <span>257 likes</span>
                </div>
                <div class="memory-popup__options_share share-btn">
                  <img src="./images/vektor/share-icon.svg" alt="share" />
                </div>
                <div class="memory-popup__options_more more-btn">
                  <img src="./images/vektor/more.svg" alt="more" />
                </div>
              </div>
              <div class="memory-popup__postcomment">
                <input type="text" name="" id="" placeholder="Write a comment..." />
                <button>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>`), // Dynamically created element
        type: 'inline'
      },
    gallery: {
      enabled: true
    },
    type: 'inline' // this is a default type
  });
  
  // $('.more-btn, .share-btn').click(function(){
  //   alert('hello')
  // })

  new jBox('Tooltip', {
    attach: '.more-btn',
    content: `<div class="jB-more-container">
    <div class="jB-more-item">
      <a href=""><img src="./images/vektor/edit-icon.svg" alt="edit"></a>
      <span>Edit</span>
    </div>
    <div class="jB-more-item">
      <a href=""><img src="./images/vektor/donwload.svg" alt="download"></a>
      <span>Download</span>
    </div>
    <div class="jB-more-item">
      <a href=""><img src="./images/vektor/close-black-icon.svg" alt="remove"></a>
      <span>Remove</span>
    </div>
  </div>`,
    animation: 'zoomIn',
    trigger: 'click',
    closeOnEsc: true,
    closeOnClick: 'body',
    position: {
      x: 'left',
      y: 'top'
    },
    outside: 'y'
  });

  
  // $(document).on('click', '.more-btn', function (e) {
  //   new jBox('Tooltip', {
  //     attach: '.more-btn',
  //     content: `<div class="jB-more-container">
  //     <div class="jB-more-item">
  //       <a href=""><img src="./images/vektor/edit-icon.svg" alt="edit"></a>
  //       <span>Edit</span>
  //     </div>
  //     <div class="jB-more-item">
  //       <a href=""><img src="./images/vektor/donwload.svg" alt="download"></a>
  //       <span>Download</span>
  //     </div>
  //     <div class="jB-more-item">
  //       <a href=""><img src="./images/vektor/close-black-icon.svg" alt="remove"></a>
  //       <span>Remove</span>
  //     </div>
  //   </div>`,
  //     animation: 'zoomIn',
  //     trigger: 'click',
  //     closeOnEsc: true,
  //     closeOnClick: 'body',
  //     position: {
  //       x: 'left',
  //       y: 'top'
  //     },
  //     outside: 'y'
  //   });
  // });

  // tooltip and share btn doesn't work on a memory popup
  $('.share-btn, .more-btn').click(function(e){
    e.stopPropagation()
  })

  // Preloader

  // $(document).ready(function() {
  //   $(window).on("load", function() {
  //   preloaderFadeOutTime = 500;
  //   function hidePreloader() {
  //   var preloader = $('.preloader');
  //   preloader.fadeOut(preloaderFadeOutTime);
  //   }
  //   hidePreloader();
  //   });
  // }); 
  var getMax = function(){
    return $(document).height() - $(window).height() - $('.blog-share').height() - $('.blog-articles').height() - $('.footer').height()
  }
    
  var getValue = function(){
    return $(window).scrollTop();
  }
    
  if ('max' in document.createElement('progress')) {
    // Browser supports progress element
    var progressBar = $('progress');
        
    // Set the Max attr for the first time
    progressBar.attr({ max: getMax() });

    $(document).on('scroll', function(){
      // On scroll only Value attr needs to be calculated
      progressBar.attr({ value: getValue() });
    });
      
    $(window).resize(function(){
      // On resize, both Max/Value attr needs to be calculated
      progressBar.attr({ max: getMax(), value: getValue() });
    }); 
  
  } else {

      var progressBar = $('.progress-bar'), 
          max = getMax(), 
          value, width;
          
      var getWidth = function() {
        // Calculate width in percentage
        value = getValue();            
        width = (value/max) * 100;
        width = width + '%';
        return width;
      }
          
      var setWidth = function(){
        progressBar.css({ width: getWidth() });
      }
          
      $(document).on('scroll', setWidth);
      $(window).on('resize', function(){
        // Need to reset the Max attr
        max = getMax();
        setWidth();
      });
    }
})

