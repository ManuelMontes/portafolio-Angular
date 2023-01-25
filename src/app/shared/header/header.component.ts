import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfopaginaService } from '../../services/infopagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(public infopaginaService: InfopaginaService,
              private router: Router){  }

  buscarProducto(termino: string){
    // console.log(termino);
    if(termino.length < 1 ) return;
    
    this.router.navigate(['/search',termino]);

  }

}
