/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropDown.js":
/*!*************************!*\
  !*** ./src/dropDown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropDown\": () => (/* binding */ dropDown),\n/* harmony export */   \"innerCityContent\": () => (/* binding */ innerCityContent)\n/* harmony export */ });\nconst select = document.querySelector('.select');\nconst optionsBlock = document.querySelector('.options');\nconst city = document.querySelector('.city');\nconst cities = document.querySelectorAll('[name=\"city\"]');\n\nfunction dropDown() {\n    select.addEventListener('click', () => {\n        optionsBlock.style.visibility = \"visible\";\n    })\n}\n\nfunction innerCityContent() {\n    let currentChecked = cities[0];\n\n    cities.forEach((elem) => {\n        elem.addEventListener('change', (e) => {\n            if (elem.checked) {\n                if (elem !== currentChecked) {\n                    currentChecked.checked = false;\n                    currentChecked = elem;\n                }\n                city.textContent = `${elem.value}`;\n            } else {\n                currentChecked = cities[0];\n                city.textContent = `${cities[0].value}`;\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://testtaskforrda/./src/dropDown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDown */ \"./src/dropDown.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n\n\nconst firstFormInputs = document.querySelectorAll('input[type=\"radio\"]')\nconst firstFormContainers = document.querySelectorAll('.quiz-side__body__form-blocks__block__answers__answer');\nconst forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');\n\nfirstFormInputs.forEach((elem, index) => {\n   elem.addEventListener(\"change\", function() {\n       firstFormContainers.forEach((container) => {\n          container.classList.remove('quiz-side__body__form-blocks__block__answers__answer--checked');\n       });\n       \n       if (elem.checked) {\n          firstFormContainers[index].classList.add('quiz-side__body__form-blocks__block__answers__answer--checked');\n          forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active');\n          forwardBtn.click();\n         }\n      })\n   })\n\n;(0,_dropDown__WEBPACK_IMPORTED_MODULE_0__.dropDown)();\n(0,_dropDown__WEBPACK_IMPORTED_MODULE_0__.innerCityContent)();\n(0,_slider__WEBPACK_IMPORTED_MODULE_1__.slideForward)();\n(0,_slider__WEBPACK_IMPORTED_MODULE_1__.slideBack)();\n\n//# sourceURL=webpack://testtaskforrda/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slideBack\": () => (/* binding */ slideBack),\n/* harmony export */   \"slideForward\": () => (/* binding */ slideForward)\n/* harmony export */ });\nconst forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');\nconst backBtn = document.querySelector('.quiz-side__body__button-container__button-back');\n\nconst blocks = document.querySelectorAll('.quiz-side__body__form-blocks__block');\n\n\nlet currentBlock = 0;\n\nfunction slideForward() {\n    forwardBtn.addEventListener('click', () => {\n        if (currentBlock < blocks.length - 1) {\n            blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');\n            currentBlock += 1;\n            blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');\n\n            console.log(currentBlock)\n        }\n\n        if (currentBlock >= 1) {\n            backBtn.classList.add('quiz-side__body__button-container__button-back--active');\n        } \n    })\n}\n\nfunction slideBack() {\n    backBtn.addEventListener('click', () => {\n        if (currentBlock > 0) {\n            blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');\n            currentBlock -= 1;\n            blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');\n        }\n        if (currentBlock < 1) {\n            backBtn.classList.remove('quiz-side__body__button-container__button-back--active');\n        }\n    })\n}\n\n\n//# sourceURL=webpack://testtaskforrda/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;