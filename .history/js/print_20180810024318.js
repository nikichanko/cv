$.get( "../print.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});