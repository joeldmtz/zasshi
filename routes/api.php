<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('menus', 'Menus', ['except' => ['create', 'edit']]);
Route::resource('menus.submenus', 'Submenus', ['except' => ['create', 'edit']]);
Route::resource('menus.submenus.dishes', 'Dishes', ['except' => ['create', 'edit']]);
Route::resource('menus.submenus.dishes.variants', 'DishVariants', ['except' => ['create', 'edit']]);

Route::resource('schedules', 'Schedules', ['except' => ['create', 'edit']]);
Route::resource('gallery', 'Gallery', ['except' => ['create', 'edit']]);
Route::resource('testimonials', 'Testimonials', ['except' => ['create', 'edit']]);

Route::resource('about', 'About', ['except' => ['create', 'edit']]);
Route::resource('contact', 'Contact', ['except' => ['create', 'edit']]);
