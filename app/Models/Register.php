<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;

    protected $fillable = [
        'dop',
        'type',
        'students_id',
    ];

    public function students(){
        return $this->has(Students::class);
    }
}
