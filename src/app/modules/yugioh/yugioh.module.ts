import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YugiohRoutingModule } from './yugioh-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TypeCardComponent } from './pages/type-card/type-card.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { CardComponent } from './pages/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterPageComponent,
    CarouselComponent,
    TypeCardComponent,
    DetailCardComponent,
    CardComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, YugiohRoutingModule, MaterialModule],
})
export class YugiohModule {}
