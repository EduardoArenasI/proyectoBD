import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { empleado} from './empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private angularFirestore: AngularFirestore) { 
    
  }
}
