import { Component, Input } from "@angular/core";
import { ITask } from "../../interfaces/task.interface";

@Component({
  selector: 'infoTask-component',
  templateUrl: './infoTask.component.html',
  styleUrl: './infoTask.component.css',

})
export class InfoTaskComponent {
  @Input()
  public task?: ITask | undefined;
}
