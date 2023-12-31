import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = {username: '', password: ''}
  constructor(private authService: AuthService, private router: Router,
    private alertController: AlertController) { }

  async ngOnInit() {
    const user = await this.authService.getCurrentUser();
    if (user){
      this.router.navigate(['/home']);
    }
  }
  onClick(pageName: string) {
    if (pageName === 'inicio') {
      this.router.navigate(['/formulario']); 
    }
    
  }
  async showConfirmation() {
    const alert = await this.alertController.create({
        header: 'Registro exitoso',
        message: 'Has sido registrado exitosamente.',
        buttons: [{
            text: 'Aceptar',
            handler: () => {
                this.router.navigate(['/home']);
            }
        }]
    });

    await alert.present();
  }

  async onSubmit() {
    try {
        await this.authService.register(this.usuario.username, this.usuario.password);
        console.log('Registro exitoso');
        if (this.usuario.username ) 
        {
          localStorage.setItem('username', this.usuario.username)
        } 
        this.showConfirmation();
      }
        catch (error) {
        console.error(error);
    }
  }
}