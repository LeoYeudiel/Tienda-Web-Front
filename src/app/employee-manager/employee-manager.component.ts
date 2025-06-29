import { Component, inject, OnInit } from '@angular/core';
import { Empleado } from '../models/employee.model';
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { CurrencyPipe } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-manager',
  standalone: true,
  imports: [EmployeeFormComponent, CurrencyPipe],
  templateUrl: './employee-manager.component.html',
  styleUrl: './employee-manager.component.css'
})
export class EmployeeManagerComponent implements OnInit {
  isVisible = false;
  employees: Empleado[] = []
  selectecEmployee: Empleado = {
    idEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    cargo: '',
    salario: 0
  };

  empleadoService = inject(EmployeeService);

  ngOnInit(): void {
    this.empleadoService.showEmployees().subscribe(
        (empleados) => (this.employees = empleados)
      )
  }

  onCloseModal() {
    this.selectecEmployee = {
      idEmpleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      cargo: '',
      salario: 0
    }
    this.empleadoService.showEmployees().subscribe(
        (empleados) => (this.employees = empleados)
      )
    this.isVisible = !this.isVisible
  }

  editEmployee(empleado: Empleado) {
    this.selectecEmployee = empleado
    this.isVisible = !this.isVisible
  }

  deleteEmployee(idEmpleado: number) {
    this.empleadoService.deleteEmployee(idEmpleado).subscribe((response) => this.empleadoService.showEmployees().subscribe(
      (empleados) => this.employees = empleados
    ));
  }
}
