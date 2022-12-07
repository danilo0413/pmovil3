import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartConcertPageRoutingModule } from './start-concert-routing.module';

import { StartConcertPage } from './start-concert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartConcertPageRoutingModule
  ],
  declarations: [StartConcertPage]
})
export class StartConcertPageModule {}
