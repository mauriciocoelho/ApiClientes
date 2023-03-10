<?php

namespace App\Repository;

use App\Models\Client;

class ClientRepository extends AbstractRepository
{
    private $model;

    public function __construct(Client $model)
    {
        $this->model = $model;
    }

    public function selecioneSearch($search)
    {
        $this->model = $this->model
            ->where("nome", "like", "%".$search."%")
            ->orWhere("cpf", "like", "%".$search."%");
    }

    public function getResultado($order = 'id')
    {
        return $this->model->orderByDesc($order);
    }
}
