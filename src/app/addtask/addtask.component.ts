import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],
  providers:[TaskService]
})
export class AddtaskComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  model:any;

  ngOnInit() {
    this.model = new Task();
  }

  createTask(){
    this.taskService.saveTask(this.model).subscribe(res=>{
      console.log('created successfully!');
      this.model= new Task();
    });
  }

}
