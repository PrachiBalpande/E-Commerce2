// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { SearchComponent } from './search/search.component';
// import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
// import { SellerAuthComponent } from './seller-auth/seller-auth.component';
// import { SellerHomeComponent } from './seller-home/seller-home.component';
// import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FooterComponent,
//     HeaderComponent,
//     HomeComponent,
//     ProductDetailsComponent,
//     SearchComponent,
//     SellerAddProductComponent,
//     SellerAuthComponent,
//     SellerHomeComponent,
//     SellerUpdateProductComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    SearchComponent,
    FooterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }