import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) { 

    this.cargarInfo();
    this.cargarEquipo();
    
   }


   private cargarEquipo(){

    //leer el archivo JSON
    this.http.get('https://angular-html-5cabd-default-rtdb.firebaseio.com/equipo.json')
    // .subscribe((resp: any) => {
      .subscribe((resp: any) => {
      
      this.equipo = resp;
      // console.log(resp['tweeter']);
      console.log(resp);
    });

   }

   private cargarInfo() {
    console.log('Servicio de InfoPagina');

    //leer el archivo JSON
    this.http.get('assets/data/data-paginas.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp['tweeter']);
    });
   }
}
