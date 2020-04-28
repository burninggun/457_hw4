import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacedetailPageRoutingModule } from './placedetail-routing.module';

import { PlacedetailPage } from './placedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacedetailPageRoutingModule
  ],
  declarations: [PlacedetailPage]
})
export class PlacedetailPageModule {}
