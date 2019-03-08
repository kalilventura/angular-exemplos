import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';

/*
  path: string que desejamos para a nossa rota, no nosso exemplo estamos utilizando home.
  component: passamos o nome do component que desejamos adicionar para a nossa rota.

  Criamos uma nova rota chamada about, em seguida nós passamos que quando a rota for
  algo como: localhost:porta ele deve fazer um redirect para /about.
  Dessa forma toda vez que a nossa App abrir ela irá direcionar para a nossa rota default,
  que nesse exemplo é a rota about.
*/
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Error404Component }
];

/*
  Na linha 18 estamos passando as nossas rotas para o RouterModule
  através do método forRoot e exportando elas no linha 19.
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
