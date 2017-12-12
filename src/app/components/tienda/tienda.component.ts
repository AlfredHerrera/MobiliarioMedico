import { Component,  Input } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styles: []
})
export class TiendaComponent{

  productos:any[] = []
  public loading = false;
  contador:string="";
  productoIndividual:producto;


  constructor( private activatedRoute: ActivatedRoute,
               private data : DataService) {
                 this.loading = true;
                 this.getProductos();

   }

   sumar(int:string){
     this.productoIndividual = this.productos[int];
   }


    getProductos(){

     this.activatedRoute.params.map( params => params['categoria'])
     .subscribe(  catego => {
         this.data.getCategoria(catego)

         .subscribe( productos =>{

             this.productos.length = 0;
             for (let key$ in productos) {
               this.productos.push(productos[key$]);

             }
                this.loading = false;
         })
     })
   }

}

interface producto{
  nombre:string,
  imagen:string,
  caracteristicas:any[]
}
