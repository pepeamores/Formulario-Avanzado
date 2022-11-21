document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact_form").addEventListener('submit', validarFormulario);
});
function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('name_input').value;
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('Introduce tu nombre');
        return;
    }


    var apellido = document.getElementById('apellido_input').value;
    if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
        alert('Introduce tu apellido');
        return;
    }

    var email = document.getElementById('email_input').value;
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec(email)) {
        alert('Introduce el correo o asegurate que esta correcto');
        return;
    }
    var telefono = document.getElementById('telephone_input').value;
    if ((/^\d{10}$/.test(telefono)) || telefono == null || telefono.length == 0) {
        alert("Introduce bien el telefono");
        return;
    }
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    var dni = document.getElementById('dni_input').value;
    dni = dni.toUpperCase();

    if (expresion_regular_dni.test(dni) === true) {
        numero = dni.substr(0, dni.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != let) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
            return;
        }
    } else {
        alert('Dni erroneo, formato no válido');
        return;
    }

    var usuario = document.getElementById('usuario_input').value;
    if (usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)) {
        alert('Introduce tu nombre de usuario');
        return;
    }
    var contraseña = document.getElementById('contraseña_input').value;
    if(contraseña == null || contraseña.length == 0){
        alert('Introduce tu contraseña');
        return;
    }
    this.submit();
    
    localStorage.setItem("nombre",JSON.stringify(nombre));
    localStorage.setItem("apellido",JSON.stringify(apellido));
    localStorage.setItem("telefono",JSON.stringify(telefono));
    localStorage.setItem("email",JSON.stringify(email));
    localStorage.setItem("dni",JSON.stringify(dni));
    localStorage.setItem("usuario",JSON.stringify(usuario));
    localStorage.setItem("contraseña",JSON.stringify(contraseña));
   
    añadirRegistro();
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
    getRegistroList();
}
