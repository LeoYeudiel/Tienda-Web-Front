import { Injectable } from '@angular/core';
import { Empleado } from '../models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private urlEndPoint: string = "http://localhost:8082/apiWeb/empleado"

  private httpHeaders = new HttpHeaders(
    {
      'ContentType': 'application/json'
    }
  )

  constructor(private http: HttpClient) { }

  showEmployees(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.urlEndPoint)
  }

  getEmployee(idEmpleado: number): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.urlEndPoint}/${idEmpleado}`)
  }

  addEmployee(data: Empleado): Observable<Empleado> {
    delete data.idEmpleado;
    return this.http.post<Empleado>(
      `${this.urlEndPoint}`,
      data,
      {headers:this.httpHeaders}
    )
  }

  editEmployee(editEmpleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(
      `${this.urlEndPoint}/${editEmpleado.idEmpleado}`,
      editEmpleado,
      {headers:this.httpHeaders}
    )
  }

  deleteEmployee(idEmpleado: number): Observable<Empleado> {
    return this.http.delete<Empleado>(
      `${this.urlEndPoint}/${idEmpleado}`,
      {headers:this.httpHeaders}
    ) 
  }
}
