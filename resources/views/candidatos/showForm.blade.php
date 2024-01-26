@extends('layouts.app')

@section('content')
    <h1>Consultar Candidato</h1>

    <form method="post" action="{{ url('/candidatos/show') }}">
        @csrf

        <label for="cpfCnpj">CPF/CNPJ do Candidato:</label>
        <input type="text" name="cpfCnpj" required>

        <button type="submit">Consultar Candidato</button>
    </form>
@endsection
