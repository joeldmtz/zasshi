<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionGalery extends Model
{
    protected $fillable = ['name', 'description', 'url', 'url_thumbnail'];
}
