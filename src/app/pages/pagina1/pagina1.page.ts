import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  rol: string | null= '';
  public alertButtons = ['OK'];

  constructor(private alertController: AlertController, private router: Router,  private authService: AuthService) {}

  async scanQR() {
    console.log('Iniciando el escaneo de QR...');
    // Verificar permisos de la cámara
    const hasPermission = await BarcodeScanner.checkPermission({ force: true });
    if (hasPermission) {
      // Ocultar el fondo de la WebView
      BarcodeScanner.hideBackground();
      try {
        const result = await BarcodeScanner.startScan();
        console.log('Resultado del escaneo de QR:', result);
        if (result.hasContent) {
          console.log(result.content); // log the raw scanned content
        }
      } catch (error) {
        console.error('Error durante el escaneo de QR:', error);
      }
    } else {
      console.log('Permiso de cámara no concedido');
    }
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
            this.navigateToOtherPage();
          },
        },
      ],
    });

    await alert.present();
  }

  navigateToOtherPage() {
    // Redirige a la página deseada utilizando el enrutador de Ionic
    this.router.navigate(['/pagina2']); // Reemplaza 'otra-pagina' con el nombre de tu página de destino
  }

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

  async ngOnInit() {  //Crear un return en formulario para k no se vea la pagina
    let user = await this.authService.getCurrentUser();
    if (user && user.email) {
      this.rol = localStorage.getItem(user.email);
    }
    if (this.rol == null || this.rol == '')
    {
      this.router.navigate(['/formulario'])
      console.log("No autorizado")
    }
  }
}
