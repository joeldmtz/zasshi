<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubMenu extends Model
{
    protected $fillable = ['name'];

    public function menu() {
        return $this->belongsTo('App\SectionMenu');
    }

    public function dishes() {
        return $this->hasMany('App\Dish')->with('variants')->where('status', 1);
    }
}
