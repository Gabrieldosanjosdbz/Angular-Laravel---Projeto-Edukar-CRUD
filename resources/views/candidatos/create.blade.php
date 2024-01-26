<!-- resources/views/candidatos/create.blade.php -->

@extends('layouts.app')

@section('content')
    <h1>Criar Novo Candidato</h1>

    <form method="post" action="{{ route('candidatos.store') }}">
        @csrf

        <label for="nome">Nome:</label>
        <input type="text" name="nome" required>

        <label for="cpfCnpj">CPF/CNPJ:</label>
        <input type="text" name="cpfCnpj" required>

        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="text" name="dataNascimento" required>

        <label for="genero">Gênero:</label>
        <input type="text" name="genero" required>

        <label for="formacao">Formação:</label>
        <input type="text" name="formacao" required>

        <button type="submit">Criar Candidato</button>
    </form>
@endsection
