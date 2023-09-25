import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisprofePageRoutingModule } from './asisprofe-routing.module';

import { AsisprofePage } from './asisprofe.page';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisprofePageRoutingModule,
    ComponentsModule, 
  ],
  declarations: [AsisprofePage]
})
export class AsisprofePageModule {}
