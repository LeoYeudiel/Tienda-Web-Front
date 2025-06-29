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
  selectedFile: File | null = null;
  showImage: string | null | ArrayBuffer = this.product().img?.uri || 'camera.svg'
  
  close = output()
  productsService = inject(ProductsService);

  onClose() {
    console.log(this.product())
    this.close.emit();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      this.showImage = e.target!.result;
    }

    reader.readAsDataURL(this.selectedFile!);
  }

  addProduct() {
    if (!this.selectedFile) return;

    this.productsService.addProduct(this.product(), this.selectedFile).subscribe((producto) => this.close.emit())
  }

  editProduct() {
    this.productsService.editProduct(this.product()).subscribe((producto) => this.close.emit())
  }
}
