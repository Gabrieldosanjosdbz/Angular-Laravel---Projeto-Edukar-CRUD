import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionSharedService {

  private SearchSubject: BehaviorSubject<string> = new BehaviorSubject<any>(null);

  constructor(private router: Router) { }

  //Faz o compartilhamento do dado e passa para os companentes responsaveis
  buscaCandidatoPorId(id_candidato: string) {
    this.SearchSubject.next(id_candidato);
    //Faz navegação para a exibição dos dados
    this.router.navigate(['/content/2/alterar-cpf']);

  }

  //Observa e compartilha os dados para os componentes do sistema
  observaDadosCpfCandidato(): Observable<string> {
    return this.SearchSubject.asObservable();
  }

  //Faz o compartilhamento do dado e passa para os companentes responsaveis para o detalhamento
  detalhamentoCandidatoPorId(id_candidato: string) {
    this.SearchSubject.next(id_candidato);
    this.router.navigate(['/content/4/consultado']);

  }

  //Observa e compartilha para o detalhamento
  observaDetalhesDadosCpfCandidato(): Observable<string> {
    return this.SearchSubject.asObservable();
  }

  
}
