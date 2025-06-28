import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductFormComponent } from "./product-form/product-form.component";
import { Product } from '../models/products.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-manager',
  imports: [CurrencyPipe, ProductFormComponent],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent {
  productsService = inject(ProductsService);
  isVisible = false;
  selectecProduct: Product = {
    idProducto: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  } ;

  onCloseModal() {
    this.selectecProduct = {
      idProducto: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0
    }
    this.isVisible = !this.isVisible
  }

  editProduct(producto: Product) {
    this.selectecProduct = producto
    this.isVisible = !this.isVisible
  }

  deleteProduct(idProducto: number) {
    this.productsService.deleteProduct(idProducto);
  }
}
