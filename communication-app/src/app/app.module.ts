import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ItemClientsComponent } from './Clients/item-clients/item-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
