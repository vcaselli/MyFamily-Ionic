import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'parental',
    loadChildren: () => import('./pages/singup/parental/parental.module').then( m => m.ParentalPageModule)
  },
  {
    path: 'kid',
    loadChildren: () => import('./pages/singup/kid/kid.module').then( m => m.KidPageModule)
  },
  {
    path: 'kid-singup',
    loadChildren: () => import('./pages/singup/kid-singup/kid-singup.module').then( m => m.KidSingupPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./pages/singup/singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/singup/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/modal/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'new-profile',
    loadChildren: () => import('./pages/new-profile/new-profile.module').then( m => m.NewProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
