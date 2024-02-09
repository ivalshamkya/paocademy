<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'video_url',
        'position',
        'is_published',
        'is_free',
        'course_id'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function muxData()
    {
        return $this->hasOne(MuxData::class);
    }

    public function userProgress()
    {
        return $this->hasMany(UserProgress::class);
    }
}
