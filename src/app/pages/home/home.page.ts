import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rol: string = '';

  constructor(private router: Router, private authService: AuthService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
        if (user) {
            this.firestore.collection('users').doc(user.uid).valueChanges().subscribe((doc: any) => {
                this.rol = doc.role;
                console.log(this.rol);
            });
        }
    });
}

  onClick(ruta: string) {
    this.router.navigate(['/' + ruta]);
  }
}
