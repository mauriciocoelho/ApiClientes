<?php

use App\Models\Client;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

//lista todos os clientes
test('lista todos os clientes', function () {
    $response = $this->get('api/v1/clients'); 
    $response->assertStatus(200);
});
//erro quando o nome não é fornecido
test('erro quando o nome não é fornecido', function () {
    $response = $this->postJson('api/v1/clients', ['nome' => ' Teste nome']);
    $response->assertStatus(422);
});
//erro quando o cpf não é fornecido
test('erro quando o cpf não é fornecido', function () {
    $response = $this->postJson('api/v1/clients', ['cpf' => ' Teste cpf']);
    $response->assertStatus(422);
});
//erro quando a data de nascimento não é fornecida
test('erro quando o data_nasc não é fornecido', function () {
    $response = $this->postJson('api/v1/clients', ['data_nasc' => ' Teste data_nasc']);
    $response->assertStatus(422);
});
//erro quando a data de nascimento não é fornecida
test('erro quando o telefone não é fornecido', function () {
    $response = $this->postJson('api/v1/clients', ['telefone' => ' Teste telefone']);
    $response->assertStatus(422);
});
//erro quando nenhum parametro é fornecido
test('erro quando nenhum é fornecido', function () {
    $response = $this->postJson('/api/v1/clients', []);
    $response->assertStatus(422);
});
//criar quando nenhum parametro é fornecido
test('cria um novo cliente com respeitando as regras', function () {
    $attributes = Client::factory()->raw();
    $response = $this->postJson('/api/v1/clients', $attributes);
    $response->assertStatus(201)->assertJson(['message' => 'Cliente criado com sucesso!']);
});
//apaga o cliente
test('deleta um cliente', function () {
    $client = Client::factory()->create();
    $response = $this->deleteJson("/api/v1/clients/{$client->id}");
    $response->assertStatus(202);
});