import { Component, OnInit } from '@angular/core';

import { EmpleadosService } from 'src/app/empleados.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  public editForm: FormGroup;
  empleadoRef: any;
  constructor(
    public EmpleadosService: EmpleadosService,
    public formsBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formsBuilder.group({
      apellido :[''],
      domicilio :[''],
      nombre: [''],
      sueldo : [''],
    });
  }

  ngOnInit(): void {
    const id =this.activatedRoute.snapshot.paramMap.get('id')
    this.EmpleadosService.getEmpleadoById(id).subscribe( res => {
      this.empleadoRef = res
      this.editForm = this.formsBuilder.group({
        apellido:[this.empleadoRef.apellido],
        domicilio:[this.empleadoRef.domicilio],
        nombre:[this.empleadoRef.nombre],
        sueldo:[this.empleadoRef.sueldo] ,      
    })
  })

}

onSubmit(){
  const id = this.activatedRoute.snapshot.paramMap.get('id')
  this.EmpleadosService.updateEmpleado(this.editForm.value, id)
  this.router.navigate([''])

}
}
