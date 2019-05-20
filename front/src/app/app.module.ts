import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.router';
import { ErrorComponent } from './error/error.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/service/product.service';

const components = [
  AppComponent,
  ErrorComponent,
  ListProductComponent,
  ProductComponent,
  HeaderComponent
];


@NgModule({
  declarations: [
    components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
