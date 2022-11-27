function recuperarDatos(){
  document.getElementById("datos").innerHTML = "Nombre: " + JSON.parse(localStorage.Nombre) + "<br/> Apellido: " + JSON.parse(localStorage.apellido) + "<br> Email: " + JSON.parse(localStorage.email) + "<br> Telefono: "+ JSON.parse(localStorage.telefono)+ "<br> Opcion Socio: "+ JSON.parse(localStorage.Opcion) + "<br> Usuario: "+ JSON.parse(localStorage.usuario) + "<br> Contraseña: "+ JSON.parse(localStorage.contraseña);
  console.log(localStorage.usuario)

} /*
function capturar () {
  var nombre = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telephone").value;
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("password").value;
  var insertar = document.getElementById("section").innerHTML= [nombre, apellido, email, telefono, usuario, contraseña];

}
function guardar () {
  var nombre = document.getElementById("fullname").value;
  var contraseña = document.getElementById("password").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("contraseña", contraseña);

}
function visualizar () {
  var nombre = localStorage.getItem("nombre");
  var contraseña = localStorage.getItem("contraseña");
  alert(peticion);

}*/