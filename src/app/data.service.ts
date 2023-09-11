import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rol: string = '';

  setRol(rol: string) {
    this.rol = rol;
  }

  getRol() {
    return this.rol;
  }
  constructor() { }

}


