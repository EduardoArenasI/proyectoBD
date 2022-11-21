import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/empleados.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowempComponent } from '../showemp/showemp.component';


@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.css']
})
export class CreateempComponent implements OnInit {

  public empleadoForm: FormGroup;

  constructor(
    public EmpleadosService: EmpleadosService,
    public formBuilder : FormBuilder,
    public router: Router
  ) { 

    this.empleadoForm = this.formBuilder.group({
      apellido :[''],
      domicilio :[''],
      nombre :[''],
      sueldo : [''],
    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.EmpleadosService.createEmpleado(this.empleadoForm.value)
    this.router.navigate([''])
  }



}
