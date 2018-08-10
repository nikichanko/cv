$.get( "index.html", function( data ) {
  var contents = $(data).find('.content');
  var intems = $(data).find('.item')
  if (contents.length) {
    contents.each(function( i,v ) {
      var cont = v.innerHTML;
    });
  }
//  $( ".result" ).html( data );
 // alert( "Load was performed." );
});