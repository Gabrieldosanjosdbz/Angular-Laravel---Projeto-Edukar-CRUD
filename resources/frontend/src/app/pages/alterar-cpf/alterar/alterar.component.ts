import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/consumo.service';
import { ActionSharedService } from 'src/app/services/shared/action-shared.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {
  
  id_unique: any 
  nome: string = ''
  cpf: string = ''
  dataNascimento: string = ''
  genero: string = ''
  formacao: string = ''

  subscription: any

  constructor(
    private navigationService: ActionSharedService,
    private apiService: ApiService,
    private route: Router
  ) { }

  ngOnInit(): void {
    //Captura os dados ao buscar cpf
    this.subscription = this.navigationService.observaDadosCpfCandidato().subscribe((data: any) => {
      this.id_unique = data.message.id
      this.nome = data.message.nome
      this.cpf = data.message.cpfCnpj
      this.dataNascimento = data.message.dataNascimento
      this.genero = data.message.genero
      this.formacao = data.message.formacao
    });
  }

  adicionar(event: any){

    //Monta objeto dos dados
    let data = {
      id:  this.id_unique,
      nome: this.nome,
      cpf: this.cpf,
      data_nascimento: this.dataNascimento,
      genero: this.genero,
      formacao: this.formacao
    }

    //envia para a api rest
    this.apiService.editaNovosCandidatos(data).subscribe( e => {
      if(e.status == 200){
        this.route.navigate(['/content/2/alterar-cpf/alteracao-concluida'])
      }else{
        alert('Falha ao atualiza dados do candidato')
      }
    })

  }

  //Destrou a observação dos dados compartilhado
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
