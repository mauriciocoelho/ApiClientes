<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nome' => 'required|string|min:3|max:255',
            'cpf' => 'required|cpf|unique:clients',
            'data_nasc' => 'required|date',
            'telefone' => 'required|celular_com_ddd',
        ];
    }

     public function messages()
    {
        return [
            'nome.required'             => 'por favor insira o nome',
            'nome.min'                  => 'o mínimo de caracteres é 3',
            'cpf.required'              => 'por favor insira o CPF',
            'cpf.cpf'                   => 'CPF invalido',
            'cpf.unique'                => 'o CPF já consta na nossa base de dados',
            'data_nasc.required'        => 'por favor insira a data de nascimento',
            'data_nasc.date'            => 'data de nascimento invalida',
            'telefone.required'         => 'por favor insira o telefone',
            'telefone.celular_com_dd'   => 'telefone inválido',
        ];
    }
}
