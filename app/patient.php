<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class patient extends Model
{
    //
    //Table name
    protected $table = 'patients';

    //primary key
    public $primaryKey = 'id';

    //Timestamps
    public $timestamps = false;
}
