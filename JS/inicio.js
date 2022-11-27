function login(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("password").value;
    var usu = JSON.parse(localStorage.usuario);
    var cont = JSON.parse(localStorage.contraseña);

    
    if(usuario == usu && contraseña == cont){
        window.location = "mostrardatos.html";
    }
}