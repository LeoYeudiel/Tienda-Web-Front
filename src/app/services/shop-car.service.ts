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
    //En caso de que ya exista, modifica sólo la cantidad, caso contrario, la añade
    if (this.myProducts.some(p => p.idProducto === product.idProducto)) {
      this.modifiedProduct({
        idProducto: product.idProducto!,
        nombre: product.nombre,
        subtotal: cantidad * product.precio,
        cantidad: cantidad,
        precio: product.precio
      })
    } else {
      if (cantidad > 0) {
        this.myProducts = [
          ...this.myProducts,
          {
            idProducto: product.idProducto!,
            nombre: product.nombre,
            subtotal: cantidad * product.precio,
            cantidad: cantidad,
            precio: product.precio
          }
        ]
      }
    }
    this.obtenerTotal(this.myProducts)
  }
  
  removeCarProduct(product: CarDetail) {
    this.myProducts = this.myProducts.filter((producto) => producto.idProducto != product.idProducto);
    this.obtenerTotal(this.myProducts)
  }

  modifiedProduct(product: CarDetail) {
    this.myProducts = this.myProducts.map((producto) => {
      if (producto.idProducto == product.idProducto) {
        producto = {
          ...producto,
          cantidad: product.cantidad,
          subtotal: product.cantidad * producto.precio!
        }
      }
      return producto;
    })

    this.myProducts = this.myProducts.filter((productos) => productos.cantidad > 0);
    this.obtenerTotal(this.myProducts)
  }

  obtenerTotal(productos: CarDetail[]) {
    this.total = 0;
    productos.map((producto) => {
      this.total += producto.subtotal!;
    })
  }
}