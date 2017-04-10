<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionMenu extends Model
{
    protected $fillable = ['name'];

    public function submenus() {
        return $this->hasMany('App\SubMenu')->with('dishes')->where('status', 1);
    }
}
