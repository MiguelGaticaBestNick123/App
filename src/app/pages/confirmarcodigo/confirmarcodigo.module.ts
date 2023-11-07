import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarcodigoPageRoutingModule } from './confirmarcodigo-routing.module';

import { ConfirmarcodigoPage } from './confirmarcodigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarcodigoPageRoutingModule
  ],
  declarations: [ConfirmarcodigoPage]
})
export class ConfirmarcodigoPageModule {}
