<?php

use Faker\Generator as Faker;

$factory->define(App\Image::class, function (Faker $faker) {
    return [
        'src' => 'https://picsum.photos/100?blur&random&id=' . $faker->unique()->sha1,
        'type' => 'url'
    ];
});
