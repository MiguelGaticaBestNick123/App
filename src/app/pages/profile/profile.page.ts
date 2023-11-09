import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service'; // Importa tu servicio de datos
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any; // Variable para almacenar los datos del usuario
  rol: string | null= '';

  constructor(private router: Router, private dataService: DataService, private authService: AuthService) {}

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

  getUserData() {
    // Suponiendo que tienes un método en tu servicio para obtener los datos del usuario
    this.userData = this.dataService.getUser(); // Esta función podría variar según tu servicio
  }
}
