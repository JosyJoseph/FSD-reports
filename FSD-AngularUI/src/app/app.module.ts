import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DataTableModule} from 'primeng/datatable';
import {GrowlModule} from 'primeng/growl';
import { Interceptor, fakeBackendProvider } from './interceptor/interceptor';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { TaskService } from './utilities/common-service';
import {SliderModule} from 'primeng/slider';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddProjectComponent,
    AddTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IonRangeSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,DataTableModule,GrowlModule,ConfirmDialogModule,SliderModule,CalendarModule
  ],
  providers:[ TaskService]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
