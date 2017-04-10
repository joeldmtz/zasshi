<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionAbout extends Model
{
    protected $fillable = ['title', 'description', 'status'];
}
