var ver=document.getElementById('Ver');
var clave=document.getElementById('Clave');
var con=true;

ver.addEventListener("click", function(){

	if (con === true ) {
		clave.type="text";
		con=false;
	}else{
		clave.type="password";
		con=true;
	}

});