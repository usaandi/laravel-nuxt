<?php

use Illuminate\Database\Seeder;

class userPostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Post::class,100)->create();

    }
}
