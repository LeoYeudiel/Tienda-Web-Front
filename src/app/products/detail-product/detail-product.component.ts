import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ShopCarService } from '../../services/shop-car.service';

@Component({
  selector: 'app-detail-product',
  imports: [CurrencyPipe, FormsModule],
  standalone: true,
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit{
  product?: Product;
  productsService = inject(ProductsService);
  shopCarService = inject(ShopCarService);
  count: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }


  ngOnInit() {
    this.mostrarProducto();
  }
  
  mostrarProducto() {
    this.activatedRoute.params.subscribe((params) => {
      let idProducto = params['idProducto'];
      this.product = this.productsService.productsStock.find((stockProduct) => stockProduct.idProducto == idProducto);
    })
  }

  addProductCar() {
    this.shopCarService.addCarProduct(this.product!, this.count);
    this.count = 0;
  }

}
