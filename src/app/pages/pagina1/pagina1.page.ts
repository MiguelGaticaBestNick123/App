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
  rol: string | null= '';

  public alertButtons = ['OK'];
  texto:string=''
  public contador: number = 0;

  constructor(private alertController: AlertController, private router: Router,  private authService: AuthService, private barcodescanner:BarcodeScanner) {}


  scan(){
    this.barcodescanner.scan().then(barcodedata => {
        console.log("Scaneando...", barcodedata);
        this.texto = barcodedata.text; // Obtener el texto del código QR
        if (this.texto === 'https://imgur.com/2q3qHrb') {
            this.contador++;
            localStorage.setItem('contador', this.contador.toString()); // Almacenar el contador en localStorage
            let navigationExtras: NavigationExtras = {
                state: {
                    contador: this.contador
                }
            };
            this.router.navigate(['/alertas'], navigationExtras);
        }
    }).catch(err => {
        console.log("ERROR AL ESCANEAR!!!!");
    })
}

  
  
  async scanOffline() {
    let user = await this.authService.getCurrentUser();
    if (user && user.email) {
      this.contador++;
      let emailPrefix = user.email.split('@')[0];
      localStorage.setItem(emailPrefix, this.contador.toString());
    }
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
      this.rol = localStorage.getItem(user.email);
      let emailPrefix = user.email.split('@')[0];
      let contadorStr = localStorage.getItem(emailPrefix);
      this.contador = contadorStr ? parseInt(contadorStr) : 0;
    }
  
    if (this.rol == null || this.rol == '')
    {
      this.router.navigate(['/formulario'])
      console.log("No autorizado")
    }
  }
}
