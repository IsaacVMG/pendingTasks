import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITask } from "../../interfaces/task.interface";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'form-task',
  templateUrl: './formTask.component.html',
  styleUrl: './formTask.component.css',
})
export class FormTaskComponent {

  @Input()
  public textBtn?: string;

  @Input()
  public isVisible: boolean = false;

  @Output()
  public newTask: EventEmitter<ITask> = new EventEmitter();

  @Output()
  public eventCancel: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public task: ITask = {
    description: '',
    id: '',
    name:'', 
  };

  constructor() {}

  public onCancel() {
    this.isVisible = false;
    this.eventCancel.emit(this.isVisible);
  }

  onSubmit() {
    const newTask: ITask = {
      id: this.task.id ? this.task.id : uuid(),
      name: this.task.name,
      description: this.task.description,
    }

    this.newTask.emit(newTask);

    this.task.name = '';
    this.task.description = '';
  }
}
