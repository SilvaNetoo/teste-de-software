import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';

/**
 * Here are all the root routes of the application
 * @author Silva Neto
 * @version 0.0.1
 */
export const APP_ROUTES: Routes = [
    { path: 'product', component: ProductComponent },
    { path: 'product-list', component: ListProductComponent },
    { path: '', redirectTo: 'product', pathMatch: 'full' }
];
