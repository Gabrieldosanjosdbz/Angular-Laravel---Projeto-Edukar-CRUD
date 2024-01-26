<?php

use App\Http\Controllers\CandidatoController;

Route::get('/candidatos/create', [CandidatoController::class, 'createForm']);           //concluido
Route::post('/candidatos/create', [CandidatoController::class, 'store'])->name('candidatos.store');    //concluido

Route::get('/candidatos/edit', [CandidatoController::class, 'editForm']);       //concluido
Route::post('/candidatos/edit', [CandidatoController::class, 'edit']);          //concluido
Route::put('/candidatos/{cpfCnpj}', [CandidatoController::class, 'update']);    //concluido

Route::get('/candidatos/destroy', [CandidatoController::class, 'destroyForm']); //concluido
Route::post('/candidatos/destroy', [CandidatoController::class, 'destroy']);    //concluido

Route::get('/candidatos/show', [CandidatoController::class, 'showForm']);   //concluido
Route::post('/candidatos/show', [CandidatoController::class, 'show']);      //concluido

Route::get('/candidatos', [CandidatoController::class, 'index']);

Route::get('/', function () {
    return view('welcome');
});
