import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado.model';
import { EmpleadosService } from '../../empleados.service';
@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  Empleado: Empleado[]
  constructor(private empleadoService : EmpleadosService) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleado().subscribe( (res) => {
      this.Empleado = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Empleado),
        };
        });
      });   


    }

    deleteRow = (empleado) => this.empleadoService.deleteEmpleado(empleado);

} 
