import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function inicio ();
declare function initialize();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public _route: Router) {
   }

  ngOnInit() {
    inicio();
    initialize();
  }

  navegacion(termino: string) {

    this._route.navigate(['tienda', termino]);

  }

}
