<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DishIngredient extends Model
{
    protected $fillable = ['name', 'price', 'status'];

    public function dish() {
        return $this->belongsTo('App\Dish');
    }
}
