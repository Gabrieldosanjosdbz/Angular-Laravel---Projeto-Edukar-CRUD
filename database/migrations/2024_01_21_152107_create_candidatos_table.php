<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidatosTable extends Migration
{
    public function up()
    {
        Schema::create('candidatos', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('cpfCnpj')->unique();
            $table->string('dataNascimento');
            $table->string('genero');
            $table->string('formacao');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('candidatos');
    }
}
