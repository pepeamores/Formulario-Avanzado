
$(document).ready(function(){
    $('#signupForm').validate({
       rules: {
         fullname: {
             required: true,
             minlength: 2
          },
          apellido: {
             required: true,
             minlength: 2
          },
          email: {
            required: true,
            email: true
         },
         telefono: {
            required: true,
            minlength: 9,
            maxlength: 9
         },
         usuario: {
            required: true,
            minlength: 5
         },
         contraseña: {
             required: true,
             minlength: 5
          },
          confirm_password: {
             required: true,
             minlength: 5,
             equalTo: "#password"
          },
          luckynumber:{
            required: true
          }
       },
       messages: {           
         fullname: {
             required: "Por favor ingresa tu nombre completo",
             minlength: "Tu nombre debe ser de mas de 2 caracteres"
             
          },
          apellido: {
            required: "Por favor ingresa tu apellido completo",
             minlength: "Tu apellido debe ser de mas de 2 caracteres"
          },
          
          telefono: {
            required: "Por favor ingresa tu teléfono completo",
            minlength: "Tu telefono debe ser de no menos de 9 caracteres",
            maxlength: " Tu telefono no debe tener mas de 9 caracteres"
          },
          contraseña: {
             required: "Por favor ingresa una contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
          },
          confirm_password: {
             required: "Ingresa de nuevo la contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
             equalTo: "Por favor ingresa la misma contraseña de arriba"
          },
          email: "Por favor ingresa un correo válido",
          luckynumber: {
             required: "Por favor Ingrese una opcion"
          }
       },
       
       errorElement: "em",
       
       errorPlacement: function (error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");
 
          if (element.prop( "type" ) === "checkbox") {
             error.insertAfter(element.parent("label") );
          } else {
             error.insertAfter(element);
          }
       },
       highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
       },
       unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
       } 
    });
      

 });
 $(document).ready(function(){    
   $('#form_button').click(function(){        
     var nombre = document.getElementById("fullname").value;
      var email = document.getElementById("email_input").value;
      var apellido = document.getElementById("apellido_input").value;
      var telefono = document.getElementById("telephone").value;
      var usuario = document.getElementById("usuario").value;
      var contraseña = document.getElementById("password").value;
      var opcion = document.getElementById("luckynumber").value;

       localStorage.setItem("Nombre", JSON.stringify(nombre));
       localStorage.setItem("email", JSON.stringify(email));
       localStorage.setItem("apellido", JSON.stringify(apellido));
       localStorage.setItem("telefono", JSON.stringify(telefono));
       localStorage.setItem("usuario", JSON.stringify(usuario));
       localStorage.setItem("contraseña", JSON.stringify(contraseña));
      localStorage.setItem("Opcion", JSON.stringify(opcion));
       /*
       document.getElementById("fullname").value = "";
       document.getElementById("email_input").value = "";
       document.getElementById("apellido_input").value = "";
       document.getElementById("telephone").value = "";
       document.getElementById("usuario").value = "";
       document.getElementById("password").value = "";
   */   
   }); 

});
/*
function guardardatos(){
   var nombre = document.getElementById("fullname").value;
      var email = document.getElementById("email_input").value;
      var apellido = document.getElementById("apellido_input").value;
      var telefono = document.getElementById("telephone").value;
      var usuario = document.getElementById("usuario").value;
      var contraseña = document.getElementById("password").value;

       localStorage.setItem("Nombre", JSON.stringify(nombre));
       localStorage.setItem("email", JSON.stringify(email));
       localStorage.setItem("apellido", JSON.stringify(apellido));
       localStorage.setItem("telefono", JSON.stringify(telefono));
       localStorage.setItem("usuario", JSON.stringify(usuario));
       localStorage.setItem("contraseña", JSON.stringify(contraseña));
       document.getElementById("fullname").value = "";
       document.getElementById("email_input").value = "";
       document.getElementById("apellido_input").value = "";
       document.getElementById("telephone").value = "";
       document.getElementById("usuario").value = "";
       document.getElementById("password").value = "";
 }
*/
