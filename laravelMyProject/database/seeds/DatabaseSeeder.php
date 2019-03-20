<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       // $this->call(userPostsTableSeeder::class);
        factory(App\User::class, 50)->create()->each(function ($u) {
            factory(App\Post::class, 20)->create(['user_id' => $u->id]);
        });
    }
}
