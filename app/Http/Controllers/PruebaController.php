<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PruebaController extends Controller
{
    public function home()
    {
        return view('home'); // Vista de inicio
    }

    public function contacto()
    {
        return view('contacto'); // Vista de contacto
    }
}
