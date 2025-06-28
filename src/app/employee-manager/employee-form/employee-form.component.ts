import { Component, inject, input, output } from '@angular/core';
import { Empleado } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
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
    this.employee().idEmpleado = Math.floor((Math.random() * 9999)) + 1;
    this.employeeService.addEmployee(this.employee())
    this.close.emit()
  }

  editEmployee() {
    this.employeeService.editEmployee(this.employee())
    this.close.emit()
  }
}
