import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingUpdatePageRoutingModule } from './recording-update-routing.module';

import { RecordingUpdatePage } from './recording-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingUpdatePageRoutingModule
  ],
  declarations: [RecordingUpdatePage]
})
export class RecordingUpdatePageModule {}
