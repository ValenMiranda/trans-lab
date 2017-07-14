/* Holiii acá va tu código también */
$(document).ready(function(){
	// SideNav Options
	$('.button-collapse').sideNav({
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

	// Show sideNav
$('.button-collapse').sideNav('show');
// Hide sideNav
$('.button-collapse').sideNav('hide');


	function validarPass{
		var emailVal =  $("#email-signup").val();
		console.log(emailValue);
		var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
		if (caract.test(email) == false){
			$(div).hide().removeClass('hide').slideDown('fast');

			return false;
		}else{
			$(div).hide().addClass('hide').slideDown('slow');
			return true;
		}
	}
});