 
function iniciar(){	
	 
         
	document.getElementById("mcontacta").addEventListener("mouseover",submenu,false);
	document.getElementById("submenu").style.display = "none"; 
	
	var areatext = document.getElementById("texto1");
	areatext.addEventListener("keypress",limit,false);
	areatext.addEventListener("keydown",rest,false);
		
	var botoenviar = document.getElementById("botoenviar");
	botoenviar.addEventListener("click",validar,false);	
	       //cambio color 
	window.addEventListener("keyup",controlC,false);
	//objetos- agregar y borrado de todos
	document.getElementById("btAgregar").addEventListener("click",capturar,false);
	document.getElementById("btBorrado").addEventListener("click",borrado,false);

    }
	
	  
//calcula limite y contador al escribir
function limit(e){
	var evento = window.event || e;
	var max = document.getElementById("texto1");
 
	var cant = 150-max.value.length;
	document.getElementById("num").textContent =cant;
	
	var valor_limit=150;
	if(max.value.length >= valor_limit ) {
		evento.preventDefault();
	} else {
		
		return true;
	}
}
	function rest(e){
	var evento = window.event || e;
	
	var max = document.getElementById("texto1");
	if(e.keyCode == 8 || e.keyCode == 46)
	{
		var cant = 150-max.value.length;
		document.getElementById("num").textContent =cant;
	}
}


	 //variables booleanas
	var nom = false;
	var emailb = false;
	var telefono = false;	 
 	var areaBool = false;
	var radioBool = false;
	var fix1 = false;
	var fix2 = false;
	
	var validado = false;
	var validado1 = false;
	var validado2 = false;
	var validado3 = false;
	var validado4 = false;
	var validado5 = false;
	 
		
	function validar(e){
		var evento = window.event || e;
		
		var apodo = document.getElementById("nombre");
		var email = document.getElementById("email");
		var tele = document.getElementById("tel");
		var rButon = document.getElementsByName("pregunta");
	 
		var fichero = document.getElementById("fichero");
	 	var txtArea = document.getElementById("texto1");
		
		
		
		//nombre/apodo
	 
		if(apodo.value == "")
		{
			if(nom == false)
			{
 
				document.getElementById("vapodo").innerHTML = "Campo Obligatorio" ;
				document.getElementById("vapodo").style.color ="red";
				nom = true;
			//	validado5 = false;
			}
		}
		else if(nom == true){
			nom = false;
			document.getElementById("vapodo").innerHTML = "";
			validado5 = true;
		}
		//email
				 
		if(email.value == "")
		{
			if(emailb == false)
			{
 
				document.getElementById("vemail").innerHTML = "Campo Obligatorio" ;
				document.getElementById("vemail").style.color ="red";
				emailb = true;
			//	validado4 = false;
			}
		}
		else if(emailb == true){
			emailb = false;
	 
			document.getElementById("vemail").innerHTML = "";
			validado4 = true;
		}
		//telefono
		 
		if(tele.value == "")
		{
			if(telefono == false)
			{
 
				document.getElementById("vtel").innerHTML = "Campo Obligatorio" ;
				document.getElementById("vtel").style.color ="red";
				telefono = true;
			//	validado3 = false;
			}
		}
		else if(telefono == true){
			telefono = false;
	 
			document.getElementById("vtel").innerHTML = "";
			validado3 = true;
		}
	 
		//campo check 
		var rCheck = false;
		for(var i=0; i<rButon.length; i++) { 
			if(rButon[i].checked == true)
			{
				rCheck = true;
			}
		}
		if(rCheck == false)
		{
			if(radioBool==false){
 				document.getElementById("vradio").innerHTML = "Campo Obligatorio" ;
				document.getElementById("vradio").style.color ="red";
				radioBool = true;
			//	validado1 = false;
			}
		}
		else if(radioBool == true){
			document.getElementById("vradio").innerHTML = "";
			radioBool = false;
			validado1 = true;
		}

		//fichero subido
		var fixer = document.getElementById("fichero");
		var ext=fixer.value.substr(-3, 4);
		
		if(fixer.value == "")
		{	
			if(fix1 == false){
 
				fix1 = true;
				document.getElementById("vfixer").innerHTML = "Campo Obligatorio" ;
				document.getElementById("vfixer").style.color ="red";
				}
		}
		else if(fix1 == true){
				fix1 = false;
				document.getElementById("vfixer").innerHTML = "" ;
		}
		
		// tipo archivos  
		if((ext != 'pdf') && fix1==false)
		{	
			if(fix2 == false){
				document.getElementById("vfixer").innerHTML = "Archivo ha de ser pdf." ;
				document.getElementById("vfixer").style.color ="red";
				fix2 = true;
			//	validado2 = false;
				}
		}
		else if(fix2 == true){
				fix2 = false;
				document.getElementById("vfixer").innerHTML = "" ;
				validado2 = true;
		}
		
		
		//text area
		if(txtArea.value == "")
		{
			if(areaBool == false)
			{
 
				document.getElementById("vtext").innerHTML = "Campo Obligatorio" ;
				document.getElementById("vtext").style.color ="red";
				areaBool = true;
				validado = false;
			}
		}
		else if(areaBool == true){
			areaBool = false;
			document.getElementById("vtext").innerHTML = "";
			validado = true;
		}
	
		//boton reset text area
	 	var reseteado = document.getElementById("botoResetTextArea");
		reseteado.addEventListener("click",res,false);
		function res() {
			txtArea.value = "";
		}	
		
		
		//enviar si todo valido
		if(validado && validado1 ){
		//if(validado && validado1 && validado2 && validado3 && validado4 && validado5){	
			document.getElementById("formulariocontacto").submit();
 
			
		}
		
	}
	

	
	
	window.addEventListener("load",iniciar,false);