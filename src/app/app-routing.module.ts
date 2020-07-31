import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { PagoComponent } from './pago/pago.component';

const routes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'pago', component: PagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
