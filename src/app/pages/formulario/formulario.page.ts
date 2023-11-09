import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  usuario = {username: '', password: ''};
  role: string = '';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }
  
  onClick(pageName: string) {
    if (pageName === 'olvideclave') {
      this.router.navigate(['/olvideclave']); 
    }
    if (pageName === 'registrarse') {
      this.router.navigate(['/registro']); 
    }
  }

  async ngOnInit() {
    const user = await this.authService.getCurrentUser();
    if (user){
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    this.authService.login(this.usuario.username, this.usuario.password)
    .then((result) => {
    console.log(result);
    this.router.navigate(['/home'])  
    }
    )

    .catch((error:any) => {
      console.error(error);
    });
  
  }
}
