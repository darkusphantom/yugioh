import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { YugiohRoutingModule } from './yugioh-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TypeCardComponent } from './pages/type-card/type-card.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { CardComponent } from './pages/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderPageComponent,
    FooterPageComponent,
    CarouselComponent,
    TypeCardComponent,
    DetailCardComponent,
    CardComponent,
    NavbarComponent,
    LayoutComponent,
    SearchbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    YugiohRoutingModule,
    MatButtonModule,
  ],
})
export class YugiohModule {}
