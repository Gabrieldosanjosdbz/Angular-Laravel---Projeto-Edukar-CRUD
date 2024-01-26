<?php

use App\Http\Controllers\CandidatoController;

//Cria novos candidatos
Route::post('/candidatos/cria-novos-candidatos', [CandidatoController::class, 'criaNovosCandidatos']);

//Faz busca de candidatos por cpf/cnpj
Route::get('/candidatos/busca-cpf-candidato/{cpf}', [CandidatoController::class, 'show']);

//Faz edição de um determinado candidato
Route::put('/candidatos/edita-cpf-candidato', [CandidatoController::class, 'edit']);

// Route::put('/candidatos/{cpfCnpj}', [CandidatoController::class, 'update']);

Route::delete('/candidatos/exclui-candidato/{cpf}', [CandidatoController::class, 'delete']);

Route::get('/candidatos/informacoes-detalhada-candidato', [CandidatoController::class, 'index']);
