//= require jquery

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

$(document).ready(function() {
  $('img').css('opacity', '0.2').css('padding-top', '10px');

  fantome();
});
