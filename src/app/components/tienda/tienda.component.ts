import { Component,  Input } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { ActivatedRoute, Router } from '@angular/router';
declare function inicio ();

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styles: []
})
export class TiendaComponent {

  productos: producto[] = [];
  public loading = false;
  contador = '';
  productoIndividual: producto;


  constructor( private activatedRoute: ActivatedRoute,
               private data: DataService,
                public _route: Router) {
                inicio ();
                this.loading = true;
                 this.getProductos();

   }

   sumar(int: string) {
     this.productoIndividual = this.productos[int];
   }

    getProductos() {

     this.activatedRoute.params.map( params => params['categoria'])
     .subscribe(  catego => {
         this.data.getCategoria(catego)

         .subscribe( productos => {

             this.productos.length = 0;
             // tslint:disable-next-line:forin
             for (const key$ in productos) {
               this.productos.push(productos[key$]);
             }
                this.loading = false;
         });
     });
   }

   mover() {
    this._route.navigate(['contacto']);
   }

}

// tslint:disable-next-line:class-name
interface producto {
  nombre: string;
  imagen: string;
  caracteristicas: {
    caracte1: string
    caracte2: string
    caracte3: string
    caracte4: string
    caracte5: string
  };
}
