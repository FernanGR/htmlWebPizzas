
 	//objetos
 function capturar(){
	 function Persona(nombre,email,telefono){
		this.nombre = nombre;
		this.email = email;
		this.telefono = telefono;
	 }
	 
	 var apodoCaptura = document.getElementById("nombre").value;
	 var emailCaptura = document.getElementById("email").value;
	 var telCaptura = document.getElementById("tel").value;
	 
	 nuevaPer = new Persona(apodoCaptura, emailCaptura, telCaptura);
	 añadir();
	
 }
 
	var baseDatos = [];
	function añadir(){
		 
		baseDatos.push(nuevaPer);
		document.getElementById("tabla").innerHTML += '<tbody><td>' 
		+ nuevaPer.nombre + '</td><td>' + nuevaPer.email + '</td><td>'
		+ nuevaPer.telefono + '</td></tbody>';
		
	}
 function borrado(){
 
	 for (i = 0; i<baseDatos.length; i++){
			delete baseDatos[i];
			}
			
	document.getElementById("tabla").innerHTML = '<tbody><td>'+ "Apodo"+  '</td><td>' + 
	 "Email" + '</td><td>'
	+ "Teléfono" + '</td></tbody>';
	
	document.getElementById("tabla").style.fontWeight = "bold";
 
 }