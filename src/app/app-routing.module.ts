import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';



const routes: Routes = [{
  path:'addTask',
  component:AddtaskComponent
},
  {
    path:'viewTask',
    component:ViewtaskComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=[AddtaskComponent,ViewtaskComponent]
