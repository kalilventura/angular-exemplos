import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { DiversaoComponent } from 'src/app/pages/diversao/diversao.component';
import { RestaurantesComponent } from 'src/app/pages/restaurantes/restaurantes.component';
import { OfertaComponent } from '../pages/oferta/oferta.component';
import { ComoUsarComponent } from '../pages/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from '../pages/oferta/onde-fica/onde-fica.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  // Se acessarmos o localhost/oferta sem passar um Id ele vai retornar para o home
  { path: 'oferta', component: HomeComponent },
  // Quando o path for acessado, vai ser passado um parametro que poderemos recuperar, no caso o ID
  // Para rotas filhas
  { path: 'oferta/:id', component: OfertaComponent,
  children: [
    { path: '', component: ComoUsarComponent },
    { path: 'como-usar', component: ComoUsarComponent },
    { path: 'onde-fica', component: OndeFicaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
