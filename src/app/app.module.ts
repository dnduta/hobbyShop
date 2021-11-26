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
import { SortByComponent } from './pages/shop/widgets/sort-by/sort-by.component';
import { CategoriesComponent } from './pages/shop/widgets/categories/categories.component';
import { GridProductComponent } from './pages/shop/grid-product/grid-product.component';
import { PaginationComponent } from './pages/shop/widgets/pagination/pagination.component';
import { EnquiryFormComponent } from './pages/shop/widgets/enquiry-form/enquiry-form.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductImageSliderComponent } from './pages/product-detail/product-image-slider/product-image-slider.component';
import { ReviewsComponent } from './pages/product-detail/reviews/reviews.component';
import { RelatedProductsComponent } from './pages/shop/related-products/related-products.component';

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
    ShopComponent,
    SortByComponent,
    CategoriesComponent,
    GridProductComponent,
    PaginationComponent,
    EnquiryFormComponent,
    ProductDetailComponent,
    ProductImageSliderComponent,
    ReviewsComponent,
    RelatedProductsComponent
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
