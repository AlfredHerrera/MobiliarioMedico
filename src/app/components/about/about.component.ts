import { Component, OnInit } from '@angular/core';
declare function inicio ();
declare function initialize();
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    inicio ();
    initialize();
  }

}
