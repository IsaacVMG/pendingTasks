import { NgModule } from "@angular/core";
import { addTaskComponent } from "./components/formTask/formTask.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { taskList } from "./pages/taskList/taskList.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    addTaskComponent,
    taskList,
  ],
  exports: [
    addTaskComponent,
    taskList,
  ],
})
export class taskModule {

}