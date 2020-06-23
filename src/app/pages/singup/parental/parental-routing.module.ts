import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentalPage } from './parental.page';

const routes: Routes = [
  {
    path: '',
    component: ParentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentalPageRoutingModule {}
