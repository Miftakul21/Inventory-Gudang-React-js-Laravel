<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index() 
    {
        return Inertia::render('Login');
    }

    public function authLogin(Request $request) 
    {
        // dd($request->all());
        $validate = $request->validate([
            'email' => 'required',
            'password' => 'required|min:6'
        ]);

        $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors(['email' => 'Email tidak ditemukan!']);
    }

    public function errorPage()
    {
        return Inertia::render('Error/PageError403');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/');
    }
}