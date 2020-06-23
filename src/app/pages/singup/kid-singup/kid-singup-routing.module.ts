import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidSingupPage } from './kid-singup.page';

const routes: Routes = [
  {
    path: '',
    component: KidSingupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidSingupPageRoutingModule {}
