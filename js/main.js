/* Holiii acá va tu código también */
$(document).ready(function(){
	$(".button-collapse").sideNav();

	$("#iniciar-sesion").click(function(event) {
    if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#email-signup").val()))){
   			$("#email-signup").append($("#email-signup").val("Error"));
  		}
  		if(!(/^\d{8}([0-9])*$/.test($("#pass-signup").val())) ){
   			$("#pass-signup").append($("#pass-signup").val("Error"));
  		}
  		else{
  			$("#iniciar-sesion").attr("href","options.html");
        localStorage.setItem('local-mail',$("#email-signup").val());
        localStorage.setItem('local-tarjeta',$("#pass-signup").val());
        
  		}
	});
	
});