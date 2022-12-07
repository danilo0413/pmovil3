import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
  },
  {
    path: 'recording',
    loadChildren: () => import('./pages/recording/recording.module').then(m => m.RecordingPageModule)
  },
  {
    path: 'recording-create',
    loadChildren: () => import('./pages/recording-create/recording-create.module').then(m => m.RecordingCreatePageModule)
  },
  {
    path: 'recording-update',
    loadChildren: () => import('./pages/recording-update/recording-update.module').then(m => m.RecordingUpdatePageModule)
  },
  {
    path: 'singers',
    loadChildren: () => import('./pages/singers/singers.module').then(m => m.SingersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'create-concert',
    loadChildren: () => import('./create-concert/create-concert.module').then( m => m.CreateConcertPageModule)
  },
  {
    path: 'detail-concert',
    loadChildren: () => import('./detail-concert/detail-concert.module').then( m => m.DetailConcertPageModule)
  },
  {
    path: 'start-concert',
    loadChildren: () => import('./start-concert/start-concert.module').then( m => m.StartConcertPageModule)
  },
  {
    path: 'list-concert',
    loadChildren: () => import('./list-concert/list-concert.module').then( m => m.ListConcertPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
