// fecha y hora
function fecha(){
	 
	var f=new Date();
	var cad= "<br>" +f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear() + "<br>" + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
	document.getElementById("hora").innerHTML = cad ;
	setTimeout(fecha,1000);
 
}
