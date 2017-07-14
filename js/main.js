/* Holiii acá va tu código también */
$(document).ready(function(){

	$(".button-collapse").sideNav();

  $('.collapsible').collapsible();

  $("#validar").on("click", function(e) {
    correo();
    pass();
    if(correo() && pass()){
      var emailVal = $("#email").val();
      /* guardar el correo */
      localStorage.setItem('email',emailVal);
      /* Si esta correcto, envía a la página del perfil */
      window.open('options.html','_self',false);
    }
  });
  $(".grupo").on("keypress", "input", function(e) {
    var errorInput = $(this).parent("div").parent("div").find(".hidden").length;
    if(errorInput == 0) {
      $(this).parent("div").parent("div").find(".alert").addClass('hidden');
    }        
  });
    //FUNCION PARA VALIDAR EL CORREO
    function correo(){
      var emailVal = $("#email").val();
      /*console.log("tu email", emailVal);*/
      if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailVal)){
        $("#error-email").removeClass('hidden');
        $("#error-email").text('Debes ingresar un email valido.');
        return false;
      } else{
        /*localStorage.setItem('email',emailVal);*/
        return true;
      }
    }
    // FUNCION PARA VALIDAR LA CONTRASEÑA
    function pass(){
      var contrasenaValue = $("#pswd").val();
      /*console.log("contraseña", contrasenaValue);*/
      if(!(/^\d{8,}$/).test(contrasenaValue)) {
        $("#error-pass").removeClass('hidden');
        $("#error-pass").text('Debes ingresar una contraseña valida');
        $("#pswd").val("");
        return false;
      }else {
        return true;
      }
    }

//arreglo para guardar los códigos
var codigos = [];

$("#btn-agregar").click(function(){
  var codigoTarjeta = $("#agregar-tarjetar").val();
  $("#input-tarjeta").val("");
  if(codigoTarjeta == ""){
    return false;
  }else{ 
      codigos.push(codigoTarjeta);
      var codigoSave = localStorage.getItem("numTarjeta");
      $(".list").append('<div class="items">'+codigoTarjeta+'</div>');
    }
});


//FIN
});
