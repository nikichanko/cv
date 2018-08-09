$(".item").on('click', function() {
  var _t = this;
  setTimeout(function(){
    $(_t).next('.content').addClass('open');
  },100);
  $('.item').each(function(i, v) {
    if (!$(_t).is(v)) {
      $(v).addClass('closed');
      $(v).next('.content').removeClass('open');
    }
    else {
      $(v).removeClass('closed');
    }
  });
});

$('.close').on('click', function(){
  $('.item').each(function(i, v) {
    setTimeout(function(){
      $(v).removeClass('closed');
    },100);
    $(v).next('.content').removeClass('open');
  });
});

var src1 = document.querySelector('#scroll-1');

var ps = new PerfectScrollbar(src1, {
  wheelSpeed: 1,
  wheelPropagation: false,
  maxScrollbarLength: 300,
});