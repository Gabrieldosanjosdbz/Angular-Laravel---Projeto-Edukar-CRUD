@extends('layouts.app')

@section('content')
    <h1>Excluir Candidato</h1>

    <form method="post" action="{{ url('/candidatos/destroy') }}">
        @csrf

        <label for="cpfCnpj">CPF/CNPJ do Candidato:</label>
        <input type="text" name="cpfCnpj" required>

        <button type="submit">Excluir Candidato</button>
    </form>
@endsection

