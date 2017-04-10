<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DishIngredient extends Model
{
    protected $fillable = ['name', 'price'];

    public function dish() {
        return $this->belongsTo('App\Dish');
    }
}
