import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mostrarBotonGenerarCurso: boolean = false;
  mostrarBotonRegistrarAsis: boolean = false;

  constructor(private router: Router, 
    private dataService: DataService) {
    const rol = this.dataService.getRol();
    console.log('Rol del usuario:', rol); // Muestra el rol del usuario en la consola


    if (rol === 'profesor') {
      this.mostrarBotonGenerarCurso = true;
      this.mostrarBotonRegistrarAsis = false;
    }
    if (rol === 'estudiante') {
      this.mostrarBotonGenerarCurso = false;
      this.mostrarBotonRegistrarAsis = true;
    }
  }

  onClick(ruta: string) {
    this.router.navigate(['/' + ruta]);
  }
  
}
