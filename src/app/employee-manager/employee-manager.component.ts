import { Component, inject } from '@angular/core';
import { Empleado } from '../models/employee.model';
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { CurrencyPipe } from '@angular/common';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-manager',
  imports: [EmployeeFormComponent, CurrencyPipe],
  templateUrl: './employee-manager.component.html',
  styleUrl: './employee-manager.component.css'
})
export class EmployeeManagerComponent {
  empleadoService = inject(EmployeeService);
  isVisible = false;
  selectecEmployee: Empleado = {
    idEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    cargo: '',
    salario: 0
  } ;

  onCloseModal() {
    this.selectecEmployee = {
      idEmpleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      cargo: '',
      salario: 0
    }
    this.isVisible = !this.isVisible
  }

  editEmployee(empleado: Empleado) {
    this.selectecEmployee = empleado
    this.isVisible = !this.isVisible
  }

  deleteEmployee(idEmpleado: number) {
    this.empleadoService.deleteEmployee(idEmpleado);
  }
}
