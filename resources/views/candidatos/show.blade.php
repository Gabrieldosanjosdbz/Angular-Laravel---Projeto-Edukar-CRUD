@extends('layouts.app')

@section('content')
    @if(isset($error))
        <p>{{ $error }}</p>
    @else
        <h1>Detalhes do Candidato</h1>

        <ul>
            <li><strong>Nome:</strong> {{ $candidato->nome }}</li>
            <li><strong>CPF/CNPJ:</strong> {{ $candidato->cpfCnpj }}</li>
            <li><strong>Data de Nascimento:</strong> {{ $candidato->dataNascimento }}</li>
            <li><strong>Gênero:</strong> {{ $candidato->genero }}</li>
            <li><strong>Formação:</strong> {{ $candidato->formacao }}</li>
        </ul>
    @endif
@endsection

