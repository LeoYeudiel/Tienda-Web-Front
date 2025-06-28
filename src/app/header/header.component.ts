import { Component, inject } from '@angular/core';
import { ShopCarComponent } from "../shop-car/shop-car.component";
import { RouterLink } from '@angular/router';
import { ShopCarService } from '../services/shop-car.service';

@Component({
  selector: 'app-header',
  imports: [ShopCarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {
    class: "container-fluid",
  }
})
export class HeaderComponent {
  clickMenu = false;
  clickCar = false;
  
  shopCarService = inject(ShopCarService);

  openMenu() {
    this.clickMenu = !this.clickMenu;
  }

  openCar() {
    this.clickCar = !this.clickCar;
  }

}
