import { NgModule } from "@angular/core";
import { addTaskComponent } from "./components/formTask/formTask.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { taskList } from "./pages/taskList/taskList.component";
import { HomePageComponent } from "./pages/home/home.component";
import { RouterModule } from "@angular/router";
import { taskComponent } from "./components/task/task.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    addTaskComponent,
    taskList,
    taskComponent,
    HomePageComponent,
  ],
  exports: [
    addTaskComponent,
    taskList,
    taskComponent,
    HomePageComponent,
  ],
})
export class taskModule {

}