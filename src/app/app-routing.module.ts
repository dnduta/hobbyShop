import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWrapperComponent } from './common/page-wrapper/page-wrapper.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    component: PageWrapperComponent,
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "shop",
        component: ShopComponent
      },
      {
        path: "details",
        component: ProductDetailComponent
      },
      {
        path: "about-us",
        component: AboutComponent
      },
      {
        path: "contact-us",
        component: ContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
