import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TypeCardComponent } from './pages/type-card/type-card.component';
import { CardComponent } from './pages/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: 'yugioh',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/yugioh',
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'type-card/:type',
        component: TypeCardComponent,
      },
      {
        path: 'card/:name',
        component: CardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YugiohRoutingModule {}
