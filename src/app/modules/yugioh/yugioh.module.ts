import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { CardComponent } from './pages/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from './pages/all-cards/all-cards.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'card/:name',
        component: CardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderPageComponent,
    FooterPageComponent,
    CarouselComponent,
    DetailCardComponent,
    CardComponent,
    NavbarComponent,
    LayoutComponent,
    SearchbarComponent,
    AllCardsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class YugiohModule {}
