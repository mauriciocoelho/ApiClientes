<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static function mapClientResponse($client)
    {
        return [
            'id' => $client->id,
            'name' => $client->name,
            'cpf' => $client->cpf,
            'data_nasc' => $client->data_nasc,
            'telefone' => $client->telefone,            
            'created_at'  => date('d/m/Y h:m', strtotime($client->created_at)),
            'updated_at'  => date('d/m/Y h:m', strtotime($client->updated_at)),
        ];
    }
}
