/* Holiii acá va tu código también */
$(document).ready(function(){

	$(".button-collapse").sideNav();

  $('.collapsible').collapsible();


$('#validar').click(function() {
    // Expresion regular para validar el correo
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    // Se utiliza la funcion test() nativa de JavaScript
    if (regex.test($('#email').val().trim())) {
        $("#iniciar-sesion").attr("href","options.html");
    } else {
        alert('La direccón de correo no es valida');
    }
});

// set password variable
        var pswd = $(this).val();
        //validate the length
        if ( pswd.length < 6 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }

        //validate number
        if ( pswd.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }

//mail guardado en local storage en el perfil
  var email = localStorage.getItem("email");
  $("#text-email").text(mail);

//guarda numero de tarjetas
  var contador = localStorage.length;
  if (contador === null) {
    contador = 1;
  } 

  $("#btn-agregar").on("click", function(e){
    var numero = $("#tarjeta-input").val();
    var regexNum = new RegExp("^([0-9]{8})$");

    if(!regexNum.test(numero) || numero == ""){
    
       $(".malo").show();
    }else{
     $(".malo").hide();
     $(".tarjetas-guardadas").append("<div class='num-area'><p id='num"+cont+"'>"+numero+"</p></div>");
     cont++;
     localStorage.setItem("bip"+cont, numero);
     $("#tarjeta-input").val("");
    }
  });

  //escribe los numeros de tarjetas al recargar
  for(var i = 0; i < localStorage.length; i++){
    var regexStorage = new RegExp("^([0-9]{8})$");
    var kei = localStorage.key(i);
    var valuee = localStorage.getItem(kei);
    if(kei.startsWith("bip")){
      $(".tarjetas-guardadas").append("<div class='num-area'><p id='num"+kei+"'>"+valuee+"</p></div>");
    }
    
  }

});
