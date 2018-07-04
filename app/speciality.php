<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class speciality extends Model
{
    //
    //Table name
    protected $table = 'specialities';

    //primary key
    public $primaryKey = 'id';

    //Timestamps
    public $timestamps = false;
}
