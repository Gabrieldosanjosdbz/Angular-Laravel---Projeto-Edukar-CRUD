import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/consumo.service'; // Certifique-se de ajustar o caminho corretamente
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
  
  nome: any;
  cpf: any;
  dataNascimento: any;
  genero: any;
  formacao: any;

  constructor(
    private apiService: ApiService,
    private route: Router
    ) { }

  ngOnInit(): void { }

  //Faz a recuperação dos valores dos campos html
  adicionar() {

    //Converte os dados do tipo string em Objetos
    let data= {
      nome: this.nome,
      cpf: this.cpf,
      data_nascimento: this.dataNascimento,
      genero: this.genero,
      formacao: this.formacao
    }

    //Faz requisições para a api rest
    this.apiService.criaNovosCandidatos(data).subscribe(e => {
      if(e.status == 200){
        this.route.navigate(['/content/1/cadastro-concluido'])
      }else{
        alert('Falha ao cadastrar candidato!')
      }
    })
  } 
}
