import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { CarDetail } from '../models/shop-car.model';

@Injectable({
  providedIn: 'root'
})
export class ShopCarService{
  myProducts: CarDetail[] = []
  total = 0;

  constructor() {
    
  }

  addCarProduct(product: Product, cantidad: number) {
    this.myProducts =  [
      ...this.myProducts,
      {
        idProducto: product.idProducto!,
        nombre: product.nombre,
        subtotal: cantidad * product.precio,
        cantidad: cantidad,
        precio: product.precio
      }
    ]
    this.obtenerTotal(this.myProducts)
  }
  
  removeCarProduct(product: CarDetail) {
    this.myProducts = this.myProducts.filter((producto) => producto.idProducto != product.idProducto);
    this.obtenerTotal(this.myProducts)
  }

  modifiedProduct(product: CarDetail) {
    this.myProducts = this.myProducts.map((producto) => {
      if (producto.idProducto == producto.idProducto) {
        producto = {
          ...producto,
          cantidad: producto.cantidad,
          subtotal: producto.cantidad * producto.precio
        }
      }
      return producto;
    })
    this.obtenerTotal(this.myProducts)
  }

  obtenerTotal(productos: CarDetail[]) {
    this.total = 0;
    productos.map((producto) => {
      this.total += producto.subtotal;
    })
  }
}