import { ShowValidateComponent } from './components/admin/show-validate/show-validate.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { HeaderComponent } from './components/client/header/header.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ProductsComponent } from './pages/client/products/products.component';
import { DetailComponent } from './pages/client/detail/detail.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { ProductService } from './services/product.service';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ManagerComponent } from './pages/admin/manager/manager.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { FormProductComponent } from './pages/admin/form-product/form-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from './components/admin/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WebsiteLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
    DetailComponent,
    CartComponent,
    SidebarComponent,
    DashboardComponent,
    ManagerComponent,
    AdminProductsComponent,
    FormProductComponent,
    ShowValidateComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
