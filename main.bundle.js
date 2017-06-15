webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "#root-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.header {\n    position: fixed;\n    width: 100%;\n    z-index: 1;\n}\n\n.main-content {\n    margin-top: 90px;\n    overflow: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n}", "", {"version":3,"sources":["/Users/d055406/Documents/Privat/lebenpur2/src/app/app.component.css"],"names":[],"mappings":"AAAA;IACI,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;QAAvB,2BAAuB;YAAvB,uBAAuB;CAC1B;;AAED;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;CACd;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,OAAO;IACP,UAAU;IACV,YAAY;CACf","file":"app.component.css","sourcesContent":["#root-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    position: fixed;\n    width: 100%;\n    z-index: 1;\n}\n\n.main-content {\n    margin-top: 90px;\n    overflow: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"root-container\">\n  <div class=\"header\">\n    <header-bar></header-bar>\n  </div>\n  <div class=\"main-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        // ng2-bootstrap modal hack
        this.viewContainerRef = viewContainerRef;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */]) === "function" && _a || Object])
], AppComponent);

;
var _a;
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_bar_header_bar_component__ = __webpack_require__("../../../../../src/app/components/header-bar/header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_left_right_left_right_component__ = __webpack_require__("../../../../../src/app/components/left-right/left-right.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_mousewheel_directive__ = __webpack_require__("../../../../../src/app/directives/mousewheel.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MomentModule } from 'angular2-moment';



// import { Ng2PaginationModule } from 'ng2-pagination';
// import { Ng2PageScrollModule } from 'ng2-page-scroll';
// components








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_header_bar_header_bar_component__["a" /* HeaderBar */],
            __WEBPACK_IMPORTED_MODULE_11__components_landing_page_landing_page_component__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_12__components_left_right_left_right_component__["a" /* LeftRightComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_gallery_gallery_component__["a" /* Gallery */],
            __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__directives_mousewheel_directive__["a" /* MouseWheelDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */],
            // MomentModule,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["a" /* TooltipModule */],
            // Ng2PaginationModule,
            __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["b" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["c" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["d" /* BsDropdownModule */].forRoot()
            // Ng2PageScrollModule.forRoot()
        ],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_landing_page_landing_page_component__["a" /* LandingPage */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'gallery/:name', component: __WEBPACK_IMPORTED_MODULE_3__components_gallery_gallery_component__["a" /* Gallery */] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.content = [{
                title: 'ABOUT ME',
                imageUrl: 'assets/about1.jpg',
                // description: `“When people look at my pictures I want them to feel the way they do when they want to read a line of a poem twice.” Robert Frank`,
                description: "Hallo,<br><br>\nsch\u00F6n, dass DU hier bist!<br>\nIch bin Katrin und die Fotografie ist meine gro\u00DFe Leidenschaft! Sie ist f\u00FCr mich eine Hommage an das Leben, die Liebe, das Lachen...\nGef\u00FChlvoll und mit Liebe zum Detail, erz\u00E4hle ich mit meinen Bildern visuelle Geschichten von der Liebe zweier Menschen, von freudiger Erwartung auf neues Leben, vom Zauber der ersten Tage, von strahlenden Kinderaugen, vom bunten Miteinander einer Familie... So bleiben diese besonderen Momente f\u00FCr immer lebendig.\nLass dich von meinen Bildern inspirieren, vielleicht wird die n\u00E4chste Geschichte deine ganz pers\u00F6nliche!<br><br>\nSchreib mir gerne eine E-Mail, ich freue mich auf dich!<br><br>\nKatrin",
                navigate: 1
            }, {
                title: 'MORE ABOUT ME',
                imageUrl: 'assets/about2.jpg',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore\n                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
            }];
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'about',
        template: '<div><left-right [content]="content"></left-right></div>'
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

;
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".gallery-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.gallery-row {\n    margin-left: auto;\n    margin-right: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.horizontal-lg,\n.horizontal-sm,\n.vertical,\n.square {\n    display: inline-block;\n    position: relative;\n}\n\n.horizontal-lg:after,\n.horizontal-sm:after,\n.vertical:after,\n.square:after {\n    display: block;\n    content: '';\n}\n\n.horizontal-lg:after {\n    width: 1152px;\n    padding-top: 67%;\n    /* 3:2 ratio */\n}\n\n.horizontal-sm:after {\n    width: 768px;\n    padding-top: 67%;\n}\n\n.vertical:after {\n    width: 384px;\n}\n\n.square:after {\n    width: 576px;\n    padding-top: 100%;\n}\n\n\n/* Medium Devices, Desktops */\n\n@media only screen and (max-width: 1200px) {\n    .horizontal-lg:after {\n        width: 968px;\n    }\n    .horizontal-sm:after {\n        width: 646px;\n    }\n    .vertical:after {\n        width: 322px;\n    }\n    .square:after {\n        width: 484px;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .horizontal-lg:after {\n        width: 744px;\n    }\n    .horizontal-sm:after {\n        width: 496px;\n    }\n    .vertical:after {\n        width: 248px;\n        padding-top: 150%;\n    }\n    .square:after {\n        width: 377px;\n    }\n}\n\n\n/* Small Devices, Tablets */\n\n@media only screen and (max-width: 768px) {\n    .horizontal-lg:after {\n        width: 90vw;\n    }\n    .horizontal-sm:after {\n        width: 90vw;\n    }\n    .vertical:after {\n        width: 90vw;\n        padding-top: 150%;\n    }\n    .square:after {\n        width: 90vw;\n    }\n    .gallery-row {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n}\n\n\n/*http://stackoverflow.com/questions/12121090/responsively-change-div-size-keeping-aspect-ratio*/\n\n.horizontal-sm {}\n\n.vertical {}\n\n.square {}\n\n.image {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-position: right bottom;\n    background-size: cover;\n    background-repeat: no-repeat;\n    margin: 10px\n}\n\n\n/*\nhoch\n5760x3840\n\nquer\n\n\n*/", "", {"version":3,"sources":["/Users/d055406/Documents/Privat/lebenpur2/src/app/components/gallery/gallery.component.css"],"names":[],"mappings":"AAAA;IACI,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAuB;IAAvB,8BAAuB;QAAvB,2BAAuB;YAAvB,uBAAuB;IACvB,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;CACvB;;AAED;IACI,kBAAkB;IAClB,mBAAmB;IACnB,qBAAc;IAAd,qBAAc;IAAd,cAAc;CACjB;;AAED;;;;IAII,sBAAsB;IACtB,mBAAmB;CACtB;;AAED;;;;IAII,eAAe;IACf,YAAY;CACf;;AAED;IACI,cAAc;IACd,iBAAiB;IACjB,eAAe;CAClB;;AAED;IACI,aAAa;IACb,iBAAiB;CACpB;;AAED;IACI,aAAa;CAChB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB;;;AAGD,8BAA8B;;AAE9B;IACI;QACI,aAAa;KAChB;IACD;QACI,aAAa;KAChB;IACD;QACI,aAAa;KAChB;IACD;QACI,aAAa;KAChB;CACJ;;AAED;IACI;QACI,aAAa;KAChB;IACD;QACI,aAAa;KAChB;IACD;QACI,aAAa;QACb,kBAAkB;KACrB;IACD;QACI,aAAa;KAChB;CACJ;;;AAGD,4BAA4B;;AAE5B;IACI;QACI,YAAY;KACf;IACD;QACI,YAAY;KACf;IACD;QACI,YAAY;QACZ,kBAAkB;KACrB;IACD;QACI,YAAY;KACf;IACD;QACI,6BAAuB;QAAvB,8BAAuB;YAAvB,2BAAuB;gBAAvB,uBAAuB;KAC1B;CACJ;;;AAGD,iGAAiG;;AAEjG,iBAAiB;;AAEjB,YAAY;;AAEZ,UAAU;;AAEV;IACI,mBAAmB;IACnB,OAAO;IACP,UAAU;IACV,SAAS;IACT,QAAQ;IACR,kCAAkC;IAClC,uBAAuB;IACvB,6BAA6B;IAC7B,YAAY;CACf;;;AAGD;;;;;;;EAOE","file":"gallery.component.css","sourcesContent":[".gallery-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.gallery-row {\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n}\n\n.horizontal-lg,\n.horizontal-sm,\n.vertical,\n.square {\n    display: inline-block;\n    position: relative;\n}\n\n.horizontal-lg:after,\n.horizontal-sm:after,\n.vertical:after,\n.square:after {\n    display: block;\n    content: '';\n}\n\n.horizontal-lg:after {\n    width: 1152px;\n    padding-top: 67%;\n    /* 3:2 ratio */\n}\n\n.horizontal-sm:after {\n    width: 768px;\n    padding-top: 67%;\n}\n\n.vertical:after {\n    width: 384px;\n}\n\n.square:after {\n    width: 576px;\n    padding-top: 100%;\n}\n\n\n/* Medium Devices, Desktops */\n\n@media only screen and (max-width: 1200px) {\n    .horizontal-lg:after {\n        width: 968px;\n    }\n    .horizontal-sm:after {\n        width: 646px;\n    }\n    .vertical:after {\n        width: 322px;\n    }\n    .square:after {\n        width: 484px;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .horizontal-lg:after {\n        width: 744px;\n    }\n    .horizontal-sm:after {\n        width: 496px;\n    }\n    .vertical:after {\n        width: 248px;\n        padding-top: 150%;\n    }\n    .square:after {\n        width: 377px;\n    }\n}\n\n\n/* Small Devices, Tablets */\n\n@media only screen and (max-width: 768px) {\n    .horizontal-lg:after {\n        width: 90vw;\n    }\n    .horizontal-sm:after {\n        width: 90vw;\n    }\n    .vertical:after {\n        width: 90vw;\n        padding-top: 150%;\n    }\n    .square:after {\n        width: 90vw;\n    }\n    .gallery-row {\n        flex-direction: column;\n    }\n}\n\n\n/*http://stackoverflow.com/questions/12121090/responsively-change-div-size-keeping-aspect-ratio*/\n\n.horizontal-sm {}\n\n.vertical {}\n\n.square {}\n\n.image {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-position: right bottom;\n    background-size: cover;\n    background-repeat: no-repeat;\n    margin: 10px\n}\n\n\n/*\nhoch\n5760x3840\n\nquer\n\n\n*/"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-container\" [@fadeInOut]=\"test\">\n  <div class=\"gallery-row\">\n    <div class=\"horizontal-lg\">\n      <div *ngIf=\"galleryName\" class=\"image\" [ngStyle]=\"{ 'background-image': 'url(assets/'+galleryName+'/'+galleryName+ '_0.jpg)'}\">\n      </div>\n    </div>\n  </div>\n  <div class=\"gallery-row\">\n    <div class=\"square\">\n      <div *ngIf=\"galleryName\" class=\"image\" [ngStyle]=\"{ 'background-image': 'url(assets/'+galleryName+'/'+galleryName+ '_0.jpg)'}\">\n      </div>\n    </div>\n    <div class=\"square\">\n      <div *ngIf=\"galleryName\" class=\"image\" [ngStyle]=\"{ 'background-image': 'url(assets/'+galleryName+'/'+galleryName+ '_0.jpg)'}\">\n      </div>\n    </div>\n  </div>\n  <div class=\"gallery-row\">\n    <div class=\"horizontal-sm\">\n      <div *ngIf=\"galleryName\" class=\"image\" [ngStyle]=\"{ 'background-image': 'url(assets/'+galleryName+'/'+galleryName+ '_0.jpg)'}\">\n      </div>\n    </div>\n    <div class=\"vertical\">\n      <div *ngIf=\"galleryName\" class=\"image\" [ngStyle]=\"{ 'background-image': 'url(assets/'+galleryName+'/'+galleryName+ '_0.jpg)'}\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gallery; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// function fadeInOut() {
//     return trigger('fadeInOut', [
//         state('void', style({ opacity: 0 })),
//         state('*', style({ opacity: 1.0 })),
//         transition(':leave', [  // before 2.1: transition('* => void', [
//             style({ opacity: 1.0 }),
//             animate('0.5s ease-out', style({ opacity: 0 }))
//         ]),
//         transition(':enter', [  // before 2.1: transition('void => *', [
//             style({ opacity: 0 }),
//             animate('1s ease-in-out', style({ opacity: 1.0 }))
//         ]),
//     ]);
// }
var Gallery = (function () {
    function Gallery(route, router) {
        this.route = route;
        this.router = router;
    }
    Gallery.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.galleryName = params['name'];
        });
    };
    return Gallery;
}());
Gallery = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'gallery',
        template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.css")],
        // animations: [fadeInOut()],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1.0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1.0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('0.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('1s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1.0 }))
                ]),
            ])],
        host: {
            '[@fadeInOut]': 'true',
            'style': 'display: block;'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], Gallery);

;
var _a, _b;
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header-bar/header-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"Signerica\";\n  /*src: url(\"assets/Signerica_Fat.ttf\");*/\n  src: url(\"/Users/d055406/Documents/Privat/lebenpur2/assets/Signerica_Fat.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\na,\na:focus,\na:hover {\n  text-decoration: none;\n  color: inherit;\n  outline: none;\n}\n\n.main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 90px;\n  width: 100%;\n  padding: 20px 50px;\n  border-bottom: solid lightgrey 1px;\n  z-index: 1;\n  position: relative;\n  background-color: white;\n}\n\n.zeile1 {\n  font-family: \"Signerica\";\n  font-style: normal;\n  font-size: 18pt;\n}\n\n.navbar {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  position: relative;\n}\n\n.level1 {\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n.level1.active,\n.level1:hover {\n  border-bottom: solid 1px\n}\n\n.dropdown-menu {\n  min-width: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n  border: none;\n}\n\n.dropdown-menu-center {\n  left: -50px;\n  right: -50px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/Users/d055406/Documents/Privat/lebenpur2/src/app/components/header-bar/header-bar.component.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,yCAAyC;EACzC,kGAAyD;EACzD,mBAAmB;CACpB;;AAED;;;EAGE,sBAAsB;EACtB,eAAe;EACf,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,mCAAmC;EACnC,WAAW;EACX,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;CACjB;;AAED;EACE,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,eAAe;EACf,gBAAgB;CACjB;;AAED;;EAEE,wBAAwB;CACzB;;AAED;EACE,gBAAgB;EAChB,qCAAqC;EACrC,iBAAiB;EACjB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;CACpB","file":"header-bar.component.css","sourcesContent":["@font-face {\n  font-family: \"Signerica\";\n  /*src: url(\"assets/Signerica_Fat.ttf\");*/\n  src: url(\"/assets/Signerica_Fat.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\na,\na:focus,\na:hover {\n  text-decoration: none;\n  color: inherit;\n  outline: none;\n}\n\n.main-container {\n  display: flex;\n  height: 90px;\n  width: 100%;\n  padding: 20px 50px;\n  border-bottom: solid lightgrey 1px;\n  z-index: 1;\n  position: relative;\n  background-color: white;\n}\n\n.zeile1 {\n  font-family: \"Signerica\";\n  font-style: normal;\n  font-size: 18pt;\n}\n\n.navbar {\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  position: relative;\n}\n\n.level1 {\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n.level1.active,\n.level1:hover {\n  border-bottom: solid 1px\n}\n\n.dropdown-menu {\n  min-width: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n  border: none;\n}\n\n.dropdown-menu-center {\n  left: -50px;\n  right: -50px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header-bar/header-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"logo\">\n        <div class=\"zeile1\">Leben pur</div>\n        <div class=\"zeile2\">FOTOGRAFIE</div>\n    </div>\n    <div class=\"navbar\">\n        <a class=\"level1\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" href=\"\">Home</a>\n        <div dropdown>\n            <a class=\"level1\" [class.active]=\"gallery && gallery.classList.contains('active')\" dropdownToggle>Galleries</a>\n            <ul *dropdownMenu role=\"menu\" class=\"dropdown-menu dropdown-menu-center\">\n                <li><a #gallery class=\"level2\" routerLink=\"gallery/9months\" routerLinkActive=\"active\" href=\"\">9months</a></li>\n                <li><a #gallery class=\"level2\" routerLink=\"gallery/9months\" routerLinkActive=\"active\" href=\"\">Willkommen im Leben</a></li>\n                <li><a #gallery class=\"level2\" routerLink=\"gallery/9months\" routerLinkActive=\"active\" href=\"\">Kinder</a></li>\n            </ul>\n        </div>\n        <a class=\"level1\" routerLink=\"/about\" routerLinkActive=\"active\" href=\"\">About</a>\n        <a class=\"level1\" routerLink=\"/more\" routerLinkActive=\"active\" href=\"\">More</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/header-bar/header-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderBar = (function () {
    function HeaderBar() {
        this.active = 'Home';
    }
    HeaderBar.prototype.isActive = function (txt) {
        return txt === this.active;
    };
    return HeaderBar;
}());
HeaderBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'header-bar',
        template: __webpack_require__("../../../../../src/app/components/header-bar/header-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header-bar/header-bar.component.css")],
    }),
    __metadata("design:paramtypes", [])
], HeaderBar);

//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/header-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\n  overflow: hidden;\n  padding: 10px;\n}\n", "", {"version":3,"sources":["/Users/d055406/Documents/Privat/lebenpur2/src/app/components/landing-page/landing-page.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,cAAc;CACf","file":"landing-page.component.css","sourcesContent":["body {\n  overflow: hidden;\n  padding: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPage = (function () {
    function LandingPage() {
        this.content = [{
                title: '9 Months',
                imageUrl: 'assets/9months1.jpg',
                description: "\u201EA grand adventure is about to begin...\u201C",
                route: '/gallery/9months'
            }, {
                title: 'Newborn',
                imageUrl: 'assets/newborn1.jpg',
                description: "We take photos as a return ticket to a moment otherwise gone. Katie Thurmes",
                route: '/gallery/9months'
            }, {
                title: 'Children',
                imageUrl: 'assets/children1.jpg',
                description: "Photography is the memory of our lives.",
                route: '/gallery/9months'
            }, {
                title: 'Portrait',
                imageUrl: 'assets/children1.jpg',
                description: "Photography is about capturing souls, not smiles.",
                route: '/gallery/9months'
            }];
    }
    return LandingPage;
}());
LandingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'landing-page',
        template: '<div><left-right [content]="content"></left-right></div>',
        styles: [__webpack_require__("../../../../../src/app/components/landing-page/landing-page.component.css")],
    }),
    __metadata("design:paramtypes", [])
], LandingPage);

;
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/left-right/left-right.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\n  overflow: hidden;\n}\n\n.main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 101%;\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n\n.content-container {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.right,\n.left {\n  height: 100%;\n  padding: 0;\n  display: block;\n}\n\n.content {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n}\n\n.content.up {\n  top: -110%;\n  opacity: 0;\n  transition: opacity 0.6s ease-in, top 1s ease-in-out;\n}\n\n.content.down {\n  top: 100%;\n  opacity: 0;\n  transition: opacity 0.6s ease-in, top 1s ease-in-out;\n}\n\n.content.active {\n  top: 0;\n  opacity: 1;\n  transition: opacity 0.6s ease-in, top 1s ease-in-out;\n}\n\n.image {\n  height: 100vh;\n  width: 100%;\n  background-position: right bottom;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.left .image {\n  background-position: left bottom;\n}\n\n.description {\n  padding: 40px;\n}\n\n.left .description {\n  right: 0;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.left .description .line2 {\n  text-align: right;\n}\n\n.description .line1 {\n  font-family: sans-serif;\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.line1,\n.line2,\n.line3 {\n  margin-bottom: 5px;\n}\n\n.btn-info {\n  color: inherit;\n  border-color: black;\n  background-color: white;\n}\n\n.btn-info.active.focus,\n.btn-info.active:focus,\n.btn-info.active:hover,\n.btn-info:active.focus,\n.btn-info:active:focus,\n.btn-info:active:hover,\n.open>.dropdown-toggle.btn-info.focus,\n.open>.dropdown-toggle.btn-info:focus,\n.open>.dropdown-toggle.btn-info:hover {\n  color: #fff;\n  background-color: #C7C7C7;\n  border-color: #000000;\n}\n\n.dots {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.dots>i {\n  margin: 2px;\n  color: #6b6b6b;\n  cursor: pointer;\n}\n\n.white {\n  color: white;\n}\n", "", {"version":3,"sources":["/Users/d055406/Documents/Privat/lebenpur2/src/app/components/left-right/left-right.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;CAClB;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;CAClB;;AAED;EACE,aAAa;EACb,qBAAc;EAAd,qBAAc;EAAd,cAAc;CACf;;AAED;;EAEE,aAAa;EACb,WAAW;EACX,eAAe;CAChB;;AAED;EACE,aAAa;EACb,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB;;AAED;EACE,WAAW;EACX,WAAW;EACX,qDAAqD;CACtD;;AAED;EACE,UAAU;EACV,WAAW;EACX,qDAAqD;CACtD;;AAED;EACE,OAAO;EACP,WAAW;EACX,qDAAqD;CACtD;;AAED;EACE,cAAc;EACd,YAAY;EACZ,kCAAkC;EAClC,uBAAuB;EACvB,6BAA6B;CAC9B;;AAED;EACE,iCAAiC;CAClC;;AAED;EACE,cAAc;CACf;;AAED;EACE,SAAS;EACT,uBAAsB;MAAtB,oBAAsB;UAAtB,sBAAsB;CACvB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,wBAAwB;EACxB,iBAAiB;EACjB,gBAAgB;CACjB;;AAED;;;EAGE,mBAAmB;CACpB;;AAED;EACE,eAAe;EACf,oBAAoB;EACpB,wBAAwB;CACzB;;AAED;;;;;;;;;EASE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,OAAO;EACP,UAAU;EACV,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CACzB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;CACjB;;AAED;EACE,aAAa;CACd","file":"left-right.component.css","sourcesContent":["body {\n  overflow: hidden;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  height: 101%;\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n\n.content-container {\n  height: 100%;\n  display: flex;\n}\n\n.right,\n.left {\n  height: 100%;\n  padding: 0;\n  display: block;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n}\n\n.content.up {\n  top: -110%;\n  opacity: 0;\n  transition: opacity 0.6s ease-in, top 1s ease-in-out;\n}\n\n.content.down {\n  top: 100%;\n  opacity: 0;\n  transition: opacity 0.6s ease-in, top 1s ease-in-out;\n}\n\n.content.active {\n  top: 0;\n  opacity: 1;\n  transition: opacity 0.6s ease-in, top 1s ease-in-out;\n}\n\n.image {\n  height: 100vh;\n  width: 100%;\n  background-position: right bottom;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.left .image {\n  background-position: left bottom;\n}\n\n.description {\n  padding: 40px;\n}\n\n.left .description {\n  right: 0;\n  align-items: flex-end;\n}\n\n.left .description .line2 {\n  text-align: right;\n}\n\n.description .line1 {\n  font-family: sans-serif;\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.line1,\n.line2,\n.line3 {\n  margin-bottom: 5px;\n}\n\n.btn-info {\n  color: inherit;\n  border-color: black;\n  background-color: white;\n}\n\n.btn-info.active.focus,\n.btn-info.active:focus,\n.btn-info.active:hover,\n.btn-info:active.focus,\n.btn-info:active:focus,\n.btn-info:active:hover,\n.open>.dropdown-toggle.btn-info.focus,\n.open>.dropdown-toggle.btn-info:focus,\n.open>.dropdown-toggle.btn-info:hover {\n  color: #fff;\n  background-color: #C7C7C7;\n  border-color: #000000;\n}\n\n.dots {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.dots>i {\n  margin: 2px;\n  color: #6b6b6b;\n  cursor: pointer;\n}\n\n.white {\n  color: white;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/left-right/left-right.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" mouseWheel (mouseWheelUp)=\"onMouseWheel('up')\" (mouseWheelDown)=\"onMouseWheel('down')\">\n    <div class=\"row content-container\" [@fadeInOut]=\"true\">\n        <div class=\"col-md-6 left\">\n            <div *ngFor=\"let c of content; let i = index\">\n                <div *ngIf=\"i % 2 == 0\" class=\"image content\" [class.active]=\"activeContent === i\" [style.background-image]=\"getImage(c)\"\n                    [ngClass]=\"{'up': activeContent > i, 'down': activeContent < i }\"></div>\n            <div *ngIf=\"i % 2 != 0\" class=\"description col-md-8 content\" [class.active]=\"activeContent === i\" [ngClass]=\"{'up': activeContent > i, 'down': activeContent < i }\">\n                <div class=\"line1\">{{c.title}}</div><br>\n                <div class=\"line2\" [innerHTML]=\"c.description\"></div><br>\n                <div class=\"line3\" *ngIf=\"c.route || c.navigate\">\n                    <a *ngIf=\"c.route\" routerLink=\"{{c.route}}\" class=\"btn btn-info\">Show more</a>\n                    <a *ngIf=\"c.navigate\" (click)=\"activeContent = c.navigate\" class=\"btn btn-info\">Show more</a>\n                </div><br>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6 right\">\n        <div *ngFor=\"let c of content; let i = index\">\n            <div *ngIf=\"i % 2 != 0\" class=\"image content\" [class.active]=\"activeContent === i\" [style.background-image]=\"getImage(c)\"\n                [ngClass]=\"{'up': activeContent < i, 'down': activeContent > i }\"></div>\n        <div *ngIf=\"i % 2 == 0\" class=\"description col-md-8 content\" [class.active]=\"activeContent === i\" [ngClass]=\"{'up': activeContent < i, 'down': activeContent > i }\">\n            <div class=\"line1\">{{c.title}}</div><br>\n            <div class=\"line2\" [innerHTML]=\"c.description\"></div><br>\n            <div class=\"line3\" *ngIf=\"c.route || c.navigate\">\n                <a *ngIf=\"c.route\" routerLink=\"{{c.route}}\" class=\"btn btn-info\">Show more</a>\n                <a *ngIf=\"c.navigate\" (click)=\"activeContent = c.navigate\" class=\"btn btn-info\">Show more</a>\n            </div><br>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"dots\">\n    <i class=\"fa\" aria-hidden=\"true\" *ngFor=\"let c of content; let i = index\" [ngClass]=\"{'fa-circle-o': activeContent !== i, 'fa-circle': activeContent === i, 'white': activeContent%2 }\"\n        (click)=\"activeContent = i\"></i>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/left-right/left-right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftRightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



function fadeInOut() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* trigger */])('fadeInOut', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1.0 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1.0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])('0.8s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* animate */])('0.8s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1.0 }))
        ]),
    ]);
}
var LeftRightComponent = (function () {
    function LeftRightComponent(document, route, router) {
        this.document = document;
        this.route = route;
        this.router = router;
        this.scrollDirection = '';
        this.activeContent = 0;
    }
    LeftRightComponent.prototype.ngOnChanges = function () {
        console.log(this.route);
    };
    LeftRightComponent.prototype.getImage = function (content) {
        return "url(" + content.imageUrl + ")";
    };
    // ngOnInit() {
    //     this.router.events.subscribe(event => {
    //         if (event instanceof NavigationStart) {
    //             console.log('path = ', event.url);
    //         }
    //     });
    // }
    LeftRightComponent.prototype.onWindowScroll = function (event) {
        var number = this.document.body.scrollTop;
        if (number > 100) {
            // this.navIsFixed = true;
            // } else if (this.navIsFixed && number < 10) {
            //     this.navIsFixed = false;
        }
        console.log(event);
    };
    LeftRightComponent.prototype.onMouseWheel = function (direction) {
        var _this = this;
        console.log(direction);
        if (!this.scrollDirection) {
            this.scrollDirection = this.scrollDirection ? this.scrollDirection : direction;
            this.activeContent = direction == 'up' ? Math.min(this.activeContent + 1, this.content.length - 1) : Math.max(this.activeContent - 1, 0);
            setTimeout(function () {
                _this.scrollDirection = '';
            }, 1500);
        }
    };
    return LeftRightComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], LeftRightComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeftRightComponent.prototype, "onWindowScroll", null);
LeftRightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'left-right',
        template: __webpack_require__("../../../../../src/app/components/left-right/left-right.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/left-right/left-right.component.css")],
        animations: [fadeInOut()]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LeftRightComponent);

;
var _a, _b;
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/left-right.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".cd-popup {\n    position: fixed;\n    z-index: 100;\n    left: 0;\n    top: 0;\n    height: 110%;\n    width: 100%;\n    background-color: rgba(188, 116, 116, 0.9);\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s 0s, visibility 0s 0.3s;\n}\n\n.cd-popup.is-visible {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity 0.3s 0s, visibility 0s 0s;\n}\n\n.cd-popup-container {\n    position: relative;\n    width: 90%;\n    max-width: 1000px;\n    margin: 8em auto;\n    border-radius: 5px;\n    background-color: #ffffff;\n    box-shadow: 2px 8px 5px 0 rgba(0, 0, 0, 0.2);\n    border: solid 1px #979797;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px);\n    /* Force Hardware Acceleration in WebKit */\n    -webkit-backface-visibility: hidden;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-duration: 0.3s;\n}\n\n.cd-popup-container .cd-buttons:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.cd-popup-container .cd-buttons li {\n    float: left;\n    width: 50%;\n    list-style: none;\n}\n.cd-popup-container .cd-buttons a {\n    display: block;\n    height: 60px;\n    line-height: 60px;\n    text-transform: uppercase;\n    color: #FFF;\n    transition: background-color 0.2s;\n}\n\n.popup-close-container {\n    z-index: 10000;\n    margin-right: 15px;\n    margin-top: 15px;\n    float: right;\n}\n\n.popup-close {\n    cursor: pointer;\n    font-size: 20px;\n    color: #8f9cb5;\n    opacity: 0.8;\n}\n\n.cd-popup-container .cd-popup-close {\n    position: absolute;\n    z-index: 10000;\n    top: 8px;\n    right: 8px;\n    width: 30px;\n    height: 30px;\n}\n\n.cd-popup-container .cd-popup-close::before, .cd-popup-container .cd-popup-close::after {\n    content: '';\n    position: absolute;\n    top: 12px;\n    width: 14px;\n    height: 3px;\n    background-color: #8f9cb5;\n}\n\n.cd-popup-container .cd-popup-close::before {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    left: 8px;\n}\n\n.cd-popup-container .cd-popup-close::after {\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    right: 8px;\n}\n\n.is-visible .cd-popup-container {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n}\n\n.cd-popup-header {\n    height: 40px;\n}\n\n.cd-popup-aligner {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n    overflow-y: auto;\n}\n\n@media(max-width: 991px){\n    .cd-popup-container {\n        max-height: 95%;\n        overflow-y: auto;\n        margin: 0px;\n        margin-top: 2.5%;\n        margin-left: 2.5%;\n        width: 95%;\n    }\n\n    .cd-popup-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n}", "", {"version":3,"sources":["/Users/d055406/Documents/Privat/lebenpur2/src/app/components/modal/modal.component.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,aAAa;IACb,QAAQ;IACR,OAAO;IACP,aAAa;IACb,YAAY;IACZ,2CAA2C;IAC3C,WAAW;IACX,mBAAmB;IAGnB,gDAAgD;CACnD;;AAED;IACI,WAAW;IACX,oBAAoB;IAGpB,8CAA8C;CACjD;;AAED;IACI,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B,6CAA6C;IAC7C,0BAA0B;IAC1B,qCAAqC;IAIrC,6BAA6B;IAC7B,2CAA2C;IAC3C,oCAAoC;IAGpC,uCAA+B;IAA/B,+BAA+B;IAA/B,kDAA+B;IAG/B,0BAA0B;CAC7B;;AAED;IACI,YAAY;IACZ,eAAe;IACf,YAAY;CACf;AACD;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,0BAA0B;IAC1B,YAAY;IAGZ,kCAAkC;CACrC;;AAED;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;CAChB;;AAED;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,aAAa;CAChB;;AAED;IACI,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,WAAW;IACX,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,0BAA0B;CAC7B;;AAED;IACI,iCAAiC;IAIjC,yBAAyB;IACzB,UAAU;CACb;;AAED;IACI,kCAAkC;IAIlC,0BAA0B;IAC1B,WAAW;CACd;;AAED;IACI,iCAAiC;IAIjC,yBAAyB;CAC5B;;AAED;IACI,aAAa;CAChB;;AAED;IACI,oBAAa;QAAb,qBAAa;YAAb,aAAa;IACb,qBAAe;QAAf,eAAe;IACf,8BAAiB;QAAjB,iBAAiB;IACjB,iBAAiB;CACpB;;AAED;IACI;QACI,gBAAgB;QAChB,iBAAiB;QACjB,YAAY;QACZ,iBAAiB;QACjB,kBAAkB;QAClB,WAAW;KACd;;IAED;QACI,qBAAc;QAAd,qBAAc;QAAd,cAAc;QACd,6BAAuB;QAAvB,8BAAuB;YAAvB,2BAAuB;gBAAvB,uBAAuB;KAC1B;CACJ","file":"modal.component.css","sourcesContent":[".cd-popup {\n    position: fixed;\n    z-index: 100;\n    left: 0;\n    top: 0;\n    height: 110%;\n    width: 100%;\n    background-color: rgba(188, 116, 116, 0.9);\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s;\n    -moz-transition: opacity 0.3s 0s, visibility 0s 0.3s;\n    transition: opacity 0.3s 0s, visibility 0s 0.3s;\n}\n\n.cd-popup.is-visible {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transition: opacity 0.3s 0s, visibility 0s 0s;\n    -moz-transition: opacity 0.3s 0s, visibility 0s 0s;\n    transition: opacity 0.3s 0s, visibility 0s 0s;\n}\n\n.cd-popup-container {\n    position: relative;\n    width: 90%;\n    max-width: 1000px;\n    margin: 8em auto;\n    border-radius: 5px;\n    background-color: #ffffff;\n    box-shadow: 2px 8px 5px 0 rgba(0, 0, 0, 0.2);\n    border: solid 1px #979797;\n    -webkit-transform: translateY(-40px);\n    -moz-transform: translateY(-40px);\n    -ms-transform: translateY(-40px);\n    -o-transform: translateY(-40px);\n    transform: translateY(-40px);\n    /* Force Hardware Acceleration in WebKit */\n    -webkit-backface-visibility: hidden;\n    -webkit-transition-property: -webkit-transform;\n    -moz-transition-property: -moz-transform;\n    transition-property: transform;\n    -webkit-transition-duration: 0.3s;\n    -moz-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n}\n\n.cd-popup-container .cd-buttons:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.cd-popup-container .cd-buttons li {\n    float: left;\n    width: 50%;\n    list-style: none;\n}\n.cd-popup-container .cd-buttons a {\n    display: block;\n    height: 60px;\n    line-height: 60px;\n    text-transform: uppercase;\n    color: #FFF;\n    -webkit-transition: background-color 0.2s;\n    -moz-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n}\n\n.popup-close-container {\n    z-index: 10000;\n    margin-right: 15px;\n    margin-top: 15px;\n    float: right;\n}\n\n.popup-close {\n    cursor: pointer;\n    font-size: 20px;\n    color: #8f9cb5;\n    opacity: 0.8;\n}\n\n.cd-popup-container .cd-popup-close {\n    position: absolute;\n    z-index: 10000;\n    top: 8px;\n    right: 8px;\n    width: 30px;\n    height: 30px;\n}\n\n.cd-popup-container .cd-popup-close::before, .cd-popup-container .cd-popup-close::after {\n    content: '';\n    position: absolute;\n    top: 12px;\n    width: 14px;\n    height: 3px;\n    background-color: #8f9cb5;\n}\n\n.cd-popup-container .cd-popup-close::before {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n    left: 8px;\n}\n\n.cd-popup-container .cd-popup-close::after {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    right: 8px;\n}\n\n.is-visible .cd-popup-container {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n}\n\n.cd-popup-header {\n    height: 40px;\n}\n\n.cd-popup-aligner {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n    overflow-y: auto;\n}\n\n@media(max-width: 991px){\n    .cd-popup-container {\n        max-height: 95%;\n        overflow-y: auto;\n        margin: 0px;\n        margin-top: 2.5%;\n        margin-left: 2.5%;\n        width: 95%;\n    }\n\n    .cd-popup-container {\n        display: flex;\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-popup\" [ngClass]=\"{'is-visible' : visible}\" (click)=\"hide()\" role=\"alert\">\n    <div class=\"cd-popup-container\" (click)=\"stopPropagation($event)\">\n        <div class=\"cd-popup-header visible-xs-block visible-sm-block\">\n            <div class=\"popup-close-container\">\n                <i class=\"fa fa-times popup-close\" (click)=\"hide()\"></i>\n            </div>\n        </div>\n        <div class=\"popup-close-container hidden-xs hidden-sm\">\n                <i class=\"fa fa-times popup-close\" (click)=\"hide()\"></i>\n            </div>\n        <div class=\"cd-popup-aligner\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
    }
    ModalComponent.prototype.show = function () {
        this.visible = true;
    };
    ModalComponent.prototype.hide = function () {
        this.visible = false;
    };
    ModalComponent.prototype.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "visible", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'modal',
        styles: [__webpack_require__("../../../../../src/app/components/modal/modal.component.css")],
        template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html")
    })
], ModalComponent);

//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/mousewheel.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirective = (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.mouseWheelDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    MouseWheelDirective.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.mouseWheelFunc = function (event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    return MouseWheelDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelDown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelChrome", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('DOMMouseScroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelFirefox", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('onmousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelIE", null);
MouseWheelDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Directive */])({ selector: '[mouseWheel]' })
], MouseWheelDirective);

//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/mousewheel.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/d055406/Documents/Privat/lebenpur2/src/main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map