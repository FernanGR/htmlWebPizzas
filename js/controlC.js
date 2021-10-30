
function controlC(e){

	var evento = e || window.event;
	
	if (evento.ctrlKey && evento.keyCode == 67 ){  
		var rojo = Math.floor(Math.random() * Math.floor(255));
		var verde = Math.floor(Math.random() * Math.floor(255));
		var azul = Math.floor(Math.random() * Math.floor(255));
		var heads = document.getElementById("color");
		heads.style.backgroundColor = "rgb(" + rojo + "," + verde + "," + azul + ")";
	 alert("El color de fondo del Header es: rgb(" + rojo + "," + verde + "," + azul + ")");
	}	

}
 