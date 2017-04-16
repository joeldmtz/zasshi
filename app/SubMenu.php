<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubMenu extends Model
{
    protected $fillable = ['name', 'status'];

    public function menu() {
        return $this->belongsTo('App\SectionMenu', 'section_menu_id', 'id');
    }

    public function dishes() {
        return $this->hasMany('App\Dish')->with('submenu')->where('status', 1);
    }
}
