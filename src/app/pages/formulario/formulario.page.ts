import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  usuario = {username: '', password: ''};

  constructor(private authService: AuthService, private router: Router) { }
  
  onClick(pageName: string) {
    if (pageName === 'olvideclave') {
      this.router.navigate(['/olvideclave']); // Aquí se asume que 'olvideclave' es la ruta de tu página.
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.usuario.username, this.usuario.password)
    .then((result) => {
      console.log(result);
      // Redirigir al usuario a la página principal
      this.router.navigate(['/home']);
    })
    .catch((error:any) => {
      // Manejar el error
      console.error(error);
    });
  ;
  }
}
