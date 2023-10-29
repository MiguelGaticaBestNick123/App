import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvideclavePageRoutingModule } from './olvideclave-routing.module';

import { OlvideclavePage } from './olvideclave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvideclavePageRoutingModule
  ],
  declarations: [OlvideclavePage]
})
export class OlvideclavePageModule {}
