import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../models/products.model';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  product = input<Product>({
    idProducto: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  })

  close = output()
  productsService = inject(ProductsService);

  onClose() {
    this.close.emit();
  }

  addProduct() {
    this.product().idProducto = Math.floor((Math.random() * 9999)) + 1;
    this.productsService.addProduct(this.product())
    this.close.emit()
  }

  editProduct() {
    this.productsService.editProduct(this.product())
    this.close.emit()
  }
}
