<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PruebaController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');