import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service'; // Importa tu servicio de datos

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any; // Variable para almacenar los datos del usuario

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.getUserData(); // Llama a una función para cargar los datos del usuario
  }

  getUserData() {
    // Suponiendo que tienes un método en tu servicio para obtener los datos del usuario
    this.userData = this.dataService.getUser(); // Esta función podría variar según tu servicio
  }
}
