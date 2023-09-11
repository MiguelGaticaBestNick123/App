import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

 usuario={
  username:'',
  password:''
 }

  constructor(
    private router:Router,
    private alertController:AlertController,
    private dataService: DataService
    ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    let rol = "";
    if (this.usuario.username=="ale.sepulveda@duocuc.cl" && this.usuario.password=="wacoldo"){
      this.router.navigate(['/home'])
      rol = "profesor";
    }
    else if (this.usuario.username=="soila.cerda@duocuc.cl" && this.usuario.password=="yolaprieto") {
      this.router.navigate(['/home'])
      rol = "estudiante";
    }
    else{
      
      this.presentAlert()
    }
    this.dataService.setRol(rol);
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Usuario y/o password incorrectos",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }
}
