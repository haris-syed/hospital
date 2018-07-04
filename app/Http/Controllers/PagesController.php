<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function index(Request $req){
        return redirect('/app');
        return view('welcome');
    }

}
