/* script.js */

$(document)
  .ready(function() {

    if ($(window).width() > 750) {
      $('#portfolio-items .item').removeClass('one-half');
    } else {
      $('#portfolio-items .item').addClass('one-half');
    }
  
    $('section[role="main"], footer').fadeIn();

    $('.item-image').height($('.item-image').width());

    $('#mobile-menu-link')
      .click(function() {
        $('#mobile-nav').slideToggle();
      });
  
    $('body').bind('touchstart', function() {});
  
    console.log('%cConstructed by Christopher Hatton (http://about.me/ckhatton).','font-size:12px;color:#13608B;');

  });

$(window)
  .resize(function() {

    if ($(window).width() > 750) {
      $('#portfolio-items .item').removeClass('one-half');
    } else {
      $('#portfolio-items .item').addClass('one-half');
    }

    $('.item-image').height($('.item-image').width());

  });