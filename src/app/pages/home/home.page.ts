import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mostrarBotonGenerarCurso: boolean = true;
  mostrarBotonRegistrarAsis: boolean = true;

  constructor(private router: Router, 
    private dataService: DataService) {
    const rol = this.dataService.getRol();

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
