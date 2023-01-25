import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    constructor(private route: ActivatedRoute,
                public productosService: ProductosService){

    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.route.params
      .subscribe(params => {
        console.log(params['termino']);
        this.productosService.buscarProducto(params['termino']);
      });      
    }

    
}
