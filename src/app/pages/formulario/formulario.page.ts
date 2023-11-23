import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  usuario = {username: '', password: ''};
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,  private changeDetector: ChangeDetectorRef) { }
  
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
    this.changeDetector.detectChanges(); 
  }

  onSubmit() {
    this.authService.login(this.usuario.username, this.usuario.password)
    .then((result) => {
      if (this.usuario.username ) 
      {
        localStorage.setItem('username', this.usuario.username)
      } 
    console.log(result);
    this.router.navigate(['/home'])  
    }
    )

    .catch((error:any) => {
      console.error(error);
    });
  
  }
}
