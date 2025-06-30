import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlEndPoint: string = "https://tiendaweb-3meq.onrender.com/apiWeb/producto"

  private httpHeaders = new HttpHeaders(
    {
      'ContentType': 'application/json'
    }
  )

  private httpHeadersImage = new HttpHeaders(
    {
      'ContentType': 'multipart/form-data'
    }
  )

  constructor(private http: HttpClient) { }

  showProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlEndPoint)
  }

  getProduct(idProducto: number): Observable<Product>{
    return this.http.get<Product>(`${this.urlEndPoint}/${idProducto}`)
  } 

  addProduct(data: Product, imagenFile: File): Observable<Product> {
    console.log(data, imagenFile)
    const formData = new FormData();
    delete data.idProducto;

    formData.append('archivo', imagenFile)
    formData.append('producto', JSON.stringify(data))
    return this.http.post<Product>(
      `${this.urlEndPoint}`,
      formData, 
      {headers: this.httpHeadersImage }
    )
  }

  editProduct(editProduct: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.urlEndPoint}/${editProduct.idProducto}`,
      editProduct,
      {headers: this.httpHeaders}
    )
  }

  deleteProduct(idProducto: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.urlEndPoint}/${idProducto}`,
      {headers: this.httpHeaders}
    )
  }
}
