import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {
  asistencia: string;
  fecha: string;
  asignatura: string;
  registros: any[] = [];
  constructor(private alertController: AlertController, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }
  


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        const navigation = this.router.getCurrentNavigation();
        if (navigation && navigation.extras.state) {
            this.asistencia = navigation.extras.state['asistencia'];
            this.asignatura = this.asistencia.split('@')[0];
            this.fecha = this.asistencia.split('@')[0];
            this.registros.push({ asignatura: this.asignatura, fecha: this.fecha });
        } else {
            this.asistencia = String(localStorage.getItem('asistencia')) || 'no encontrado'; // Recuperar el contador de localStorage
        }
    });
}

  


}

