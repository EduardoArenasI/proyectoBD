import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Empleado} from './empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private angularFirestore: AngularFirestore) {  }

  getEmpleado() {
    return this.angularFirestore
      .collection("empleado")
      .snapshotChanges() 
}

getEmpleadoById(id) {
  return this.angularFirestore
    .collection("empleado")
    .doc(id)
    .valueChanges() 
}

createEmpleado(empleaado: Empleado) {
  return new Promise<any>((resolve, reject) => {
    this.angularFirestore
      .collection("empleado")
      .add(Empleado)
    .then((response) => {
console.log(response)

    },
        (error) => {
      reject(error)
        })
  }) 
}

updateEmpleado(empleado: Empleado, id) {
  return this.angularFirestore
    .collection("empleado")
    .doc(id)
    .update({
      apellido: empleado.apellido,
      domicilio: empleado.domicilio,
      nombre : empleado.nombre,
      sueldo : empleado.sueldo,
    }); 

}

deleteEmpleado(empleado: Empleado) {
  return this.angularFirestore
      .collection("empleado")
      .doc(empleado.id)
      .delete()
  } 
}

