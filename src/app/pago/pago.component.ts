import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
 

  

  constructor( private api:ApiService , private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

}
