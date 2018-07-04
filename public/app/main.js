(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-appointment/add-appointment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/add-appointment/add-appointment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-appointment/add-appointment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/add-appointment/add-appointment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<title>W3.CSS</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<body>\n\n<form class=\"w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin\">\n  <h2 class=\"w3-center\">Book Appointment</h2>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"first\" type=\"text\" placeholder=\"Patient Name\">\n    </div>\n  </div>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"last\" type=\"text\" placeholder=\"Doctor Name\">\n    </div>\n  </div>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-phone\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"phone\" type=\"text\" placeholder=\"Phone\">\n    </div>\n  </div>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-pencil\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"message\" type=\"text\" placeholder=\"Problem\">\n    </div>\n  </div>\n\n  <button (click)=\"AddNewAppointment()\" onclick=\"window.location.href='http://172.16.56.180:4200/DoctorsClinics'; \"class=\"w3-button w3-block w3-section w3-blue w3-ripple w3-padding\">Book</button>\n\n</form>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/add-appointment/add-appointment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-appointment/add-appointment.component.ts ***!
  \**************************************************************/
/*! exports provided: AddAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAppointmentComponent", function() { return AddAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddAppointmentComponent = /** @class */ (function () {
    function AddAppointmentComponent() {
    }
    AddAppointmentComponent.prototype.ngOnInit = function () {
    };
    AddAppointmentComponent.prototype.AddNewAppointment = function () {
        alert('appointment Added');
    };
    AddAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-appointment',
            template: __webpack_require__(/*! ./add-appointment.component.html */ "./src/app/add-appointment/add-appointment.component.html"),
            styles: [__webpack_require__(/*! ./add-appointment.component.css */ "./src/app/add-appointment/add-appointment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddAppointmentComponent);
    return AddAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.button {\r\n  -webkit-appearance: button;\r\n  -moz-appearance: button;\r\n  appearance: button;\r\n\r\n  text-decoration: none;\r\n  color: initial;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _record_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record-service.service */ "./src/app/record-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _doctors_clinics_doctors_clinics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./doctors-clinics/doctors-clinics.component */ "./src/app/doctors-clinics/doctors-clinics.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _add_appointment_add_appointment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-appointment/add-appointment.component */ "./src/app/add-appointment/add-appointment.component.ts");
/* harmony import */ var _edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-appointment/edit-appointment.component */ "./src/app/edit-appointment/edit-appointment.component.ts");
/* harmony import */ var _clinic_login_clinic_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clinic-login/clinic-login.component */ "./src/app/clinic-login/clinic-login.component.ts");
/* harmony import */ var _supervisor_panel_supervisor_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./supervisor-panel/supervisor-panel.component */ "./src/app/supervisor-panel/supervisor-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
                _doctors_clinics_doctors_clinics_component__WEBPACK_IMPORTED_MODULE_10__["DoctorsClinicsComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"],
                _add_appointment_add_appointment_component__WEBPACK_IMPORTED_MODULE_12__["AddAppointmentComponent"],
                _edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_13__["EditAppointmentComponent"],
                _clinic_login_clinic_login_component__WEBPACK_IMPORTED_MODULE_14__["ClinicLoginComponent"],
                _supervisor_panel_supervisor_panel_component__WEBPACK_IMPORTED_MODULE_15__["SupervisorPanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["JsonpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    {
                        path: 'Login',
                        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]
                    },
                    {
                        path: 'DoctorsClinics',
                        component: _doctors_clinics_doctors_clinics_component__WEBPACK_IMPORTED_MODULE_10__["DoctorsClinicsComponent"]
                    },
                    {
                        path: 'ClinicLogin',
                        component: _clinic_login_clinic_login_component__WEBPACK_IMPORTED_MODULE_14__["ClinicLoginComponent"]
                    },
                    {
                        path: 'SupervisorPanel',
                        component: _supervisor_panel_supervisor_panel_component__WEBPACK_IMPORTED_MODULE_15__["SupervisorPanelComponent"]
                    },
                    {
                        path: 'AddAppointments',
                        component: _add_appointment_add_appointment_component__WEBPACK_IMPORTED_MODULE_12__["AddAppointmentComponent"]
                    },
                    {
                        path: 'EditAppointment',
                        component: _edit_appointment_edit_appointment_component__WEBPACK_IMPORTED_MODULE_13__["EditAppointmentComponent"]
                    },
                    {
                        path: '',
                        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"]
                    }
                ])
            ],
            providers: [_record_service_service__WEBPACK_IMPORTED_MODULE_5__["RecordServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clinic-login/clinic-login.component.css":
/*!*********************************************************!*\
  !*** ./src/app/clinic-login/clinic-login.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.login-page {\r\n  width: auto;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #4CAF50;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #43A047;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #4CAF50;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\n\r\nbody {\r\n  background: #76b852; /* fallback for old browsers */\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.dropbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n"

/***/ }),

/***/ "./src/app/clinic-login/clinic-login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/clinic-login/clinic-login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-page\">\n  <div class=\"form\">\n    <form class=\"login-form\" method=\"post\">\n      <input type=\"text\" id= \"Username\" placeholder=\"username\" name=\"UserID\"/>\n      <input type=\"text\" id=\"Passid\" placeholder=\"password\" name=\"PassID\"/>\n      <div class=\"dropdown\">\n        <button class=\"dropbtn\">{{Rolebox}}</button>\n        <div class=\"dropdown-content\">\n          <a (click)=\"UpdateRole(item)\" *ngFor=\"let item of AvalaibleRoles\">{{item}}</a>\n        </div>\n      </div>\n      <button type=\"submit\" onclick=\"location.href = 'http://172.16.56.180:4200/SupervisorPanel';\" >Post login</button>\n    </form>\n  </div>\n</div>\n\n<div class=\"login-page\">\n  <div class=\"form\">\n    <form class=\"login-form\" method=\"get\">\n      <input type=\"text\" id= \"Username2\" placeholder=\"username\" name=\"UserID\"/>\n      <input type=\"text\" id=\"Passid2\" placeholder=\"password\" name=\"PassID\"/>\n      <div class=\"dropdown\">\n        <button class=\"dropbtn\">{{Rolebox}}</button>\n        <div class=\"dropdown-content\">\n          <a (click)=\"UpdateRole(item)\" *ngFor=\"let item of AvalaibleRoles\">{{item}}</a>\n        </div>\n      </div>\n      <button type=\"submit\" onclick=\"location.href = 'http://172.16.56.180:4200/SupervisorPanel';\" >Get login</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/clinic-login/clinic-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clinic-login/clinic-login.component.ts ***!
  \********************************************************/
/*! exports provided: ClinicLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicLoginComponent", function() { return ClinicLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClinicLoginComponent = /** @class */ (function () {
    function ClinicLoginComponent() {
    }
    ClinicLoginComponent.prototype.ngOnInit = function () {
        this.AvalaibleRoles = ['Supervisor', 'Doctor', 'FrontDest'];
        this.Rolebox = 'Role';
    };
    ClinicLoginComponent.prototype.UpdateRole = function (Role) {
        this.Rolebox = Role;
    };
    ClinicLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clinic-login',
            template: __webpack_require__(/*! ./clinic-login.component.html */ "./src/app/clinic-login/clinic-login.component.html"),
            styles: [__webpack_require__(/*! ./clinic-login.component.css */ "./src/app/clinic-login/clinic-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClinicLoginComponent);
    return ClinicLoginComponent;
}());



/***/ }),

/***/ "./src/app/data-share.service.ts":
/*!***************************************!*\
  !*** ./src/app/data-share.service.ts ***!
  \***************************************/
/*! exports provided: DataShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataShareService", function() { return DataShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataShareService = /** @class */ (function () {
    function DataShareService() {
    }
    DataShareService.prototype.UpdateSelectedAppointments = function (Appointments) {
        this.SelectedAppointments = Appointments;
    };
    DataShareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataShareService);
    return DataShareService;
}());



/***/ }),

/***/ "./src/app/doctors-clinics/doctors-clinics.component.css":
/*!***************************************************************!*\
  !*** ./src/app/doctors-clinics/doctors-clinics.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: #f1f1f1;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.column {\r\n  float: left;\r\n  width: 66%;\r\n  padding: 10px;\r\n}\r\n\r\n.column2{\r\n  float: left;\r\n  width: 33%;\r\n  padding: 10px;\r\n}\r\n\r\n.dropbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.myclass{\r\n  display:inline-block;\r\n  width: 80px;\r\n  height: 40px;\r\n  background: transparent;\r\n  border: transparent;\r\n}\r\n\r\n.grid-container {\r\n  margin:1em auto;\r\n  background-color: teal;\r\n  padding: 10px;\r\n  grid-template-columns: repeat(auto-fill,200px);\r\n}\r\n\r\n.grid-container  td {\r\n\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  padding-top: 2.5%;\r\n  padding-bottom: 2.5%;\r\n}\r\n\r\n.text-rotate{\r\n  text-align: center;\r\n  font-size: 25px;\r\n  -webkit-transform:rotate(-90deg); /* Safari and Chrome */\r\n}\r\n\r\n.cliniccol {\r\n  padding-top: 2.5%;\r\n  padding-bottom: 2.5%;\r\n  text-align: center;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  color: white;\r\n  background: teal;\r\n}\r\n\r\n.doctorcol {\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  color: white;\r\n  background: teal;\r\n}\r\n\r\n.AllowedAdd {\r\n  background-color: limegreen; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.DisabledAdd {\r\n  background-color: #4CAF50; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.AllowedEdit{\r\n  background-color: deepskyblue;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.disabledEdit {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.block {\r\n  display: block;\r\n  width: 100%;\r\n  border: none;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 28px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.block:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n/* W3.CSS 4.10 February 2018 by Jan Egil and Borge Refsnes */\r\n\r\nhtml{box-sizing:border-box}\r\n\r\n*,*:before,*:after{box-sizing:inherit}\r\n\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\n\r\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\r\n\r\nbody{margin:0}\r\n\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\r\n\r\naudio,canvas,progress,video{display:inline-block}\r\n\r\nprogress{vertical-align:baseline}\r\n\r\naudio:not([controls]){display:none;height:0}\r\n\r\n[hidden],template{display:none}\r\n\r\na{background-color:transparent;-webkit-text-decoration-skip:objects}\r\n\r\na:active,a:hover{outline-width:0}\r\n\r\nabbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}\r\n\r\ndfn{font-style:italic}\r\n\r\nmark{background:#ff0;color:#000}\r\n\r\nsmall{font-size:80%}\r\n\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\n\r\nsub{bottom:-0.25em}\r\n\r\nsup{top:-0.5em}\r\n\r\nfigure{margin:1em 40px}\r\n\r\nimg{border-style:none}\r\n\r\nsvg:not(:root){overflow:hidden}\r\n\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\r\n\r\nhr{box-sizing:content-box;height:0;overflow:visible}\r\n\r\nbutton,input,select,textarea{font:inherit;margin:0}\r\n\r\noptgroup{font-weight:bold}\r\n\r\nbutton,input{overflow:visible}\r\n\r\nbutton,select{text-transform:none}\r\n\r\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\n\r\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\n\r\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\n\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\n\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\r\n\r\ntextarea{overflow:auto}\r\n\r\n[type=checkbox],[type=radio]{padding:0}\r\n\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n\r\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n\r\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\r\n\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n\r\n/* End extract */\r\n\r\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}\r\n\r\nhtml{overflow-x:hidden}\r\n\r\nh1{font-size:36px}\r\n\r\nh2{font-size:30px}\r\n\r\nh3{font-size:24px}\r\n\r\nh4{font-size:20px}\r\n\r\nh5{font-size:18px}\r\n\r\nh6{font-size:16px}\r\n\r\n.w3-serif{font-family:serif}\r\n\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}\r\n\r\n.w3-wide{letter-spacing:4px}\r\n\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n\r\n.w3-image{max-width:100%;height:auto}\r\n\r\nimg{vertical-align:middle}\r\n\r\na{color:inherit}\r\n\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}\r\n\r\n.w3-table-all{border:1px solid #ccc}\r\n\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}\r\n\r\n.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}\r\n\r\n.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}\r\n\r\n.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n\r\n.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n\r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}\r\n\r\n.w3-disabled *,:disabled *{pointer-events:none}\r\n\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}\r\n\r\n.w3-badge{border-radius:50%}\r\n\r\n.w3-ul{list-style-type:none;padding:0;margin:0}\r\n\r\n.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}\r\n\r\n.w3-ul li:last-child{border-bottom:none}\r\n\r\n.w3-tooltip,.w3-display-container{position:relative}\r\n\r\n.w3-tooltip .w3-text{display:none}\r\n\r\n.w3-tooltip:hover .w3-text{display:inline-block}\r\n\r\n.w3-ripple:active{opacity:0.5}\r\n\r\n.w3-ripple{transition:opacity 0s}\r\n\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n\r\n.w3-main,#main{transition:margin-left .4s}\r\n\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n\r\n.w3-bar{width:100%;overflow:hidden}\r\n\r\n.w3-center .w3-bar{display:inline-block;width:auto}\r\n\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}\r\n\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n\r\n.w3-bar .w3-button{white-space:normal}\r\n\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}\r\n\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}\r\n\r\n.w3-block{display:block;width:100%}\r\n\r\n.w3-responsive{display:block;overflow-x:auto}\r\n\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n\r\n.w3-col.s1{width:8.33333%}\r\n\r\n.w3-col.s2{width:16.66666%}\r\n\r\n.w3-col.s3{width:24.99999%}\r\n\r\n.w3-col.s4{width:33.33333%}\r\n\r\n.w3-col.s5{width:41.66666%}\r\n\r\n.w3-col.s6{width:49.99999%}\r\n\r\n.w3-col.s7{width:58.33333%}\r\n\r\n.w3-col.s8{width:66.66666%}\r\n\r\n.w3-col.s9{width:74.99999%}\r\n\r\n.w3-col.s10{width:83.33333%}\r\n\r\n.w3-col.s11{width:91.66666%}\r\n\r\n.w3-col.s12{width:99.99999%}\r\n\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n  .w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n  .w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n  .w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n  .w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n\r\n.w3-content{max-width:980px;margin:auto}\r\n\r\n.w3-rest{overflow:hidden}\r\n\r\n.w3-cell-row{display:table;width:100%}\r\n\r\n.w3-cell{display:table-cell}\r\n\r\n.w3-cell-top{vertical-align:top}\r\n\r\n.w3-cell-middle{vertical-align:middle}\r\n\r\n.w3-cell-bottom{vertical-align:bottom}\r\n\r\n.w3-hide{display:none!important}\r\n\r\n.w3-show-block,.w3-show{display:block!important}\r\n\r\n.w3-show-inline-block{display:inline-block!important}\r\n\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n  .w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\r\n  .w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n  .w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}\r\n\r\n.w3-top{top:0}\r\n\r\n.w3-bottom{bottom:0}\r\n\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n\r\n.w3-display-topleft{position:absolute;left:0;top:0}\r\n\r\n.w3-display-topright{position:absolute;right:0;top:0}\r\n\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}\r\n\r\n.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n\r\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n\r\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n\r\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n\r\n.w3-display-container:hover .w3-display-hover{display:block}\r\n\r\n.w3-display-container:hover span.w3-display-hover{display:inline-block}\r\n\r\n.w3-display-hover{display:none}\r\n\r\n.w3-display-position{position:absolute}\r\n\r\n.w3-circle{border-radius:50%}\r\n\r\n.w3-round-small{border-radius:2px}\r\n\r\n.w3-round,.w3-round-medium{border-radius:4px}\r\n\r\n.w3-round-large{border-radius:8px}\r\n\r\n.w3-round-xlarge{border-radius:16px}\r\n\r\n.w3-round-xxlarge{border-radius:32px}\r\n\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n\r\n.w3-container,.w3-panel{padding:0.01em 16px}\r\n\r\n.w3-panel{margin-top:16px;margin-bottom:16px}\r\n\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}\r\n\r\n@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n\r\n@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}\r\n\r\n@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n\r\n@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}\r\n\r\n@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}\r\n\r\n@keyframes opac{from{opacity:0} to{opacity:1}}\r\n\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}\r\n\r\n@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n\r\n@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}\r\n\r\n@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n\r\n@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}\r\n\r\n@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n\r\n@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}\r\n\r\n@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n\r\n@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}\r\n\r\n@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n\r\n@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n\r\n.w3-animate-input{transition:width 0.4s ease-in-out}\r\n\r\n.w3-animate-input:focus{width:100%!important}\r\n\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}\r\n\r\n.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n\r\n.w3-opacity-max{opacity:0.25}\r\n\r\n.w3-opacity-min{opacity:0.75}\r\n\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}\r\n\r\n.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}\r\n\r\n.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}\r\n\r\n.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n\r\n.w3-tiny{font-size:10px!important}\r\n\r\n.w3-small{font-size:12px!important}\r\n\r\n.w3-medium{font-size:15px!important}\r\n\r\n.w3-large{font-size:18px!important}\r\n\r\n.w3-xlarge{font-size:24px!important}\r\n\r\n.w3-xxlarge{font-size:36px!important}\r\n\r\n.w3-xxxlarge{font-size:48px!important}\r\n\r\n.w3-jumbo{font-size:64px!important}\r\n\r\n.w3-left-align{text-align:left!important}\r\n\r\n.w3-right-align{text-align:right!important}\r\n\r\n.w3-justify{text-align:justify!important}\r\n\r\n.w3-center{text-align:center!important}\r\n\r\n.w3-border-0{border:0!important}\r\n\r\n.w3-border{border:1px solid #ccc!important}\r\n\r\n.w3-border-top{border-top:1px solid #ccc!important}\r\n\r\n.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n\r\n.w3-border-left{border-left:1px solid #ccc!important}\r\n\r\n.w3-border-right{border-right:1px solid #ccc!important}\r\n\r\n.w3-topbar{border-top:6px solid #ccc!important}\r\n\r\n.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n\r\n.w3-leftbar{border-left:6px solid #ccc!important}\r\n\r\n.w3-rightbar{border-right:6px solid #ccc!important}\r\n\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n\r\n.w3-margin{margin:16px!important}\r\n\r\n.w3-margin-top{margin-top:16px!important}\r\n\r\n.w3-margin-bottom{margin-bottom:16px!important}\r\n\r\n.w3-margin-left{margin-left:16px!important}\r\n\r\n.w3-margin-right{margin-right:16px!important}\r\n\r\n.w3-padding-small{padding:4px 8px!important}\r\n\r\n.w3-padding{padding:8px 16px!important}\r\n\r\n.w3-padding-large{padding:12px 24px!important}\r\n\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}\r\n\r\n.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}\r\n\r\n.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n\r\n.w3-left{float:left!important}\r\n\r\n.w3-right{float:right!important}\r\n\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n\r\n/* Colors */\r\n\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}\r\n\r\n.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}\r\n\r\n.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}\r\n"

/***/ }),

/***/ "./src/app/doctors-clinics/doctors-clinics.component.html":
/*!****************************************************************!*\
  !*** ./src/app/doctors-clinics/doctors-clinics.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n\r\n  <html>\r\n\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n    <body>\r\n\r\n      <!-- Div for the header -->\r\n      <div class=\"header\">\r\n        <h1>Supervisor View</h1>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"column\" style=\"background-color:#bbb;\">\r\n          <table class=\"grid-container\">\r\n            <tr>\r\n              <th width=\"10%\" rowspan=\"22\" class=\"doctorcol\"><p class=\"text-rotate\">Doctors</p></th>\r\n              <th colspan=\"3\" class=\"cliniccol\">Clinics</th>\r\n            </tr>\r\n            <!--to fill the total clinics-->\r\n            <tr>\r\n              <td></td>\r\n              <td  *ngFor=\"let item of Clinics\" >{{item}}</td>\r\n            </tr>\r\n\r\n            <!--to add the doctors-->\r\n            <tr  id= \"DoctorsList\" *ngFor=\"let item of Doctors\">\r\n              <td>{{item}}</td>\r\n              <!--to create the complete grid i.e. equal columns to clinics in each row-->\r\n              <td *ngFor=\"let item of Clinics\">\r\n                <!--<form><input class=\"myclass\" type=\"button\" value=\"Show\" (click)=\"ShowAppointments()\"></form>-->\r\n\r\n                <div class=\"w3-container\">\r\n\r\n                  <button  onclick=\"document.getElementById('id01').style.display='block'\" class=\"w3-button\">Show</button>\r\n\r\n                  <div id=\"id01\" class=\"w3-modal w3-animate-opacity\">\r\n\r\n                    <div class=\"w3-modal-content w3-card-4\">\r\n\r\n                      <header class=\"w3-container w3-teal\">\r\n\r\n                      <span onclick=\"document.getElementById('id01').style.display='none'\"\r\n                            class=\"w3-button w3-large w3-display-topright\">&times;\r\n                      </span>\r\n\r\n                        <h2>Appointments</h2>\r\n                      </header>\r\n\r\n                      <div class=\"w3-container\">\r\n                        <!--to show the appointments of particular index-->\r\n                        <p *ngFor=\"let item of Appointments\">\r\n                          <a href=\"http://172.16.56.180:4200/EditAppointment\">{{item}}</a>\r\n                        </p>\r\n                      </div>\r\n\r\n                      <footer class=\"w3-container w3-teal\">\r\n                        <button class=\"AllowedAdd\" (click)=\"SendAppointments()\" ONCLICK=\"location.href='http://172.16.56.180:4200/AddAppointments';\">Add</button>\r\n                      </footer>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </td>\r\n            </tr>\r\n\r\n\r\n          </table>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"column2\" style=\"background-color:#ccc;\">\r\n\r\n\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">{{SpecialityBox}}</button>\r\n            <div class=\"dropdown-content\">\r\n                <a (click)=\"UpdateSpeciality(item)\" *ngFor=\"let item of Speciality\">{{item}}</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">{{ClinicBox}}</button>\r\n            <div class=\"dropdown-content\">\r\n              <a (click)=\"UpdateClinic(item)\" *ngFor=\"let item of AllClincis\">{{item}}</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </body>\r\n\r\n  </html>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/doctors-clinics/doctors-clinics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/doctors-clinics/doctors-clinics.component.ts ***!
  \**************************************************************/
/*! exports provided: DoctorsClinicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsClinicsComponent", function() { return DoctorsClinicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-share.service */ "./src/app/data-share.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorsClinicsComponent = /** @class */ (function () {
    function DoctorsClinicsComponent(ShareData) {
        this.ShareData = ShareData;
        this.rowspan = 22;
        this.SpecialityBox = 'Select Speciality';
        this.ClinicBox = 'Select Clinic';
    }
    DoctorsClinicsComponent.prototype.ngOnInit = function () {
        this.AllClincis = ['Ordopedix', 'Chiropractic', 'Medical', 'Cinalytica'];
        this.AllDoctors = ['Dr.shahrukh', 'Dr. Machine Gun', 'Dr. PizzaHut', 'Dr. McDonalds', 'Dr. Howdy'];
        this.Appointments = ['Patient:Haris Doctor:Shahrukh Problem:Cold Date:2-May-2019', 'Patient:shahrukh Doctor:Howdy Problem:Hungry Date:28-june-2018'];
        this.Speciality = ['Medical', 'PT', 'ACCU'];
        this.Clinics = [];
        this.Doctors = [];
    };
    DoctorsClinicsComponent.prototype.SendAppointments = function () {
        this.ShareData.UpdateSelectedAppointments(this.Appointments[0]);
    };
    DoctorsClinicsComponent.prototype.showIndex = function (index) {
        alert(index);
    };
    DoctorsClinicsComponent.prototype.UpdateClinicBox = function (Clinic) {
        this.ClinicBox = Clinic;
        this.UpdateClinic(Clinic);
    };
    DoctorsClinicsComponent.prototype.UpdateSpeciality = function (spec) {
        this.SpecialityBox = spec;
        this.UpdateDoctorList(spec);
    };
    DoctorsClinicsComponent.prototype.UpdateDoctorList = function (spec) {
        if (spec.toString() === 'Medical') {
            this.Doctors = ['Dr.Shahrukh', 'Dr.Pizza Hut'];
        }
        if (spec.toString() === 'ACCU') {
            this.Doctors = ['Dr.Shahrukh', 'Dr.Pizza Hut',
                'Dr. Gulsher', 'Dr. McDonalds', 'Dr. Howdy', 'Dr. BurgerFest'];
        }
    };
    DoctorsClinicsComponent.prototype.UpdateClinic = function (Clinic) {
        if (Clinic.toString() === 'Ordopedix') {
            this.Clinics.push('Ordopedix');
        }
        if (Clinic.toString() === 'Chiropractic') {
            this.Clinics.push('Chiropractic');
        }
    };
    DoctorsClinicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctors-clinics',
            template: __webpack_require__(/*! ./doctors-clinics.component.html */ "./src/app/doctors-clinics/doctors-clinics.component.html"),
            styles: [__webpack_require__(/*! ./doctors-clinics.component.css */ "./src/app/doctors-clinics/doctors-clinics.component.css")]
        }),
        __metadata("design:paramtypes", [_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"]])
    ], DoctorsClinicsComponent);
    return DoctorsClinicsComponent;
}());



/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.component.html":
/*!******************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<body>\n\n<form class=\"w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin\">\n  <h2 class=\"w3-center\">Edit Appointment</h2>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"first\" type=\"text\" value=\"{{PatientName}}\">\n    </div>\n  </div>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"last\" type=\"text\" value=\"{{DoctorName}}\">\n    </div>\n  </div>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-phone\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"phone\" type=\"text\" value=\"{{Phone}}\">\n    </div>\n  </div>\n\n  <div class=\"w3-row w3-section\">\n    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-pencil\"></i></div>\n    <div class=\"w3-rest\">\n      <input class=\"w3-input w3-border\" name=\"message\" type=\"text\" value=\"{{Problem}}\">\n    </div>\n  </div>\n\n  <button (click)=\"EditAppointment()\" onclick=\"window.location.href='http://172.16.56.180:4200/DoctorsClinics'; \"class=\"w3-button w3-block w3-section w3-blue w3-ripple w3-padding\">Update</button>\n\n</form>\n\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.component.ts ***!
  \****************************************************************/
/*! exports provided: EditAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppointmentComponent", function() { return EditAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-share.service */ "./src/app/data-share.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditAppointmentComponent = /** @class */ (function () {
    function EditAppointmentComponent(RetrivedData) {
        this.RetrivedData = RetrivedData;
        this.PatientName = 'Shahrukh';
        this.DoctorName = 'Howdy';
        this.Phone = '03246809605';
        this.Problem = 'Shahrukh is Hungry due to unavailability of food at university';
        this.Appointments = {};
    }
    EditAppointmentComponent.prototype.ngOnInit = function () {
    };
    EditAppointmentComponent.prototype.EditAppointment = function () {
        this.Appointments = this.RetrivedData.SelectedAppointments;
        alert(this.Appointments[0]);
    };
    EditAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-appointment',
            template: __webpack_require__(/*! ./edit-appointment.component.html */ "./src/app/edit-appointment/edit-appointment.component.html"),
            styles: [__webpack_require__(/*! ./edit-appointment.component.css */ "./src/app/edit-appointment/edit-appointment.component.css")]
        }),
        __metadata("design:paramtypes", [_data_share_service__WEBPACK_IMPORTED_MODULE_1__["DataShareService"]])
    ], EditAppointmentComponent);
    return EditAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #4CAF50;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #43A047;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #4CAF50;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\n\r\nbody {\r\n  background: #76b852; /* fallback for old browsers */\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-page\">\n  <div class=\"form\">\n    <form class=\"register-form\">\n      <input type=\"text\" placeholder=\"name\"/>\n      <input type=\"password\" placeholder=\"password\"/>\n      <input type=\"text\" placeholder=\"email address\"/>\n      <button>create</button>\n      <p class=\"message\">Already registered? <a href=\"#\">Sign In</a></p>\n    </form>\n    <form class=\"login-form\" method=\"post\" action=\"http://172.16.15.104:80/senddata\">\n      <input type=\"text\" id= \"Username\" placeholder=\"username\" [(ngModel)]=\"Data.Username \" name=\"title\"/>\n      <input type=\"text\" id=\"Passid\" placeholder=\"password\" [(ngModel)]=\"Data.PassId\" name=\"Message\"/>\n      <button type=\"submit\">login</button>\n      <p class=\"message\">Not registered? <a href=\"#\">Create an account</a></p>\n    </form>\n  </div>\n\n\n  <h1>{{Data.ID}} {{Data.Message}}</h1>\n  <h1> {{records | json}} </h1>\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _record_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../record-service.service */ "./src/app/record-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(retrieveDataService) {
        this.retrieveDataService = retrieveDataService;
        this.records = {};
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Send = {
            ID: 'i160034',
            title: 'Shahrukh',
            Message: 'Hallo Mukhtar'
        };
        this.Data = {
            ID: '',
            title: '',
            Message: ''
        };
        this.retrieveDataService.getData().subscribe(function (data) { return _this.records = data; });
    };
    LoginPageComponent.prototype.SendData = function () {
        this.retrieveDataService.sendData(this.Send);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_record_service_service__WEBPACK_IMPORTED_MODULE_1__["RecordServiceService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-menu {\r\n  width: 200px; /* Set a width if you like */\r\n}\r\n\r\n.vertical-menu a {\r\n  background-color: #eee; /* Grey background color */\r\n  color: black; /* Black text color */\r\n  display: block; /* Make the links appear below each other */\r\n  padding: 12px; /* Add some padding */\r\n  text-decoration: none; /* Remove underline from links */\r\n}\r\n\r\n.vertical-menu a:hover {\r\n  background-color: #ccc; /* Dark grey background on mouse-over */\r\n}\r\n\r\n.vertical-menu a.active {\r\n  background-color: #4CAF50; /* Add a green color to the \"active/current\" link */\r\n  color: white;\r\n}\r\n\r\ndiv {\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: red;\r\n\r\n  position: absolute;\r\n  top:0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"vertical-menu\">\n  <a href=\"#\" class=\"active\">Home</a>\n  <a href='http://127.0.0.1:8000/app/ClinicLogin'>Login Page</a>\n  <a href='./DoctorsClinics'>Supervisor View</a>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/record-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/record-service.service.ts ***!
  \*******************************************/
/*! exports provided: RecordServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordServiceService", function() { return RecordServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RecordServiceService = /** @class */ (function () {
    function RecordServiceService(Http) {
        this.Http = Http;
        this.url = 'http://172.16.15.104:80/about';
        this.Sendurl = 'http://172.16.15.104:80/senddata';
    }
    RecordServiceService.prototype.getData = function () {
        return this.Http.get(this.url);
    };
    RecordServiceService.prototype.sendData = function (hero) {
        return this.Http.post(this.Sendurl, hero, httpOptions).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    RecordServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordServiceService);
    return RecordServiceService;
}());



/***/ }),

/***/ "./src/app/supervisor-panel/supervisor-panel.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/supervisor-panel/supervisor-panel.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: #f1f1f1;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  background-color: #4CAF50; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.button2 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid #008CBA;\r\n}\r\n\r\n.button1 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid #4CAF50;\r\n}\r\n\r\n.button3 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid #f44336;\r\n}\r\n\r\n.center {\r\n  margin: 100px;\r\n  height: 200px;\r\n  width: 80%;\r\n  border: 3px solid #73AD21;\r\n  padding: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/supervisor-panel/supervisor-panel.component.html":
/*!******************************************************************!*\
  !*** ./src/app/supervisor-panel/supervisor-panel.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n    <div class=\"header\">\n      <h1>Supervisor Panel</h1>\n    </div>\n\n    <body>\n\n      <div class=\"center\">\n        <button class=\"button button1\"  onclick=\"location.href = 'http://172.16.56.180:4200/DoctorsClinics';\">Manage Doctors</button>\n        <button class=\"button button2\">Assign Doctors</button>\n        <button class=\"button button3\">Show Notifications</button>\n        <button class=\"button button3\">Log Out</button>\n      </div>\n\n    </body>\n\n\n\n</html>\n"

/***/ }),

/***/ "./src/app/supervisor-panel/supervisor-panel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/supervisor-panel/supervisor-panel.component.ts ***!
  \****************************************************************/
/*! exports provided: SupervisorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorPanelComponent", function() { return SupervisorPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupervisorPanelComponent = /** @class */ (function () {
    function SupervisorPanelComponent() {
    }
    SupervisorPanelComponent.prototype.ngOnInit = function () {
    };
    SupervisorPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supervisor-panel',
            template: __webpack_require__(/*! ./supervisor-panel.component.html */ "./src/app/supervisor-panel/supervisor-panel.component.html"),
            styles: [__webpack_require__(/*! ./supervisor-panel.component.css */ "./src/app/supervisor-panel/supervisor-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupervisorPanelComponent);
    return SupervisorPanelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular-Projects\TestApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map