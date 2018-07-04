<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class admin extends Model
{
    //
    //Table name
    protected $table = 'admins';

    //primary key
    public $primaryKey = 'id';

    //Timestamps
    public $timestamps = false;
}
