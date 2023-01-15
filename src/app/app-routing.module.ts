import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/yugioh',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/yugioh/yugioh.module').then((m) => m.YugiohModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
