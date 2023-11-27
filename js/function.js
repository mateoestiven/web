function validarFormulario() {
    var usuario = document.getElementById("user").value;
    var contrasena = document.getElementById("password").value;

    if (usuario.trim() === "" || contrasena.trim() === "") {
        alert("Por favor, complete todos los campos.");
    }else if(contrasena.length<8){
        alert("la contraseña tiene que tener mas de 8 digitos ")
    } 
   
}