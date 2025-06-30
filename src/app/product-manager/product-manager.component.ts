import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductFormComponent } from "./product-form/product-form.component";
import { Product } from '../models/products.model';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "¿Estás seguro de eliminar?",
      icon: "warning",
      showCancelButton: true,
      customClass: {
        confirmButton: "buttonConfirm",
        cancelButton: "buttonCancel"
      },
      buttonsStyling: false,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteProduct(idProducto).subscribe(
          (response) =>
            this.productsService.showProducts().subscribe(
              (productos) => {
                this.products = productos
                Swal.fire({
                  title: "Éxito",
                  text: "Se ha eliminado el producto del catalogo",
                  icon: "success",
                  customClass: {
                    confirmButton: "buttonConfirm"
                  },
                  buttonsStyling: false,
                  confirmButtonText: "OK",
                  timer: 3000
                })
              }
            )
        );
      }
    });
  }
}
