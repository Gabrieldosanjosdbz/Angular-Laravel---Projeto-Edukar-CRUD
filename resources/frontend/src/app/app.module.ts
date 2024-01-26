import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { HomeComponent } from './pages/home/home.component';
import { IncluirComponent } from './pages/incluir/incluir.component';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CadastradoComponent } from './pages/incluir/cadastrado/cadastrado.component';
import { VoltarComponent } from './components/voltar/voltar.component';
import { SucessoComponent } from './components/sucesso/sucesso.component';
import { AlterarCpfComponent } from './pages/alterar-cpf/alterar-cpf.component';
import { AlterarComponent } from './pages/alterar-cpf/alterar/alterar.component';
import { AlteradoComponent } from './pages/alterar-cpf/alterado/alterado.component';
import { ExcluirCpfComponent } from './pages/excluir-cpf/excluir-cpf.component';
import { ExcluidoComponent } from './pages/excluir-cpf/excluido/excluido.component';
import { ConsultarCpfComponent } from './pages/consultar-cpf/consultar-cpf.component';
import { ConsultadoComponent } from './pages/consultar-cpf/consultado/consultado.component';
import { ListarCandidatosComponent } from './pages/listar-candidatos/listar-candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuInicialComponent,
    HomeComponent,
    IncluirComponent,
    CadastradoComponent,
    VoltarComponent,
    SucessoComponent,
    AlterarCpfComponent,
    AlterarComponent,
    AlteradoComponent,
    ExcluirCpfComponent,
    ExcluidoComponent,
    ConsultarCpfComponent,
    ConsultadoComponent,
    ListarCandidatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    //Nessecita do módulo para os campos serem acionados
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
