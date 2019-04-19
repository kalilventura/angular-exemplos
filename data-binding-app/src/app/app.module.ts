import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';

import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
   declarations: [
      AppComponent,
      StringInterpolationComponent,
      PropertyBindingComponent,
      EventBindingComponent,
      TwoWayDataBindingComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatCardModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatDividerModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
