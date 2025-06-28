import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsStock: Product[] = [
    {
      "idProducto": 8168,
      "nombre": "Tasty Concrete Gloves",
      "descripcion": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "precio": 485.00,
      "stock": 9121
    },
    {
      "idProducto": 8434,
      "nombre": "Ergonomic Metal Sausages",
      "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "precio": 807.00,
      "stock": 6198
    },
    {
      "idProducto": 6572,
      "nombre": "Fantastic Metal Pants",
      "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "precio": 205.00,
      "stock": 872
    },
    {
      "idProducto": 6971,
      "nombre": "Elegant Frozen Chicken",
      "descripcion": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "precio": 457.00,
      "stock": 6078
    },
    {
      "idProducto": 2533,
      "nombre": "Oriental Metal Computer",
      "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "precio": 323.00,
      "stock": 8682
    },
    {
      "idProducto": 5432,
      "nombre": "Fantastic Fresh Table",
      "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "precio": 453.00,
      "stock": 4421
    },
    {
      "idProducto": 2063,
      "nombre": "Generic Rubber Bike",
      "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "precio": 524.00,
      "stock": 2327
    },
    {
      "idProducto": 2452,
      "nombre": "Luxurious Bronze Sausages",
      "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "precio": 227.00,
      "stock": 3338
    },
    {
      "idProducto": 9582,
      "nombre": "Awesome Metal Ball",
      "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "precio": 623.00,
      "stock": 6359
    },
    {
      "idProducto": 495,
      "nombre": "Generic Granite Gloves",
      "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "precio": 28.00,
      "stock": 9700
    }
  ];

  constructor() { }

  addProduct(data: Product) {
    this.productsStock.push(data);
  }

  editProduct(editProduct: Product) {
    this.productsStock = this.productsStock.map((producto) => {
      if (producto.idProducto == editProduct.idProducto) {
        producto = editProduct
      }
      return producto;
    })
  }

  deleteProduct(idProducto: number) {
    this.productsStock = this.productsStock.filter((producto) => producto.idProducto != idProducto);
  }
}
