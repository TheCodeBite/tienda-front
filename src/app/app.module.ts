import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxStripeModule } from 'ngx-stripe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagoComponent } from './pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    PagoComponent
  ],
  imports: [
    NgxStripeModule.forRoot('pk_test_2rss5SVRD1HtKT1p6fDVEoVc00cjgyrokn'),
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
