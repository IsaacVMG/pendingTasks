import { NgModule } from "@angular/core";
import { headerComponent } from "./pages/header/header.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    headerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    headerComponent,
  ],
})
export class HeaderModule {}
