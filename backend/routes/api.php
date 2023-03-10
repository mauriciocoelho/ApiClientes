<?php

use App\Http\Controllers\Api\ApiSwaggerController;
use App\Http\Controllers\Api\v1\ClientController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function () {

    Route::apiResource('clients', ClientController::class);

});

Route::get('/doc', [ApiSwaggerController::class, 'getSwagger']);
