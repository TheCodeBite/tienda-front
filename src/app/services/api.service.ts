import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://104.215.123.162:3333/';
  url_pay = 'http://104.215.123.162:300/';

  constructor(private http: HttpClient) { }

  addProducto(data: any){
    return this.http.post(this.url + 'producto/crear', data);
  }

  getProducto() {
    return this.http.get(this.url + 'producto');
  }

  realizarPago(body: any){
    return this.http.post(this.url_pay + 'pago_tarjeta', body);
  }

  editarPago(body: any) {
    console.log("este es el json")
    console.log(body)
    return this.http.put(this.url+ 'producto/actualizar/', body)
  }

}
