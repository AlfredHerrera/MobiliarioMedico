import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  description = '';
  titulo = '';
  keywords = '';

  constructor( public _route: Router,
               public title: Title,
               public meta: Meta) {

                this.getDataRoute().subscribe(data => {
                  this.titulo = data.titulo;
                  this.title.setTitle( this.titulo); // sirve para poner el titulo a la pagina
                  // tslint:disable-next-line:prefer-const
                  let metaTagDescription: MetaDefinition = {
                    name: 'description',
                    content: data.description
                  };
                  // tslint:disable-next-line:prefer-const
                  let metaTagKeywords: MetaDefinition = {
                    name: 'keywords',
                    content: data.keywords
                  };
                  this.meta.updateTag(metaTagKeywords);
                  this.meta.updateTag(metaTagDescription);

                });
                }

  ngOnInit() {
  }

  navegacion(termino: string) {

    this._route.navigate(['tienda', termino]);

  }

  getDataRoute() {
    return this._route.events
      .filter ( evento => evento instanceof ActivationEnd ) // Le dices traiga el evento del router
      .filter ( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
      // le dices que solo muestre los objetos que firstChild = null
      .map ((evento: ActivationEnd) => evento.snapshot.data ); // Le dices que solo quieres lo que contenga evento.snapshot.data
  }

}
