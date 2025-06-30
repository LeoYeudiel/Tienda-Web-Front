import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint: string = "https://tiendaweb-3meq.onrender.com/apiWeb/cliente"

  private httpHeaders = new HttpHeaders(
    {
      'ContentType': 'application/json'
    }
  )

  constructor(private http: HttpClient) { }

  showClients(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint)
  }

  getClient(idCliente: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${idCliente}`)
  } 

  addClient(data: Cliente): Observable<Cliente> {
    delete data.idCliente;
    return this.http.post<Cliente>(
      `${this.urlEndPoint}`,
      data, 
      {headers: this.httpHeaders }
    )
  }

  editClient(editClient: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${this.urlEndPoint}/${editClient.idCliente}`,
      editClient,
      {headers: this.httpHeaders}
    )
  }

  deleteClient(idClient: number): Observable<Cliente> {
    return this.http.delete<Cliente>(
      `${this.urlEndPoint}/${idClient}`,
      {headers: this.httpHeaders}
    )
  }
}
