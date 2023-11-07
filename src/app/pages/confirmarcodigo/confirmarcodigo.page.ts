import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-confirmarcodigo',
  templateUrl: './confirmarcodigo.page.html',
  styleUrls: ['./confirmarcodigo.page.scss'],
})
export class ConfirmarcodigoPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
  }

}
