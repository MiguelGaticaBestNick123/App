import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvideclavePageRoutingModule } from './olvideclave-routing.module';

import { OlvideclavePage } from './olvideclave.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvideclavePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [OlvideclavePage]
})
export class OlvideclavePageModule {}
