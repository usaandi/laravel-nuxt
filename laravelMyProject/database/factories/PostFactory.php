<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->unique()->sentence(),
        'content' => $faker->paragraphs(3, true),
    ];
});
