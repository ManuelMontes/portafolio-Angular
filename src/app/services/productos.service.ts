import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInter } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  producto: ProductoInter[] = [];
  cargando = true;
  productosFiltrado: ProductoInter[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){

    return new Promise((resolve,reject) =>{
      this.http.get('https://angular-html-5cabd-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: any) => {
          this.producto = resp;
          setTimeout(() => {
            this.cargando = false;
          }, 2000);
        });
        // resolve();

    });


   }

   getProducto(id: String){
    return this.http.get(`https://angular-html-5cabd-default-rtdb.firebaseio.com/productos/${id}.json`)
   }

   buscarProducto(termino: string){

    if(this.producto.length === 0){
      this.cargarProductos().then(()=>{
        //ejecutar despues de tener los productos
        this.filtrarProductos(termino);
      })
    }
      else
      {
        this.filtrarProductos(termino);
      }
    // this.productosFiltrado = this.producto.filter(producto => {
    //   return true;
    // });
    // console.log(this.productosFiltrado);
   }
   private filtrarProductos(termino: string){
      console.log(this.producto);
      this.productosFiltrado = [];
      termino = termino.toLocaleLowerCase();
      this.producto.forEach(prod => {
        const tituloLower = prod.titulo.toLocaleLowerCase();
        if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
          this.productosFiltrado.push(prod);
        }
      })
   }
}
