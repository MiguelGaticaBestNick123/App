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
  contador: number;
  constructor(private alertController: AlertController, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }
  


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        const navigation = this.router.getCurrentNavigation();
        if (navigation && navigation.extras.state) {
            this.contador = navigation.extras.state['contador'];
        } else {
            this.contador = Number(localStorage.getItem('contador')) || 0; // Recuperar el contador de localStorage
        }
    });
}

  


}

