$.get( "index.html", function( data ) {
  var contents = $(data).find('.content');
  var items = $(data).find('.item');
  if (contents.length === items.length) {
    contents.each(function( i,v ) {
      var cont = v.innerHTML;
    });
  }
//  $( ".result" ).html( data );
 // alert( "Load was performed." );
});