<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MuxData extends Model
{
    use HasFactory;

    protected $fillable = ['asset_id', 'playback_id', 'chapter_id'];

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
}
