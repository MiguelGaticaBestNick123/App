import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-olvideclave',
  templateUrl: './olvideclave.page.html',
  styleUrls: ['./olvideclave.page.scss'],
})
export class OlvideclavePage {

  resetPasswordForm: FormGroup;

  constructor(private router: Router) {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  onSubmit() {
    // Enviar correo electrónico de restablecimiento de contraseña
    let userEmail = this.resetPasswordForm.get('email')?.value;
    let userName = userEmail.split('@')[0];
    const templateParams = {
      userName: userName,
      code: '666',
      userEmail: userEmail
    };

    emailjs.send('service_923jdde', 'template_cs289ie', templateParams, '18CIFtrY3ORVXXMQ7')
    .then((result) => {
      console.log('Email successfully sent!');
    })
    .catch((error) => {
        console.error('There has been an error:', error);
    });

    // Redirigir a confirmacion de codigo.
    
    this.router.navigate(['/confirmarcodigo']);
  }

}
