<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\ApiController;

use App\Models\Client;
use App\Http\Requests\ClientRequest;
use App\Http\Resources\ClientCollection;
use App\Http\Resources\ClientResource;
use App\Repository\ClientRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClientController extends ApiController
{
    private Client $client;
    private ClientRequest $clientRequest;

    public function __construct(Client $client)
    {
        $this->client = $client;
        $this->clientRequest = new ClientRequest();
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $clientRepository = new ClientRepository($this->client);

        if ($request->has('search')) {
            $clientRepository->selecioneSearch($request->get('search'));
        }

        return new ClientCollection($clientRepository->getResultado()->paginate(500));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ClientRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse
    {
        if ($this->validateForm($request->all(), $this->clientRequest->rules()) == true) {
            return $this->successResponse(ClientResource::mapClientResponse(
                $this->client->create($request->all())
            ), 'Cliente criado com sucesso!', 201);
        }

        return $this->errorMessages();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client): JsonResponse
    {
        $client->delete();
        return $this->successResponse([], 'Cliente apagado com sucesso!', 202);
    }
}
