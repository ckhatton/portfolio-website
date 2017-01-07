/* script.js */

$(document)
  .ready(function() {
    if ($(window).width() > 750) {
      $('#portfolio-items .item').removeClass('one-half');
    } else {
      $('#portfolio-items .item').addClass('one-half');
    }
    $('.item-image').height($('.item-image').width());
  })
$(window)
  .resize(function() {
    if ($(window).width() > 750) {
      $('#portfolio-items .item').removeClass('one-half');
    } else {
      $('#portfolio-items .item').addClass('one-half');
    }
    $('.item-image').height($('.item-image').width());
  });