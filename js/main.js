/* Holiii acá va tu código también */
$(document).ready(function(){

	$(".button-collapse").sideNav();

  $('.collapsible').collapsible();


    //FUNCION PARA VALIDAR EL CORREO
    function correo(){
      var emailVal = $("#email").val();
      /*console.log("tu email", emailVal);*/
      if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailVal)){
        $("#error-email").removeClass('hidden');
        $("#error-email").text('Debes ingresar un email valido.');
        return false;
      } else{
        localStorage.setItem('caja-email',emailVal);
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

var correoGuardado = localStorage.getItem('caja-email');
$('#caja-email').html(correoGuardado);

//FIN
});
