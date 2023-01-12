<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;

trait ApiResponser
{
    protected $messages;
    protected function successResponse(array $data, string $message = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'status' => 'Success',
            'statuscode' => $code,
            'data' => $data,
            'message' => $message,
        ], $code);
    }

    protected function errorResponse(array $data, int $code, string $message = null): JsonResponse
    {
        return response()->json([
            'status' => 'Error',
            'statuscode' => $code,
            'data' => $data,
            'message' => $message,
        ], $code);
    }

    protected function validateForm(array $request, array $rules): bool
    {
        $validator = Validator::make($request, $rules);

        if ($validator->fails()) {
            $this->messages = $validator->messages();
            return false;
        }
        return true;
    }

    protected function errorMessages(): JsonResponse
    {
        $_mensagensErro = [];
        $_chaves = [];

        $contador = 0;

        $_chaves[] = $this->messages->all();
        foreach (array($this->messages->keys())[0] as $valor) {
            $_mensagensErro[$valor] = $_chaves[0][$contador];
            $contador++;
        }

        return $this->errorResponse($_mensagensErro, 422, 'Erro ao processar a operação!');
    }

    public function paginate($items, $perPage = 5, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
