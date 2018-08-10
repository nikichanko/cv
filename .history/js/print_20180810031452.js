$.get( "index.html", function( data ) {
  var contents = $(data).find('.content:not(.print)');
  var items = $(data).find('.item:not(.print)');
  if (contents.length === items.length) {
    contents.each(function( i,v ) {
      var cont = v.innerHTML;
      var item = items[i].innerText;
      $("#content").append($('<div class="item")>'+item+'</div><div class="content">'+cont+'</div>')
    });
  }
//  $( ".result" ).html( data );
 // alert( "Load was performed." );
});