import { Component, inject, OnInit } from '@angular/core';
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
export class ProductManagerComponent implements OnInit{
  products: Product[] = [];
  isVisible = false;
  selectecProduct: Product = {
    idProducto: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  } ;
  
  productsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.showProducts().subscribe(
      (productos) => (this.products = productos)
    )
  }

  onCloseModal() {
    this.selectecProduct = {
      idProducto: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0
    }
    this.productsService.showProducts().subscribe(
      (productos) => this.products = productos
    )
    this.isVisible = !this.isVisible
  }

  editProduct(producto: Product) {
    this.selectecProduct = producto
    this.isVisible = !this.isVisible
  }

  deleteProduct(idProducto: number) {
    this.productsService.deleteProduct(idProducto).subscribe(
      (response) =>
        this.productsService.showProducts().subscribe(
          (productos) => this.products = productos
        )
    );
  }
}
