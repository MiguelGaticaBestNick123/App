import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute, } from '@angular/router';



@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {
  texto: string;
  fecha: string;
  asignatura: string;
  registros: any[] = [];
  constructor(private alertController: AlertController, private authService: AuthService, private route: ActivatedRoute, private router: Router, private changeDetector: ChangeDetectorRef) { }
  


  ngOnInit() {
    let registrosLocalStorage = localStorage.getItem('registros');
    this.registros = registrosLocalStorage ? JSON.parse(registrosLocalStorage) : []; // Recuperar registros del localStorage

    this.route.queryParams.subscribe(params => {
        const navigation = this.router.getCurrentNavigation();
        this.texto = String(localStorage.getItem('texto')) || 'no encontrado'; 
        if (!this.texto || this.texto === 'no encontrado') { 
            if (navigation && navigation.extras.state) {
                this.texto = navigation.extras.state['texto'];
            }
        }
        let partes = this.texto.split('@');
        this.asignatura = partes[0];
        this.fecha = partes[1];
        console.log(this.asignatura);
        console.log(this.fecha);
        this.registros.push({ asignatura: this.asignatura, fecha: this.fecha });
        localStorage.setItem('registros', JSON.stringify(this.registros)); // Almacenar registros en localStorage
        this.changeDetector.detectChanges(); 
        console.log(JSON.stringify(this.registros+' registro'));
    });
}







}

