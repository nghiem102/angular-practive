import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { FormProductComponent } from './pages/admin/form-product/form-product.component';
import { ManagerComponent } from './pages/admin/manager/manager.component';
import { CartComponent } from './pages/client/cart/cart.component';
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
        path: 'phone',
        component:ProductsComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: '',
            component: ManagerComponent
          },
          {
            path: 'phones',
            component: AdminProductsComponent
          },
          {
            path: 'phones/:id/edit',
            component: FormProductComponent
          },
          {
            path: 'phones/create',
            component: FormProductComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
