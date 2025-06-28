import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CarDetail } from '../../models/shop-car.model';
import { ProductsService } from '../../services/products.service';
import { ShopCarService } from '../../services/shop-car.service';

@Component({
  selector: 'app-product-car',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-car.component.html',
  styleUrl: './product-car.component.css'
})
export class ProductCarComponent {
  product = input.required<CarDetail>()
  productsService = inject(ProductsService)
  shopCarService = inject(ShopCarService);

  removeProduct() {
    this.shopCarService.removeCarProduct(this.product())
  }

  modifiedProduct() {
    this.shopCarService.modifiedProduct(this.product())
  }
}
