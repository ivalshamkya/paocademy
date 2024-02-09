<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProgress extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'chapter_id', 'is_completed'];

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
}
