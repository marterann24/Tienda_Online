<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro y Login</title>

    <!-- Íconos de redes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <!-- CSS personalizado -->
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
</head>
<body>
    <!-- Contenedor principal -->
    <div class="container" id="container">
        <!-- Registro -->
        <div class="form-container sign-up">
            <form id="formularioRegistro">
                <h1>Crear Cuenta</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fab fa-google"></i></a>
                    <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="icon"><i class="fab fa-linkedin"></i></a>
                </div>
                <span>o usa tu email para registrarte</span>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre" required>
                <input type="text" id="apellidoPaterno" name="apellidoPaterno" placeholder="Apellido Paterno" required>
                <input type="text" id="apellidoMaterno" name="apellidoMaterno" placeholder="Apellido Materno" required>
                <input type="email" id="correo" name="correo" placeholder="Correo Electrónico" required>
                <input type="password" id="password" name="password" placeholder="Contraseña" required>
                <button type="submit">Registrarse</button>
            </form>
        </div>

        <!-- Login -->
        <div class="form-container sign-in">
            <form>
                <h1>Iniciar Sesión</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fab fa-google"></i></a>
                    <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="icon"><i class="fab fa-linkedin"></i></a>
                </div>
                <span>o usa tu email y contraseña</span>
                <input type="email" placeholder="Correo Electrónico">
                <input type="password" placeholder="Contraseña">
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button>Iniciar Sesión</button>
            </form>
        </div>

        <!-- Panel de cambio -->
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>¡Bienvenido de nuevo!</h1>
                    <p>Ingresa tus datos personales para usar todas las funciones del sitio</p>
                    <button class="hidden" id="login">Iniciar Sesión</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>¡Hola, amigo!</h1>
                    <p>Regístrate con tus datos personales para usar todas las funciones del sitio</p>
                    <button class="hidden" id="register">Registrarse</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Mensaje flotante -->
    <div id="mensaje-flotante" class="mensaje-flotante oculto">
        <div class="mensaje-contenido">
            <span id="mensaje-texto"></span>
            <button id="cerrar-mensaje">Cerrar</button>
        </div>
    </div>

    <!-- Script personalizado -->
    <script src="{{ asset('js/Login.js') }}"></script>
</body>
</html>
