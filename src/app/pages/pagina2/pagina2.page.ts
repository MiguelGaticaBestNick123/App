import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  rol: string | null= '';
  constructor(private authService: AuthService, private router: Router) { }

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

}
