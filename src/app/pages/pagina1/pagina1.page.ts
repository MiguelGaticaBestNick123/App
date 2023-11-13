import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  rol: string | null= '';
  contador : number;

  public alertButtons = ['OK'];

  constructor(private alertController: AlertController, private router: Router,  private authService: AuthService) {}

  async scanQR() {
    try {
      const result = await BarcodeScanner.startScan();
      
      if (result.hasContent) {
          console.log('Resultado del escaneo de QR:', result.content);
      }
  } catch (error) {
      console.error('Error durante el escaneo de QR:', error);
  }
  
  }
  async scanOffline() {
    let user = await this.authService.getCurrentUser();
    if (user && user.email) {
      this.contador++;
      let emailPrefix = user.email.split('@')[0];
      localStorage.setItem(emailPrefix, this.contador.toString());
    }
  }
  


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
