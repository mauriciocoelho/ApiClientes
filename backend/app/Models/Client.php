<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'clients';

    protected $casts = [
        'id' => 'int',
        'data_nasc' => 'date:d/m/Y',
        'updated_at' => 'datetime:d/m/Y h:m',
        'deleted_at' => 'datetime:d/m/Y h:m',
    ];

    protected $fillable = [
        'name',
        'cpf',
        'data_nasc',        
        'telefone',
    ];

}
