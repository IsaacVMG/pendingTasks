import { Injectable } from "@angular/core";
import { ITask } from "../interfaces/task.interface";

@Injectable({
  providedIn: 'root',
})
export class taskService {
  public taskList: ITask[];

  constructor() {
    this.taskList = [];
    this.load();
  }

  public load() {
    const data = localStorage.getItem('taskList');
    if (!data) return
    this.taskList = JSON.parse(data);
  }

  public save(task: ITask) {
    this.taskList = [...this.taskList, task];
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  public remove(id: string) {
    const filter = this.taskList.filter((task: ITask) => task.id !== id);
    this.taskList = filter;
    localStorage.setItem('taskList', JSON.stringify(filter));
  }

  public update(task: ITask) {
    const searchIndex = this.taskList.findIndex((list: ITask) => list.id === task.id);
    this.taskList[searchIndex] = task;
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  public findById(id: string) {
    return this.taskList.find((element: ITask) => element.id === id);
  }
}
