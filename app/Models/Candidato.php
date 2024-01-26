<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidato extends Model
{
    use HasFactory;

    protected $table = 'candidatos';
    
    //Seta id como chave primaria
    protected $primaryKey = 'id';

    //Desabilita o timestamp padrão deixando não obrigatório

    protected $fillable = [
        'nome',
        'cpfCnpj',
        'dataNascimento',
        'genero',
        'formacao',
    ];


}
