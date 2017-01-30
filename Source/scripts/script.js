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
  
    $('.fancybox').fancybox({
      helpers : {
        media: true,
        title: { type: 'inside'},
        overlay : {
          css : {
            'background' : 'rgba(255, 255, 255, 1)'
          }
        }
      },
      vimeo : {
        color : 'f00'
      },
      afterLoad: function () {
        if ($(this.element).data("caption")) {
          // Grab the title
          var newCaption = '<h2>' + this.title + '</h2>' + $(this.element).data("caption");
          // Add the caption beyond the title
          this.title = newCaption;
          console.log('fancyBox caption: ' + this.title);
        }
        
//         $('.fancybox-iframe').height(($('.fancybox-iframe').width()/6)*3);
      }
    });
  
    $('#portfolio-items').nested({
      resizeToFit: false,
      resizeToFitOptions: { 
        resizeAny: false
      },
      gutter: 2,
      animate: true,
      animationOptions: {
        speed: 100,
        duration: 300,
        queue: false
      }
    });
  
    $(window).resize();
  
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
  
    $('.fancybox-iframe').height(($('.fancybox-iframe').width()/6)*3);

  });