function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_netto_fee_netto_fee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/netto-fee/netto-fee.component */
    "./src/app/components/netto-fee/netto-fee.component.ts");

    var routes = [{
      path: '',
      component: _components_netto_fee_netto_fee_component__WEBPACK_IMPORTED_MODULE_2__["NettoFeeComponent"]
    }, {
      path: 'nettoFee',
      component: _components_netto_fee_netto_fee_component__WEBPACK_IMPORTED_MODULE_2__["NettoFeeComponent"]
    }, {
      path: '',
      redirectTo: 'nettoFee',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _components_netto_fee_netto_fee_component__WEBPACK_IMPORTED_MODULE_2__["NettoFeeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-frontend';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_netto_fee_netto_fee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/netto-fee/netto-fee.component */
    "./src/app/components/netto-fee/netto-fee.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"], _components_netto_fee_netto_fee_component__WEBPACK_IMPORTED_MODULE_12__["NettoFeeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"], _components_netto_fee_netto_fee_component__WEBPACK_IMPORTED_MODULE_12__["NettoFeeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 3,
      vars: 0,
      consts: [[1, "navbar", "navbar-light", 2, "background-color", "#e3f2fd"], ["routerLink", "/nettoFee", 1, "navbar-brand"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Netto D\xEDj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/netto-fee/netto-fee.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/netto-fee/netto-fee.component.ts ***!
    \*************************************************************/

  /*! exports provided: NettoFeeComponent */

  /***/
  function srcAppComponentsNettoFeeNettoFeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NettoFeeComponent", function () {
      return NettoFeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _repository_insurance_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../repository/insurance-repository.service */
    "./src/app/repository/insurance-repository.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_fee_calculation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/fee-calculation.service */
    "./src/app/services/fee-calculation.service.ts");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NettoFeeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "result: " + (ctx_r0.result == null ? null : ctx_r0.result.yearlyFee));
      }
    }

    function NettoFeeComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numberOfRelatives_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", numberOfRelatives_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numberOfRelatives_r3);
      }
    }

    function NettoFeeComponent_option_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var seq_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", seq_r4.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](seq_r4.name);
      }
    }

    var NettoFeeComponent =
    /*#__PURE__*/
    function () {
      function NettoFeeComponent(insuranceRepositoryService, formBuilder, feeCalculationService) {
        _classCallCheck(this, NettoFeeComponent);

        this.insuranceRepositoryService = insuranceRepositoryService;
        this.formBuilder = formBuilder;
        this.feeCalculationService = feeCalculationService;
        this.range = 3;
        this.feeForm = this.formBuilder.group({
          day: [],
          amountOfInsurance: [],
          year: [],
          month: [],
          lengthOfInsurance: [3],
          numberOfInsured: [null],
          chargeFrequency: [null]
        });
        this.maxNumberOfRelatives = this.insuranceRepositoryService.getMaxNumberOfRelatives();
        this.datePickerConfig = Object.assign({}, {
          containerClass: 'theme-dark-blue',
          dateInputFormat: 'YYYY-MM-DD'
        });
        this.seqs = this.insuranceRepositoryService.getSeq();
      }

      _createClass(NettoFeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.length();
          this.feeForm.value.year = this.split[0];
          this.feeForm.value.month = this.split[1];
          this.feeForm.value.day = this.split[2];
          console.log('ez a form:', this.feeForm.value);
          this.data = Object.assign({}, this.feeForm.value);
          console.log(this.data);
          this.feeCalculationService.calculateFee(this.data).subscribe(function (value) {
            _this.result = value;
            console.log(value);
          });
        }
      }, {
        key: "length",
        value: function length() {
          if (this.feeForm.value.lengthOfInsurance) {
            this.range = this.feeForm.value.lengthOfInsurance;
          }
        }
      }, {
        key: "onValueChange",
        value: function onValueChange($event) {
          var dateString = $event.toISOString();
          var replace = dateString.replace('T', '-');
          this.split = replace.split('-', 3);
          console.log(this.feeForm.value);
        }
      }]);

      return NettoFeeComponent;
    }();

    NettoFeeComponent.ɵfac = function NettoFeeComponent_Factory(t) {
      return new (t || NettoFeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_repository_insurance_repository_service__WEBPACK_IMPORTED_MODULE_1__["InsuranceRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fee_calculation_service__WEBPACK_IMPORTED_MODULE_3__["FeeCalculationService"]));
    };

    NettoFeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NettoFeeComponent,
      selectors: [["app-netto-fee"]],
      decls: 57,
      vars: 6,
      consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-sm-3", "col-md-6", "col-lg-5"], [1, "row", "justify-content-center", "pt-5"], [1, "col"], [1, "card", "text-white", "bg-info"], ["src", "assets/formulaLogo.png", "height", "70px", 1, "card-img-top"], [1, "card-header", "text-center"], [1, "card-body"], [3, "formGroup"], [1, "row"], ["for", "date"], [1, "col-4", "form-group"], ["type", "text", "placeholder", "Date of Birth", "id", "date", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "bsValueChange"], ["class", "col", 4, "ngIf"], ["for", "numberOfInsured"], ["name", "numberOfInsured", "formControlName", "numberOfInsured", "id", "numberOfInsured", 1, "custom-select"], ["disabled", "", "value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "amountOfInsurance", 1, "pt-3"], ["type", "number", "formControlName", "amountOfInsurance", "id", "amountOfInsurance", "placeholder", "Enter amount", 1, "form-control"], ["for", "lengthOfInsurance", 1, "pt-1"], [1, "slidecontainer", "justify-content-center"], ["type", "range", "min", "3", "max", "35", "formControlName", "lengthOfInsurance", "id", "myRange", "id", "lengthOfInsurance", 1, "slider", 3, "change", "mousemove"], [1, "font-weight-bold", "indigo-text", "ml-2", "mt-1"], [1, "col", "text-center"], [1, "col", "text-right"], [1, "font-weight-bold", "indigo-text"], ["for", "chargeFrequency", 1, "pt-3"], ["name", "chargeFrequency", "formControlName", "chargeFrequency", "id", "chargeFrequency", 1, "custom-select"], [1, "row", "justify-content-center", "pt-2", "pb-2"], [1, "col-4", "text-center"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "btn-block", 3, "click"], ["type", "text", "id", "result", "placeholder", "result", 1, "form-control", 3, "value"], [3, "value"]],
      template: function NettoFeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Netto Fee Calc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsValueChange", function NettoFeeComponent_Template_input_bsValueChange_18_listener($event) {
            return ctx.onValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NettoFeeComponent_div_19_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Number of Insured");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-- Number of Insured --");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NettoFeeComponent_option_26_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Amount of insurance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NettoFeeComponent_Template_input_change_35_listener() {
            return ctx.length();
          })("mousemove", function NettoFeeComponent_Template_input_mousemove_35_listener() {
            return ctx.length();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Charge frequency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "-- Charge frequency --");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, NettoFeeComponent_option_52_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NettoFeeComponent_Template_button_click_55_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.feeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", ctx.datePickerConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result == null ? null : ctx.result.yearlyFee);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.maxNumberOfRelatives);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.range);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seqs);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"]],
      styles: [".slidecontainer[_ngcontent-%COMP%] {\r\n  width: 100%; \r\n}\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%]:hover {\r\n  opacity: 1; \r\n}\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  transition: opacity .2s;\r\n}\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]   .bs-datepicker-container[_ngcontent-%COMP%]   .bs-datepicker-head[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]   .bs-datepicker-container[_ngcontent-%COMP%]   .bs-datepicker-head[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  color: #000 !important;\r\n}\r\n\r\n.containerClass[_ngcontent-%COMP%]{\r\n  color: #000 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXR0by1mZWUvbmV0dG8tZmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUUsbUNBQW1DO0FBQ2xEOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxVQUFVLEVBQUUsOEJBQThCO0FBQzVDOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBRVosdUJBQXVCO0FBQ3pCOztBQUVBLGdIQUFnSDs7QUFDaEg7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldHRvLWZlZS9uZXR0by1mZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIFdpZHRoIG9mIHRoZSBvdXRzaWRlIGNvbnRhaW5lciAqL1xyXG59XHJcblxyXG4vKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cclxuLnNsaWRlcjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgc2hvd24gb24gbW91c2Utb3ZlciAqL1xyXG59XHJcblxyXG4vKiBUaGUgc2xpZGVyIGl0c2VsZiAqL1xyXG4uc2xpZGVyIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG59XHJcblxyXG4vKiBUaGUgc2xpZGVyIGhhbmRsZSAodXNlIC13ZWJraXQtIChDaHJvbWUsIE9wZXJhLCBTYWZhcmksIEVkZ2UpIGFuZCAtbW96LSAoRmlyZWZveCkgdG8gb3ZlcnJpZGUgZGVmYXVsdCBsb29rKSAqL1xyXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYm9keSAuYnMtZGF0ZXBpY2tlci1jb250YWluZXIgLmJzLWRhdGVwaWNrZXItaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IC5icy1kYXRlcGlja2VyLWNvbnRhaW5lciAuYnMtZGF0ZXBpY2tlci1oZWFkICoge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJDbGFzc3tcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NettoFeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-netto-fee',
          templateUrl: './netto-fee.component.html',
          styleUrls: ['./netto-fee.component.css']
        }]
      }], function () {
        return [{
          type: _repository_insurance_repository_service__WEBPACK_IMPORTED_MODULE_1__["InsuranceRepositoryService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_fee_calculation_service__WEBPACK_IMPORTED_MODULE_3__["FeeCalculationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/repository/insurance-repository.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/repository/insurance-repository.service.ts ***!
    \************************************************************/

  /*! exports provided: InsuranceRepositoryService */

  /***/
  function srcAppRepositoryInsuranceRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsuranceRepositoryService", function () {
      return InsuranceRepositoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InsuranceRepositoryService =
    /*#__PURE__*/
    function () {
      function InsuranceRepositoryService() {
        _classCallCheck(this, InsuranceRepositoryService);

        this.seq = [{
          name: 'every year',
          value: 1
        }, {
          name: 'every half a year',
          value: 2
        }, {
          name: 'quarterly',
          value: 3
        }, {
          name: 'per month',
          value: 4
        }];
      }

      _createClass(InsuranceRepositoryService, [{
        key: "getSeq",
        value: function getSeq() {
          return this.seq;
        }
      }, {
        key: "getMaxNumberOfRelatives",
        value: function getMaxNumberOfRelatives() {
          return Array.from(Array(5)).map(function (x, i) {
            return i + 1;
          });
          ;
        }
      }]);

      return InsuranceRepositoryService;
    }();

    InsuranceRepositoryService.ɵfac = function InsuranceRepositoryService_Factory(t) {
      return new (t || InsuranceRepositoryService)();
    };

    InsuranceRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InsuranceRepositoryService,
      factory: InsuranceRepositoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsuranceRepositoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/fee-calculation.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/fee-calculation.service.ts ***!
    \*****************************************************/

  /*! exports provided: FeeCalculationService */

  /***/
  function srcAppServicesFeeCalculationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeeCalculationService", function () {
      return FeeCalculationService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var API_URL = 'https://formulative.io/api/calculate';
    var API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Zvcm11bGF0aXZlLmlvL2FwaSIsInN1YiI6IjM5YTI5YWFiNmNkMDQ0MTVjMzNlZjIwNWMxZGRhNzdjIiwiYXVkIjoiaHR0cHM6Ly9mb3JtdWxhdGl2ZS5pby9hcGkiLCJleHAiOjE1ODQ3NDk3MTIsIm93bmVyIjoiLU0yWXBUdExzZURaZnlRc290eVkiLCJpYXQiOjE1ODQ2NjMzMTF9.ctEdZPCTeLHwproY-H0olWTTeFRi9PAsi2SN23pVcQA';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'content-Type': 'application/json; charset=utf-8',
        'authorization': 'Bearer ' + API_TOKEN
      })
    };

    var FeeCalculationService =
    /*#__PURE__*/
    function () {
      function FeeCalculationService(http) {
        _classCallCheck(this, FeeCalculationService);

        this.http = http;
      }

      _createClass(FeeCalculationService, [{
        key: "createWrapper",
        value: function createWrapper(data) {
          this.feCalcForm = new (
          /*#__PURE__*/
          function () {
            function _class() {
              _classCallCheck(this, _class);

              this.project = 'excelFelol';
              this.buildConfig = 'default';
              this.version = 'draft';
              this.calculation = 'yearlyFee.year';
              this.params = data;
            }

            return _class;
          }())();
        }
      }, {
        key: "calculateFee",
        value: function calculateFee(data) {
          this.createWrapper(data);
          return this.http.post(API_URL, this.feCalcForm, httpOptions);
        }
      }]);

      return FeeCalculationService;
    }();

    FeeCalculationService.ɵfac = function FeeCalculationService_Factory(t) {
      return new (t || FeeCalculationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    FeeCalculationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FeeCalculationService,
      factory: FeeCalculationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeeCalculationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\tom\IdeaProjects\angular-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map