import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) { 

    console.log('Servicio de InfoPagina');

    //leer el archivo JSON
    this.http.get('assets/data/data-paginas.json')
    .subscribe(resp => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp['tweeter']);
    });
   }
}
