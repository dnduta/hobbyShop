import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWrapperComponent } from './common/page-wrapper/page-wrapper.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { TopSectionComponent } from './common/top-section/top-section.component';
import { FooterSectionComponent } from './common/footer-section/footer-section.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { HomeCategoryDisplayComponent } from './pages/home/home-category-display/home-category-display.component';
import { HomeTopProductsComponent } from './pages/home/home-top-products/home-top-products.component';
import { ShopComponent } from './pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent,
    TopMenuComponent,
    TopSectionComponent,
    FooterSectionComponent,
    HomeComponent,
    SliderComponent,
    HomeCategoryDisplayComponent,
    HomeTopProductsComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
