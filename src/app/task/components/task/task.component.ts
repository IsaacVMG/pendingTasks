import { Component, OnDestroy, OnInit } from "@angular/core";
import { ITask } from "../../interfaces/task.interface";
import { ActivatedRoute } from "@angular/router";
import { taskService } from "../../services/task.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'task-component',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',

})
export class taskComponent implements OnInit, OnDestroy {
  public task?: ITask;
  private paramsSubscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private taskService: taskService) {}

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      ({ id }) => {
        const task = this.taskService.findById(id);
        if (task) {
          this.task = task;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
