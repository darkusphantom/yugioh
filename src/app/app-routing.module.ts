import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { PublicGuard } from './modules/auth/guards/public.guard';
import { CardComponent } from './modules/yugioh/pages/card/card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/yugioh/yugioh.module').then((m) => m.YugiohModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [PublicGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/yugioh/yugioh.module').then((m) => m.YugiohModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'card/:name',
    component: CardComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
