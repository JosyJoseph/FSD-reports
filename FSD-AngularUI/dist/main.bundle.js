webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_add_user_add_user_component__ = __webpack_require__("./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_add_project_add_project_component__ = __webpack_require__("./src/app/project/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_add_task_add_task_component__ = __webpack_require__("./src/app/task/add-task/add-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_view_task_view_task_component__ = __webpack_require__("./src/app/task/view-task/view-task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/adduser', pathMatch: 'full' },
    { path: 'adduser', component: __WEBPACK_IMPORTED_MODULE_2__user_add_user_add_user_component__["a" /* AddUserComponent */] },
    { path: 'addproject', component: __WEBPACK_IMPORTED_MODULE_3__project_add_project_add_project_component__["a" /* AddProjectComponent */] },
    { path: 'addtask', component: __WEBPACK_IMPORTED_MODULE_4__task_add_task_add_task_component__["a" /* AddTaskComponent */] },
    { path: 'viewtask', component: __WEBPACK_IMPORTED_MODULE_5__task_view_task_view_task_component__["a" /* ViewTaskComponent */] },
    { path: 'edittask', component: __WEBPACK_IMPORTED_MODULE_4__task_add_task_add_task_component__["a" /* AddTaskComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".error {\r\n    font-size: 13px;\r\n    color: #c7254e;\r\n    background: #f9f2f4;\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n    margin: -26px 0 15px;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\r\n  <div class=\"container-fluid\" style=\"background-color: skyblue\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" style=\"color: black\" href=\"#\">Project Manager</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">    \r\n      <li><a routerLink=\"/addproject\" routerLinkActive=\"active\">Add Project</a></li>\r\n      <li><a routerLink=\"/addtask\" routerLinkActive=\"active\">Add Task</a></li>\r\n      <li><a routerLink=\"/adduser\" routerLinkActive=\"active\">Add User</a></li>\r\n      <li><a routerLink=\"/viewtask\" routerLinkActive=\"active\">View Task</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Management';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider__ = __webpack_require__("./node_modules/ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_add_project_add_project_component__ = __webpack_require__("./src/app/project/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_add_user_add_user_component__ = __webpack_require__("./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_add_task_add_task_component__ = __webpack_require__("./src/app/task/add-task/add-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_datatable__ = __webpack_require__("./node_modules/primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_growl__ = __webpack_require__("./node_modules/primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_confirmdialog__ = __webpack_require__("./node_modules/primeng/confirmdialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_confirmdialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_confirmdialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_view_task_view_task_component__ = __webpack_require__("./src/app/task/view-task/view-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utilities_common_service__ = __webpack_require__("./src/app/utilities/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_slider__ = __webpack_require__("./node_modules/primeng/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_calendar__ = __webpack_require__("./node_modules/primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__project_add_project_add_project_component__["a" /* AddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_add_task_add_task_component__["a" /* AddTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_14__task_view_task_view_task_component__["a" /* ViewTaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider__["IonRangeSliderModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_10_primeng_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_11_primeng_growl__["GrowlModule"], __WEBPACK_IMPORTED_MODULE_12_primeng_confirmdialog__["ConfirmDialogModule"], __WEBPACK_IMPORTED_MODULE_16_primeng_slider__["SliderModule"], __WEBPACK_IMPORTED_MODULE_17_primeng_calendar__["CalendarModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__utilities_common_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/project/add-project/add-project.component.css":
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n    padding-right: 5%;\r\n}\r\n\r\n.checkbox-padding {\r\n    padding-left: 5px;\r\n}\r\n\r\n.middleVert {\r\n    padding-top: 7%;\r\n}\r\n\r\n.middleVert1 {\r\n    height: 20px;\r\n}\r\n\r\n.text-danger {\r\n    color: red;\r\n}\r\n\r\n.newButton{\r\n\r\n    background-color: rgb(200, 211, 224);\r\n    color: black;\r\n\r\n}"

/***/ }),

/***/ "./src/app/project/add-project/add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">New Project</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form [formGroup]=\"addProjectForm\" (ngSubmit)=\"addProjectSubmit()\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label class=\"control-label col-sm-4\" for=\"firstName\">Project:</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input class=\"form-control\" id=\"projectName\" placeholder=\"Project Name\" name=\"projectNameControl\" formControlName=\"projectNameControl\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div *ngIf=\"(addProjectForm.controls.projectNameControl.touched && !addProjectForm.controls.projectNameControl.valid)\">\r\n                                <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\r\n                                <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\"></div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"checkbox checkbox-padding\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" value=\"\" name=\"checkDatesControl\" formControlName=\"checkDatesControl\">Set Start and End Date\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-1\"></div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"addProjectForm.controls.checkDatesControl.value\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                                <label class=\"control-label col-sm-4\" for=\"endDate\">Start Date:</label>\r\n                            <div class=\"col-md-8\">\r\n                                <div class=\"input-group\">\r\n                                        <p-calendar  name=\"startDateControl\"   formControlName=\"startDateControl\" [showIcon]=\"true\"></p-calendar>                                        \r\n                                </div>                   \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"addProjectForm.controls.checkDatesControl.value\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label class=\"control-label col-sm-4\" for=\"endDate\">End Date:</label>\r\n                            <div class=\"col-md-8\">                  \r\n                                <div class=\"input-group\">\r\n                                        <p-calendar  name=\"endDateControl\"  formControlName=\"endDateControl\"   [showIcon]=\"true\"></p-calendar>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                           \r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label class=\"control-label col-sm-4\">Priority:</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-1\">\r\n                                        <h4 class=\"middleVert1\">0</h4>\r\n                                    </div>\r\n                                    <div class=\"col-sm-7\">\r\n                                        <div class=\"middleVert\"></div>\r\n                                        <p-slider formControlName=\"priorityControl\" [min]=\"0\" [max]=\"30\" [step]=\"1\" [style]=\"{'width':'200px'}\"></p-slider>\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\">\r\n                                        <h4 class=\"middleVert1\">30</h4>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3\">\r\n                                        <input class=\"form-control\" readonly name=\"priorityDisplayControl\" formControlName=\"priorityDisplayControl\" value=\"{{addProjectForm.controls.priorityControl.value}}\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                                <div *ngIf=\"(addProjectForm.controls.priorityControl.touched && !addProjectForm.controls.priorityControl.valid)\">\r\n                                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\r\n                                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\r\n                                </div>\r\n                            </div>                        \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label class=\"control-label col-sm-4\" >Manager:</label>\r\n                            <div class=\"col-sm-6\">\r\n                                <input class=\"form-control\" placeholder=\"Assign Manager\" readonly  name=\"selectedManager\" formControlName=\"selectedManagerName\">\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <button type=\"button\" class=\"btn btn-primary newButton\" data-toggle=\"modal\" data-target=\"#searchManagersModal\">Search</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\"></div> \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <div class=\"col-md-4\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <button type=\"submit\" class=\"btn btn-md newButton\" [disabled]=\"addProjectForm.invalid\"\r\n                                [ngClass]=\"{\r\n                                    'btn-primary': addOrUpdateBtn == 'Add',\r\n                                    'btn-secondary': addOrUpdateBtn == 'Update'\r\n                                }\">{{addOrUpdateBtn}}</button>\r\n                                <button type=\"button\" class=\"btn btn-md btn-primary newButton\" (click)=\"addProjectReset()\">Reset</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\"></div>\r\n                    </div>\r\n                </form>                              \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Search/Edit Projects</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p-dataTable [value]=\"projectsList\">                            \r\n                            <p-column field=\"ProjectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Start_Date\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\r\n\r\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column field=\"End_Date\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\r\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column field=\"Priority\" header=\"Priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Manager_Name\" header=\"Manager Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>                            \r\n                            <p-column header=\"Actions\">\r\n                                <ng-template let-project=\"rowData\"  pTemplate=\"body\">\r\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm newButton\" (click)=\"updateProject(project)\">Update</button>\r\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm newButton\" (click)=\"suspendProject(project)\">Suspend</button>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <!-- Modal - Search Managers -->\r\n    <div id=\"searchManagersModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Manager List</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-1\"></div>\r\n                        <div class=\"col-md-10\">\r\n                            <p-dataTable [value]=\"userList\">\r\n                                <p-column field=\"User_ID\" header=\"User ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                                <p-column field=\"First_Name\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                                <p-column field=\"Last_Name\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                                <p-column field=\"Employee_ID\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                                <p-column header=\"Action\">\r\n                                    <ng-template let-user=\"rowData\" pTemplate=\"body\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm newButton\" id=\"assignManager\" (click)=\"assignManager(user.User_ID, user.First_Name + ' ' + user.Last_Name)\"\r\n                                            data-dismiss=\"modal\">Assign</button>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </p-dataTable>\r\n                        </div>\r\n                        <div class=\"col-md-1\"></div>\r\n                    </div>\r\n                    <br>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd ></p-confirmDialog>\r\n"

/***/ }),

/***/ "./src/app/project/add-project/add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_project_service__ = __webpack_require__("./src/app/project/add-project/add-project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(formBuilder, service, confirmationService, datePipe) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.confirmationService = confirmationService;
        this.datePipe = datePipe;
        this.msgs = [];
        this.addOrUpdateBtn = 'Add';
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.formInit();
        this.getUsers();
        this.getAllProject();
    };
    AddProjectComponent.prototype.formInit = function () {
        this.addProjectForm = this.formBuilder.group({
            projectId: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            projectNameControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            checkDatesControl: [null],
            startDateControl: [this.datePipe.transform(Date.now(), 'MM/dd/yyyy').toString()],
            endDateControl: [this.datePipe.transform(Date.now() + 86400000, 'MM/dd/yyyy').toString()],
            status: ["Active"],
            priorityControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            selectedManagerControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            selectedManagerName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            priorityDisplayControl: [null]
        });
    };
    AddProjectComponent.prototype.getUsers = function () {
        var _this = this;
        this.userList = [];
        this.service.getUsers()
            .subscribe(function (data) { _this.userList = data; });
    };
    AddProjectComponent.prototype.getAllProject = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllProject()
            .subscribe(function (data) { _this.projectsList = data; });
    };
    AddProjectComponent.prototype.updateProject = function (project) {
        this.addOrUpdateBtn = 'Update';
        this.addProjectForm = this.formBuilder.group({
            projectId: [project.Project_ID, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            projectNameControl: [project.ProjectName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            checkDatesControl: [project.End_Date === null && project.Start_Date === null ? false : true],
            startDateControl: [this.datePipe.transform(project.Start_Date, 'MM/dd/yyyy').toString()],
            endDateControl: [this.datePipe.transform(project.End_Date, 'MM/dd/yyyy').toString()],
            status: [project.Status],
            priorityControl: [project.Priority, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            selectedManagerControl: [project.Manager_ID, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            selectedManagerName: [project.Manager_Name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            priorityDisplayControl: [null]
        });
    };
    AddProjectComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });
        }
        this.addProjectReset();
    };
    AddProjectComponent.prototype.addProjectReset = function () {
        this.addProjectForm.reset();
        this.formInit();
        this.addOrUpdateBtn = 'Add';
    };
    AddProjectComponent.prototype.addProjectSubmit = function () {
        var _this = this;
        this.service.updateProject({
            Project_ID: this.addProjectForm.get('projectId').value,
            End_Date: this.datePipe.transform(this.addProjectForm.get('endDateControl').value, 'MM/dd/yyyy').toString(),
            Start_Date: this.datePipe.transform(this.addProjectForm.get('startDateControl').value, 'MM/dd/yyyy').toString(),
            Manager_ID: this.addProjectForm.get('selectedManagerControl').value,
            Priority: this.addProjectForm.get('priorityControl').value,
            ProjectName: this.addProjectForm.get('projectNameControl').value,
            Status: this.addProjectForm.get('status').value
        })
            .subscribe(function (data) {
            _this.getAllProject();
            _this.showMessage(data.status.Result, data.status.Message);
        });
    };
    AddProjectComponent.prototype.assignManager = function (userId, mgrName) {
        this.addProjectForm.patchValue({
            selectedManagerControl: userId,
            selectedManagerName: mgrName
        });
    };
    AddProjectComponent.prototype.suspendProject = function (project) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to suspend project : ' + project.ProjectName + '?',
            accept: function () {
                project.Status = "Suspended";
                _this.service.updateProject(project)
                    .subscribe(function (data) { _this.showMessage(data.status.Result, data.status.Message); });
            }
        });
    };
    AddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/project/add-project/add-project.component.html"),
            styles: [__webpack_require__("./src/app/project/add-project/add-project.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__add_project_service__["a" /* AddProjectService */], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__add_project_service__["a" /* AddProjectService */], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/add-project/add-project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProjectService = /** @class */ (function () {
    function AddProjectService(http) {
        this.http = http;
        this.apiEndPOint = 'http://localhost:61734';
    }
    AddProjectService.prototype.getUsers = function () {
        return this.http.get(this.apiEndPOint + "/api/getAllUsers");
    };
    AddProjectService.prototype.updateProject = function (proj) {
        console.log(proj);
        return this.http.post(this.apiEndPOint + "/api/updateProject", proj);
    };
    AddProjectService.prototype.getAllProject = function () {
        return this.http.get(this.apiEndPOint + "/api/getAllProjects");
    };
    AddProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AddProjectService);
    return AddProjectService;
}());



/***/ }),

/***/ "./src/app/task/add-task/add-task.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n    padding-right: 2%;\r\n}\r\n\r\n.checkbox-padding {\r\n    padding-left: 5px;\r\n}\r\n\r\n.middleVert {\r\n    padding-top: 7%;\r\n}\r\n\r\n.middleVert1 {\r\n    height: 20px;\r\n}\r\n\r\n.text-danger {\r\n    color: red;\r\n}\r\n\r\n.newButton{\r\n\r\n    background-color: rgb(200, 211, 224);\r\n    color: black;\r\n\r\n}"

/***/ }),

/***/ "./src/app/task/add-task/add-task.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">{{formMode}}</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form [formGroup]=\"addTaskForm\" (ngSubmit)=\"addTaskSubmit()\" novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label col-sm-4\" for=\"empId\">Project:</label>\r\n                        <div class=\"col-sm-6\">\r\n                            <input class=\"form-control\" id=\"project\" placeholder=\"Select the Project\" readonly value=\"{{selectedProject}}\" formControlName=\"ProjectIdControl\">\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary newButton\" data-toggle=\"modal\" [disabled]=\"formMode === 'Edit Task'\" data-target=\"#searchProjectsModal\">Search</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label col-sm-4\" for=\"task\">Task:</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input class=\"form-control\" id=\"task\" placeholder=\"Enter task name\" formControlName=\"TaskNameControl\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-5\"></div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"checkbox checkbox-padding\">\r\n                            <label>\r\n                                <input type=\"checkbox\" value=\"\" name=\"IsParentTaskControl\" (change)=\"handleChange($event)\" formControlName=\"IsParentTaskControl\">Parent Task</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-1\"></div>\r\n                </div>\r\n           \r\n\r\n                <div class=\"row\" *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label col-sm-4\">Priority:</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-1\">\r\n                                    <h4 class=\"middleVert1\">0</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"middleVert\"></div>\r\n                                    <p-slider formControlName=\"PriorityControl\" [min]=\"0\" [max]=\"30\" [step]=\"1\" [style]=\"{'width':'200px'}\"></p-slider>\r\n                                </div>\r\n                                <div class=\"col-sm-1\">\r\n                                    <h4 class=\"middleVert1\">30</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <input class=\"form-control\" readonly formControlName=\"PriorityDisplayControl\"  value=\"{{addTaskForm.controls.PriorityControl.value}}\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\"  *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label col-sm-4\" for=\"pTask\">Parent Task:</label>\r\n                        <div class=\"col-sm-6\">\r\n                            <input class=\"form-control\" id=\"pTask\" placeholder=\"Select the Parent Task\" readonly  value=\"{{selectedTask}}\" formControlName=\"ParentTaskControl\">\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary newButton\" data-toggle=\"modal\" data-target=\"#searchPTasksModal\">Search</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label class=\"control-label col-sm-4\" for=\"startDate\">Start Date:</label>\r\n                        <div class=\"col-md-8\">\r\n                            <div class=\"input-group\">\r\n                                    <p-calendar  name=\"StartDateControl\" formControlName=\"StartDateControl\"   [showIcon]=\"true\"></p-calendar>\r\n                           \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                            <label class=\"control-label col-sm-4\" for=\"endDate\">End Date:</label>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"input-group\">\r\n                                    <p-calendar  name=\"EndDateControl\" formControlName=\"EndDateControl\"   [showIcon]=\"true\"></p-calendar>\r\n                           \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"row\" *ngIf=\"addTaskForm.controls.IsParentTaskControl.value !== true\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label col-sm-4\" for=\"user\">User:</label>\r\n                        <div class=\"col-sm-6\">\r\n                            <input class=\"form-control\" id=\"user\" placeholder=\"Select a user\" readonly  value=\"{{selectedUser}}\" formControlName=\"UserIdControl\">\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary newButton\" data-toggle=\"modal\" data-target=\"#searchUsersModal\">Search</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <div class=\"col-md-4\"></div>\r\n                        <div class=\"col-md-8\">\r\n                            <button type=\"submit\" [disabled]=\"addTaskForm.invalid\" class=\"btn btn-md btn-primary newButton\">{{btnMode}}</button>\r\n                            <button type=\"button\" (click)=\"clearDate()\"  class=\"btn btn-md btn-primary newButton\">Reset</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal - Search Projects -->\r\n<div id=\"searchProjectsModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Search Projects</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p-dataTable [value]=\"projectsList\">\r\n                            <p-column field=\"Project_ID\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"ProjectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Start_Date\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                            </ng-template></p-column>\r\n                            <p-column field=\"End_Date\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                            </ng-template></p-column>\r\n                            <p-column field=\"Priority\" header=\"Priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Manager_Name\" header=\"Manager\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>                            \r\n                            <p-column>\r\n                                <ng-template let-project=\"rowData\" pTemplate=\"body\">\r\n                                    <div align=\"center\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm newButton\" id=\"assignProject\" (click)=\"selectProject(project.ProjectName, project.Project_ID)\" data-dismiss=\"modal\">Select</button>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal - Search Parent Tasks -->\r\n<div id=\"searchPTasksModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Search Parent Task</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p-dataTable [value]=\"parentTasksList\">\r\n                            <p-column field=\"Parent_ID\" header=\"Parent ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Parent_Name\" header=\"Parent Task Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column>\r\n                                <ng-template let-pTask=\"rowData\" pTemplate=\"body\">\r\n                                    <div align=\"center\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm newButton\" id=\"assignProject\" (click)=\"selectPTask(pTask.Parent_ID, pTask.Parent_Name)\"\r\n                                            data-dismiss=\"modal\">Select</button>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal - Search Users -->\r\n<div id=\"searchUsersModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Search Users</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p-dataTable [value]=\"usersList\">\r\n                            <p-column field=\"User_ID\" header=\"User ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"First_Name\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Last_Name\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Employee_ID\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Project_ID\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                          \r\n                            <p-column>\r\n                                <ng-template let-user=\"rowData\" pTemplate=\"body\">\r\n                                    <button type=\"button\" class=\"btn btn-primary btn-sm newButton\" id=\"assignUser\" (click)=\"assignUser(user.User_ID, user.First_Name + ' ' + user.Last_Name)\" data-dismiss=\"modal\">Assign</button>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/task/add-task/add-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_task_view_task_service__ = __webpack_require__("./src/app/task/view-task/view-task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_add_user_add_user_service__ = __webpack_require__("./src/app/user/add-user/add-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_common_service__ = __webpack_require__("./src/app/utilities/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(formBuilder, router, taskService, service, userService, datePipe) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.taskService = taskService;
        this.service = service;
        this.userService = userService;
        this.datePipe = datePipe;
        this.formMode = 'Add Task';
        this.btnMode = 'Add';
        this.msgs = [];
        this.selectedProject = '';
        this.selectedUser = '';
        this.selectedTask = '';
        this.selectedUserId = null;
        this.selectedPTaskId = null;
        this.selectedProjectId = null;
        this.projectsList = [];
        this.parentTasksList = [];
        this.usersList = [];
        // check the route for edit and then subscribe to data service
        if (this.router.url === '/edittask') {
            if (this.taskService.task !== null) {
                this.editMode();
                this.onFormEditInit(this.taskService.task);
            }
        }
        else {
            this.onFormInit();
            this.enableControls();
        }
    }
    AddTaskComponent.prototype.handleChange = function (event) {
        console.log(this.addTaskForm.get('IsParentTaskControl').value);
        if (this.addTaskForm.get('IsParentTaskControl').value == false) {
            this.enableControls();
        }
        else {
            this.disableControls();
        }
    };
    AddTaskComponent.prototype.disableControls = function () {
        this.addTaskForm.get('PriorityControl').disable();
        this.addTaskForm.get('PriorityDisplayControl').disable();
        this.addTaskForm.get('StartDateControl').disable();
        this.addTaskForm.get('EndDateControl').disable();
    };
    AddTaskComponent.prototype.enableControls = function () {
        this.addTaskForm.get('PriorityControl').enable();
        this.addTaskForm.get('StartDateControl').enable();
        this.addTaskForm.get('EndDateControl').enable();
        this.addTaskForm.get('PriorityDisplayControl').enable();
    };
    AddTaskComponent.prototype.onFormInit = function () {
        this.addTaskForm = this.formBuilder.group({
            TaskId: [0],
            ProjectIdControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            TaskNameControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            IsParentTaskControl: [false],
            PriorityControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            PriorityDisplayControl: [null],
            ParentTaskControl: [null],
            StartDateControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            EndDateControl: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            UserIdControl: [null]
        });
    };
    AddTaskComponent.prototype.onFormEditInit = function (task) {
        this.addTaskForm = this.formBuilder.group({
            TaskId: [task.Task_ID],
            ProjectIdControl: [task.Project_ID, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            TaskNameControl: [task.TaskName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            IsParentTaskControl: [task.User_ID === null ? true : false],
            PriorityControl: [task.Priority, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            PriorityDisplayControl: [task.Priority],
            ParentTaskControl: [task.Parent_ID],
            StartDateControl: [task.Start_Date !== null ? this.datePipe.transform(task.Start_Date, 'MM/dd/yyyy').toString() : null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            EndDateControl: [task.End_Date !== null ? this.datePipe.transform(task.End_Date, 'MM/dd/yyyy').toString() : null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            UserIdControl: [task.User_ID]
        });
        this.addTaskForm.get('EndDateControl').disable();
        this.addTaskForm.get('StartDateControl').disable();
        this.addTaskForm.get('PriorityControl').disable();
        this.selectedProject = task.Project_Name;
        this.selectedUser = task.User_Name;
        this.selectedPTaskId = task.Parent_ID;
        this.selectedTask = task.Parent_Name;
    };
    AddTaskComponent.prototype.ngOnInit = function () {
        this.getAllProject();
        this.getAllParentTask();
        this.getAllUsers();
    };
    AddTaskComponent.prototype.getAllProject = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllProject()
            .subscribe(function (data) { _this.projectsList = data; });
    };
    AddTaskComponent.prototype.getAllParentTask = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllParentTasks()
            .subscribe(function (data) { _this.parentTasksList = data; });
    };
    AddTaskComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.usersList = [];
        this.userService.getUsers()
            .subscribe(function (data) { _this.usersList = data; });
    };
    AddTaskComponent.prototype.clearDate = function () {
        // Clear the date using the patchValue function
        this.addTaskForm.reset();
    };
    AddTaskComponent.prototype.selectProject = function (projectName, projectId) {
        this.selectedProjectId = projectId;
        this.selectedProject = projectName;
        this.addTaskForm.patchValue({
            ProjectIdControl: projectId
        });
    };
    AddTaskComponent.prototype.assignUser = function (userId, userName) {
        this.selectedUserId = userId;
        this.selectedUser = userName;
        this.addTaskForm.patchValue({
            UserIdControl: userId
        });
    };
    AddTaskComponent.prototype.selectPTask = function (pTaskId, pTaskName) {
        this.selectedPTaskId = pTaskId;
        this.selectedTask = pTaskName;
        this.addTaskForm.patchValue({
            ParentTaskControl: pTaskId
        });
    };
    AddTaskComponent.prototype.addTaskSubmit = function () {
        var _this = this;
        this.service.updateTask({
            Task_ID: this.addTaskForm.get('TaskId').value,
            End_Date: this.addTaskForm.get('EndDateControl').value !== null ? this.datePipe.transform(this.addTaskForm.get('EndDateControl').value, 'MM/dd/yyyy').toString() : null,
            Project_ID: this.addTaskForm.get('ProjectIdControl').value,
            Start_Date: this.addTaskForm.get('StartDateControl').value !== null ? this.datePipe.transform(this.addTaskForm.get('StartDateControl').value, 'MM/dd/yyyy').toString() : null,
            Parent_ID: this.addTaskForm.get('ParentTaskControl').value,
            Priority: this.addTaskForm.get('PriorityControl').value,
            Status: true,
            TaskName: this.addTaskForm.get('TaskNameControl').value,
            User_ID: this.addTaskForm.get('UserIdControl').value
        })
            .subscribe(function (data) { _this.showMessage(data.status.Result, data.status.Message); _this.clearDate(); });
    };
    AddTaskComponent.prototype.editMode = function () {
        this.formMode = 'Edit Task';
        this.btnMode = 'Update';
    };
    AddTaskComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });
        }
        this.getAllProject();
    };
    AddTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-task',
            template: __webpack_require__("./src/app/task/add-task/add-task.component.html"),
            styles: [__webpack_require__("./src/app/task/add-task/add-task.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default,
            providers: [__WEBPACK_IMPORTED_MODULE_3__view_task_view_task_service__["a" /* ViewTaskService */], __WEBPACK_IMPORTED_MODULE_4__user_add_user_add_user_service__["a" /* AddUserService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__utilities_common_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__view_task_view_task_service__["a" /* ViewTaskService */],
            __WEBPACK_IMPORTED_MODULE_4__user_add_user_add_user_service__["a" /* AddUserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/task/view-task/view-task.component.css":
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n    padding-right: 2%;\r\n}\r\n\r\n.checkbox-padding {\r\n    padding-left: 5px;\r\n}\r\n\r\n.newButton{\r\n\r\n    background-color: rgb(200, 211, 224);\r\n    color: black;\r\n\r\n}"

/***/ }),

/***/ "./src/app/task/view-task/view-task.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">View Tasks</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">            \r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label col-sm-2\" for=\"project\">Project:</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"form-control\" id=\"project\" placeholder=\"Select the Project\" readonly value=\"{{selectedProject}}\">\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <button type=\"button\" class=\"btn btn-primary newButton btn-sm \" data-toggle=\"modal\" data-target=\"#searchProjectsModal\">Search</button>\r\n                        </div>\r\n                    </div>            \r\n                </div>            \r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p-dataTable [value]=\"tasksList\">\r\n                            <p-column field=\"Task_ID\" header=\"Task ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"TaskName\" header=\"Task Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Parent_Name\" header=\"Parent Task\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                          \r\n                            <p-column field=\"Priority\" header=\"Priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Start_Date\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\r\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column field=\"End_Date\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                            </ng-template></p-column>\r\n                            <p-column field=\"Status\" header=\"Status\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\r\n                                    <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            <span>{{project[col.field]==true?'Active':'Ended'}}</span>\r\n                                        </ng-template>\r\n                            </p-column>\r\n                            \r\n                            <p-column field=\"Status\">\r\n                                <ng-template let-col let-project=\"rowData\" pTemplate=\"body\" >\r\n                                    \r\n                                    <div align=\"center\" *ngIf=\"project[col.field]\">\r\n                                        <button type=\"button\" class=\"btn btn-primary newButton btn-sm \" (click)=\"editTask(project)\">Edit</button>\r\n                                        <button type=\"button\" class=\"btn btn-primary newButton btn-sm \" (click)=\"endTask(project)\">End Task</button>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>            \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal - Search Projects -->\r\n<div id=\"searchProjectsModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Search Projects</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p-dataTable [value]=\"projectsList\">\r\n                            <p-column field=\"Project_ID\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"ProjectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Start_Date\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                            </ng-template></p-column>\r\n                            <p-column field=\"End_Date\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\r\n                            </ng-template></p-column>\r\n                            <p-column field=\"Priority\" header=\"Priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Manager_Name\" header=\"Manager\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>                            \r\n                            <p-column>\r\n                                <ng-template let-project=\"rowData\" pTemplate=\"body\">\r\n                                    <div align=\"center\">\r\n                                        <button type=\"button\" class=\"btn btn-primary newButton btn-sm \" id=\"assignProject\" (click)=\"assignProject(project.ProjectName, project.Project_ID)\" data-dismiss=\"modal\">Select</button>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"  ></p-confirmDialog>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/task/view-task/view-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_task_service__ = __webpack_require__("./src/app/task/view-task/view-task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_common_service__ = __webpack_require__("./src/app/utilities/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(router, taskService, service, confirmationService, datePipe) {
        this.router = router;
        this.taskService = taskService;
        this.service = service;
        this.confirmationService = confirmationService;
        this.datePipe = datePipe;
        this.msgs = [];
        this.tasksList = [];
        this.projectsList = [];
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.getAllProject();
    };
    ViewTaskComponent.prototype.assignProject = function (projName, projId) {
        this.selectedProjectId = projId;
        this.selectedProject = projName;
        this.getAllTask(projId);
    };
    ViewTaskComponent.prototype.getAllProject = function () {
        var _this = this;
        this.projectsList = [];
        this.service.getAllProject()
            .subscribe(function (data) { _this.projectsList = data; });
    };
    ViewTaskComponent.prototype.getAllTask = function (id) {
        var _this = this;
        this.service.getAllTasks()
            .subscribe(function (data) { _this.tasksList = data.filter(function (task) { return task.Project_ID === id; }); });
    };
    ViewTaskComponent.prototype.editTask = function (task) {
        this.taskService.task = task;
        console.log(task);
        this.router.navigate(['/edittask']);
    };
    ViewTaskComponent.prototype.endTask = function (task) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to end this task?',
            accept: function () {
                task.Status = false;
                _this.service.updateTask(task)
                    .subscribe(function (data) { _this.showMessage(data.status.Result, data.status.Message); });
            }
        });
    };
    ViewTaskComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });
        }
        this.getAllTask(this.selectedProjectId);
    };
    ViewTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/task/view-task/view-task.component.html"),
            styles: [__webpack_require__("./src/app/task/view-task/view-task.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__view_task_service__["a" /* ViewTaskService */], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__utilities_common_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__view_task_service__["a" /* ViewTaskService */], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/task/view-task/view-task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTaskService = /** @class */ (function () {
    function ViewTaskService(http) {
        this.http = http;
        this.apiEndPOint = 'http://localhost:61734';
    }
    ViewTaskService.prototype.getAllProject = function () {
        return this.http.get(this.apiEndPOint + "/api/getAllProjects");
    };
    ViewTaskService.prototype.getAllTasks = function () {
        return this.http.get(this.apiEndPOint + "/api/getAllTasks");
    };
    ViewTaskService.prototype.updateTask = function (task) {
        return this.http.post(this.apiEndPOint + "/api/updateTask", task);
    };
    ViewTaskService.prototype.getAllParentTasks = function () {
        return this.http.get(this.apiEndPOint + "/api/getAllParentTasks");
    };
    ViewTaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ViewTaskService);
    return ViewTaskService;
}());



/***/ }),

/***/ "./src/app/user/add-user/add-user.component.css":
/***/ (function(module, exports) {

module.exports = ".row-centered {\r\n    text-align: center;\r\n}\r\n\r\n.row-right {\r\n    text-align: right;\r\n}\r\n\r\n.error {\r\n    font-size: 13px;\r\n    color: #c7254e;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.newButton{\r\n\r\n    background-color: rgb(200, 211, 224);\r\n    color: black;\r\n\r\n}"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSave(f.value)\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">New User</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label class=\"control-label col-sm-4\" for=\"firstName\">First Name:</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input class=\"form-control first_Name\" id=\"firstName\" [(ngModel)]=\"currentUser.First_Name\" name=\"firstName\" #firstName=\"ngModel\" required\r\n                                    placeholder=\"First Name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\"></div>\r\n                        <div *ngIf=\"firstName.errors?.required && firstName.touched\" class=\"error col-md-5\">\r\n                            First Name is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label class=\"control-label col-sm-4\" for=\"lastName\">Last Name:</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input class=\"form-control\" id=\"lastName\" [(ngModel)]=\"currentUser.Last_Name\" placeholder=\"Last Name\" name=\"lastName\"\r\n                                    #lastName=\"ngModel\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-5\"></div>\r\n                            <div *ngIf=\"lastName.errors?.required && lastName.touched\" class=\"error col-md-5\">\r\n                                Last Name is required\r\n                            </div>    \r\n                        </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label class=\"control-label col-sm-4\" for=\"empId\">Employee ID:</label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input class=\"form-control\" id=\"empId\" [(ngModel)]=\"currentUser.Employee_ID\" name=\"empId\" placeholder=\"Employee Id\"\r\n                                    #empId=\"ngModel\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\"></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-5\"></div>\r\n                            <div *ngIf=\"empId.errors?.required && empId.touched\" class=\"error col-md-5\">\r\n                                    Employee ID is required\r\n                            </div>    \r\n                        </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\"></div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <div class=\"col-md-4\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <button type=\"submit\" class=\"btn btn-md btn-primary newButton\"  [disabled]=\"f.invalid\">{{saveButtonString}}</button>\r\n                                <button type=\"button\" class=\"btn btn-md btn-primary newButton\" (click)=\"f.reset();onReset();\">Reset</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-3\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Search/Edit Users</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-10\">\r\n                        <p-dataTable [value]=\"userList\">\r\n                            <p-column field=\"First_Name\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Last_Name\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column field=\"Employee_ID\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\r\n                            <p-column header=\"Actions\" >\r\n                                <ng-template let-user=\"rowData\" pTemplate=\"body\">\r\n                                    <button type=\"button\" class=\"btn btn-primary newButton\" (click)=\"onEditClick(user)\" aria-label=\"Left Align\">\r\n                                        <span class=\"fa fa-edit fa-lg\" aria-hidden=\"true\" ></span>\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-primary newButton\" (click)=\"confirmDelete(user)\" aria-label=\"Left Align\">\r\n                                        <span class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></span>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                    <div class=\"col-md-1\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd ></p-confirmDialog>\r\n"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_user_service__ = __webpack_require__("./src/app/user/add-user/add-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(service, confirmationService) {
        this.service = service;
        this.confirmationService = confirmationService;
        this.msgs = [];
        this._confirmationService = confirmationService;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.saveButtonString = "Add";
        this.onReset();
        this.getUsers();
    };
    AddUserComponent.prototype.onEditClick = function (user) {
        this.saveButtonString = "Edit";
        this.currentUser = Object.assign({}, this.currentUser, user);
    };
    AddUserComponent.prototype.onSave = function (user) {
        this.updateUser(this.currentUser);
    };
    AddUserComponent.prototype.onReset = function () {
        this.saveButtonString = "Add";
        this.currentUser = { User_ID: 0, Employee_ID: "", First_Name: "", Last_Name: "" };
        this.form.reset();
    };
    AddUserComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });
        }
        this.getUsers();
        this.onReset();
    };
    AddUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers()
            .subscribe(function (data) { _this.userList = data; });
    };
    AddUserComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.service.updateUsers(user)
            .subscribe(function (data) {
            _this.showMessage(data.status.Result, data.status.Message);
        });
    };
    AddUserComponent.prototype.confirmDelete = function (user) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete user : ' + user.Employee_ID + '?',
            accept: function () {
                _this.service.deleteUser(user)
                    .subscribe(function (data) {
                    _this.showMessage(data.Result, data.Message);
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "form", void 0);
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/user/add-user/add-user.component.html"),
            styles: [__webpack_require__("./src/app/user/add-user/add-user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__add_user_service__["a" /* AddUserService */], __WEBPACK_IMPORTED_MODULE_2_primeng_api__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__add_user_service__["a" /* AddUserService */], __WEBPACK_IMPORTED_MODULE_2_primeng_api__["ConfirmationService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/user/add-user/add-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddUserService = /** @class */ (function () {
    function AddUserService(http) {
        this.http = http;
        this.apiEndPOint = 'http://localhost:61734';
    }
    AddUserService.prototype.getUsers = function () {
        return this.http.get(this.apiEndPOint + "/api/getAllUsers");
    };
    AddUserService.prototype.updateUsers = function (user) {
        return this.http.post(this.apiEndPOint + "/api/updateUser", user);
    };
    AddUserService.prototype.deleteUser = function (user) {
        return this.http.post(this.apiEndPOint + "/api/DeleteUser", user);
    };
    AddUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AddUserService);
    return AddUserService;
}());



/***/ }),

/***/ "./src/app/utilities/common-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:61734"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map