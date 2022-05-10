import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; //M&L  Para importar el modulo de formularios de angular.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //M&L aquí concluimos con la importación del modulo de formularios.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
