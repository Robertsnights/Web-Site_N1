var elemento=""
function mostrar(){
	var beta=document.getElementById('tipo2')
	var gamma=document.getElementById("segun")
	var contrasena1 = prompt("ingrese una contraseña numerica de 3 cifras: ")
	if(contrasena1 >0 && contrasena1< 340){
		elemento = "Ex Laboratorium 4 Horror exsurgent ad quaerendum bellum vocatum nominatim"
		beta.style.display='block'
	}
	if(contrasena1>341 && contrasena1<450){
		elemento = "lo siento pero THE SEVEN te busca ahora"
		beta.style.display='block'
	}
	if(contrasena1>341 && contrasena1<450){
		elemento = "Perdon aun no hey nada aqui"
		beta.style.display='block'
	}
	if (contrasena1>451 && contrasena1<560){
		elemento = "¿aun sigues buscando algo aqui?"
		beta.style.display='block'
	}
	if (contrasena1>561 && contrasena1<700){
		elemento = "En verdad que no hay nada aqui"
		beta.style.display='block'
	}
	if (contrasena1>701 && contrasena1<850){
		elemento = "amigo, ya basta. Que no hay nada mas adelante"
		beta.style.display='block'
	}
	if (contrasena1>851){
		gamma.style.display="block"
		beta.style.display='block'
	}
}
