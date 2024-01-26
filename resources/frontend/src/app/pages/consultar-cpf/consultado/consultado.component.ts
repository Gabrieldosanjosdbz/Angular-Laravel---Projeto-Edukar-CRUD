import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/consumo.service';
import { ActionSharedService } from 'src/app/services/shared/action-shared.service';

@Component({
  selector: 'app-consultado',
  templateUrl: './consultado.component.html',
  styleUrls: ['./consultado.component.css']
})
export class ConsultadoComponent implements OnInit {

  id_unique: any 
  nome: string = ''
  cpf: string = ''
  dataNascimento: string = ''
  genero: string = ''
  formacao: string = ''

  subscription: any

  constructor(
    private navigationService: ActionSharedService,
  ) { }

  ngOnInit(): void {
     //Captura os dados ao buscar cpf
     this.subscription = this.navigationService.observaDadosCpfCandidato().subscribe((data: any) => {
      this.nome = data.message.nome
      this.cpf = data.message.cpfCnpj
      this.dataNascimento = data.message.dataNascimento
      this.genero = data.message.genero
      this.formacao = data.message.formacao
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
