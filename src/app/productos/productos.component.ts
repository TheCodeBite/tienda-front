import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private api: ApiService, private fb: FormBuilder) { }

  datos: any;
  form_producto: FormGroup;

  ngOnInit() {
    this.form_producto = this.fb.group({
      nombre      : [''],
      precio      : [''],
      descripcion : [''],
      url         : ['']    
    })
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.api.getProducto().subscribe(response => {
      console.log(response);
      this.datos = response;
    })
  }

  crearProducto(){
    this.api.addProducto(this.form_producto.value).subscribe(response => {
      Swal.fire('Exitoso!', 'Producto guardado correctamente', 'success');
      this.obtenerProductos();
      this.form_producto.reset()
    }, error => {
      Swal.fire('Ups!', 'Tuvimos error con el server', 'error')
      this.obtenerProductos();
    })
  }
}
