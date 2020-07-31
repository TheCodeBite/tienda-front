import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  addProducto(data: any){
    return this.http.post(this.url + 'producto/crear', data);
  }

  getProducto() {
    return this.http.get(this.url + 'producto');
  }

}
