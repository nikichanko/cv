var src1 = document.querySelector('#scroll-1');
var src2 = document.querySelector('#scroll-2');
var src3 = document.querySelector('#scroll-3');
var src4 = document.querySelector('#scroll-4');

var options = {
  maxScrollbarLength: 100,
  swipeEasing: true,
};

var ps1 = new PerfectScrollbar(src1, options);
var ps2 = new PerfectScrollbar(src2, options);
var ps3 = new PerfectScrollbar(src3, options);
var ps4 = new PerfectScrollbar(src4, options);

$(".item:not(.print) span").on('click', function() {
  var _t = $(this).parents('.item');
  if (_t.hasClass('resources')) {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  setTimeout(function(){
    _t.next('.content').addClass('open');
  },100);
  $('.item').each(function(i, v) {
    if (!_t.is(v)) {
      $(v).addClass('closed');
      $(v).next('.content').removeClass('open');
    }
    else {
      $(v).removeClass('closed');
    }
  });
});

$(".item.print span").on('click', function() {
  window.location.href = 'print.html';
});

$('.close').on('click', function(){
  $('.item').each(function(i, v) {
    setTimeout(function(){
      $(v).removeClass('closed');
    },100);
    $(v).next('.content').removeClass('open');
  });
});

