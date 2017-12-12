import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( public _route: Router) { }

  ngOnInit() {
  }

  navegacion(termino:string){

    this._route.navigate(['tienda',termino]);

  }

}
