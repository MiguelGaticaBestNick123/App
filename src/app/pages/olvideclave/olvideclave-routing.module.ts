import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvideclavePage } from './olvideclave.page';

const routes: Routes = [
  {
    path: '',
    component: OlvideclavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvideclavePageRoutingModule {}
