<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::group(['prefix' => 'admin'], function() {

    Route::get('login', function() {
        return view('login');
    })->name('login')->middleware('guest');

    Route::get('/', function() {
        return view('app');
    })->name('home')->middleware('auth');

});

Route::get('/home', function() {
    return redirect()->route('home');
});
