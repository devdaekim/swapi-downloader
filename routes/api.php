<?php

use App\Http\Controllers\CSVController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('/characters/csv', [CSVController::class, 'generate']);
});
