import { Component } from "@angular/core";
import { ITask } from "../../interfaces/task.interface";
import { taskService } from "../../services/task.service";


@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomePageComponent {
  public isVisible: boolean = false;
  public task: ITask = {
    description: '',
    id: '',
    name:'', 
  };

  constructor(private taskService: taskService) {}

  public onVisible() {
    this.task = {
      description: '',
      id: '',
      name:'',
    };
    this.isVisible = true;
  }

  public onSubmit(task: ITask) {
    this.isVisible = false;
    if (this.task.id) {
      this.taskService.update(task);
      this.task = {
        description: '',
        id: '',
        name:'',
      };
      return;
    }

    this.taskService.save(task);
  }

  public onCancel(isVisible: boolean) {
    this.isVisible = isVisible;
  }

  public onDelete(id: string) {
    this.taskService.remove(id)
  }

  public onUpdate(id: string) {
    const findTask = this.taskService.findById(id);
    if (findTask) this.task = findTask;
    this.isVisible = true;
  }
}