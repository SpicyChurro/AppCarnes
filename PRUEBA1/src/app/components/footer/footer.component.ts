import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio : number;//propiedad anio que llama constructor
  constructor() {
    this.anio = new Date().getFullYear();// se llama al año actual

   }

  ngOnInit(): void {
    
  }

  
}
