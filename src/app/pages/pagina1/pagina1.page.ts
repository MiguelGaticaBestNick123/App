import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  rol: string | null = '';
  public alertButtons = ['OK'];
  texto: string = '';

  constructor(private barcodescanner: BarcodeScanner) {}

  async ngOnInit() {
    // Puedes realizar alguna lógica de inicialización aquí si es necesario.
  }

  async scan() {
    try {
      const barcodedata = await this.barcodescanner.scan();
      console.log("Scaneando...", barcodedata);
      this.texto = JSON.stringify(barcodedata);
    } catch (err) {
      console.error("ERROR AL ESCANEAR!!!!", err);
    }
  }
}
