import { NgModule } from "@angular/core";
import { FormTaskComponent } from "./components/formTask/formTask.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TaskList } from "./components/taskList/taskList.component";
import { HomePageComponent } from "./pages/home/home.component";
import { RouterModule } from "@angular/router";
import { TaskComponent } from "./pages/task/task.component";
import { InfoTaskComponent } from "./components/infoTask/infoTask.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    FormTaskComponent,
    HomePageComponent,
    InfoTaskComponent,
    TaskComponent,
    TaskList,
  ],
  exports: [
    HomePageComponent,
    TaskComponent,
  ],
})
export class TaskModule {}
