import { NgModule } from "@angular/core";
import { headerComponent } from "./pages/header/header.component";

@NgModule({
  declarations: [
    headerComponent,
  ],
  exports: [
    headerComponent,
  ],
})
export class headerModule {

}