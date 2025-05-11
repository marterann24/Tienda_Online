<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
</head>
<body>
    <h1>Bienvenidos "HIJOS DE SU PINCHE MADRE, !QUE VIVA LA SANTA!"</h1>
    
    <a href="{{ route('login') }}">
        <button>Login</button>
    </a>
</body>
</html>
