<?php

namespace App\Repository;

use Illuminate\Database\Eloquent\Model;

abstract class AbstractRepository
{
    public function __construct(private Model $model)
    {
        $this->model = $model;
    }

    public function selecioneConditions($condicoes = null)
    {
        $expressoes = explode(';', $condicoes);

        foreach ($expressoes as $e) {
            $exp = explode(':', $e);

            $this->model = $this->model->where($exp[0], $exp[1], $exp[2]);
        }
    }

    public function selecioneFiltro($filtros)
    {
        $this->model = $this->model->selectRaw($filtros);
    }

    public function selecioneSearch($search)
    {
        $this->model = $this->model->selectRaw($search);
    }

    public function getResultado($order = 'status')
    {
        return $this->model->orderByDesc($order);
    }
}
