 // Función para Banner

function slide(){
	var texto =["Oferta","De Lunes","a Domingo","Aprovechala", "Llamanos", "y Pregunta"];
	var bann=["img1.jpg","img2.jpg","img3.jpg","img1.png","img2.png","img3.png"];
	banner.innerHTML="<h3>"+texto[count]+"</h3>";
	banner.style.backgroundImage="url('../banner/"+bann[count]+"')";
	
	if (count==bann.length-1) {
		count=0;
	} else {
		count++;
	}
}


 