import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;
  rol: string | null = '';
  usuario: string | null = '';
  correo: string | null = '';

  constructor(private router: Router, private dataService: DataService, private authService: AuthService) {}

  async ngOnInit() {
    let user = await this.authService.getCurrentUser();
    if (user && user.email) {
      this.correo = localStorage.getItem('username');
      if (this.correo) {
        this.usuario = this.correo.split('@')[0];
      }
      this.rol = localStorage.getItem(user.email);
    }

    if (this.rol == null || this.rol == '') {
      this.router.navigate(['/formulario']);
      console.log("No autorizado");
    } else {
      this.getUserData(); // Llama al método para obtener los datos del usuario
    }
  }

  getUserData() {
    // Suponiendo que tienes un método en tu servicio para obtener los datos del usuario
    this.userData = this.dataService.getUser(); // Esta función podría variar según tu servicio
  }
}
