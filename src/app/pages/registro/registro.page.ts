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
  usuario = {username: '', password: '', role: ''}
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
        console.log(this.usuario.role)
        if (this.usuario.username && this.usuario.role) {
          localStorage.setItem(this.usuario.username, this.usuario.role)
          localStorage.setItem('username', this.usuario.username);
        }
        // Almacenar el rol del usuario en el almacenamiento local
        let navigationExtras: NavigationExtras = {
            state: {
                role: this.usuario.role
            }
        };
        

        this.showConfirmation();
    } catch (error) {
        console.error(error);
    }
  }
}
