import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-olvideclave',
  templateUrl: './olvideclave.page.html',
  styleUrls: ['./olvideclave.page.scss'],
})
export class OlvideclavePage {
  resetPasswordForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }
  
  onSubmit() {
    // Enviar correo electrónico de restablecimiento de contraseña
    let userEmail = this.resetPasswordForm.get('email')?.value;
    
    this.authService.resetPassword(userEmail)
    .then(() => {
      console.log('Correo de restablecimiento de contraseña enviado!');
      this.showConfirmation();
      
    })
    .catch((error) => {
        console.error('Ha habido un error:', error);
    });
  }
  async showConfirmation() {
    const alert = await this.alertController.create({
        header: 'Se ha enviado el correo!',
        message: `Revise su bandeja de entrada o spam | Correo : [${this.resetPasswordForm.get('email')?.value}]`,
        buttons: [{
            text: 'Aceptar',
            handler: () => {
                this.router.navigate(['/formulario']);
            }
        }]
        
    });
    await alert.present();
  }
  onClick(pageName: string) {
    if (pageName === 'inicio') {
      this.router.navigate(['/formulario']); 
    }
    
  }
}
