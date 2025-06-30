import { Component, inject, input, OnInit, output } from '@angular/core';
import { Product } from '../../models/products.model';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  product = input<Product>({
    idProducto: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  })
  selectedFile: File | null = null;
  showImage: string | null | ArrayBuffer | undefined= 'camera.svg'
  
  ngOnInit() {
    this.showImage =  this.product().img?.url || 'camera.svg'
    console.log(this.product())
  }
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
    if (!this.selectedFile) {
      Swal.fire({
        title: "Falta un paso más",
        text: "Favor de añadir una imagen",
        icon: "error",
        customClass: {
          confirmButton: "buttonConfirm"
        },
        buttonsStyling: false,
        confirmButtonText: "OK",
        timer: 3000
      });
    } else this.productsService.addProduct(this.product(), this.selectedFile).subscribe((producto) => {
        Swal.fire({
          title: "Éxito",
          text: "Se ha añadido un nuevo producto al catalogo",
          icon: "success",
          customClass: {
            confirmButton: "buttonConfirm"
          },
          buttonsStyling: false,
          confirmButtonText: "OK",
          timer: 3000
        }).then((result) => {
          this.close.emit()
        });
      })
  }

  editProduct() {
    this.productsService.editProduct(this.product()).subscribe((producto) => {
      Swal.fire({
        title: "Éxito",
        text: "Se ha modificado el producto",
        icon: "success",
        customClass: {
          confirmButton: "buttonConfirm"
        },
        buttonsStyling: false,
        confirmButtonText: "OK",
        timer: 3000
      }).then((result) => {
        this.close.emit()
      });
    })
  }
}
