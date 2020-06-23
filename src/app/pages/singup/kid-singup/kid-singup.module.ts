import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidSingupPageRoutingModule } from './kid-singup-routing.module';

import { KidSingupPage } from './kid-singup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidSingupPageRoutingModule
  ],
  declarations: [KidSingupPage]
})
export class KidSingupPageModule {}
