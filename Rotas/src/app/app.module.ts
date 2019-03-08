import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*
  RouterOutlet é uma das diretivas de Router.
  Quando nós importamos AppRoutingModule em AppModule,
  ele nós permite adicioná-la dentro do arquivo HTML do nosso AppComponent,
  dessa forma nós podemos passar as nossas rotas para que ele possa interpreta-las
  e direcionar para o component correto.
*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
