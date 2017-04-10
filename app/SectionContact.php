<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionContact extends Model
{
    protected $fillable = ['address', 'telephone', 'email', 'lat', 'long', 'icon_mark'];
}
