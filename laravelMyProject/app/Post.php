<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
    ];

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
