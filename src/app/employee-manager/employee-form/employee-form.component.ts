import { Component, inject, input, output } from '@angular/core';
import { Empleado } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employee = input<Empleado>({
    idEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    cargo: '',
    salario: 0
  })

  close = output()
  employeeService = inject(EmployeeService);

  onClose() {
    this.close.emit();
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employee()).subscribe((empleado) => this.close.emit())
  }

  editEmployee() {
    this.employeeService.editEmployee(this.employee()).subscribe((empleado) => this.close.emit())
  }
}
