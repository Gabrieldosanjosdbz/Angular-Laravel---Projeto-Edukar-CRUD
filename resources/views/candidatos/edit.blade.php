@extends('layouts.app')

@section('content')
    @if(isset($error))
        <p>{{ $error }}</p>
    @else
        <h1>Editar Candidato</h1>

        <form method="post" action="{{ url('/candidatos/' . $candidato->cpfCnpj) }}">
            @csrf
            @method('put')

            <label for="nome">Nome:</label>
            <input type="text" name="nome" value="{{ $candidato->nome }}" required>

            <label for="cpfCnpj">CPF/CNPJ:</label>
            <input type="text" name="cpfCnpj" value="{{ $candidato->cpfCnpj }}" required>

            <label for="dataNascimento">Data de Nascimento:</label>
            <input type="text" name="dataNascimento" value="{{ $candidato->dataNascimento }}" required>

            <label for="genero">Gênero:</label>
            <input type="text" name="genero" value="{{ $candidato->genero }}" required>

            <label for="formacao">Formação:</label>
            <input type="text" name="formacao" value="{{ $candidato->formacao }}" required>

            <!-- Adicione outros campos conforme necessário -->

            <button type="submit">Atualizar Candidato</button>
        </form>
    @endif
@endsection
