$(document).ready(function(){
  $('#ver-saldo').click(function(){

    var saldo = $('#agregar-tarjeta').val();

    $.ajax({
      url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + saldo,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(res) {
      console.log(res);
      console.log("success");
      console.log(res.saldoTarjeta);

      $('#mostrar-saldo').html(res.saldoTarjeta);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    })
  });

  $("#calc-tarifa").click(function(){

    var valor = $("#saldo-tarjeta").val();
    $.ajax({
      url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + valor,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(res) {
      console.log(res);
      console.log("success");
      console.log(res.saldoTarjeta);
      restaSaldo(res);
    
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    })


  })
  
  function restaSaldo(res){
    var selectTarifa = $('#selectTarifa').val();

    var dato = res.saldoTarjeta.slice(1).replace('.', '');

    if(selectTarifa == '$640'){
      var resta = (dato - 640);
      console.log(resta);
      $('#mostrar-resta').html('$' + resta);
    }
    else if(selectTarifa == '$660'){
      var resta = (dato - 660);
      console.log(resta);
      $('#mostrar-resta').html('$' + resta);
    }
    else if(selectTarifa == '$770'){
      var resta = (dato - 770);
      console.log(resta);
      $('#mostrar-resta').html('$' + resta);
    }
  }


});