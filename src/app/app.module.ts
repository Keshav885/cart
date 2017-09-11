import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/Admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsFilterComponent } from './components/products/product-filter/products-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {AuthService} from './services/auth.service';
import {AuthGaurd} from './services/auth-gaurd.service';
import {UserService} from './services/user.service';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import {CategoryService} from './services/category.service';
import {ProductService} from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { CartItemsComponent } from './components/cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductsFilterComponent,
    ProductCardComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([

      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'shopping-carts', component: ShoppingCartComponent},

      {path: 'check-out', component: CheckOutComponent, canActivate:[AuthGaurd]},
      {path: 'order/success', component: OrderSuccessComponent, canActivate:[AuthGaurd]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGaurd]},

      {path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGaurd]},
      {path: 'admin/products/new', component: ProductFormComponent, canActivate:[AuthGaurd]},
      {path: 'admin/products/:id', component: ProductFormComponent, canActivate:[AuthGaurd]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate:[AuthGaurd]}
    ])
  ],
  providers: [
    AuthService,
    AuthGaurd,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
