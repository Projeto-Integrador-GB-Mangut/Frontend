import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { AlertasService } from './service/alertas.service';
import { OrderModule } from 'ngx-order-pipe';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MenuhomeComponent } from './menu/menuhome/menuhome.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroComponent,
    LoginComponent,
    QuemsomosComponent,
    RodapeComponent,
    InicioComponent,
    TemaComponent,
    UsuarioEditComponent,
    PostagemEditComponent,
    TemaEditComponent,
    PostagemDeleteComponent,
    TemaDeleteComponent,
    AlertasComponent,
    MenuhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
