import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { DetailComponent } from './pages/client/detail/detail.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ProductsComponent } from './pages/client/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'product',
        component:ProductsComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
