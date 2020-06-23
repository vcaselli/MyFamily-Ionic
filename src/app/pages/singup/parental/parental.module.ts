import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentalPageRoutingModule } from './parental-routing.module';

import { ParentalPage } from './parental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentalPageRoutingModule
  ],
  declarations: [ParentalPage]
})
export class ParentalPageModule {}
