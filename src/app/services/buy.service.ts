import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/client.model';
import { RequestBuy } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  private urlEndPoint: string = "https://tiendaweb-3meq.onrender.com/apiWeb/pedido"

  private httpHeaders = new HttpHeaders(
    {
      'ContentType': 'application/json'
    }
  )

  constructor(private http: HttpClient) { }

  showRequests(): Observable<RequestBuy[]>{
    return this.http.get<RequestBuy[]>(this.urlEndPoint)
  }

  getRequest(idRequest: number): Observable<RequestBuy>{
    return this.http.get<RequestBuy>(`${this.urlEndPoint}/${idRequest}`)
  } 

  addRequest(data: RequestBuy): Observable<RequestBuy> {
    delete data.idPedido
    return this.http.post<RequestBuy>(
      `${this.urlEndPoint}`,
      data, 
      {headers: this.httpHeaders }
    )
  }

  editRequest(editRequest: RequestBuy): Observable<RequestBuy> {
    return this.http.put<RequestBuy>(
      `${this.urlEndPoint}/${editRequest.idPedido}`,
      editRequest,
      {headers: this.httpHeaders}
    )
  }

  deleteRequest(idRequest: number): Observable<RequestBuy> {
    return this.http.delete<RequestBuy>(
      `${this.urlEndPoint}/${idRequest}`,
      {headers: this.httpHeaders}
    )
  }
}
