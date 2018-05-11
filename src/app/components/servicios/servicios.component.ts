import { Component, OnInit } from '@angular/core';
declare function inicio ();
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    inicio ();
  }

}
