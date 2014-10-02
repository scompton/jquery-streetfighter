var ryuVisible;
var xDown;

$(document).ready(function() {
  ryuVisible = $('.ryu-still');
  xDown = false;

  $('.ryu').mouseenter(function() {
    if (xDown) {
      ryuVisible = $('.ryu-ready');
      return;
    }
    ryuVisible.hide();
    $('.ryu-ready').show();
    ryuVisible = $('.ryu-ready');
  })
  .mouseleave(function() {
    if (xDown) {
      ryuVisible = $('.ryu-still');
      return;
    }
    ryuVisible.hide();
    $('.ryu-still').show();
    ryuVisible = $('.ryu-still');
  })
  .mousedown(function() {
    if (xDown) {
      return;
    }
    playHadouken();
    ryuVisible.hide();
    $('.ryu-throwing').show();
    ryuVisible = $('.ryu-throwing');
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    // ryu goes back to his ready position
    if (xDown) {
      ryuVisible = $('.ryu-ready');
      return;
    }
    ryuVisible.hide();
    $('.ryu-ready').show();
    ryuVisible = $('.ryu-ready');
  });

  $(this).keydown(function(event) {
    var key = String.fromCharCode(event.which);
    if (key==='X') {
      ryuVisible.hide();
      $('.ryu-cool').show();
    }
    xDown = true;
  })
  .keyup(function(event) {
    var key = String.fromCharCode(event.which);
    if (key==='X') {
      $('.ryu-cool').hide();
      ryuVisible.show();
      xDown = false;
    }
  });
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
