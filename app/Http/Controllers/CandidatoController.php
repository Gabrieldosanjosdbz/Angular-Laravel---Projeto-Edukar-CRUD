<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Candidato;
use Illuminate\Support\Facades\Response; // Adicionado

class CandidatoController extends Controller
{

    //Cria novos candidatos
    public function criaNovosCandidatos(Request $request)
    {
        //Faz validação dos dados enviado do Front-end
        $this->validate($request, [
            'nome' => 'required|string',
            'cpf' => 'required|string',
            'data_nascimento' => 'required|string',
            'genero' => 'required|string',
            'formacao' => 'required|string',
        ]);

        //Salva os dados na base de dados
        $cadastro = Candidato::create([
            'nome' => $request->input('nome'),
            'cpfCnpj' => $request->input('cpf'),
            'dataNascimento' => $request->input('data_nascimento'),
            'genero' => $request->input('genero'),
            'formacao' => $request->input('formacao'),
        ]);
        
        //Verifica se o armazenamento foi bem sucedido
        if($cadastro){
            return Response()->json(['message' => 'Cadidato cadastrado com sucesso!', 'status' => 200], 200);
        }
        // Retorna se ouve falha no cadastro
        return Response()->json(['message' => 'falha ao cadastrar candidato!', 'status' => 422], 422);

    }


    //Faz edição de candidatos
    public function edit(Request $request)
    {
        //Monta vetor de objetos para update em massa
        $data = [
            'nome' => $request->input('nome'),
            'cpfCnpj' => $request->input('cpf'),
            'dataNascimento' => $request->input('data_nascimento'),
            'genero' => $request->input('genero'),
            'formacao' => $request->input('formacao'),
        ];
        
        //Faz atualização dos dados
        $candidato = Candidato::where('id', $request->input('id'))->update($data);

        if ($candidato) {
           return Response()->json([
                'message' => 'Candidato atualizado com sucesso!',
                'status' => 200
           ]);
        }

        return Response()->json([
            'message' => 'Falha ao atualizar candidado!',
            'status' => 422
        ]);
       
    }

    //Faz a exclusão candidato da base de dados
    public function delete(Request $request, $cpf)
    {
        //Filtra candidata na base de dados
        $candidato =  Candidato::where('cpfCnpj', $cpf)->first();

        if ($candidato) {
            //Exclui candidato da base de dados
            $delete = $candidato->delete();
            if($delete){
                return Response()->json(['message' => 'Cadidato deletado com sucesso!', 'status' => 200], 200);
            }
           
        }else{
            return Response()->json(['message' => 'falha ao deletar candidato!', 'status' => 422], 422);
        }


    }

    //lista candidatos
    public function show(Request $request, $cpf)
    {
        $candidato = Candidato::where('cpfCnpj', $cpf)->first();

         //Retorna listagem de usuario
        if ($candidato) {
            return Response()->json(['message' => $candidato, 'status' => 200], 200);
        }
        // Retorna se ouver falha na listagem
        return Response()->json(['message' => 'falha ao listar candidato!', 'status' => 422], 422);
    }

    //Faz detalhamento de informações de um determinado candidato
    public function details(Request $request){
        return response()->json(['message' =>'aaaaaaa']);
    }

    //Faz a listagem de todos os candidatos
    public function index()
    {
        $candidatos = Candidato::all();
        
        if(count($candidatos) > 0){
            return Response()->json(['data' => $candidatos, 'status' => 200], 200);
        }
    }
}
