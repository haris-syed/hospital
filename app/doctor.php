<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class doctor extends Model
{
    //
    //Table name
    protected $table = 'doctors';

    //primary key
    public $primaryKey = 'id';

    //Timestamps
    public $timestamps = false;
}
