import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidPage } from './kid.page';

const routes: Routes = [
  {
    path: '',
    component: KidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidPageRoutingModule {}
