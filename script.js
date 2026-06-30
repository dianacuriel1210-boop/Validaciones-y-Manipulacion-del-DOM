// Nombre del Alumno: Valdez Curiel Diana
// Nombre de la Materia: Desarrollo Frontend I
// Fecha: 24 de junio 2026
// Maestro: Armando Gutierrez
// Matricula: 2403231063

function iniciarSesion() {

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if (usuario === "") {
        mostrarError("Debe ingresar un usuario");
        return;
    }

    if (password === "") {
        mostrarError("Debe ingresar una contraseña");
        return;
    }

    if (usuario === "admin" && password === "12345") {

        document.getElementById("login").style.display = "none";
        document.getElementById("app").style.display = "block";

    } else {

        mostrarError("Usuario o contraseña incorrectos");

    }
}

function cerrarSesion() {

    document.getElementById("app").style.display = "none";
    document.getElementById("login").style.display = "block";

    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";

}

function mostrarError(mensaje) {

    document.getElementById("mensajeError").innerHTML = mensaje;

    let modal = new bootstrap.Modal(
        document.getElementById("modalError")
    );

    modal.show();
}