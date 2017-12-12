import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http'; //modificar los headers para modificar la peticion
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class DataService {
  

  constructor(public _http: HttpClient) { }


  getCategoria(catego:string){

    return this._http.get('https://paginaweb-9bc4b.firebaseio.com/categoria/'+catego+'.json');
  }

}
