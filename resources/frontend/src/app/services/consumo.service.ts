import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';
  
  

  constructor(private http: HttpClient) {}

  //envia os dados para serem cadastrados na api rest laravel
  //@OBS: Para criar dados em uma api, o uso do método POST é obrigatório 
  criaNovosCandidatos(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.apiUrl +'/candidatos/cria-novos-candidatos', data, httpOptions);
  }

  //envia os dados para serem editados na api rest laravel
  //@OBS: Para editar dados em uma api, o uso do método POST, PUT ou PATH é obrigatório 
  editaNovosCandidatos(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(this.apiUrl +'/candidatos/edita-cpf-candidato', {...data}, httpOptions);
  }

  //Busca dados do candidatos pelo cpf na api rest laravel
  buscaCpfCandidato(cpf: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.apiUrl +'/candidatos/busca-cpf-candidato/'+ cpf, httpOptions);
  }

  //Faz a exclusão de candidato na base de dados
  excluiCandidato(cpf: any): Observable<any>{
    return this.http.delete(this.apiUrl +'/candidatos/exclui-candidato/'+ cpf);
  }

  listaTodosCandidatos(): Observable<any>{
    return this.http.get(this.apiUrl +'/candidatos/informacoes-detalhada-candidato');
  }

}
