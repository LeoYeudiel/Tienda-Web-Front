import { Component, inject } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, RouterLink],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsService = inject(ProductsService);
  products = this.productsService.productsStock;
}
