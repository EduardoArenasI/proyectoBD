import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

import { ShowempComponent } from './components/showemp/showemp.component';
//import { EditempComponent } from './editemp/editemp.component;
//import { CreateempComponent } from './createemp/createemp.component;



const routes: Routes = [
  
  { path: '', component: ShowComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
