import { Component, inject, OnInit } from '@angular/core';
import { ShopCarService } from '../services/shop-car.service';
import { ClientService } from '../services/client.service'
import { ProductCarComponent } from "../shop-car/product-car/product-car.component";
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../models/client.model';
import { EmployeeService } from '../services/employee.service';
import { Empleado } from '../models/employee.model';
import { Pay, RequestBuy } from '../models/request.model';
import { BuyService } from '../services/buy.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy',
  imports: [FormsModule, ProductCarComponent, CurrencyPipe],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit{
  shopCarService = inject(ShopCarService)
  clientService = inject(ClientService)
  employeeService = inject(EmployeeService)
  buyService = inject(BuyService)

  empleado: Empleado | undefined = undefined
  selectPay: Pay = {
    metodoPago: 'Efectivo'
  }

  client: Cliente = {
    idCliente: 0,
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.employeeService.showEmployees().subscribe((empleados) => this.empleado = empleados[Math.floor(Math.random() * empleados.length)])
  }

  getPago(event: any) {
    this.selectPay.metodoPago = event.target.value
  }

  onBuy() {
    this.shopCarService.myProducts.map((product) => {
      delete product.nombre
      delete product.precio
      delete product.subtotal
    })

    this.clientService.addClient(this.client).subscribe((cliente) => {
      this.buyService.addRequest({
        idCliente: cliente.idCliente!,
        idEmpleado: this.empleado?.idEmpleado!,
        detallePedidosDTO: this.shopCarService.myProducts,
        pagoDTO: this.selectPay
      }).subscribe((pedido) => {
        Swal.fire({
          title: "Éxito",
          text: "Se ha añadido un nuevo producto al catalogo",
          icon: "success",
          customClass: {
            confirmButton: "buttonConfirm"
          },
          buttonsStyling: false,
          confirmButtonText: "OK",
          timer: 3000
        }).then((result) => {
          this.shopCarService.myProducts = []
          this.router.navigate(['/home'])
        });
      })
    })
  }
}
