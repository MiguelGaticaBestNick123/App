import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarcodigoPage } from './confirmarcodigo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarcodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarcodigoPageRoutingModule {}
