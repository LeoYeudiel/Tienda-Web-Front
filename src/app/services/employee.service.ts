import { Injectable } from '@angular/core';
import { Empleado } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empleados: Empleado[] = [
  ];

  constructor() { }

  addEmployee(data: Empleado) {
    this.empleados.push(data);
  }

  editEmployee(editEmpleado: Empleado) {
    this.empleados = this.empleados.map((empleado) => {
      if (empleado.idEmpleado == editEmpleado.idEmpleado) {
        empleado = editEmpleado
      }
      return empleado;
    })
  }

  deleteEmployee(idEmpleado: number) {
    this.empleados = this.empleados.filter((empleado) => empleado.idEmpleado != idEmpleado);
  }
}
