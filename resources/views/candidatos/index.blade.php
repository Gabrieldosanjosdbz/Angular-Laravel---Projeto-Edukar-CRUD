<!-- resources/views/candidatos/index.blade.php -->

@extends('layouts.app')

@section('content')
    <h1>Listagem de Candidatos</h1>

    <ul>
        @foreach ($candidatos as $candidato)
            <li><a href="{{ url('/candidatos/' . $candidato->cpfCnpj) }}">{{ $candidato->nome }} - {{ $candidato->cpfCnpj }}</a></li>
        @endforeach
    </ul>
@endsection
