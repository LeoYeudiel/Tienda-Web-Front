export type Car = {
  total: number;
  productos: CarDetail[]
}

export type CarDetail = {
  idProducto: number;
  nombre: string;
  precio: number;
  cantidad: number;
  subtotal: number;
}