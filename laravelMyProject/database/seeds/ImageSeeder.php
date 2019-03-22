<?php

use Illuminate\Database\Seeder;
use App\Image;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Post::all()->each(function ($post) {
            factory(Image::class, 1)->create(['post_id' => $post->id]);
        });
    }
}
