import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GrowlModule } from 'primeng/growl';
import { DataTableModule } from 'primeng/datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { fakeBackendProvider, Interceptor } from '../../interceptor/interceptor';
import { AddProjectComponent } from './add-project.component';
import { AddProjectService } from './add-project.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { ConfirmationService } from 'primeng/api';

describe('AddProjectComponent', () => {
  let confirmationService: ConfirmationService;
  let httpClient: HttpClient;
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;
  let service: AddProjectService;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddProjectComponent],
      imports: [ReactiveFormsModule, CalendarModule, SliderModule, HttpClientModule, FormsModule, DataTableModule, GrowlModule, FormsModule, ConfirmDialogModule, BrowserAnimationsModule],
      providers: [AddProjectService, ConfirmationService, {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }]

    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
  });


  describe('Project test cases', () => {

    it('On init  project grid should have zero or more list items', () => {
      component.ngOnInit();
      component.addProjectReset();
      expect(component.projectsList.length).toBeGreaterThanOrEqual(0);
    });

    it('On update button text is update', () => {
      component.updateProject({ Project_ID: 1, Start_Date: '01/01/2017', End_Date: '01/02/2018' });
      expect(component.addOrUpdateBtn)
        .toEqual('Update');
    });
    it('On reset button text is ADD', () => {
      component.formInit();
      component.addProjectReset();
      expect(component.addOrUpdateBtn)
        .toEqual('Add');
    });
    it('On submit message should be shown', () => {
      component.formInit();
      component.addProjectSubmit();
      expect(component.msgs.length).toBeGreaterThanOrEqual(0);
    });
    it('On error should return a message', () => {
      component.formInit();
      component.showMessage(false, "Error occured!");
      expect(component.msgs.length)
        .toBeGreaterThanOrEqual(0);
    });
    it('Uncheck date when date is null', () => {
      component.updateProject({ Project_ID: 1, Start_Date: null, End_Date: null });
      expect(component.addProjectForm.get('checkDatesControl').value)
        .toBe(false);
    });
  });



});
