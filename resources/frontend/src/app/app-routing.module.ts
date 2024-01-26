import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IncluirComponent } from './pages/incluir/incluir.component';
import { CadastradoComponent } from './pages/incluir/cadastrado/cadastrado.component';
import { AlterarCpfComponent } from './pages/alterar-cpf/alterar-cpf.component';
import { AlterarComponent } from './pages/alterar-cpf/alterar/alterar.component';
import { AlteradoComponent } from './pages/alterar-cpf/alterado/alterado.component';
import { ExcluirCpfComponent } from './pages/excluir-cpf/excluir-cpf.component';
import { ExcluidoComponent } from './pages/excluir-cpf/excluido/excluido.component';
import { ConsultarCpfComponent } from './pages/consultar-cpf/consultar-cpf.component';
import { ConsultadoComponent } from './pages/consultar-cpf/consultado/consultado.component';
import { ListarCandidatosComponent } from './pages/listar-candidatos/listar-candidatos.component';

const routes: Routes = [
  //Page home
  { path: '', component: HomeComponent, pathMatch: 'full' },

  //page incluir
  { path: 'content/1', component: IncluirComponent, pathMatch: 'full'},
    { path: 'content/1/cadastro-concluido', component: CadastradoComponent},

  //page alterar
  { path: 'content/2', component: AlterarCpfComponent},
    { path: 'content/2/alterar-cpf', component: AlterarComponent }, 
      { path: 'content/2/alterar-cpf/alteracao-concluida', component: AlteradoComponent},

  //page excluir
  { path: 'content/3', component: ExcluirCpfComponent},
    { path: 'content/3/exclusao-concluida', component: ExcluidoComponent},

  //page consultarCpf
  { path: 'content/4', component: ConsultarCpfComponent},
    { path: 'content/4/consultado', component: ConsultadoComponent},

  { path: 'content/5', component: ListarCandidatosComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
