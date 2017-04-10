<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactSchedule extends Model
{
    protected $fillable = ['days', 'hours'];
}
