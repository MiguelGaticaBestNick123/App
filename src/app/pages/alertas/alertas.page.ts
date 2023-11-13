import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {
  usuario = { username: '' };
  contador: number = 0;
  constructor(private alertController: AlertController, private authService: AuthService) { }



  async ngOnInit() {
    let user = await this.authService.getCurrentUser();
    if (user && user.email) {
      console.log("sexo");
      let emailPrefix = user.email.split('@')[0];
      let contador = localStorage.getItem(emailPrefix);
      console.log(contador);
    }
    else {
      console.log("No aparece como conectado")
    }
    if (this.contador ==null)
    console.log("No autorizado")
  }
  


}

