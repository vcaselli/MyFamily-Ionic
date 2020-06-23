import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupPageRoutingModule } from './singup-routing.module';

import { SingupPage } from './singup.page';
import { PolicyPage } from '../../modal/policy/policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingupPageRoutingModule
  ],
  declarations: [SingupPage, PolicyPage]
})
export class SingupPageModule {}
