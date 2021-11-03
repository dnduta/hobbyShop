import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWrapperComponent } from './common/page-wrapper/page-wrapper.component';
import { HomeComponent } from './pages/home/home.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
