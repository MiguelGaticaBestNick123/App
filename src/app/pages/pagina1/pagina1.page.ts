import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  public alertButtons = ['OK'];
  texto:string=''
  public asistencia: string = '';

  constructor(private alertController: AlertController, private router: Router,  private authService: AuthService, private barcodescanner:BarcodeScanner) {}


  scan(){
    this.barcodescanner.scan().then(barcodedata => {
        console.log("Scaneando...", barcodedata);
        this.texto = barcodedata.text; 
        console.log(this.texto);
        if (this.texto) {          
            localStorage.setItem('texto', this.texto); 
            let navigationExtras: NavigationExtras = {
                state: {
                    texto: this.texto
                }
            };
            this.presentAlert()
            console.log(this.texto);
            this.router.navigate(['/alertas'], navigationExtras);
        }
    }).catch(err => {
        console.log("ERROR AL ESCANEAR!!!!");
    })
}

  
  
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Listo!',
    message: 'Escaneado correctamente',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          // Redirige a la página deseada aquí
        },
      },
    ],
  });

  await alert.present();
}
  
//https://imgur.io/2q3qHrb

  navigateToOtherPage() {
    this.authService.getCurrentUser().then(user => {
      if (user) {
        const navigationExtras: NavigationExtras = {
          state: {
            users: user.email,
          },
        };
        this.router.navigate(['/alertas']); 
      }
    });
  }

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

  async ngOnInit() {
    let user = await this.authService.getCurrentUser();
  
    if (user && user.email) {

      let emailPrefix = user.email.split('@')[0];
    }
  
    else    {
      this.router.navigate(['/formulario'])
      console.log("No autorizado")
    }
  }
}
