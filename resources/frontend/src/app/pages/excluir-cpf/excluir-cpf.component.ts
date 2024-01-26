import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/consumo.service';

@Component({
  selector: 'app-excluir-cpf',
  templateUrl: './excluir-cpf.component.html',
  styleUrls: ['./excluir-cpf.component.css']
})
export class ExcluirCpfComponent implements OnInit {

  cpf: any;

  constructor(
    private apiService: ApiService,
    private route: Router
  ) { }

  ngOnInit(): void { }

  //Exclui candidato da base de dados
  excluir() {
     this.apiService.excluiCandidato(this.cpf).subscribe(e => {
      if(e.status == 200){
        this.route.navigate(['/content/1/cadastro-concluido'])
      }else{
        alert('Falha ao cadastrar candidato!')
      }
    })
  }

}
