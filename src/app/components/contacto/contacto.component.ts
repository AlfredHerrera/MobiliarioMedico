import { Component, OnInit } from '@angular/core';
declare function initialize();
declare function inicio ();
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    inicio ();
    initialize();
  }

}
