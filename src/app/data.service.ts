import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userRole: string = ''; // Variable para almacenar el rol del usuario

  setRol(rol: string) {
    this.userRole = rol; // Método para establecer el rol del usuario
  }

  getRol() {
    return this.userRole; // Método para obtener el rol del usuario
  }

  getUser() {
    // Lógica para obtener los datos del usuario
    return {
      photo: 'url_de_la_imagen',
      name: 'Nombre del usuario',
      email: 'correo@ejemplo.com',
      // Otros datos del usuario
    };
  }
}
