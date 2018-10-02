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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .sidenavleft {\r\n    height: 100%;\r\n    width: 70px;\r\n    position: fixed;\r\n    z-index: 11;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #031129;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.sidenavleft a {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    position: fixed;\r\n     top: 50%;\r\n    color: #fff;\r\n    font-family: SofiaPro-bold;\r\n    font-weight: normal;\r\n}\r\n\r\n.lega {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    position: fixed;\r\n     bottom:1%;\r\n     margin-left: -250px;;\r\n    color: grey;\r\n    font-size: 14px;\r\n    font-family: SofiaPro-bold;\r\n    font-weight: normal;\r\n}\r\n\r\n.sidenavright {\r\n    height: 100%;\r\n    width: 70px;\r\n    position: fixed;\r\n    z-index: 11;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #031129;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.sidenavright a {\r\n    -webkit-transform: rotate(-90deg);\r\n            transform: rotate(-90deg);\r\n    position: fixed;\r\n     top: 50%;\r\n    color: #fff;\r\n    font-family: SofiaPro-bold;\r\n    font-weight: normal;\r\n}\r\n\r\n.main {\r\n    background-color: #273040;\r\n    margin-left: 60px;\r\n    margin-right: 60px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n\r\n/* @media screen and (max-height: 750px) {\r\n    .sidenavright {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n} */\r\n\r\n@media screen and (max-width: 500px) {\r\n    .sidenavright {\r\n        display: none;\r\n    }\r\n    .sidenavleft {\r\n        display: none;\r\n    }\r\n    .main {\r\n        margin-left: 0px;\r\n        margin-right: -10px; /* Same as the width of the sidenav */\r\n        font-size: 28px; /* Increased text to enable scrolling */\r\n        /* padding: 0px 10px; */\r\n    }\r\n}\r\n\r\nbody {\r\n  background: #F5F5F5;\r\n}\r\n\r\n.container {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  top: 40%;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.container p {\r\n  font-size: 20px;\r\n}\r\n\r\n.container a {\r\n  display: inline-block;\r\n  position: relative;\r\n  text-align: center;\r\n  color:#031129;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  overflow: hidden;\r\n  top: 5px;\r\n}\r\n\r\n.container a:after {\r\n  content: '';\r\n  position: absolute;\r\n  background:#031129;\r\n  height: 2px;\r\n  width: 0%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  left: 50%;\r\n  bottom: 0;\r\n  transition: .35s ease;\r\n}\r\n\r\n.container a:hover:after {\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  text-align: center;\r\n  font-family: 'Vollkorn', sans-serif;\r\n}\r\n\r\n.button_container {\r\n  position: fixed;\r\n  top: 5%;\r\n  right: 2%;\r\n  height: 27px;\r\n  width: 35px;\r\n  cursor: pointer;\r\n  z-index: 100;\r\n  transition: opacity .25s ease;\r\n}\r\n\r\n.button_container:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.button_container.active .top {\r\n  -webkit-transform: translateY(10px) translateX(0) rotate(45deg);\r\n          transform: translateY(10px) translateX(0) rotate(45deg);\r\n  background: #FFF;\r\n}\r\n\r\n.button_container.active .middle {\r\n  opacity: 0;\r\n  background: #FFF;\r\n}\r\n\r\n.button_container.active .bottom {\r\n  -webkit-transform: translateY(-10px) translateX(0) rotate(-45deg);\r\n          transform: translateY(-10px) translateX(0) rotate(-45deg);\r\n  background: #FFF;\r\n}\r\n\r\n.button_container span {\r\n  background: white;\r\n  border: none;\r\n  height: 5px;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0;\r\n  transition: all .35s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.button_container span:nth-of-type(2) {\r\n  top: 10px;\r\n}\r\n\r\n.button_container span:nth-of-type(3) {\r\n  top: 20px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 3;\r\n  visibility: hidden;\r\n  transition: opacity .35s, visibility .35s, width .35s;\r\n  z-index: 50;\r\n}\r\n\r\n.overlay:before {\r\n  content: '';\r\n  background: #031129;\r\n  left: -55%;\r\n  top: 0;\r\n  width: 50%;\r\n  height: 100%;\r\n  position: absolute;\r\n  transition: left .35s ease;\r\n}\r\n\r\n.overlay:after {\r\n  content: '';\r\n  background:#031129;\r\n  right: -55%;\r\n  top: 0;\r\n  width: 55%;\r\n  height: 100%;\r\n  position: absolute;\r\n  transition: all .35s ease;\r\n}\r\n\r\n.overlay.open {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  height: 100%;\r\n}\r\n\r\n.overlay.open:before {\r\n  left: 0;\r\n}\r\n\r\n.overlay.open:after {\r\n  right: -1px;\r\n}\r\n\r\n.overlay.open li {\r\n  -webkit-animation: fadeInRight .5s ease forwards;\r\n          animation: fadeInRight .5s ease forwards;\r\n  -webkit-animation-delay: .35s;\r\n          animation-delay: .35s;\r\n}\r\n\r\n.overlay.open li:nth-of-type(2) {\r\n  -webkit-animation-delay: .45s;\r\n          animation-delay: .45s;\r\n}\r\n\r\n.overlay.open li:nth-of-type(3) {\r\n  -webkit-animation-delay: .55s;\r\n          animation-delay: .55s;\r\n}\r\n\r\n.overlay.open li:nth-of-type(4) {\r\n  -webkit-animation-delay: .65s;\r\n          animation-delay: .65s;\r\n}\r\n\r\n.overlay nav {\r\n  position: relative;\r\n  height: 70%;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-size: 50px;\r\n  font-family: 'Vollkorn', serif;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  z-index: 100;\r\n}\r\n\r\n.overlay ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 auto;\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.overlay ul li {\r\n  display: block;\r\n  height: 25%;\r\n  height: calc(100% / 4);\r\n  min-height: 50px;\r\n  position: relative;\r\n  opacity: 0;\r\n}\r\n\r\n.overlay ul li a {\r\n  display: block;\r\n  position: relative;\r\n  color: #FFF;\r\n  text-decoration: none;\r\n  overflow: hidden;\r\n}\r\n\r\n.overlay ul li a:hover:after, .overlay ul li a:focus:after, .overlay ul li a:active:after {\r\n  width: 100%;\r\n}\r\n\r\n.overlay ul li a:after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 0%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  height: 3px;\r\n  background: #FFF;\r\n  transition: .35s;\r\n}\r\n\r\n@-webkit-keyframes fadeInRight {\r\n  0% {\r\n    opacity: 0;\r\n    left: 20%;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n  0% {\r\n    opacity: 0;\r\n    left: 20%;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    left: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button_container\" id=\"toggle\">\r\n        <span class=\"top\"></span>\r\n        <span class=\"middle\"></span>\r\n        <span class=\"bottom\"></span>\r\n      </div>\r\n\r\n      <div class=\"overlay\" id=\"overlay\">\r\n        <nav class=\"overlay-menu\">\r\n          <ul>\r\n            <li ><a href=\"/\" style=\"min-height: 60px; padding: 10px;\">Home</a></li>\r\n            <li><a href=\"/team-page\" style=\"min-height: 60px; padding: 10px;\">Team</a></li>\r\n            <li><a href=\"/contact-page\" style=\"min-height:60px; padding: 10px;\">Contact</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n<div class=\"sidenavleft\">\r\n\r\n   <a href=\"/team-page\">Team</a>\r\n   <img src=\"../../assets/Logo.png\"alt=\"\">\r\n   <a class=\"lega\" href=\"#\">Copyright (c) 2018 Alo.</a>\r\n</div>\r\n\r\n <div class=\"main\">\r\n     <router-outlet></router-outlet>\r\n</div>\r\n\r\n<div class=\"sidenavright\">\r\n    <a href=\"/contact-page\">Contact</a>\r\n</div>\r\n"

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
        this.title = 'app';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        $('#toggle').click(function () {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
        });
    };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/team-page/team-page.component */ "./src/app/component/team-page/team-page.component.ts");
/* harmony import */ var _component_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/main-page/main-page.component */ "./src/app/component/main-page/main-page.component.ts");
/* harmony import */ var _component_cube_page_cube_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/cube-page/cube-page.component */ "./src/app/component/cube-page/cube-page.component.ts");
/* harmony import */ var _component_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/card/card.component */ "./src/app/component/card/card.component.ts");
/* harmony import */ var _component_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/panorama/panorama.component */ "./src/app/component/panorama/panorama.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_outerpage_outerpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/outerpage/outerpage.component */ "./src/app/component/outerpage/outerpage.component.ts");
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/contact/contact.component */ "./src/app/component/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//fullpage
//import { MnFullpageModule } from 'ngx-fullpage';
//import { MnFullpageDirective, MnFullpageService } from "ngx-fullpage";
var appRouts = [
    { path: 'team-page', component: _component_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_3__["TeamPageComponent"], },
    { path: 'contact-page', component: _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], },
    { path: 'home', component: _component_outerpage_outerpage_component__WEBPACK_IMPORTED_MODULE_9__["OuterpageComponent"], pathMatch: 'full' },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _component_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_3__["TeamPageComponent"],
                _component_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _component_cube_page_cube_page_component__WEBPACK_IMPORTED_MODULE_5__["CubePageComponent"],
                _component_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _component_panorama_panorama_component__WEBPACK_IMPORTED_MODULE_7__["PanoramaComponent"],
                _component_outerpage_outerpage_component__WEBPACK_IMPORTED_MODULE_9__["OuterpageComponent"],
                _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRouts, { enableTracing: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/card/card.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/card/card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.carnav{\r\ndisplay: inline-block;\r\npadding:5px;\r\nfont-size: 15px;\r\nbackground-color:cyan;\r\ncolor:#1c2331;\r\nborder:none;\r\nborder-radius:2px;\r\n}\r\n.cnav{\r\n  float: center;\r\n  left:50%;\r\n  text-align:center;\r\n  margin-top:10px;\r\n}\r\nbody {\r\n  /*padding: 20px;*/\r\n  background: #eee;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n[type=radio] {\r\n  display: none;\r\n}\r\n#slider {\r\n  height: 25vw;\r\n  position: relative;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n#slider div {\r\n  background-color: 100% 100%;\r\n  margin: auto;\r\n  width: 400px;\r\n  height: 400px;\r\n  border-radius: 4px;\r\n  position: absolute;\r\n  left: 0; right: 0;\r\n  cursor: pointer;\r\n  transition: all 0.9s ease-in-out;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  overflow: hidden;\r\n}\r\n/*\r\n.face {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n#back1{\r\n  display: none;\r\n} */\r\n#s1:checked:hover ~ #slide1{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  background-image: url('electrical.png');\r\n  background-size: 100% 100%;\r\n}\r\n#s2:checked:hover ~ #slide2{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  background: url('emotional.png');\r\n  background-size: 100% 100%;\r\n}\r\n#s3:checked:hover ~ #slide3{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  background: url('law.png');\r\n  background-size: 100% 100%;\r\n}\r\n#s4:checked:hover ~ #slide4{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  background: url('product.png');\r\n  background-size: 100% 100%;\r\n}\r\n#s5:checked:hover ~ #slide5{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  background: url('social.png');\r\n  background-size: 100% 100%;\r\n}\r\n#s1:checked ~ #slide4, #s2:checked ~ #slide5,\r\n#s3:checked ~ #slide1, #s4:checked ~ #slide2,\r\n#s5:checked ~ #slide3 {\r\n  /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n  -webkit-transform: translate3d(-120%,0,-200px);\r\n          transform: translate3d(-120%,0,-200px);\r\n}\r\n#s1:checked ~ #slide5, #s2:checked ~ #slide1,\r\n#s3:checked ~ #slide2, #s4:checked ~ #slide3,\r\n#s5:checked ~ #slide4 {\r\n  /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n  -webkit-transform: translate3d(-60%,0,-100px);\r\n          transform: translate3d(-60%,0,-100px);\r\n}\r\n#s1:checked ~ #slide1, #s2:checked ~ #slide2,\r\n#s3:checked ~ #slide3, #s4:checked ~ #slide4,\r\n#s5:checked ~ #slide5 {\r\n  /* box-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19); */\r\n  -webkit-transform: translate3d(0,0,0);\r\n          transform: translate3d(0,0,0);\r\n}\r\n#s1:checked ~ #slide2, #s2:checked ~ #slide3,\r\n#s3:checked ~ #slide4, #s4:checked ~ #slide5,\r\n#s5:checked ~ #slide1 {\r\n  /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n  -webkit-transform: translate3d(60%,0,-100px);\r\n          transform: translate3d(60%,0,-100px);\r\n}\r\n#s1:checked ~ #slide3, #s2:checked ~ #slide4,\r\n#s3:checked ~ #slide5, #s4:checked ~ #slide1,\r\n#s5:checked ~ #slide2 {\r\n  /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n  -webkit-transform: translate3d(120%,0,-200px);\r\n          transform: translate3d(120%,0,-200px);\r\n}\r\n/* ________________________________________________________________________________ */\r\n@media only screen and (min-width: 299px) and (max-width: 499px) {\r\n  #slider label {\r\n  width: 100%;\r\n  }\r\n  .cnav{\r\n    margin-top:350px;\r\n  }\r\n  #s1:checked ~ #slide4, #s2:checked ~ #slide5,\r\n  #s3:checked ~ #slide1, #s4:checked ~ #slide2,\r\n  #s5:checked ~ #slide3 {\r\n    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n    -webkit-transform: translate3d(0%,-100px);\r\n            transform: translate3d(0%,-100px);\r\n  }\r\n  #s1:checked ~ #slide5, #s2:checked ~ #slide1,\r\n  #s3:checked ~ #slide2, #s4:checked ~ #slide3,\r\n  #s5:checked ~ #slide4 {\r\n    /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n    -webkit-transform: translate3d(0%,0,-100px);\r\n            transform: translate3d(0%,0,-100px);\r\n  }\r\n\r\n  #s1:checked ~ #slide1, #s2:checked ~ #slide2,\r\n  #s3:checked ~ #slide3, #s4:checked ~ #slide4,\r\n  #s5:checked ~ #slide5 {\r\n    /* box-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19); */\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n  }\r\n\r\n  #s1:checked ~ #slide2, #s2:checked ~ #slide3,\r\n  #s3:checked ~ #slide4, #s4:checked ~ #slide5,\r\n  #s5:checked ~ #slide1 {\r\n    /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n    -webkit-transform: translate3d(0%,0,-100px);\r\n            transform: translate3d(0%,0,-100px);\r\n  }\r\n\r\n  #s1:checked ~ #slide3, #s2:checked ~ #slide4,\r\n  #s3:checked ~ #slide5, #s4:checked ~ #slide1,\r\n  #s5:checked ~ #slide2 {\r\n    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n    -webkit-transform: translate3d(0%,0,-100px);\r\n            transform: translate3d(0%,0,-100px);\r\n  }\r\n\r\n}\r\n@media only screen and (min-width: 500px) and (max-width:800px) {\r\n  #slider label {\r\n  width: 60%;\r\n  }\r\n  .cnav{\r\n    margin-top:250px;\r\n  }\r\n  #s1:checked ~ #slide4, #s2:checked ~ #slide5,\r\n  #s3:checked ~ #slide1, #s4:checked ~ #slide2,\r\n  #s5:checked ~ #slide3 {\r\n    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n    -webkit-transform: translate3d(0%,0,-200px);\r\n            transform: translate3d(0%,0,-200px);\r\n  }\r\n  #s1:checked ~ #slide5, #s2:checked ~ #slide1,\r\n  #s3:checked ~ #slide2, #s4:checked ~ #slide3,\r\n  #s5:checked ~ #slide4 {\r\n    /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n    -webkit-transform: translate3d(-60%,0,-100px);\r\n            transform: translate3d(-60%,0,-100px);\r\n  }\r\n\r\n  #s1:checked ~ #slide1, #s2:checked ~ #slide2,\r\n  #s3:checked ~ #slide3, #s4:checked ~ #slide4,\r\n  #s5:checked ~ #slide5 {\r\n    /* box-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19); */\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n  }\r\n\r\n  #s1:checked ~ #slide2, #s2:checked ~ #slide3,\r\n  #s3:checked ~ #slide4, #s4:checked ~ #slide5,\r\n  #s5:checked ~ #slide1 {\r\n    /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n    -webkit-transform: translate3d(60%,0,-100px);\r\n            transform: translate3d(60%,0,-100px);\r\n  }\r\n\r\n  #s1:checked ~ #slide3, #s2:checked ~ #slide4,\r\n  #s3:checked ~ #slide5, #s4:checked ~ #slide1,\r\n  #s5:checked ~ #slide2 {\r\n    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n    -webkit-transform: translate3d(0%,0,-200px);\r\n            transform: translate3d(0%,0,-200px);\r\n  }\r\n  #slider {\r\n    height: 32vw;\r\n  }\r\n}\r\n@media only screen and (min-width: 801px) and (max-width:990px) {\r\n  #slider label {\r\n  width: 50%;\r\n  }\r\n  .cnav{\r\n    margin-top:130px;\r\n  }\r\n  #s1:checked ~ #slide4, #s2:checked ~ #slide5,\r\n  #s3:checked ~ #slide1, #s4:checked ~ #slide2,\r\n  #s5:checked ~ #slide3 {\r\n    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n    -webkit-transform: translate3d(-120%,0,-200px);\r\n            transform: translate3d(-120%,0,-200px);\r\n  }\r\n  #s1:checked ~ #slide5, #s2:checked ~ #slide1,\r\n  #s3:checked ~ #slide2, #s4:checked ~ #slide3,\r\n  #s5:checked ~ #slide4 {\r\n    /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n    -webkit-transform: translate3d(-60%,0,-100px);\r\n            transform: translate3d(-60%,0,-100px);\r\n  }\r\n\r\n  #s1:checked ~ #slide1, #s2:checked ~ #slide2,\r\n  #s3:checked ~ #slide3, #s4:checked ~ #slide4,\r\n  #s5:checked ~ #slide5 {\r\n    /* box-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19); */\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n  }\r\n\r\n  #s1:checked ~ #slide2, #s2:checked ~ #slide3,\r\n  #s3:checked ~ #slide4, #s4:checked ~ #slide5,\r\n  #s5:checked ~ #slide1 {\r\n    /* box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2); */\r\n    -webkit-transform: translate3d(60%,0,-100px);\r\n            transform: translate3d(60%,0,-100px);\r\n  }\r\n\r\n  #s1:checked ~ #slide3, #s2:checked ~ #slide4,\r\n  #s3:checked ~ #slide5, #s4:checked ~ #slide1,\r\n  #s5:checked ~ #slide2 {\r\n    /* box-shadow: 0 1px 4px 0 rgba(0,0,0,.37); */\r\n    -webkit-transform: translate3d(120%,0,-200px);\r\n            transform: translate3d(120%,0,-200px);\r\n  }\r\n  #slider {\r\n    height: 32vw;\r\n  }\r\n}\r\n/* .slider1 { background: #00BCD4; }\r\n#slide2 { background: #4CAF50; }\r\n#slide3 { background: #CDDC39; }\r\n#slide4 { background: #FFC107; }\r\n#slide5 { background: #FF5722; } */\r\n.flip {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.flip img {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n}\r\n.flip .back {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/card/card.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/card/card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n<div>\r\n  <img style=\"position: relative;left: 50%;transform: perspective(1px) translateX(-50%);\" src=\"../../../assets/Logo.png\" width=\"70px;\"alt=\"\">\r\n  <h1 style=\"color:grey!important;font-size:23px;\" class=\"text-center\">OFFERED LEARNING EXPERIENCES</h1>\r\n\r\n    <section id=\"slider\">\r\n  <input type=\"radio\" name=\"slider\" id=\"s1\">\r\n  <input type=\"radio\" name=\"slider\" id=\"s2\">\r\n  <input type=\"radio\" name=\"slider\" id=\"s3\" checked>\r\n  <input type=\"radio\" name=\"slider\" id=\"s4\">\r\n  <input type=\"radio\" name=\"slider\" id=\"s5\">\r\n  <div class=\"text-center\"*ngFor=\"let slide of slides; let i = index\" \r\n    [attr.for]=\"'s'+(i+1)\"\r\n    id=\"slide{{i+1}}\"\r\n    (mouseenter)=\"flip(i)\"\r\n    (mouseleave)=\"unflip(i)\"\r\n    >\r\n     <div class=\"flip\" id=\"slide_flip{{i+1}}\">\r\n        <div class=\"front\" style=\"backface-visibility: hidden;\">\r\n            <img src=\"{{ slide.image_front }}\" alt=\"\" />\r\n        </div>\r\n        <div class=\"back\" style=\"backface-visibility: hidden;\">\r\n            <img src=\"{{ slide.image_back }}\" alt=\"\" />\r\n        </div>\r\n     </div>\r\n  </div>\r\n\r\n</section><br>\r\n<p class=\"text-center\" style=\"color:#fff;font-size:21px;\">Interested in what we do? <br /><a href=\"\" style=\"color:cyan;font-size:23px;\">Learn more></a></p>\r\n<div class=\"cnav\">\r\n  <button class=\"primary carnav\" (click)=\"slide(-1)\">Prev</button>&nbsp;&nbsp;\r\n  <button class=\"primary carnav\" (click)=\"slide(1)\">Next</button>\r\n</div>\r\n</div>\r\n</div>\r\n<br>\r\n<!--\r\n  <div for=\"s1\" id=\"slide1\">\r\n    <div style=\"background-image: url('../../../assets/card_page/Electricalfront.png');\r\n    background-size: 100% 100%; width: 100%; height: 100%;\"></div>\r\n  </div>\r\n  <div for=\"s2\" id=\"slide2\">\r\n      <div style=\"background-image: url('../../../assets/card_page/emotionalfront.png');\r\n      background-size: 100% 100%; width: 100%; height: 100%;\"></div>\r\n\r\n   </div>\r\n    <div for=\"s3\" id=\"slide3\">\r\n      <div style=\"background-image: url('../../../assets/card_page/lawfront.png');\r\n      background-size: 100% 100%; width: 100%; height: 100%;\">\r\n\r\n      </div>\r\n   </div>\r\n    <div for=\"s4\" id=\"slide4\">\r\n      <div style=\"background-image: url('../../../assets/card_page/productdesign.png' );\r\n      background-size: 100% 100%; width: 100%; height:100%;\">\r\n\r\n      </div>\r\n  </div>\r\n  <div for=\"s5\" id=\"slide5\">\r\n      <div style=\"background-image: url('../../../assets/card_page/socialfront.png');\r\n      background-size: 100% 100%; width: 100%; height: 100%;\"></div>\r\n    </div>\r\n\r\n<!---->\r\n"

/***/ }),

/***/ "./src/app/component/card/card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_card_page_js_jquery_flip_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/card_page/js/jquery.flip.min.js */ "./src/assets/card_page/js/jquery.flip.min.js");
/* harmony import */ var _assets_card_page_js_jquery_flip_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_card_page_js_jquery_flip_min_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.slides = [
            { image_front: '../../../assets/card_page/Electricalfront.png', image_back: '../../../assets/card_page/electrical.png' },
            { image_front: '../../../assets/card_page/emotionalfront.png', image_back: '../../../assets/card_page/emotional.png' },
            { image_front: '../../../assets/card_page/lawfront.png', image_back: '../../../assets/card_page/law.png' },
            { image_front: '../../../assets/card_page/productdesign.png', image_back: '../../../assets/card_page/product.png' },
            { image_front: '../../../assets/card_page/socialfront.png', image_back: '../../../assets/card_page/social.png' },
        ];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.ngAfterViewInit = function () {
        //this.owl();
        console.log('i was here');
        document.getElementById('slider').draggable = true;
        document.getElementById('slider').ondragstart = function (e) {
            prevslx = e.screenX;
            //console.log('start');
        };
        document.getElementById('slider').ondrag = onSlide;
        flipinit();
    };
    CardComponent.prototype.slide = function (dir) {
        slide(dir);
    };
    CardComponent.prototype.flip = function (no) {
        divflip(no + 1);
        console.log(no);
    };
    CardComponent.prototype.unflip = function (no) {
        divunflip(no + 1);
        console.log(no);
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/component/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/component/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());

var prevslx = 0, direction = 0, curr = 3;
function slide(dir) {
    curr += dir;
    if (curr == 6)
        curr = 1;
    else if (curr == 0)
        curr = 5;
    $('#s' + curr).prop('checked', true);
}
function onSlide(e) {
    //console.log(prevslx);
    if (e.screenX == 0) {
        //prevslx=0;
        slide(direction);
        return;
    }
    if (prevslx - e.screenX > 0) {
        //console.log('left');
        direction = 1;
    }
    else if (prevslx - e.screenX < 0) {
        //console.log('right');
        direction = -1;
    }
    //prevslx = e.screenX;
}
function flipinit() {
    for (var i = 1; i <= 5; i++) {
        $('#slide_flip' + i).flip();
    }
}
function divflip(no) {
    if ($('#s' + no).prop('checked') == true) {
        // this is the current element
        $('#slide_flip' + no).flip(true);
    }
}
function divunflip(no) {
    $('#slide_flip' + no).flip(false);
}
/*
  owl(){


          $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
              // stagePadding: 200,
              loop:true,
              margin:0,
              items:1,
              nav:false,
            responsive:{
                  0:{
                      items:1,
                      // stagePadding: 60
                  },
                  600:{
                      items:1,
                      // stagePadding: 100
                  },
                  1000:{
                      items:2,
                      // stagePadding: 200
                  },
                  1200:{
                      items:3,
                      // stagePadding: 250
                  },
                  1400:{
                      items:5,
                      // stagePadding: 300
                  },
                  1600:{
                      items:5,
                      // stagePadding: 350
                  },
                  1800:{
                      items:5,
                      // stagePadding: 400
                  }
              }
          })
        })
        }


  }
*/


/***/ }),

/***/ "./src/app/component/contact/contact.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/contact/contact.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: #273040;\r\n}\r\n.conatiner {\r\n    background-color: lightgrey;\r\n    width: 300px;\r\n    border: 25px solid green;\r\n    padding: 25px;\r\n    margin: 25px;\r\n}\r\n.box{\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  max-width: 700px;\r\n  height: auto;\r\n  background-color:#031129;\r\n  border-radius: 3px;\r\n  padding:10px;\r\n  box-shadow: 0 10px 6px -6px rgb(27, 26, 26);\r\n  }\r\nh1 {\r\n    font-family: 'Poppins', sans-serif, 'arial';\r\n    font-weight: 600;\r\n    font-size: 72px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\nh4 {\r\n    font-family: 'Roboto', sans-serif, 'arial';\r\n    font-weight: 400;\r\n    font-size: 60px;\r\n    text-align: center;\r\n    color: #9b9b9b;\r\n    line-height: 1.5;\r\n}\r\n/* ///// inputs /////*/\r\ninput:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {\r\n    font-size: 0.75em;\r\n    color: #999;\r\n    top: -5px;\r\n    transition: all 0.225s ease;\r\n}\r\n.styled-input {\r\n    float: left;\r\n    width: 293px;\r\n    margin: 1rem 0;\r\n    position: relative;\r\n    border-radius: 4px;\r\n}\r\n@media only screen and (max-width: 768px){\r\n    .styled-input {\r\n        width:100%;\r\n    }\r\n}\r\n.styled-input label {\r\n    color: #999;\r\n    padding: 1.3rem 30px 1rem 30px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 0;\r\n    transition: all 0.25s ease;\r\n    pointer-events: none;\r\n}\r\n.styled-input.wide { \r\n    width: 650px;\r\n    max-width: 100%;\r\n}\r\ninput,\r\ntextarea {\r\n    padding: 30px;\r\n    border: 0;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    background-color: #2d2d2d;\r\n    color: white;\r\n    border-radius: 4px;\r\n}\r\ninput:focus,\r\ntextarea:focus { outline: 0; }\r\ninput:focus ~ span,\r\ntextarea:focus ~ span {\r\n    width: 100%;\r\n    transition: all 0.075s ease;\r\n}\r\ntextarea {\r\n    width: 100%;\r\n    min-height: 15em;\r\n}\r\n.input-container {\r\n    width: 650px;\r\n    max-width: 100%;\r\n    margin: 20px auto 25px auto;\r\n}\r\n.submit-btn {\r\n    float: right;\r\n    padding: 7px 35px;\r\n    border-radius: 60px;\r\n    display: inline-block;\r\n    background-color: #4b8cfb;\r\n    color: white;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),\r\n              0 2px 10px 0 rgba(0,0,0,0.07);\r\n    transition: all 300ms ease;\r\n}\r\n.submit-btn:hover {\r\n    -webkit-transform: translateY(1px);\r\n            transform: translateY(1px);\r\n    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),\r\n              0 1px 1px 0 rgba(0,0,0,0.09);\r\n}\r\n@media (max-width: 768px) {\r\n    .submit-btn {\r\n        width:100%;\r\n        float: none;\r\n        text-align:center;\r\n    }\r\n}\r\ninput[type=checkbox] + label {\r\n  color: #ccc;\r\n  font-style: italic;\r\n}\r\ninput[type=checkbox]:checked + label {\r\n  color: #f00;\r\n  font-style: normal;\r\n}"

/***/ }),

/***/ "./src/app/component/contact/contact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/contact/contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<div class=\"box\">\n  <h4>Contact</h4>\n    <div class=\"row input-container\">\n        <div class=\"col-xs-12\">\n          <div class=\"styled-input wide\">\n            <input type=\"text\" required />\n            <label>Name</label> \n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"styled-input\">\n            <input type=\"text\" required />\n            <label>Email</label> \n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"styled-input\" style=\"float:right;\">\n            <input type=\"text\" required />\n            <label>Phone Number</label> \n          </div>\n        </div>\n        <div class=\"col-xs-12\">\n          <div class=\"styled-input wide\">\n            <textarea required></textarea>\n            <label>Message</label>\n          </div>\n        </div>\n        <div class=\"col-xs-12\">\n          <div class=\"btn-lrg submit-btn\">Send Message</div>\n        </div>\n    </div>\n  </div>\n  <br>\n  <br>"

/***/ }),

/***/ "./src/app/component/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/component/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/component/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/component/cube-page/cube-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/cube-page/cube-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/cube-page/cube-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/cube-page/cube-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"is-nav-offset\"></div>\r\n<div id=\"post-65\" class=\"post-65 page type-page status-publish hentry\">\r\n  <div class=\"SlidingContent\">\r\n    <div class=\"overlay-diamonds-w\"></div>\r\n    <div class=\"swiper-container is-swiper-sliding-content-image visible-md-block visible-lg-block is-mobile-fullscreen\">\r\n      <div class=\"swiper-wrapper\">\r\n        <div class=\"swiper-slide\">\r\n          <div class=\"bg-image anim-zoom-slow\" data-bg-image=\"../../../assets/cube_page/images/RW_1.gif\"\r\n            data-swiper-parallax=\"30%\"></div>\r\n          <h5 class=\"swiper-sliding-content-image-title\"><span class=\"anim-fadeup-slow\"><small style=\"color: #00ecf1\">{{ this.data[0].head }}</small></span></h5>\r\n        </div><!-- end swiper-slide -->\r\n        <div class=\"swiper-slide\">\r\n          <div class=\"bg-image anim-zoom-slow\" data-bg-image=\"../../../assets/cube_page/images/H_2.gif\"\r\n            data-swiper-parallax=\"30%\"></div>\r\n\r\n          <h5 class=\"swiper-sliding-content-image-title\"><span class=\"anim-fadeup-slow\"><small style=\"color: #00ecf1\">{{ this.data[1].head }}</small></span></h5>\r\n\r\n        </div><!-- end swiper-slide -->\r\n        <div class=\"swiper-slide\">\r\n          <div class=\"bg-image anim-zoom-slow\" data-bg-image=\"../../../assets/cube_page/images/M_3.gif\"\r\n            data-swiper-parallax=\"30%\"></div>\r\n\r\n          <h5 class=\"swiper-sliding-content-image-title\"><span class=\"anim-fadeup-slow\"><small style=\"color: #00ecf1\">{{ this.data[2].head }}</small></span></h5>\r\n\r\n        </div><!-- end swiper-slide -->\r\n        <div class=\"swiper-slide\">\r\n            <div class=\"bg-image anim-zoom-slow\" data-bg-image=\"../../../assets/cube_page/images/As_4.gif\"\r\n              data-swiper-parallax=\"30%\"></div>\r\n  \r\n            <h5 class=\"swiper-sliding-content-image-title\"><span class=\"anim-fadeup-slow\"><small style=\"color: #00ecf1\">{{ this.data[3].head }}</small></span></h5>\r\n  \r\n          </div><!-- end swiper-slide -->\r\n      </div><!-- end swiper-wrapper -->\r\n\r\n      <div class=\"swiper-pagination anim-faderight anim-onload\"></div>\r\n\r\n      <ul class=\"swiper-content-block-navigation list-unstyled font-heading anim-fadeup anim-onload\">\r\n        <li class=\"swiper-content-prev\">\r\n          <!-- <span>&larr;</span> -->\r\n          <span class=\"arrow-left\"></span>\r\n        </li>\r\n        <li class=\"swiper-content-next\">\r\n          <!-- <span>&rarr;</span> -->\r\n          <span class=\"arrow-right\"></span>\r\n        </li>\r\n      </ul> <!-- .swiper-content-block-navigation -->\r\n\r\n    </div><!-- end swiper-container -->\r\n\r\n\r\n    <div class=\"swiper-container is-swiper-sliding-content-text section-light visible-md-block visible-lg-block\"\r\n      data-looped-slides=\"3\">\r\n      <div class=\"swiper-wrapper\">\r\n        <div class=\"swiper-slide\">\r\n          <div class=\"swiper-slide-content anim-fadeup-slow is-perfect-scrollbar\">\r\n            <h3>{{ data[0].head }}</h3>\r\n            <small><p>{{ data[0].body }}</p></small>\r\n          </div>\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n          <div class=\"swiper-slide-content anim-fadeup-slow is-perfect-scrollbar\">\r\n              <h3>{{ data[1].head }}</h3>\r\n              <small><p>{{ data[1].body }}</p></small>\r\n          </div><!-- end IconText -->\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n            <div class=\"swiper-slide-content anim-fadeup-slow is-perfect-scrollbar\">\r\n                <h3>{{ data[2].head }}</h3>\r\n                <small><p>{{ data[2].body }}</p></small>\r\n            </div><!-- end IconText -->\r\n          </div>\r\n          <div class=\"swiper-slide\">\r\n              <div class=\"swiper-slide-content anim-fadeup-slow is-perfect-scrollbar\">\r\n                  <h3>{{ data[3].head }}</h3>\r\n                  <small><p>{{ data[3].body }}</p></small>\r\n              </div><!-- end IconText -->\r\n            </div>\r\n\r\n      </div><!-- end swiper-wrapper -->\r\n    </div><!-- end swiper-container -->\r\n\r\n\r\n  </div><!-- end SlidingContent -->\r\n\r\n\r\n  <!--\r\n// Mobile Version Blocks\r\n-->\r\n\r\n  <div class=\"SlidingContentMobile section-light visible-xs-block visible-sm-block\">\r\n\r\n    <div *ngFor=\"let d of data\">\r\n        <div class=\"sliding-content-mobile-section-image\">\r\n            <img width=\"1000\" height=\"600\" src=\"../../../assets/cube_page/images/{{d.image_name}}\"\r\n              class=\"attachment-vivian_landscape_medium size-vivian_landscape_medium\" alt=\"\" />\r\n            <h2 class=\"sliding-content-mobile-image-title\">{{d.head}}</h2>\r\n          </div><!-- end swiper-slide -->\r\n      \r\n          <div class=\"sliding-content-mobile-section-text\">\r\n      \r\n            <h3>{{ d.head }}</h3>\r\n            <small><p>{{ d.body }}</p></small>\r\n          </div><!-- end swiper-slide -->      \r\n    </div>\r\n  </div><!-- end SlidingContentMobile -->\r\n</div><!-- end post -->"

/***/ }),

/***/ "./src/app/component/cube-page/cube-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/cube-page/cube-page.component.ts ***!
  \************************************************************/
/*! exports provided: CubePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubePageComponent", function() { return CubePageComponent; });
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

var CubePageComponent = /** @class */ (function () {
    function CubePageComponent() {
        this.data = [
            {
                head: 'A Real World Experience',
                body: 'Each Alo experience revolves around a real-world scenario/project, frequently encountered in 21st-century profession, or personal life.',
                image_name: 'RW_1.gif'
            },
            {
                head: 'Immersive  Pedagogy',
                body: 'The various skills required to tackle that scenario are learned through hands-on activities, live demonstrations & classroom games to engage school students. Along with online tools and games at home to master the skills.',
                image_name: 'H_2.gif'
            },
            {
                head: 'Designed by Experts',
                body: 'Alo experiences have been designed for authentic exposure by field experts from esteemed institutions like IIT Delhi, AIIMS, NIFT, Delhi University, National Law University etc.',
                image_name: 'M_3.gif'
            },
            {
                head: 'Rigorous Assessment and Mapping',
                body: "Throughout the in-class experience and online tools & games, we rigorously track the student's growth in holistic skills and compatibility with various professions." +
                    "We map this assessment to our scientifically researched educational framework to suggest students the next set of learning experiences - for holistic development and in-depth career mapping.",
                image_name: 'As_4.gif'
            }
        ];
    }
    CubePageComponent.prototype.ngAfterViewInit = function () {
        console.log(this.data);
    };
    CubePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cube-page',
            template: __webpack_require__(/*! ./cube-page.component.html */ "./src/app/component/cube-page/cube-page.component.html"),
            styles: [__webpack_require__(/*! ./cube-page.component.css */ "./src/app/component/cube-page/cube-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CubePageComponent);
    return CubePageComponent;
}());



/***/ }),

/***/ "./src/app/component/main-page/main-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/main-page/main-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f23{\r\n  font-size: 19px;\r\n}\r\n.mainhead{\r\n  font-size: 42px;\r\n}\r\n.count{\r\n  font-size: 40px;\r\n}\r\nbody{\r\n  color: #00ecf1 !important;\r\n}\r\n.bg1{\r\n    /* height: -webkit-fill-available; */\r\n    overflow: hidden;\r\n    background-image: url('banner.png');\r\n    background-size: 100% 100%;\r\n}\r\n.center{\r\n    text-align: center;\r\n}\r\n.about{\r\n    color: #06b2bd !important;\r\n}\r\n.about strong{\r\n    color: #00ecf1 !important;\r\n}\r\n@media only screen and (min-width: 900px) and (max-width: 1280px) {\r\n  .f23{\r\n    font-size: 17px;\r\n  }\r\n  .mainhead{\r\n    margin-top: 70px;\r\n    font-size: 30px;\r\n  }\r\n  .count{\r\n    font-size: 30px;\r\n  }\r\n}\r\n@media only screen and (min-width: 952px) and (max-width: 992px) {\r\n  .f23{\r\n    font-size: 17px;\r\n  }\r\n  .mainhead{\r\n    margin-top: 50px;\r\n    font-size: 30px;\r\n  }\r\n  .count{\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media only screen and (min-width: 700px) and (max-width: 955px) {\r\n  .f23{\r\n    font-size: 15px;\r\n  }\r\n  .mainhead{\r\n    margin-top: 50px;\r\n    font-size: 30px;\r\n  }\r\n  .count{\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media only screen and (min-width: 600px) and (max-width: 699px) {\r\n  .f23{\r\n    font-size: 13px;\r\n  }\r\n  .mainhead{\r\n    margin-top: 50px;\r\n    font-size: 25px;\r\n  }\r\n  .count{\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media only screen and (min-width: 499px) and (max-width: 599px) {\r\n  .f23{\r\n    font-size: 13px;\r\n  }\r\n  .mainhead{\r\n    margin-top: 100px;\r\n    font-size: 20px;\r\n  }\r\n  .count{\r\n    font-size: 15px;\r\n  }\r\n}\r\n@media only screen and (min-width: 299px) and (max-width: 598px) {\r\n  .f23{\r\n    font-size: 12px;\r\n  }\r\n  .mainhead{\r\n    margin-top: 100px;\r\n    font-size: 15px;\r\n  }\r\n  .count{\r\n    font-size: 13px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/main-page/main-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/main-page/main-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><br>\r\n  <div class=\"bg1\">\r\n    <div class=\"container about center\">\r\n        <p class=\"f23\">The current schooling system does not provide a structed methodlogy\r\n            to meet <br> the two basic aspirations of indian parents: <br>\r\n            <strong>Holistic Development</strong> and <strong>Sucessful Career</strong>\r\n            for their child</p>\r\n    </div><br><br>\r\n    <div class=\"container about center\">\r\n      <h3 class=\"mainhead\">\r\n        ARE WE <br> PREPARING OUR KIDS <br> FOR THE REAL WORLD?\r\n      </h3>\r\n    </div><br>\r\n    <div class=\"container about\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-3 text-center\">\r\n          <p class=\"f23\"><span class=\"count\">67%</span><br>of the parents feel that the <br> purpose of education should be to impart <br>\r\n          <strong>holistic development.</strong></p>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3 text-center\">\r\n          <p class=\"f23\"><span class=\"count\">73%</span><br> of the parents feel that school <br> education needs to improve <br> on\r\n            <strong>real life learning.</strong></p>\r\n          </div>\r\n\r\n          <div class=\"col-sm-3 text-center\">\r\n              <p class=\"f23\"><span class=\"count\">98%</span><br>universities feel that <br>school should play a <br> greater role in giving <br>\r\n              <strong>exposer to careers.</strong></p>\r\n            </div>\r\n            <div class=\"col-sm-2\"></div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/main-page/main-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/main-page/main-page.component.ts ***!
  \************************************************************/
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
    MainPageComponent.prototype.ngAfterViewInit = function () {
        this.counter();
    };
    MainPageComponent.prototype.counter = function () {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + '%');
                }
            });
        });
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/component/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/component/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/component/outerpage/outerpage.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/outerpage/outerpage.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mfullpage{\r\n    background-color: #212C3E;\r\n    overflow-y: scroll;\r\n    padding:0;\r\n    margin:0;\r\n}\r\n\r\n  \r\n  "

/***/ }),

/***/ "./src/app/component/outerpage/outerpage.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/outerpage/outerpage.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mfullpage\" style=\"overflow-x: hidden;\">\r\n  <div class=\"section\">\r\n      <app-panorama></app-panorama>\r\n    </div>\r\n  <div class=\"section\">\r\n    <div>\r\n      <app-main-page></app-main-page>\r\n    </div>\r\n  </div>\r\n  <div class=\"section\">\r\n      <app-cube-page></app-cube-page>\r\n    </div>\r\n  <div class=\"section\">\r\n    <app-card></app-card>\r\n  </div>                           \r\n</div>\r\n            "

/***/ }),

/***/ "./src/app/component/outerpage/outerpage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/outerpage/outerpage.component.ts ***!
  \************************************************************/
/*! exports provided: OuterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterpageComponent", function() { return OuterpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroller */ "./src/app/component/outerpage/scroller.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OuterpageComponent = /** @class */ (function () {
    function OuterpageComponent() {
    }
    OuterpageComponent.prototype.ngOnInit = function () {
    };
    OuterpageComponent.prototype.ngAfterViewInit = function () {
        this.scroller = new _scroller__WEBPACK_IMPORTED_MODULE_1__["Scroller"](document.getElementById('mfullpage'));
        //console.clear();
        //console.log(this.scroller);
    };
    OuterpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outerpage',
            template: __webpack_require__(/*! ./outerpage.component.html */ "./src/app/component/outerpage/outerpage.component.html"),
            styles: [__webpack_require__(/*! ./outerpage.component.css */ "./src/app/component/outerpage/outerpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OuterpageComponent);
    return OuterpageComponent;
}());



/***/ }),

/***/ "./src/app/component/outerpage/scroller.ts":
/*!*************************************************!*\
  !*** ./src/app/component/outerpage/scroller.ts ***!
  \*************************************************/
/*! exports provided: Scroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroller", function() { return Scroller; });
var Scroller = /** @class */ (function () {
    function Scroller(out_element) {
        var _this = this;
        this.out_element = out_element;
        this.sections_length = [];
        // getting the height of screen, and setting it to outelement's property
        this.adjust();
        this.out_element.addEventListener('scroll', function () { return _this.onScroll(); });
        window.onresize = this.adjust;
    }
    Scroller.prototype.adjust = function () {
        this.last_top_position = this.out_element.scrollTop;
        this.out_element.style.height = window.innerHeight + 'px';
        var sections = this.out_element.children;
        var tmplength = 0;
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.minHeight = (window.innerHeight + 10) + 'px';
            tmplength += sections[i].scrollHeight;
            this.sections_length.push(tmplength);
        }
        console.log(this.sections_length);
    };
    Scroller.prototype.get_position = function (val, direction) {
        if (direction === void 0) { direction = 1; }
        var pos = 0, minh = this.sections_length[0];
        for (var i = 0; i < this.sections_length.length; i++) {
            if (val < this.sections_length[i])
                break;
            else
                pos += 1;
        }
        if (pos >= this.sections_length.length)
            pos = this.sections_length.length - 1;
        return pos;
    };
    Scroller.prototype.onScroll = function () {
        if (scrolling)
            return;
        var diff = (this.last_top_position - this.out_element.scrollTop);
        if (diff == 0)
            return;
        var scrolled_up = diff > 0;
        // -1 = down, +1 = moved up
        //console.log(scrolled_up);
        if (scrolled_up) {
            var curr_sec_pos = this.get_position(this.out_element.scrollTop), prev_sec_pos = this.get_position(this.last_top_position);
            // transection occur if curr-prev<0
            if ((curr_sec_pos - prev_sec_pos) < 0) {
                disableScroll();
                this.scroll_to(this.sections_length[curr_sec_pos] - window.innerHeight);
                //console.log(curr_sec_pos, prev_sec_pos);   
            }
            // else no transaction required
        }
        else {
            // scrolled down
            var curr_sec_pos = this.get_position(this.out_element.scrollTop + window.innerHeight), prev_sec_pos = this.get_position(this.last_top_position + window.innerHeight);
            // transection occur if curr-prev>0
            if ((curr_sec_pos - prev_sec_pos) > 0) {
                disableScroll();
                this.scroll_to(this.sections_length[curr_sec_pos - 1]);
            }
            // else no transaction required
        }
        this.last_top_position = this.out_element.scrollTop;
    };
    Scroller.prototype.scroll_to = function (to, duration) {
        if (duration === void 0) { duration = 1000; }
        scrollTo(this.out_element, to, duration);
    };
    return Scroller;
}());

var scrolling = false;
function scrollTo(element, to, duration) {
    scrolling = true;
    var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
    var animateScroll = function () {
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
        else {
            scrolling = false;
            setTimeout(function () { enableScroll(); }, 500);
        }
    };
    animateScroll();
}
//t = current time
//b = start value
//c = change in value
//d = duration
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
;
/** Faltu ka code */
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
function disableScroll() {
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


/***/ }),

/***/ "./src/app/component/panorama/panorama.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/panorama/panorama.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/panorama/panorama.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/panorama/panorama.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<a-scene>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <a-assets>\r\n    <img id=\"panorama\" src=\"https://c1.staticflickr.com/5/4302/35137573294_1287bfd0ae_k.jpg\" crossorigin />\r\n  </a-assets>\r\n  <a-sky src=\"#panorama\" rotation=\"0 -90 0\"></a-sky>\r\n</a-scene>\r\n   \r\n"

/***/ }),

/***/ "./src/app/component/panorama/panorama.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/panorama/panorama.component.ts ***!
  \**********************************************************/
/*! exports provided: PanoramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanoramaComponent", function() { return PanoramaComponent; });
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

var PanoramaComponent = /** @class */ (function () {
    function PanoramaComponent() {
    }
    PanoramaComponent.prototype.ngOnInit = function () {
    };
    PanoramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panorama',
            template: __webpack_require__(/*! ./panorama.component.html */ "./src/app/component/panorama/panorama.component.html"),
            styles: [__webpack_require__(/*! ./panorama.component.css */ "./src/app/component/panorama/panorama.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanoramaComponent);
    return PanoramaComponent;
}());



/***/ }),

/***/ "./src/app/component/team-page/team-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/team-page/team-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------------------------------------\r\n[Table of contents]\r\n\r\n[ DEFULT INDEX NUMBER ]\r\n1. Defult css\r\n    1.1. body / body\r\n    1.2. a / a\r\n    1.3. Overflow / .fix\r\n    1.4. Video background / .section-video\r\n    1.5. p / p\r\n    1.6. h1 / h1, h2 / h2, h3 / h3, h4 / h4, h5 / h5, h6 / h6\r\n    1.7. Gradient Text Color / .gradient-text\r\n    1.8. Section Header / .section-header\r\n    1.9. Section Separator / .section-separator\r\n    1.10. Overlay Background / .overlay-color, .overlay-clor-full\r\n    1.11. Button Defult Style / .btn\r\n    1.12. Margin / .m-\r\n    1.13. Padding / .p-\r\n    1.14. Social Icon / .social-icon\r\n    1.15. Message / .message\r\n    1.16. Form Style / .single-form\r\n    -- Before this comment ( START MAIN CSS STYLE ) defult css continue .\r\n\r\n2. Navigation / .main-navbar-top\r\n    2.1. Navbar icon style /.nav-trigger\r\n\r\n3. Background Image 1 / .bg-1\r\n4. Header style / .header-section-1\r\n\r\n5. Features section 1 / .features-section-1\r\n6. Background Image 2 / .bg-2\r\n7. Features section 2 / .features-section-2\r\n8. Features section 3 / .features-section-3\r\n9. Background Image 3 / .bg-3\r\n10. Features section 4 / .features-section-4\r\n11. Background Image 4 / .bg-4\r\n12. Features section 5 / .features-section-5\r\n\r\n19. Footer / .footer-section-1\r\n20. Popup Contact Form / .contact-form\r\n\r\n\r\n\r\n\r\n-------------------------------------------------------------------*/\r\n/*------------------------------------------------------------------\r\n[ Color codes ]\r\n\r\n    [ Text and Background Color ]\r\n        Main color 1:       #aa49de (purple)    [ Gradient color 1 ]\r\n        Main color 2:       #4954de (blue)      [ Gradient color 2 ]\r\n        Background 1:       #FFFFFF             [ Background color ]\r\n        Light color:        #FFFFFF             [ Using text color and some ware ]\r\n        Dark color-1:       #686868             [ Using text color and some ware ]\r\n        Dark color-2:       #282828             [ Using text color and some ware ]\r\n        Border color:       #000031;            [ Border Color ]\r\n        Shadow color:       #000000;            [ All type of shadow color ]\r\n\r\n\r\n[ This Templage Using 1 Coller Scheme ]\r\n\r\n    [ Main color ]\r\n        1. Color 1:         main-color-1: #aa49de; main-color-1: #4954de;\r\n        2. Color 2:         main-color-1: #00C6FF; main-color-1: #0072FF;\r\n        3. Color 3:         main-color-1: #FEAD27; main-color-1: #DE496C;\r\n\r\n    [Background color ]\r\n        2. Light:           #FFFFFF;\r\n\r\n    [ Shadow color ]\r\n        shadow-color:       rgba(0, 0, 0, 0.12);\r\n\r\n    [ Overlay color]\r\n        overlay-color:      rgba(0, 0, 0, 0.6);\r\n\r\n\r\n\r\n[ Using Color Code ]\r\n    h1 [ All ]      Color: #373737                      [ Gray ]\r\n    h2 [ Light ]    Color: #373737                      [ Gray 100% opacity ]\r\n    h3 [ Light ]    Color: #373737                      [ Gray 100% opacity ]\r\n    p  [ Light ]    Color: rgba(55, 55, 55, 0.7)        [ Gray 70% opacity ]\r\n    a  [ Normal ]   Color: main-color                   [ main-color is changed particular color scheme ]\r\n    a  [ Hover ]    color: as required                  [ as required ]\r\n\r\n-------------------------------------------------------------------*/\r\n/*------------------------------------------------------------------\r\n[Typography]\r\n\r\n    [ There are using two different font typography ]\r\n        Typography 1: Exo Font;\r\n        Typography 2: Rayeway and Poppins font;\r\n        Typography 3: Montserrat and Roboto font;\r\n        Typography 4: Exo and Poppins font;\r\n\r\n    [ Other Typography style are same ]\r\n    Body :\r\n        font-style:     normal;\r\n        font-size:      15px;\r\n\r\n    Header:\r\n        font-style:     normal;\r\n        font-size:      40px;\r\n\r\n    h1:\r\n        font-style:     normal;\r\n        font-size:      40px;\r\n\r\n    h2, h3, h4, h5, h6:\r\n        font-style:     normal;\r\n\r\n    Section Heading:\r\n        font-style:     normal;\r\n        font-size:      35px;\r\n\r\n    p:\r\n        font-style:     normal;\r\n        font-size:      15px;\r\n\r\n\r\n    Notes:  This Template typography 1 Defult [ font-family: 'Exo', sans-serif; ] [ font-style: normal; ] [ font-size: 15px; ]\r\n    Notes:  This Template typography 2 Defult [ font-family: 'Poppins', sans-serif; ] [ font-style: normal; ] [ font-size: 15px; ]\r\n    Notes:  This Template typography 3 Defult [ font-family: 'Roboto', sans-serif; ] [ font-style: normal; ] [ font-size: 15px; ]\r\n    Notes:  This Template typography 4 Defult [ font-family: 'Poppins', sans-serif; ] [ font-style: normal; ] [ font-size: 15px; ]\r\n\r\n-------------------------------------------------------------------*/\r\n/**\r\n * ===============================\r\n *  Defult CSS\r\n * ===============================\r\n */\r\n.content-area{\r\n    background-color: rgb(39, 48, 64);\r\n }\r\nbody {\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: rgb(39,48,64);;\r\n    font-size: 14px;\r\n    font-style: none;\r\n    line-height: 27px;\r\n    font-weight: 400;\r\n    text-align: left;\r\n    position: relative;\r\n    background-color: rgb(39, 48, 64);\r\n  }\r\na {\r\n    text-decoration: none !important; \r\n    display: inline-block;\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: transparent;\r\n    padding: 0;\r\n    color: #ffffff;\r\n    transition: all 0.4s ease-out;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\na:hover {\r\n    color: #ffffff;\r\n  }\r\na:focus {\r\n    color: #ffffff;\r\n    outline: 0 !important;\r\n  }\r\n/*\r\n   * ====================================\r\n   * Gradient Text Color\r\n   * ====================================\r\n   */\r\n/**\r\n   * ====================================\r\n   *  Every Section Headline Defult Class\r\n   * ====================================\r\n   */\r\n.section-heading {\r\n    font-family: 'Merriweather', serif;\r\n    color: rgb(39,208,215);\r\n    display: inline-block;\r\n    padding-bottom: 0px;\r\n    margin: 0;\r\n    font-size: 40px;\r\n    line-height: 65px;\r\n    font-weight: 400;\r\n  }\r\n.sub-heading {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 14px;\r\n    line-height: 40px;\r\n    font-weight: 600;\r\n    color: #f7ac54;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n  }\r\n.color {\r\n    color: #f7ac54;\r\n  }\r\n.section-header {\r\n    margin-bottom: 70px;\r\n    text-align: center;\r\n  }\r\n.section-header .line-outer {\r\n    position: relative;\r\n    left: 50%;\r\n    margin-bottom: 6px;\r\n  }\r\n.section-header .line-outer .line {\r\n    top: 0px;\r\n  }\r\n.section-header.text-left,\r\n  .section-header.text-left * {\r\n    text-align: left;\r\n  }\r\n.section-header.text-right,\r\n  .section-header.text-right * {\r\n    text-align: right;\r\n  }\r\nsection.section {\r\n    position: relative;\r\n  }\r\n/**\r\n   * ===============================\r\n   *  Section Top and Bottom padding\r\n   * ===============================\r\n   */\r\n.section-separator {\r\n    display: block;\r\n    padding-top: 115px;\r\n    padding-bottom: 115px;\r\n  }\r\n.section-separator.sp-top {\r\n    padding-bottom: 0px;\r\n  }\r\n.section-separator.sp-bottom {\r\n    padding-top: 0px;\r\n  }\r\n.section-separator-line {\r\n    margin: 0;\r\n    width: 100%;\r\n    border-top: 1px solid;\r\n  }\r\n/**\r\n   * ====================================\r\n   * Background Overlay Color\r\n   * ====================================\r\n   */\r\n.overlay-color::before {\r\n    content: '';\r\n    position: absolute;\r\n    background-color: rgba(32, 32, 32, 0.8);\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n.overlay-color-full {\r\n    position: relative;\r\n  }\r\n/**\r\n   * ====================================\r\n   * Background image css\r\n   * ====================================\r\n   */\r\n.bg-cover {\r\n    -ms-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-attachment: initial;\r\n    background-repeat: no-repeat;\r\n    background-color: #171717;\r\n  }\r\n/**\r\n   * ====================================\r\n   * Making Same Height Left & Right Part\r\n   * ====================================\r\n   */\r\n.display-table {\r\n    display: table !important;\r\n    width: 100%;\r\n  }\r\n.display-table .left,\r\n  .display-table .right {\r\n    display: table-cell;\r\n    float: none !important;\r\n  }\r\n/**\r\n   * ===============================\r\n   *   Defult Button Style\r\n   * ===============================\r\n   */\r\n.btn {\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-radius: 0 0 0 0 ;\r\n    border: none;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    padding: 0;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    line-height: 28px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    outline: 0;\r\n    position: relative;\r\n    z-index: 2;\r\n    transition: all 0.4s ease-out;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.btn:last-child {\r\n    margin-right: 0px !important;\r\n  }\r\n.btn:hover {\r\n    color: #ffffff;\r\n  }\r\n.btn .icon {\r\n    position: relative;\r\n    top: 3px;\r\n    color: #f7ac54;\r\n  }\r\n.btn.left-icon .icon {\r\n    margin-right: 4px;\r\n  }\r\n.btn.right-icon .icon {\r\n    margin-left: 4px;\r\n  }\r\n.btn.btn-fill,\r\n  .btn.btn-border {\r\n    font-size: 17px;\r\n  }\r\n.btn.btn-fill {\r\n    padding: 14px 30px;\r\n    background-color: #f7ac54;\r\n    color: #282828;\r\n  }\r\n.btn.btn-fill,\r\n  .btn.btn-fill .icon,\r\n  .btn.btn-fill:hover {\r\n    background-color: #feb960;\r\n    color: #282828;\r\n  }\r\n.btn.btn-border {\r\n    background-color: transparent;\r\n    border: 2px solid;\r\n    border-color: #f7ac54;\r\n    padding: 12px 30px;\r\n    color: #f7ac54;\r\n  }\r\n.btn.btn-border:hover {\r\n    background-color: #feb960;\r\n    color: #ffffff;\r\n  }\r\n.btn-mask,\r\n  .btn-nav {\r\n    overflow: hidden;\r\n  }\r\n.btn-mask .view-all-link-mask,\r\n  .btn-nav .view-all-link-mask {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    -webkit-transform: translate3d(-100%,0,0);\r\n    transform: translate3d(-100%,0,0);\r\n  }\r\n.btn-mask .view-all-link-mask,\r\n  .btn-nav .view-all-link-mask,\r\n  .btn-mask .view-all-link-mask .view-all-link-mask-text,\r\n  .btn-nav .view-all-link-mask .view-all-link-mask-text {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0px;\r\n    bottom: 0;\r\n    left: 0px;\r\n    transition: all 600ms ease-out;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n    z-index: 111;\r\n    filter: alpha(opacity=100 ) ;\r\n    opacity: 1 ;\r\n  }\r\n.btn-mask .view-all-link-mask,\r\n  .btn-nav .view-all-link-mask,\r\n  .btn-mask .view-all-link-mask .view-all-link-mask-text,\r\n  .btn-nav .view-all-link-mask .view-all-link-mask-text,\r\n  .btn-mask .view-all-link-mask .icon,\r\n  .btn-nav .view-all-link-mask .icon,\r\n  .btn-mask .view-all-link-mask .view-all-link-mask-text .icon,\r\n  .btn-nav .view-all-link-mask .view-all-link-mask-text .icon {\r\n    color: #feb960;\r\n  }\r\n.btn-mask .view-all-link-mask .view-all-link-mask-text,\r\n  .btn-nav .view-all-link-mask .view-all-link-mask-text {\r\n    -webkit-transform: translate3d( 100%, 0, 0 );\r\n    transform: translate3d( 100%, 0, 0 );\r\n  }\r\n.btn-mask:hover .view-all-link-mask,\r\n  .btn-nav:hover .view-all-link-mask,\r\n  .btn-mask.active .view-all-link-mask,\r\n  .btn-nav.active .view-all-link-mask,\r\n  .btn-mask:hover .view-all-link-mask .view-all-link-mask-text,\r\n  .btn-nav:hover .view-all-link-mask .view-all-link-mask-text,\r\n  .btn-mask.active .view-all-link-mask .view-all-link-mask-text,\r\n  .btn-nav.active .view-all-link-mask .view-all-link-mask-text {\r\n    -webkit-transform: translate3d( 0, 0, 0 );\r\n    transform: translate3d( 0, 0, 0 );\r\n  }\r\n.btn.active.focus,\r\n  .btn.active:focus,\r\n  .btn.focus,\r\n  .btn:active.focus,\r\n  .btn:active:focus,\r\n  .btn:focus {\r\n    outline: thin dotted;\r\n    outline: 0px auto -webkit-focus-ring-color !important;\r\n    outline-offset: -2px;\r\n  }\r\n.btn-text-link {\r\n    padding: 50px 0 0 0;\r\n    text-align: center;\r\n  }\r\n.btn-text-link a {\r\n    margin-left: 10px;\r\n  }\r\n.m-t-15 {\r\n    margin-top: 15px;\r\n  }\r\n.m-r-15 {\r\n    margin-right: 15px;\r\n  }\r\n.m-b-15 {\r\n    margin-bottom: 15px;\r\n  }\r\n.m-l-15 {\r\n    margin-left: 15px;\r\n  }\r\n.m-t-30 {\r\n    margin-top: 30px;\r\n  }\r\n.m-r-30 {\r\n    margin-right: 30px;\r\n  }\r\n.m-b-30 {\r\n    margin-bottom: 30px;\r\n  }\r\n.m-l-30 {\r\n    margin-left: 30px;\r\n  }\r\n.m-t-40 {\r\n    margin-top: 40px;\r\n  }\r\n.m-r-40 {\r\n    margin-right: 40px;\r\n  }\r\n.m-b-40 {\r\n    margin-bottom: 40px;\r\n  }\r\n.m-l-40 {\r\n    margin-left: 40px;\r\n  }\r\n.m-t-50 {\r\n    margin-top: 50px;\r\n  }\r\n.m-r-50 {\r\n    margin-right: 50px;\r\n  }\r\n.m-b-50 {\r\n    margin-bottom: 50px;\r\n  }\r\n.m-l-50 {\r\n    margin-left: 50px;\r\n  }\r\n.p-t-30 {\r\n    padding-top: 30px;\r\n  }\r\n.p-r-30 {\r\n    padding-right: 30px;\r\n  }\r\n.p-b-30 {\r\n    padding-bottom: 30px;\r\n  }\r\n.p-l-30 {\r\n    padding-left: 30px;\r\n  }\r\n.p-t-40 {\r\n    padding-top: 40px;\r\n  }\r\n.p-r-40 {\r\n    padding-right: 40px;\r\n  }\r\n.p-b-40 {\r\n    padding-bottom: 40px;\r\n  }\r\n.p-l-40 {\r\n    padding-left: 40px;\r\n  }\r\n.p-t-50 {\r\n    padding-top: 50px;\r\n  }\r\n.p-r-50 {\r\n    padding-right: 50px;\r\n  }\r\n.p-b-50 {\r\n    padding-bottom: 50px;\r\n  }\r\n.p-l-50 {\r\n    padding-left: 50px;\r\n  }\r\n/**\r\n   * ======================\r\n   * Social Icon Style\r\n   * ======================\r\n   */\r\n/**\r\n   * ======================\r\n   * Social Icon Style\r\n   * ======================\r\n   */\r\n.social-icon {\r\n    margin-top: 15px;\r\n  }\r\n.social-icon li {\r\n    list-style: none;\r\n    float: left;\r\n    margin-bottom: 0px;\r\n  }\r\n.social-icon li a {\r\n    font-size: 17px;\r\n    text-align: center;\r\n    margin-right: 15px;\r\n    width: 25px;\r\n    height: 25px;\r\n    padding: 3px;\r\n    border-radius: 50%;\r\n    font-size: 14px;\r\n    margin-right: 10px;\r\n  }\r\n.social-icon li a,\r\n  .social-icon li a:hover {\r\n    color: #202020;\r\n    background-color: #9c9c9c;\r\n  }\r\n.social-icon li:last-child a {\r\n    margin-right: 0px;\r\n  }\r\n/**\r\n   * ===================================\r\n   * Subscription and contact  \"MESSAGE\"\r\n   * ===================================\r\n   */\r\n.message p {\r\n    margin-bottom: 0px;\r\n  }\r\n.message p:last-child {\r\n    padding-bottom: 10px !important;\r\n  }\r\n.subscription-success,\r\n  .subscription-failed,\r\n  .email-success,\r\n  .email-failed,\r\n  .email-loading {\r\n    font-size: 13px;\r\n    display: none;\r\n    text-align: center !important;\r\n    padding: 10px 10px 0 10px;\r\n    transition: all 0.5s ease-out;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.email-loading {\r\n    color: #52B8FF;\r\n  }\r\n.email-loading img {\r\n    width: 13px;\r\n    position: relative;\r\n    top: -2px;\r\n  }\r\n.subscription-failed,\r\n  .email-failed {\r\n    color: #FF5252 !important;\r\n  }\r\n.subscription-failed .icon,\r\n  .email-failed .icon {\r\n    font-size: 12px;\r\n    position: relative;\r\n    top: 1px;\r\n  }\r\n.subscription-success,\r\n  .email-success {\r\n    color: #56CC35;\r\n  }\r\n.subscription-failed .icon,\r\n  .email-failed .icon,\r\n  .subscription-success .icon,\r\n  .email-success .icon {\r\n    font-size: 12px;\r\n    position: relative;\r\n    top: 1px;\r\n  }\r\n/**\r\n   * =========================\r\n   * Form Style\r\n   * =========================\r\n   */\r\n.single-form {\r\n    width: 100%;\r\n    display: inline-table;\r\n  }\r\n.single-form .form-control {\r\n    position: relative;\r\n    background-color: transparent;\r\n    border: 0px solid;\r\n    border-radius: 0;\r\n    box-shadow: 0 0 0 0 #fff;\r\n    color: #ffffff;\r\n    margin-bottom: 20px;\r\n    height: 55px;\r\n    z-index: 100;\r\n    transition: all 0.4s ease-out;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.single-form .form-control:focus {\r\n    outline: none;\r\n  }\r\n.single-form .form-control,\r\n  .single-form .input-label {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 60px;\r\n  }\r\n.single-form .input-label {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    overflow: hidden;\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n.single-form .input-label::after,\r\n  .single-form .input-label::before {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #f7ac54;\r\n    transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.single-form .input-label::before {\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n  }\r\n.single-form .input-label::after {\r\n    background-color: #f7ac54;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n.single-form .input-label:hover {\r\n    cursor: text;\r\n  }\r\n.single-form .input-label .label-text {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0px;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.single-form .form-control:focus + .input-label .label-text {\r\n    font-size: 11px;\r\n    color: #f7ac54;\r\n    -webkit-transform: translate3d(0, -26px, 0);\r\n    transform: translate3d(0, -26px, 0);\r\n  }\r\n.single-form .form-control:focus + .input-label::after {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n.single-form .input-filled .input-label .label-text {\r\n    font-size: 11px;\r\n    color: #f7ac54;\r\n    -webkit-transform: translate3d(0, -26px, 0);\r\n    transform: translate3d(0, -26px, 0);\r\n  }\r\n.single-form .input-filled .input-label::after {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n.single-form textarea {\r\n    height: 100px !important;\r\n  }\r\n@media (max-width: 767px) {\r\n    h1,\r\n    h2 {\r\n      font-size: 45px;\r\n      line-height: 65px;\r\n      font-weight: 300;\r\n    }\r\n    /**\r\n       * ===============================\r\n       *  Defult CSS\r\n       * ===============================\r\n       */\r\n    html *,\r\n    body,\r\n    p {\r\n      text-align: center;\r\n    }\r\n    .section-header.text-left,\r\n    .section-header.text-right,\r\n    .section-header.text-left *,\r\n    .section-header.text-right * {\r\n      text-align: center;\r\n    }\r\n    /**\r\n       * ================================\r\n       * Nav Defult Style\r\n       * ================================\r\n       */\r\n    .nav {\r\n      display: inline-block;\r\n    }\r\n    /**\r\n       * ===============================\r\n       *   Defult Button Style\r\n       * ===============================\r\n       */\r\n  }\r\n/* *\r\n   * ========================================\r\n   * Testimonials Section Style\r\n   * ========================================\r\n   */\r\n.testimonial-section .testimonial-wrapper {\r\n    margin-top: 55px;\r\n  }\r\n.testimonial-section .testimonial-wrapper .owl-wrapper-outer {\r\n    -o-box-shadow: 2px 4.33px 25px 0px rgba(0, 0, 0, 0.25) ;\r\n    -ms-box-shadow: 2px 4.33px 25px 0px rgba(0, 0, 0, 0.25) ;\r\n    box-shadow: 2px 4.33px 25px 0px rgba(0, 0, 0, 0.25) ;\r\n  }\r\n.testimonial-section .testimonial-wrapper .owl-wrapper-outer .owl-wrapper {\r\n    background-color:rgb(39, 48, 64);\r\n  }\r\n.testimonial-section .testimonial-wrapper .owl-item {\r\n    background-color: rgb(39, 48, 64);\r\n  }\r\n.testimonial-section .testimonial-wrapper .item {\r\n    padding: 0 80px;\r\n  }\r\n.testimonial-section .testimonial-wrapper .item .image-outer img {\r\n    width: 80px;\r\n    height: auto;\r\n  }\r\n.testimonial-section .testimonial-wrapper .item blockquote {\r\n    border: 0px solid;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 17px;\r\n    font-weight: 400;\r\n    line-height: 35px;\r\n    color: #BBBBBB;\r\n  }\r\n.testimonial-section .testimonial-wrapper .item .profile-outer {\r\n    display: inline-block;\r\n    background-color: rgb(39, 48, 64);\r\n    padding: 0 40px;\r\n  }\r\n.testimonial-section .testimonial-wrapper .item .profile-outer::before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 1px;\r\n    background: rgb(39, 48, 64);\r\n    left: 110px;\r\n    right: 110px;\r\n    margin-top: 13px;\r\n    z-index: -1;\r\n  }\r\n.testimonial-section .testimonial-wrapper .item .profile-outer span {\r\n    display: block;\r\n    line-height: 35px;\r\n  }\r\n.testimonial-section .testimonial-wrapper .item .profile-outer .name {\r\n    color:rgb(39, 208, 215);\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n  }\r\n.testimonial-section .testimonial-wrapper .item .profile-outer .position {\r\n    font-size: 13px;\r\n    color: #ffffff;\r\n  }\r\n/**\r\n   * ========================================\r\n   * Team Section Style\r\n   * ========================================\r\n   */\r\n.team-member .each-item .item-inner::after,\r\n  .team-member .each-item .item-inner::before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #f7ac54;\r\n    transition-delay: 0s ;\r\n    transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.team-member .each-item .item-inner::before {\r\n    width: 75px;\r\n    height: 1px;\r\n    -webkit-transform: translate3d( -110%, 0px, 0px );\r\n    transform: translate3d( -110%, 0px, 0px );\r\n  }\r\n.team-member .each-item .item-inner::after {\r\n    width: 1px;\r\n    height: 75px;\r\n    -webkit-transform: translate3d( 0px, -110%, 0px );\r\n    transform: translate3d( 0px, -110%, 0px );\r\n  }\r\n.team-member .each-item,\r\n  .team-member .each-item .profile-outer,\r\n  .team-member .each-item .profile-image,\r\n  .team-member .each-item .profile-image img,\r\n  .team-member .each-item .profile-content {\r\n    transition: all 500ms ease-out;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.team-member .each-item .profile-image img {\r\n    border-radius: 50%;\r\n    margin: auto;\r\n    width: 121px;\r\n    height: auto;\r\n  }\r\n.team-member .each-item .profile-content {\r\n    margin-top: 22px;\r\n    top: 0px;\r\n  }\r\n.team-member .each-item .profile-content span {\r\n    display: block;\r\n    line-height: 25px;\r\n  }\r\n.team-member .each-item .profile-content .name {\r\n    color: #f7ac54;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n  }\r\n.team-member .each-item .profile-content .position {\r\n    font-size: 13px;\r\n    color: #ffffff;\r\n  }\r\n.team-member .each-item .content-detail {\r\n    width: -o-calc( 100% - 65px );\r\n    width: calc( 100% - 65px );\r\n    width: expression( 100% - 65px );\r\n    text-align: left;\r\n    float: right;\r\n    padding: 10px 20px 0px 20px;\r\n    -webkit-transform: translate3d(0, 50px, 0);\r\n    transform: translate3d(0, 50px, 0);\r\n    filter: alpha(opacity=0 ) ;\r\n    opacity: 0 ;\r\n    transition-delay: 0s ;\r\n    transition: all 400ms cubic-bezier(0.42, 0, 1, 1);\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n  }\r\n.team-member .each-item .content-detail p {\r\n    font-size: 13px;\r\n    line-height: 25px;\r\n    font-weight: 400;\r\n    color: white\r\n  }\r\n.team-member .each-item:hover {\r\n    transition-delay: 0.2s ;\r\n  }\r\n.team-member .each-item:hover .item-inner::after,\r\n  .team-member .each-item:hover .item-inner::before {\r\n    transition-delay: 0s ;\r\n    -webkit-transform: translate3d( 0px, 0, 0px );\r\n    transform: translate3d( 0px, 0, 0px );\r\n  }\r\n.team-member .each-item:hover .profile-image img {\r\n    width: 50px;\r\n  }\r\n.team-member .each-item:hover .profile-content {\r\n    -webkit-transform: translate3d(0, 15px, 0) rotate(90deg);\r\n    transform: translate3d(0, 15px, 0) rotate(90deg);\r\n    position: relative;\r\n    text-align: left;\r\n    margin: 0;\r\n    top: 40px;\r\n  }\r\n.team-member .each-item:hover .profile-content span {\r\n    -text-overflowtext-overflow: ellipsis;\r\n    white-space: nowrap;\r\n  }\r\n.team-member .each-item:hover .profile-outer {\r\n    left: -42px;\r\n    top: 0;\r\n    -webkit-transform: translate3d(15px, 15px, 0);\r\n    transform: translate3d(15px, 15px, 0);\r\n  }\r\n.team-member .each-item:hover .content-detail {\r\n    transition-delay: 0.5s ;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    filter: alpha(opacity=100 ) ;\r\n    opacity: 1 ;\r\n  }\r\n.team-member .each-item {\r\n    padding-bottom: 50px;\r\n    padding-top: 20px;\r\n    transition: all 400s ease-out;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -o-perspective: 1000;\r\n    -ms-perspective: 1000;\r\n    -webkit-perspective: 1000;\r\n    perspective: 1000;\r\n    height: 330px;\r\n  }\r\n@media (min-width: 0px) {\r\n    .team-member .each-item {\r\n      padding-left: 30px;\r\n      padding-right: 30px;\r\n    }\r\n    .team-member .each-item:after,\r\n    .team-member .each-item:before {\r\n      content: \"\";\r\n      position: absolute;\r\n    }\r\n    .team-member .each-item:after {\r\n      bottom: 0;\r\n      left: 0;\r\n      border-bottom: 1px solid rgba(255, 255, 255, 0.05);\r\n      width: 100%;\r\n    }\r\n    .team-member .each-item:before {\r\n      left: 0;\r\n      top: 0;\r\n      border-left: 1px solid rgba(255, 255, 255, 0.05);\r\n      height: 100%;\r\n    }\r\n    .team-member .each-item:last-child:after {\r\n      border-color: transparent;\r\n    }\r\n  }\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n    .team-member .each-item:nth-child(n + 3) {\r\n      padding-top: 50px;\r\n    }\r\n    .team-member .each-item:nth-child(2n - 1):before {\r\n      border-color: transparent;\r\n    }\r\n    .team-member .each-item:nth-last-child(-n + 2) {\r\n      padding-bottom: 0;\r\n    }\r\n    .team-member .each-item:nth-last-child(-n + 2):after {\r\n      border-color: transparent;\r\n    }\r\n  }\r\n@media (min-width: 992px) {\r\n    .team-member .each-item:nth-child(n + 5) {\r\n      padding-top: 50px;\r\n    }\r\n    .team-member .each-item:nth-child(4n + 1):before {\r\n      border-color: transparent;\r\n    }\r\n    .team-member .each-item:nth-last-child(-n + 4) {\r\n      padding-bottom: 0;\r\n    }\r\n    .team-member .each-item:nth-last-child(-n + 4):after {\r\n      border-color: transparent;\r\n    }\r\n  }\r\n/**\r\n   * ================\r\n   * Defult Style\r\n   * ================\r\n   */\r\n.overflow {\r\n    overflow: hidden;\r\n  }\r\n.absolute {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.relative {\r\n    position: relative;\r\n  }\r\n.display-full {\r\n    height: 100%;\r\n  }\r\n.center {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate3d( -50%, -50%, 0);\r\n    transform: translate3d( -50%, -50%, 0);\r\n  }\r\n.vertical-middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    float: none;\r\n  }\r\n.each-portfolio-heading.center {\r\n    width: 100%;\r\n  }\r\n.row.absolute {\r\n    position: absolute;\r\n    left: 15px;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n/*  \r\n  *************\r\n  *************\r\n  Responsive\r\n  *************\r\n  *************\r\n  *************\r\n  */\r\n@media (max-width: 1400px) and (min-width: 991px) {\r\n    /**\r\n       * ========================================\r\n       * Portfolio Section Single Image Style\r\n       * ========================================\r\n       */\r\n    .image img {\r\n      width: 700px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Slider Area Style\r\n       * ========================================\r\n       */\r\n    .slider {\r\n      padding: 0 100px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Portfolio Project Detail Content Style\r\n       * ========================================\r\n       */\r\n    .link-list {\r\n      right: 78px;\r\n    }\r\n  }\r\n@media (max-width: 991px) {\r\n    /**\r\n       * =======================\r\n       * Top Navigation\r\n       * =======================\r\n       */\r\n    .main-navbar-top .navbar-header {\r\n      float: left;\r\n    }\r\n    .main-navbar-top .navbar-collapse-right {\r\n      float: right;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Portfolio Section Single Image Style\r\n       * ========================================\r\n       */\r\n    .image img {\r\n      width: 100%;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Portfolio Project Detail Content Style\r\n       * ========================================\r\n       */\r\n    .project-detail .project-detail-image-outer {\r\n      text-align: center;\r\n    }\r\n    .link-list .link .inner {\r\n      text-align: right;\r\n    }\r\n    .link-list .line {\r\n      left: 0px;\r\n      float: right;\r\n    }\r\n    .vertical-middle {\r\n      display: block;\r\n      -vertical-align: middle;\r\n      float: none;\r\n    }\r\n  }\r\n@media (max-width: 767px) {\r\n    .section-heading {\r\n      font-size: 35px;\r\n      line-height: 45px;\r\n    }\r\n    .section-heading-outer.p-l-50,\r\n    .section-heading-outer.p-r-50 {\r\n      padding: 0px;\r\n    }\r\n    /**\r\n       * =======================\r\n       * Top Navigation\r\n       * =======================\r\n       */\r\n    .main-navbar-top .nav-trigger {\r\n      left: auto;\r\n      right: 15px;\r\n      -webkit-transform: translate3d(0, 0px, 0);\r\n      transform: translate3d(0, 0px, 0);\r\n    }\r\n    .main-navbar-top .navbar-header {\r\n      float: left;\r\n    }\r\n    .main-navbar-top .navbar-collapse {\r\n      width: 100%;\r\n      left: calc(50% + 15px);\r\n    }\r\n    .main-navbar-top .navbar-collapse .navbar-nav {\r\n      padding: 0 25px 10px 25px;\r\n    }\r\n    .main-navbar-top .navbar-collapse .navbar-nav li {\r\n      float: left;\r\n    }\r\n    .main-navbar-top .navbar-collapse .navbar-nav li .btn-nav {\r\n      line-height: 30px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Home Section Style\r\n       * ========================================\r\n       */\r\n    .home-section .heading-outer .p-t-40,\r\n    .home-section .heading-outer .p-l-40,\r\n    .home-section .heading-outer .p-r-40,\r\n    .home-section .heading-outer .p-b-40 {\r\n      padding: 15px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Services Section Style\r\n       * ========================================\r\n       */\r\n    .services-section .each-services .each-services-inner {\r\n      max-width: 410px;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      margin-bottom: 30px;\r\n    }\r\n    .services-section .each-services:last-child .each-features-inner {\r\n      margin-bottom: 0px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Services Detail View Style\r\n       * ========================================\r\n       */\r\n    .services-full-view .services-details .back-button-outer {\r\n      position: relative;\r\n      bottom: 0px;\r\n      left: 0;\r\n      display: inline-block;\r\n      margin-top: 20px;\r\n      margin-bottom: 20px;\r\n    }\r\n    .services-full-view .services-details .line-outer {\r\n      position: relative;\r\n      left: 50%;\r\n    }\r\n    .services-full-view .services-details .line {\r\n      margin-bottom: 6px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Portfolio Project Detail Content Style\r\n       * ========================================\r\n       */\r\n    .project-detail .project-detail-inner {\r\n      display: block;\r\n      /* Safari 6.1+ */\r\n      /* IE 10 */\r\n      flex: initial;\r\n      text-align: left;\r\n    }\r\n    .project-detail .project-detail-content {\r\n      padding: 15px 15px 30px 15px;\r\n    }\r\n    .project-detail .list {\r\n      text-align: center;\r\n    }\r\n    .project-detail .list li {\r\n      padding-right: 7px;\r\n      margin-right: 7px;\r\n      display: inline;\r\n    }\r\n    .heading-text {\r\n      position: relative;\r\n      width: 100%;\r\n    }\r\n    .heading-text .text {\r\n      font-size: 45px;\r\n      line-height: 60px;\r\n      font-weight: 400;\r\n    }\r\n    .heading-text .line {\r\n      left: 50%;\r\n    }\r\n    .link-list {\r\n      position: relative;\r\n      width: 100%;\r\n      right: 0;\r\n      margin-top: 10px;\r\n    }\r\n    .link-list .link .inner {\r\n      text-align: center;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Slider Area Style\r\n       * ========================================\r\n       */\r\n    .slider .owl-pagination {\r\n      float: none;\r\n    }\r\n    .slider .btn-outer {\r\n      float: none;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Testimonials Section Style\r\n       * ========================================\r\n       */\r\n    .testimonial-section .testimonial-wrapper .item {\r\n      padding: 0 20px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Team Section Style\r\n       * ========================================\r\n       */\r\n    .team-member .each-item .item-inner {\r\n      max-width: 410px;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n    }\r\n    .team-member:last-child .item-inner {\r\n      margin-bottom: 0px;\r\n    }\r\n    /**\r\n       * ========================================\r\n       * Contact Section Style\r\n       * ========================================\r\n       */\r\n    .contact-footer .each-section .each-section-inner {\r\n      max-width: 410px;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      margin-bottom: 20px;\r\n    }\r\n    .contact-footer .each-section:last-child .each-section-inner {\r\n      margin-bottom: 0px;\r\n    }\r\n  }\r\n.row-centered {\r\n    text-align:center;\r\n}\r\n.col-centered {\r\n    display:inline-block;\r\n    float:none;\r\n    /* reset the text-align */\r\n    text-align:left;\r\n    /* inline-block space fix */\r\n    margin-right:-4px;\r\n    text-align: center;\r\n    background-color: #ccc;\r\n    border: 1px solid #ddd;\r\n}"

/***/ }),

/***/ "./src/app/component/team-page/team-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/team-page/team-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <!--Start: 5th Section\r\n            - OUR TEAM PAGE\r\n        ====================================-->\r\n              <!-- Start: Page Slider Area\r\n        ================================== -->\r\n        <section class=\"content-area\">\r\n          <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n\r\n      <div class=\"section section-item combine-section hide-overlay overflow dark-background\" style=\"width:100%;\" id=\"team-section \">\r\n          <div class=\"inner-container team-member dark-background\">\r\n              <div class=\"container\">\r\n                  <div class=\"row section-separator sp-bottom\">\r\n\r\n                      <!-- Start: Section Heading -->\r\n                      <div class=\"section-header col-sm-10 col-sm-offset-1\">\r\n                          <div class=\"overflow\">\r\n                              <div class=\"line-outer\">\r\n                                  <div class=\"line wow\"></div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"overflow\">\r\n                              <div class=\"section-heading-outer m-b-15\">\r\n                                  <p class=\"sub-heading wow\">OUR TEAM</p>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"overflow\">\r\n                              <div class=\"section-heading-outer p-l-50 p-r-50\">\r\n                                  <h2 class=\"section-heading wow\">Our Amazing Team</h2>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <!-- End: Section Heading -->\r\n\r\n                      <div class=\"clearfix\"></div>\r\n\r\n                      <div class=\"col-sm-12 grid-item m-t-30\">\r\n                            <div class=\"row\">\r\n                                        <div class=\"col-md-4 col-sm-6 col-xs-12 each-item overflow text-center relative wow\"\r\n                                            *ngFor=\"let member of this.team_members_top\"\r\n                                            style=\"width: -webkit-fill-available;\">\r\n                                            <div class=\"item-inner overflow absolute\">\r\n                                                <div class=\"profile-outer center\">\r\n                                                    <div class=\"profile-image\">\r\n                                                        <img src=\"../../../assets/Team_page/images/team-members/{{ member.pic_name }}\" alt=\"Team Member\" class=\"\">\r\n                                                    </div>\r\n                                                <div class=\"profile-content\">\r\n                                                    <span class=\"name\">{{ member.name }}</span>\r\n                                                    <span class=\"position\">{{ member.position }}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"content-detail\">\r\n                                                <p>{{ member.details }}</p>\r\n                                            </div>\r\n        \r\n                                        </div>\r\n                                    </div>\r\n                            </div> \r\n                            <br><br>                              \r\n                        <div class=\"row\">\r\n                                <div class=\"col-md-3 col-sm-6 col-xs-12 each-item overflow text-center relative wow\"\r\n                                    *ngFor=\"let member of this.team_members_rest\"\r\n                                    style=\"width: -webkit-fill-available;\">\r\n                                    <div class=\"item-inner overflow absolute\">\r\n                                        <div class=\"profile-outer center\">\r\n                                            <div class=\"profile-image\">\r\n                                                <img src=\"../../../assets/Team_page/images/team-members/{{ member.pic_name }}\" alt=\"Team Member\" class=\"\">\r\n                                            </div>\r\n                                        <div class=\"profile-content\">\r\n                                            <span class=\"name\">{{ member.name }}</span>\r\n                                            <span class=\"position\">{{ member.position }}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"content-detail\">\r\n                                        <p>{{ member.details }}</p>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                      </div> <!-- End: .col-xs-12 -->\r\n\r\n                  </div> <!-- End: .row -->\r\n              </div> <!-- End: .container -->\r\n          </div> <!-- End: .inner-container -->\r\n\r\n      </div>\r\n\r\n\r\n\r\n      </div>\r\n      </div>\r\n      </section>\r\n      <!--End: 5th Section\r\n          - OUR TEAM PAGE\r\n      ====================================-->\r\n"

/***/ }),

/***/ "./src/app/component/team-page/team-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/team-page/team-page.component.ts ***!
  \************************************************************/
/*! exports provided: TeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageComponent", function() { return TeamPageComponent; });
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

var TeamPageComponent = /** @class */ (function () {
    function TeamPageComponent() {
        this.team_members_top = [
            {
                name: 'Anoosh Kotak',
                pic_name: 'Anoosh_Kotak.png',
                position: 'CEO & Co-Founder',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Apurv kaushal',
                pic_name: 'Apurv_Kaushal.jpg',
                position: 'CPO & Co-Founder',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Anuj Chopra',
                pic_name: 'Anuj_Chopra.jpg',
                position: 'COO',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            }
        ];
        this.team_members_rest = [
            {
                name: 'Ashutosh Gamad',
                pic_name: 'Ashutosh_Gamad.jpg',
                position: 'Experience Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Apoorva Mishra',
                pic_name: 'Apoorva_Mishra.jpg',
                position: 'Psychology Expert',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Divyarth Saxena',
                pic_name: 'Divyarth_Saxena.png',
                position: 'Experience Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Vani Batra',
                pic_name: 'Vani_Batra.JPG',
                position: 'Public Relations Executive',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Manjistha Datta',
                pic_name: 'Manjistha_Datta.jpg',
                position: 'Psychology Expert',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Nidhi Jhala',
                pic_name: 'Nidhi_Jhala.JPG',
                position: 'Product Design Expert',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Harshita Arora',
                pic_name: 'Harshita_Arora.jpg',
                position: 'Graphic Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Nishank Goyal',
                pic_name: 'Nishank_Goyal.jpg',
                position: 'Experience Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Ritvik Sharma',
                pic_name: 'Ritvik_Sharma.png',
                position: 'Graphic Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Siddhant Goel',
                pic_name: 'Siddhant_Goel.jpg',
                position: 'Graphic Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Siddharth Choubay',
                pic_name: 'Siddharth_Choubay.jpg',
                position: 'Business Executive',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Rajeshwari Kamble',
                pic_name: 'Rajeshwari_Kamble.jpeg',
                position: 'Experience Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Sumir Kumar',
                pic_name: 'Sumir_Kumar.jpeg',
                position: 'Business Executive',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Tarandeep Singh',
                pic_name: 'Tarandeep_Singh.jpg',
                position: 'Experience Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Tarun Rastogi',
                pic_name: 'Tarun_Rastogi.jpg',
                position: 'Film Making Expert',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Yash Bhatnagar',
                pic_name: 'Yash_Bathnagar.png',
                position: 'Experience Designer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
            {
                name: 'Mayank Jha',
                pic_name: 'mayankjha.jpg',
                position: 'Web Developer',
                details: 'This is the tribune to tailava, I love my PC, bla bla bla, thats it'
            },
        ];
    }
    TeamPageComponent.prototype.ngOnInit = function () {
        //console.log(this.team_members)
    };
    TeamPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-page',
            template: __webpack_require__(/*! ./team-page.component.html */ "./src/app/component/team-page/team-page.component.html"),
            styles: [__webpack_require__(/*! ./team-page.component.css */ "./src/app/component/team-page/team-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamPageComponent);
    return TeamPageComponent;
}());



/***/ }),

/***/ "./src/assets/card_page/js/jquery.flip.min.js":
/*!****************************************************!*\
  !*** ./src/assets/card_page/js/jquery.flip.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! flip - v1.1.2 - 2016-10-20
* https://github.com/nnattawat/flip
* Copyright (c) 2016 Nattawat Nonsung; Licensed MIT */

!function(a){var b=function(){var a,b=document.createElement("fakeelement"),c={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(void 0!==b.style[a])return c[a]},c=function(b,c,d){this.setting={axis:"y",reverse:!1,trigger:"click",speed:500,forceHeight:!1,forceWidth:!1,autoSize:!0,front:".front",back:".back"},this.setting=a.extend(this.setting,c),"string"!=typeof c.axis||"x"!==c.axis.toLowerCase()&&"y"!==c.axis.toLowerCase()||(this.setting.axis=c.axis.toLowerCase()),"boolean"==typeof c.reverse&&(this.setting.reverse=c.reverse),"string"==typeof c.trigger&&(this.setting.trigger=c.trigger.toLowerCase());var e=parseInt(c.speed);isNaN(e)||(this.setting.speed=e),"boolean"==typeof c.forceHeight&&(this.setting.forceHeight=c.forceHeight),"boolean"==typeof c.forceWidth&&(this.setting.forceWidth=c.forceWidth),"boolean"==typeof c.autoSize&&(this.setting.autoSize=c.autoSize),("string"==typeof c.front||c.front instanceof a)&&(this.setting.front=c.front),("string"==typeof c.back||c.back instanceof a)&&(this.setting.back=c.back),this.element=b,this.frontElement=this.getFrontElement(),this.backElement=this.getBackElement(),this.isFlipped=!1,this.init(d)};a.extend(c.prototype,{flipDone:function(a){var c=this;c.element.one(b(),function(){c.element.trigger("flip:done"),"function"==typeof a&&a.call(c.element)})},flip:function(a){if(!this.isFlipped){this.isFlipped=!0;var b="rotate"+this.setting.axis;this.frontElement.css({transform:b+(this.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}),this.backElement.css({transform:b+"(0deg)","z-index":"1"}),this.flipDone(a)}},unflip:function(a){if(this.isFlipped){this.isFlipped=!1;var b="rotate"+this.setting.axis;this.frontElement.css({transform:b+"(0deg)","z-index":"1"}),this.backElement.css({transform:b+(this.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),this.flipDone(a)}},getFrontElement:function(){return this.setting.front instanceof a?this.setting.front:this.element.find(this.setting.front)},getBackElement:function(){return this.setting.back instanceof a?this.setting.back:this.element.find(this.setting.back)},init:function(a){var b=this,c=b.frontElement.add(b.backElement),d="rotate"+b.setting.axis,e=2*b.element["outer"+("rotatex"===d?"Height":"Width")](),f={perspective:e,position:"relative"},g={transform:d+"("+(b.setting.reverse?"180deg":"-180deg")+")","z-index":"0",position:"relative"},h={"backface-visibility":"hidden","transform-style":"preserve-3d",position:"absolute","z-index":"1"};b.setting.forceHeight?c.outerHeight(b.element.height()):b.setting.autoSize&&(h.height="100%"),b.setting.forceWidth?c.outerWidth(b.element.width()):b.setting.autoSize&&(h.width="100%"),(window.chrome||window.Intl&&Intl.v8BreakIterator)&&"CSS"in window&&(f["-webkit-transform-style"]="preserve-3d"),c.css(h).find("*").css({"backface-visibility":"hidden"}),b.element.css(f),b.backElement.css(g),setTimeout(function(){var d=b.setting.speed/1e3||.5;c.css({transition:"all "+d+"s ease-out"}),"function"==typeof a&&a.call(b.element)},20),b.attachEvents()},clickHandler:function(b){b||(b=window.event),this.element.find(a(b.target).closest('button, a, input[type="submit"]')).length||(this.isFlipped?this.unflip():this.flip())},hoverHandler:function(){var b=this;b.element.off("mouseleave.flip"),b.flip(),setTimeout(function(){b.element.on("mouseleave.flip",a.proxy(b.unflip,b)),b.element.is(":hover")||b.unflip()},b.setting.speed+150)},attachEvents:function(){var b=this;"click"===b.setting.trigger?b.element.on(a.fn.tap?"tap.flip":"click.flip",a.proxy(b.clickHandler,b)):"hover"===b.setting.trigger&&(b.element.on("mouseenter.flip",a.proxy(b.hoverHandler,b)),b.element.on("mouseleave.flip",a.proxy(b.unflip,b)))},flipChanged:function(a){this.element.trigger("flip:change"),"function"==typeof a&&a.call(this.element)},changeSettings:function(a,b){var c=this,d=!1;if(void 0!==a.axis&&c.setting.axis!==a.axis.toLowerCase()&&(c.setting.axis=a.axis.toLowerCase(),d=!0),void 0!==a.reverse&&c.setting.reverse!==a.reverse&&(c.setting.reverse=a.reverse,d=!0),d){var e=c.frontElement.add(c.backElement),f=e.css(["transition-property","transition-timing-function","transition-duration","transition-delay"]);e.css({transition:"none"});var g="rotate"+c.setting.axis;c.isFlipped?c.frontElement.css({transform:g+(c.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}):c.backElement.css({transform:g+(c.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),setTimeout(function(){e.css(f),c.flipChanged(b)},0)}else c.flipChanged(b)}}),a.fn.flip=function(b,d){return"function"==typeof b&&(d=b),"string"==typeof b||"boolean"==typeof b?this.each(function(){var c=a(this).data("flip-model");"toggle"===b&&(b=!c.isFlipped),b?c.flip(d):c.unflip(d)}):this.each(function(){if(a(this).data("flip-model")){var e=a(this).data("flip-model");!b||void 0===b.axis&&void 0===b.reverse||e.changeSettings(b,d)}else a(this).data("flip-model",new c(a(this),b||{},d))}),this}}(jQuery);
//# sourceMappingURL=jquery.flip.min.js.map

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

module.exports = __webpack_require__(/*! C:\Users\Neha\Desktop\MayankProject\freelance\Alo_Web\Angular\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map