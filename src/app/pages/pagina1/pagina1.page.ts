import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  rol: string | null = '';
  public alertButtons = ['OK'];

  constructor(private alertController: AlertController, private router: Router, private authService: AuthService) {}

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
    this.router.navigate(['/pagina2']);
  }

  async ngOnInit() {
    // ... (código existente)

    // Llama a takePicture al cargar la página
    await this.takePicture();
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath contendrá una ruta que se puede establecer como src de una imagen.
    // Puedes acceder al archivo original utilizando image.path, que se puede
    // pasar a la API de Filesystem para leer los datos sin procesar de la imagen,
    // si lo deseas (o pasa resultType: CameraResultType.Base64 para getPhoto)
    const imageUrl = image.webPath;

    // Aquí es donde necesitas un elemento HTML con la referencia o ID apropiado
    // para establecer la propiedad src. Reemplaza 'miImagen' con tu referencia real.
    // document.getElementById('miImagen').src = imageUrl;
  }
}
