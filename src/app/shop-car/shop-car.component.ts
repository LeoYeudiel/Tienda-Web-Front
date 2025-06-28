import { Component, inject, output } from '@angular/core';
import { ProductCarComponent } from "./product-car/product-car.component";
import { CurrencyPipe } from '@angular/common';
import { ShopCarService } from '../services/shop-car.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-car',
  imports: [ProductCarComponent, CurrencyPipe, RouterLink],
  standalone: true, 
  templateUrl: './shop-car.component.html',
  styleUrl: './shop-car.component.css'
})
export class ShopCarComponent {
  close = output();
  shopCarService = inject(ShopCarService);

  onClose() {
    this.close.emit();
  }
}
