/* script.js */

$(document)
  .ready(function() {
    $('.item-image').height($('.item-image').width());
  })
$(window)
  .resize(function() {
    $('.item-image').height($('.item-image').width());
  });