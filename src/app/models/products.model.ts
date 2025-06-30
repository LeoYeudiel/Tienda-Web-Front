export type Product = {
  idProducto?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  img?: ImgProduct;
}

export type ImgProduct = {
  idImagenProducto?: number;
  nombreImg: string;
  url: string;
  publicId: string;
  formato: string;
  producto: string;
}