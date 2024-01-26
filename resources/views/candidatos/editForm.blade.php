@extends('layouts.app')

@section('content')
    <h1>Alterar Candidato</h1>

    <form method="post" action="{{ url('/candidatos/edit') }}">
        @csrf

        <label for="cpfCnpj">CPF/CNPJ do Candidato:</label>
        <input type="text" name="cpfCnpj" required>

        <button type="submit">Buscar Candidato</button>
    </form>
@endsection
