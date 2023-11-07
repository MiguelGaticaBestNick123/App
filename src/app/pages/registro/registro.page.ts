import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
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

  ngOnInit() {
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
        await this.authService.register(this.usuario.username, this.usuario.password, this.usuario.role);
        console.log('Registro exitoso');
        this.showConfirmation();
    } catch (error) {
        console.error(error);
    }
}




}
