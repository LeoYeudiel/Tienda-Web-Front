import { Component, inject, OnInit } from '@angular/core';
import { Empleado } from '../models/employee.model';
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { CurrencyPipe } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import Swal from 'sweetalert2';

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
    cargo: 'Cajero',
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
      cargo: 'Cajero',
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
    Swal.fire({
      title: "¿Estás seguro de eliminar?",
      icon: "warning",
      showCancelButton: true,
      customClass: {
        confirmButton: "buttonConfirm",
        cancelButton: "buttonCancel"
      },
      buttonsStyling: false,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.deleteEmployee(idEmpleado).subscribe((response) => this.empleadoService.showEmployees().subscribe(
          (empleados) => {
            this.employees = empleados
            Swal.fire({
              title: "Éxito",
              text: "Se ha eliminado el producto del catalogo",
              icon: "success",
              customClass: {
                confirmButton: "buttonConfirm"
              },
              buttonsStyling: false,
              confirmButtonText: "OK",
              timer: 3000
            })
          }
        ));
      }
    });
  }
}
