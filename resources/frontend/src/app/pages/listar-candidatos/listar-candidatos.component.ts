import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/consumo.service';

@Component({
  selector: 'app-listar-candidatos',
  templateUrl: './listar-candidatos.component.html',
  styleUrls: ['./listar-candidatos.component.css']
})
export class ListarCandidatosComponent implements OnInit {
 
  source: any[] = []

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.listaTodosCandidatos().subscribe( e => {
      console.log(e.data)
      this.source = e.data
    })
  }

}
