import { Component, inject } from '@angular/core';
import { ShopCarService } from '../services/shop-car.service';
import { ProductCarComponent } from "../shop-car/product-car/product-car.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-buy',
  imports: [ProductCarComponent, CurrencyPipe],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  shopCarService = inject(ShopCarService)
}
