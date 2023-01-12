<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $this->faker = \Faker\Factory::create('pt_BR');

        return [
            'nome' =>  $this->faker->name(),
            'cpf' => $this->faker->cpf(),
            'data_nasc' => $this->faker->dateTimeThisMonth()->format('Y-m-d'),
            'telefone' => $this->faker->phoneNumber(),  
        ];
    }
}
