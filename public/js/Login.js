document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const formulario = document.getElementById('formularioRegistro');
    const mensajeFlotante = document.getElementById('mensaje-flotante');
    const mensajeTexto = document.getElementById('mensaje-texto');
    const cerrarMensaje = document.getElementById('cerrar-mensaje');

    // Alternar entre registro e inicio de sesión
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Mostrar mensaje flotante
    function mostrarMensaje(texto) {
        mensajeTexto.textContent = texto;
        mensajeFlotante.classList.add('mostrar');
    }

    // Ocultar mensaje flotante
    cerrarMensaje.addEventListener('click', () => {
        mensajeFlotante.classList.remove('mostrar');
    });

    // Validar correo
    function validarCorreo(correo) {
        const regex = /^[^\s@]+@gmail\.com$/;
        return regex.test(correo);
    }

    // Evento de envío del formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
        const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!nombre || !apellidoPaterno || !apellidoMaterno || !correo || !password) {
            mostrarMensaje("Todos los campos son obligatorios.");
            return;
        }

        if (!validarCorreo(correo)) {
            mostrarMensaje("El correo debe ser válido y terminar con '@gmail.com'.");
            return;
        }

        if (password.length < 6) {
            mostrarMensaje("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Aquí se simula el envío al servidor (AJAX)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/ruta/de/registro', true); // Ajusta la URL real aquí
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const respuesta = xhr.responseText.trim();
                    if (respuesta === "Registro Exitoso") {
                        mostrarMensaje("¡Registro exitoso!");
                        formulario.reset();
                    } else {
                        mostrarMensaje("Error al registrar usuario: " + respuesta);
                    }
                } else {
                    mostrarMensaje("Error en la conexión con el servidor.");
                }
            }
        };

        xhr.onerror = () => {
            mostrarMensaje("Error de red. Inténtalo nuevamente.");
        };

        const data = `nombre=${encodeURIComponent(nombre)}&apellidoPaterno=${encodeURIComponent(apellidoPaterno)}&apellidoMaterno=${encodeURIComponent(apellidoMaterno)}&correo=${encodeURIComponent(correo)}&password=${encodeURIComponent(password)}`;

        xhr.send(data);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const formulario = document.getElementById('formularioRegistro');
    const mensajeFlotante = document.getElementById('mensaje-flotante');
    const mensajeTexto = document.getElementById('mensaje-texto');
    const cerrarMensaje = document.getElementById('cerrar-mensaje');

    // Alternar entre registro e inicio de sesión
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Mostrar mensaje flotante
    function mostrarMensaje(texto) {
        mensajeTexto.textContent = texto;
        mensajeFlotante.classList.add('mostrar');
    }

    // Ocultar mensaje flotante
    cerrarMensaje.addEventListener('click', () => {
        mensajeFlotante.classList.remove('mostrar');
    });

    // Validar correo
    function validarCorreo(correo) {
        const regex = /^[^\s@]+@gmail\.com$/;
        return regex.test(correo);
    }

    // Evento de envío del formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
        const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!nombre || !apellidoPaterno || !apellidoMaterno || !correo || !password) {
            mostrarMensaje("Todos los campos son obligatorios.");
            return;
        }

        if (!validarCorreo(correo)) {
            mostrarMensaje("El correo debe ser válido y terminar con '@gmail.com'.");
            return;
        }

        if (password.length < 6) {
            mostrarMensaje("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Aquí se simula el envío al servidor (AJAX)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/ruta/de/registro', true); // Ajusta la URL real aquí
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const respuesta = xhr.responseText.trim();
                    if (respuesta === "Registro Exitoso") {
                        mostrarMensaje("¡Registro exitoso!");
                        formulario.reset();
                    } else {
                        mostrarMensaje("Error al registrar usuario: " + respuesta);
                    }
                } else {
                    mostrarMensaje("Error en la conexión con el servidor.");
                }
            }
        };

        xhr.onerror = () => {
            mostrarMensaje("Error de red. Inténtalo nuevamente.");
        };

        const data = `nombre=${encodeURIComponent(nombre)}&apellidoPaterno=${encodeURIComponent(apellidoPaterno)}&apellidoMaterno=${encodeURIComponent(apellidoMaterno)}&correo=${encodeURIComponent(correo)}&password=${encodeURIComponent(password)}`;

        xhr.send(data);
    });
});
