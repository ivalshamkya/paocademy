<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'url', 'course_id'];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
