<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class clinic extends Model
{
    //
    //Table name
    protected $table = 'clinics';

    //primary key
    public $primaryKey = 'id';

    //Timestamps
    public $timestamps = false;
}
