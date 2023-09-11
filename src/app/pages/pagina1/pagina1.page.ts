import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  public alertButtons = ['OK'];

  constructor(private alertController: AlertController, private router: Router) {}

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


  
  ngOnInit() {
  }
  

}
