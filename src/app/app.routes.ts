import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { BuyComponent } from './buy/buy.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detailProduct/:idProducto', component: DetailProductComponent },
  { path: 'productManager', component: ProductManagerComponent },
  { path: 'employeeManager', component: EmployeeManagerComponent },
  { path: 'buy', component: BuyComponent}
];
