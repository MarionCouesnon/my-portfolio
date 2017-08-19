//= require jquery
//= require imageLightbox

// Image animation
var fantome = function() {
  $('img').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() * 0.15,
        bottom_of_window = $(document).scrollTop() + $(window).height(),
        pad = $(this).innerHeight() - $(this).height();
    if( bottom_of_window > bottom_of_object - pad){
      $(this).animate({'opacity':'1',
                       'padding-top':'0'},
                       500);
    }
  });
}

$(window).scroll( function(){
  fantome()
});

var starting = function() {
  $('body').addClass('noscroll');
  if (!$( '#imagelightbox-overlay' ).length) $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
  $( '#imagelightbox-overlay' ).removeClass("tic");
}

var ending = function() {
  $('body').removeClass('noscroll');
  $('#imagelightbox-overlay').addClass("tic");
}

$(document).ready(function() {
  $('img').css('opacity', '0.2').css('padding-top', '10px');

  $(".zoomIn").imageLightbox( {
    onStart: function() { starting() },
    onEnd: function() { ending() }
  })

  fantome();
});

// $("imagelightbox-overlay").click(function() {
//   $('body').removeClass('noscroll');
//   $( '#imagelightbox-overlay' ).fadeOut();
// })
