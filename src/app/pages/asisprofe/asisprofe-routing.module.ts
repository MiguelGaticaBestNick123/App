import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisprofePage } from './asisprofe.page';

const routes: Routes = [
  {
    path: '',
    component: AsisprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisprofePageRoutingModule {}
