import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListConcertPageRoutingModule } from './list-concert-routing.module';

import { ListConcertPage } from './list-concert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListConcertPageRoutingModule
  ],
  declarations: [ListConcertPage]
})
export class ListConcertPageModule {}
