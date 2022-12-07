import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartConcertPage } from './start-concert.page';

const routes: Routes = [
  {
    path: '',
    component: StartConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartConcertPageRoutingModule {}
