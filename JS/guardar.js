function recuperarDatos(){
    document.getElementById("datos").innerHTML = "Nombre: " + JSON.parse(localStorage.nombre) + "<br/> Apellido: " + JSON.parse(localStorage.apellido) + "<br> Email: " + JSON.parse(localStorage.email) + "<br> Telefono: "+ JSON.parse(localStorage.telefono) + "<br> DNI: "+ JSON.parse(localStorage.dni) + "<br> Usuario: "+ JSON.parse(localStorage.usuario) + "<br> Contraseña: "+ JSON.parse(localStorage.contraseña);
    

}