<!-- resources/views/candidatos/destroy.blade.php -->

@extends('layouts.app')

@section('content')
    <h1>Confirmação de Exclusão</h1>

    <p>Você tem certeza que deseja excluir o candidato?</p>
    
    <form method="post" action="{{ url('/candidatos/' . $cpfCnpj) }}">
        @csrf
        @method('delete')

        <button type="submit">Sim, Excluir</button>
    </form>
    
    <a href="{{ url('/candidatos') }}">Cancelar</a>
@endsection
