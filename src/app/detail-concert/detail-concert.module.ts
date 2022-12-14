import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailConcertPageRoutingModule } from './detail-concert-routing.module';

import { DetailConcertPage } from './detail-concert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailConcertPageRoutingModule
  ],
  declarations: [DetailConcertPage]
})
export class DetailConcertPageModule {}
