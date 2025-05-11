<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeALoginController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function showLogin()
    {
        return view('login');
    }
}
