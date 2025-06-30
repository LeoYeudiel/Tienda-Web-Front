import { CarDetail } from "./shop-car.model";

export type RequestBuy = {
  idPedido?: number;
  idEmpleado: number;
  idCliente: number;
  detallePedidosDTO: CarDetail[];
  pagoDTO: Pay;
}

export type Pay = {
  metodoPago: string;
}