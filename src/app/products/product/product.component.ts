import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = input.required<Product>();
}
