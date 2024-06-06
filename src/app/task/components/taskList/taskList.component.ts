import { Component, EventEmitter, Output } from "@angular/core";
import { taskService } from "../../services/task.service";
import { ITask } from "../../interfaces/task.interface";

@Component({
  selector: 'task-list',
  templateUrl: './taskList.component.html',
  styleUrl: './taskList.component.css'
})
export class TaskList {
  @Output()
  public idSelected: EventEmitter<string> = new EventEmitter();

  @Output()
  public idUpdate: EventEmitter<string> = new EventEmitter();

  constructor(private taskService: taskService) {}
  
  public get taskList() : ITask[] {
    return this.taskService.taskList
  }

  public onSelected(id: string) {
    this.idSelected.emit(id);
  }

  public onUpdate(id: string) {
    this.idUpdate.emit(id);
  }
  
}
