import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';

import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  stripeTest: FormGroup;
  item_to_pay: any;

  constructor(private api: ApiService, private stripeService: StripeService, private fb: FormBuilder) { }

  datos: any;

  form_producto: FormGroup;

  ngOnInit() {
    this.form_producto = this.fb.group({
      nombre: [''],
      precio: [''],
      descripcion: [''],
      url: ['']
    });

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.obtenerProductos();
  }

  getObjectToPay(item){
    this.item_to_pay = item;
  }

  obtenerProductos() {
    this.api.getProducto().subscribe(response => {
      console.log(response);
      this.datos = response;
    })
  }

  crearProducto() {
    this.api.addProducto(this.form_producto.value).subscribe(response => {
      Swal.fire('Exitoso!', 'Producto guardado correctamente', 'success');
      this.obtenerProductos();
      this.form_producto.reset()
    }, error => {
      Swal.fire('Ups!', 'Tuvimos error con el server', 'error')
      this.obtenerProductos();
    })
  }

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          var json = {
            id: this.item_to_pay.id
          }
          this.api.editarPago(json).subscribe(response => {
            Swal.fire('Exitoso!', 'Producto comprado', 'success');
            location.reload();
          });
        } else if (result.error) {
          // Error creating the token
          console.log("hubo un error")
          console.log(result.error.message);
        }
      });
  }

}
