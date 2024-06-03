import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { taskModule } from './task/task.module';
import { headerModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    taskModule,
    headerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
