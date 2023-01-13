import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { HeaderPageComponent } from './website/components/header-page/header-page.component';
import { FooterPageComponent } from './website/components/footer-page/footer-page.component';
import { CarouselComponent } from './website/components/carousel/carousel.component';
import { TypeCardComponent } from './website/pages/type-card/type-card.component';
import { DetailCardComponent } from './website/components/detail-card/detail-card.component';
import { CardComponent } from './website/pages/card/card.component';
import { NavbarComponent } from './website/components/navbar/navbar.component';
import { LayoutComponent } from './website/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HeaderPageComponent,
    FooterPageComponent,
    CarouselComponent,
    TypeCardComponent,
    DetailCardComponent,
    CardComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
