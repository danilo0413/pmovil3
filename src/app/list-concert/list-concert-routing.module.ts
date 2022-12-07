import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListConcertPage } from './list-concert.page';

const routes: Routes = [
  {
    path: '',
    component: ListConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListConcertPageRoutingModule {}
