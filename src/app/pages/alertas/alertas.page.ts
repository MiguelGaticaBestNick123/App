import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

class Asignatura {
    nombre: string;
    totalClases: number;
    asistencias: number = 0;

    constructor(nombre: string, totalClases: number) {
        this.nombre = nombre;
        this.totalClases = totalClases;
    }

    registrarAsistencia() {
        this.asistencias++;
    }

    calcularPorcentaje(): number {
        return (this.asistencias / this.totalClases) * 100;
    }
}

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
    asignaturas: { [key: string]: Asignatura };

    constructor(private alertController: AlertController, private authService: AuthService, private route: ActivatedRoute, private router: Router, private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        this.cargarAsignaturas();
        this.cargarRegistros();

        this.route.queryParams.subscribe(params => {
            const navigation = this.router.getCurrentNavigation();
            this.texto = String(localStorage.getItem('texto')) || 'no encontrado'; 
            if (this.texto && this.texto !== 'no encontrado') { 
                if (navigation && navigation.extras.state) {
                    this.texto = navigation.extras.state['texto'];
                }
                let partes = this.texto.split('@');
                this.asignatura = partes[0];
                this.fecha = partes[1];

                this.registrarAsistenciaAsignatura(this.asignatura);
                this.registros.push({ asignatura: this.asignatura, fecha: this.fecha });
                localStorage.setItem('registros', JSON.stringify(this.registros)); 
                localStorage.removeItem('texto');
                this.changeDetector.detectChanges(); 
            }
        }); 
    }

    cargarAsignaturas() {
        let asignaturasLocalStorage = localStorage.getItem('asignaturas');
        if (asignaturasLocalStorage) {
            let asignaturasData = JSON.parse(asignaturasLocalStorage);
            this.asignaturas = {};
            for (let key in asignaturasData) {
                let asignatura = asignaturasData[key];
                this.asignaturas[key] = new Asignatura(asignatura.nombre, asignatura.totalClases);
                this.asignaturas[key].asistencias = asignatura.asistencias;
            }
        } else {
            this.asignaturas = {
                'Programación movil': new Asignatura('Programación movil', 30),
                'Programación web': new Asignatura('Programación web', 25),
                'Programación de sistemas': new Asignatura('Programación de sistemas', 20),
                'Programación de base de datos': new Asignatura('Programación de base de datos', 28)
            };
        }
    }

    cargarRegistros() {
        let registrosLocalStorage = localStorage.getItem('registros');
        this.registros = registrosLocalStorage ? JSON.parse(registrosLocalStorage) : []; 
    }

    registrarAsistenciaAsignatura(nombreAsignatura: string) {
        if (this.asignaturas[nombreAsignatura]) {
            this.asignaturas[nombreAsignatura].registrarAsistencia();
            localStorage.setItem('asignaturas', JSON.stringify(this.asignaturas));
        }
    }

    obtenerPorcentajeAsignatura(nombreAsignatura: string): number {
        return this.asignaturas[nombreAsignatura] ? this.asignaturas[nombreAsignatura].calcularPorcentaje() : 0;
    }
}
