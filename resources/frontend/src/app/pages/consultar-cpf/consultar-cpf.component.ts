import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/consumo.service';
import { ActionSharedService } from 'src/app/services/shared/action-shared.service';

@Component({
  selector: 'app-consultar-cpf',
  templateUrl: './consultar-cpf.component.html',
  styleUrls: ['./consultar-cpf.component.css']
})
export class ConsultarCpfComponent implements OnInit {

  cpf: any;

   constructor(
    private apiService: ApiService,
    private route: Router,
    private navegacao: ActionSharedService
  ) { }

  ngOnInit(): void {
  }

  alterar(){

    //Faz requisição para a api rest
    this.apiService.buscaCpfCandidato(this.cpf).subscribe(e => {
      if(e.status == 200){
        //Passa os dados compartilhados 
        this.navegacao.detalhamentoCandidatoPorId(e);
      
      }else{
        alert('Falha ao cadastrar candidato!')
      }
    })
  }

}
