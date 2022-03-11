<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    use HasFactory;

    protected $fillable = [
        'fullname',
        'dob',
        'year',
        'n_lessons',
        'sum',
        'avg',
        'round',
        'branch',
        'users_id',
    ];

    public function register(){
        return $this->hasMany(Register::class);
    }
}
