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
  usuario: string | null = '';
  correo: string | null = '';

  constructor(private router: Router, private dataService: DataService, private authService: AuthService) {}

  async ngOnInit() {
    console.log(localStorage.getItem('username'))
    let user = await this.authService.getCurrentUser();
    this.correo = localStorage.getItem('username');
    if (this.correo) {
      this.usuario = this.correo.split('@')[0];
    }
    if (user && user.email) {
      this.getUserData(); 
    }
    else {
      this.router.navigate(['/formulario']);
      console.log("No autorizado");
    }
  }

  getUserData() {
    this.userData = this.dataService.getUser(); 
  }
}
