import { Component, inject, OnInit } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, RouterLink],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  productsService = inject(ProductsService);
  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.showProducts().subscribe(
        (productos) => (this.products = productos)
    )
  }
}
