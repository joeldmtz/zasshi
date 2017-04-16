<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionMenu extends Model
{
    protected $fillable = ['name', 'status'];

    public function submenus() {
        return $this->hasMany('App\SubMenu')->with('dishes')->where('status', 1);
    }

    public function submenus_only() {
        return $this->hasMany('App\SubMenu')->where('status', 1);
    }

    public function dishes() {
        return $this->hasManyThrough('App\Dish', 'App\SubMenu')->with('submenu');
    }
}
