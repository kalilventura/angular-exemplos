import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ItemClientsComponent } from './Clients/item-clients/item-clients.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { TimerComponent } from './parent-child/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientsComponent,
    ParentChildComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
