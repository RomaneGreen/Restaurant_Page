/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initial__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_webpack_png__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_webpack_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__images_webpack_png__);










  Object(__WEBPACK_IMPORTED_MODULE_1__about__["a" /* default */])();
  Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_3__contact__["a" /* default */])();
  
document.getElementById("pAbout").style.backgroundColor = "white";
document.getElementById("pMenu").style.backgroundColor = "white";
document.getElementById("pContact").style.backgroundColor = "white";

   document.getElementById("pAbout").style.display= 'inline-block'; 
  document.getElementById("pMenu").style.display = 'none';
  document.getElementById("pContact").style.display = 'none';
  
  
  document.getElementById("btna").style.marginTop= '40px';
  document.getElementById("pAbout").style.cssFloat= 'left';
  document.getElementById("btna").style.marginTop= '-20px';
  
  
  document.getElementById("btnm").onclick = function() {
  
    document.getElementById("pAbout").style.display = 'none';
    document.getElementById("pContact").style.display = 'none';
    document.getElementById("pMenu").style.display = 'inline-block';
    document.getElementById("btnm").style.marginTop= '40px';
  document.getElementById("pMenu").style.cssFloat= 'left';
  document.getElementById("btnm").style.marginTop= '-20px';
  }
  
  document.getElementById("btna").onclick = function() {
  
    document.getElementById("pAbout").style.display = 'inline-block';
    document.getElementById("pContact").style.display = 'none';
    document.getElementById("pMenu").style.display = 'none';
   
  
  
  }
  
  document.getElementById("btnc").onclick = function() {
  
    document.getElementById("pAbout").style.display = 'none';
    document.getElementById("pContact").style.display = 'inline-block';
    document.getElementById("pMenu").style.display = 'none';
   document.getElementById("btnc").style.marginTop= '40px';
  document.getElementById("pContact").style.cssFloat= 'left';
  document.getElementById("btnc").style.marginTop= '-20px';
  }
  






 


Object(__WEBPACK_IMPORTED_MODULE_0__initial__["a" /* default */])();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/* harmony default export */ __webpack_exports__["a"] = (function () {


    const btna = document.createElement("Button");
    btna.id = 'btna'
  
    const ta = document.createTextNode("About");
    btna.appendChild(ta);
    document.body.appendChild(btna);
  
    let pEla = document.createElement("p");
    let pTexta = document.createTextNode("This is the about tab");
    pEla.id = 'pAbout';
    pEla.appendChild(pTexta);
    document.body.appendChild(pEla);
   


    console.log("about")

});



   


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";




/* harmony default export */ __webpack_exports__["a"] = (function  () {

    const btn = document.createElement("Button");
  const t = document.createTextNode("Menu");
  btn.id = 'btnm';
  btn.appendChild(t);
  document.body.appendChild(btn);

  let pEl = document.createElement("p");
  let pText = document.createTextNode("This is the Menu tab");
  pEl.id = 'pMenu';
  pEl.appendChild(pText);
  document.body.appendChild(pEl);
   

    console.log("menu")
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (function  () {

    const btnc = document.createElement("Button");
  btnc.id = 'btnc'
  const tc = document.createTextNode("Contact");
  btnc.appendChild(tc);
  document.body.appendChild(btnc);

  let pElc = document.createElement("p");
  let pTextc = document.createTextNode("This is the Contact tab");
  pElc.id = 'pContact'
  pElc.appendChild(pTextc);
  document.body.appendChild(pElc);

   

    console.log("contact")
});




/***/ }),
/* 4 */
/***/ (function(module, exports) {









/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "98018946758e65cdcdd609f563bad95d.png";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = (function  ()  {

    document.getElementById("content").innerHTML = "Welcome to Charlie's"

document.body.style.backgroundImage = "url('6d437dabe19c616c3811f0c326eb19cf.jpg')";

document.getElementById("content").style.marginLeft = '38%';
document.getElementById("content").style.color = 'red';
document.getElementById("content").style.fontSize = 'xx-large';


let pTag = document.createElement("p")
let pNode = document.createTextNode("Best Since 1942!!!")
pTag.appendChild(pNode)
let content = document.getElementById("content")
content.appendChild(pTag);


});




/***/ })
/******/ ]);