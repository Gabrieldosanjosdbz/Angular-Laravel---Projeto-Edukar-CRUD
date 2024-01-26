import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/consumo.service';
import { ActionSharedService } from 'src/app/services/shared/action-shared.service';

@Component({
  selector: 'app-alterar-cpf',
  templateUrl: './alterar-cpf.component.html',
  styleUrls: ['./alterar-cpf.component.css']
})
export class AlterarCpfComponent implements OnInit {
  cpf: any;

  constructor(
    private apiService: ApiService,
    private route: Router,
    private navegacao: ActionSharedService
  ) { }

  ngOnInit(): void {
  }

  alterar(){
    this.apiService.buscaCpfCandidato(this.cpf).subscribe(e => {
      if(e.status == 200){
        
        this.navegacao.buscaCandidatoPorId(e);
      
      }else{
        alert('Falha ao cadastrar candidato!')
      }
    })
  }

}
