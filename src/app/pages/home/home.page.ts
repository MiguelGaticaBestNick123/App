import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rol: string | null= '';

  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }
  
   async ngOnInit() {  //Crear un return en formulario para k no se vea la pagina
    let user = await this.authService.getCurrentUser();
    if (user && user.email) {
      this.rol = localStorage.getItem(user.email);
    }
    if (this.rol == null || this.rol == '')
    {
      this.router.navigate(['/formulario'])
      console.log("No autorizado")
      console.log(this.rol)
    }
    console.log(this.rol)
}

  onClick(ruta: string) {
    this.router.navigate(['/' + ruta]);
  }
  async logout(){
    try {
      await this.authService.logout();
      this.router.navigate(['/formulario']);

    }
    catch (error) {
      console.log(error)
    }
  }


}
