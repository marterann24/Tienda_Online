<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeALoginController;

// web.php (Rutas Laravel)
Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/contacto', function () {
    return view('contacto');
})->name('contacto');

Route::get('/login', function () {
    return view('login');
})->name('login');

// Ruta comodín al final
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');