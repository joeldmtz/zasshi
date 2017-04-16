<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    protected $fillable = ['name', 'description', 'price', 'status'];

    public function submenu() {
        return $this->belongsTo('App\SubMenu', 'sub_menu_id', 'id');
    }

    public function variants() {
        return $this->hasMany('App\DishIngredient')->where('status', 1)->where('dish_ingredients.status', 1);
    }
}
