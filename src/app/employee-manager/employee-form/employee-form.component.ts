import { Component, inject, input, output } from '@angular/core';
import { Empleado } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import Swal from 'sweetalert2';

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
    cargo: 'Cajero',
    salario: 0
  })

  close = output()
  employeeService = inject(EmployeeService);

  onClose() {
    this.close.emit();
  }

  getCargo(event: any) {
    this.employee().cargo = event.target.value
  }
  
  addEmployee() {
    console.log(this.employee())
    this.employeeService.addEmployee(this.employee()).subscribe((empleado) => {
      Swal.fire({
        title: "Éxito",
        text: "Se ha añadido un nuevo empleado",
        icon: "success",
        customClass: {
          confirmButton: "buttonConfirm"
        },
        buttonsStyling: false,
        confirmButtonText: "OK",
        timer: 3000
      }).then((result) => {
        this.close.emit()
      });
    })
  }

  editEmployee() {
    this.employeeService.editEmployee(this.employee()).subscribe((empleado) => {
      Swal.fire({
        title: "Éxito",
        text: "Se ha editado al empleado",
        icon: "success",
        customClass: {
          confirmButton: "buttonConfirm"
        },
        buttonsStyling: false,
        confirmButtonText: "OK",
        timer: 3000
      }).then((result) => {
        this.close.emit()
      });
    })
  }
}
