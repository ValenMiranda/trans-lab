$(document).ready(function(){
  $.$.ajax({
  	url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=22179163',
  	type: 'GET',
  	dataType: 'JSON',
  })
  .done(function() {
  	console.log("success");
  })
  .fail(function() {
  	console.log("error");
  })
  .always(function() {
  	console.log("complete");
  });
  
});