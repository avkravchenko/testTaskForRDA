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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropDown\": () => (/* binding */ dropDown),\n/* harmony export */   \"innerCityContent\": () => (/* binding */ innerCityContent)\n/* harmony export */ });\nconst select = document.querySelectorAll('.select');\nconst optionsBlock = document.querySelectorAll('.options');\n\nfunction dropDown() {\n    select.forEach(item => {\n        item.addEventListener('click', () => {\n            optionsBlock.forEach(optionsBlock => {\n                optionsBlock.style.visibility = \"visible\";\n            })\n        })\n    })\n}\n\nfunction innerCityContent(htmlCollection, output) {\n    let currentChecked = htmlCollection[0];\n\n    htmlCollection.forEach((elem) => {\n        \n        elem.addEventListener('change', () => {\n            if (elem.checked) {\n                if (elem !== currentChecked) {\n                    currentChecked.checked = false;\n                    currentChecked = elem;\n                }\n                output.textContent = `${elem.value}`;\n            } else {\n                currentChecked = htmlCollection[0];\n                output.textContent = `${htmlCollection[0].value}`;\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://testtaskforrda/./src/dropDown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forwardBtn\": () => (/* binding */ forwardBtn)\n/* harmony export */ });\n/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDown */ \"./src/dropDown.js\");\n/* harmony import */ var _movingSlideForwardOnInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movingSlideForwardOnInput */ \"./src/movingSlideForwardOnInput.js\");\n\n\n\n\n\n\n\nconst blockAnswers = document.querySelectorAll('.quiz-side__body__form-blocks__block__answers__answer');\nconst forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');\nconst city = document.querySelector('.city');\nconst cities = document.querySelectorAll('[name=\"city\"]');\nconst specialities = document.querySelectorAll('[name=\"speciality\"]');\nconst speciality = document.querySelector('.speciality');\nconst radioInputs = document.querySelectorAll('input[type=\"radio\"]');\nconst checkboxInputs = document.querySelectorAll('input[type=\"checkbox\"]');\n\n\n\n(0,_dropDown__WEBPACK_IMPORTED_MODULE_0__.dropDown)();\n(0,_dropDown__WEBPACK_IMPORTED_MODULE_0__.innerCityContent)(cities, city);\n(0,_movingSlideForwardOnInput__WEBPACK_IMPORTED_MODULE_1__.movingSlideForwardOnRadio)(radioInputs);\n(0,_movingSlideForwardOnInput__WEBPACK_IMPORTED_MODULE_1__.movingSlideForwardOnCheckbox)(checkboxInputs);\n(0,_movingSlideForwardOnInput__WEBPACK_IMPORTED_MODULE_1__.movingSlideBack)();\n(0,_dropDown__WEBPACK_IMPORTED_MODULE_0__.innerCityContent)(specialities, speciality);\n\n\n\n//# sourceURL=webpack://testtaskforrda/./src/index.js?");

/***/ }),

/***/ "./src/movingSlideForwardOnInput.js":
/*!******************************************!*\
  !*** ./src/movingSlideForwardOnInput.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movingSlideBack\": () => (/* binding */ movingSlideBack),\n/* harmony export */   \"movingSlideForwardOnCheckbox\": () => (/* binding */ movingSlideForwardOnCheckbox),\n/* harmony export */   \"movingSlideForwardOnRadio\": () => (/* binding */ movingSlideForwardOnRadio)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps */ \"./src/steps.js\");\n\n\n\n\nconst blocks = document.querySelectorAll('.quiz-side__body__form-blocks__block');\nlet currentBlock = 0;\nconst blocksLength = blocks.length - 1;\nconst backBtn = document.querySelector('.quiz-side__body__button-container__button-back');\nconst buttonsContainer = document.querySelector('.quiz-side__body__button-container');\n\nfunction further() {\n    if (currentBlock < blocks.length - 1) {\n        blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');\n        currentBlock += 1;\n        blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');\n    }\n\n    if (currentBlock >= 1) {\n        backBtn.classList.add('quiz-side__body__button-container__button-back--active');\n    } \n\n    if (blocksLength == currentBlock) {\n        buttonsContainer.style.display = 'none';\n    }\n\n    ___WEBPACK_IMPORTED_MODULE_0__.forwardBtn.removeEventListener('click', further)\n    ___WEBPACK_IMPORTED_MODULE_0__.forwardBtn.classList.remove('quiz-side__body__button-container__button-forward--active');\n\n    (0,_steps__WEBPACK_IMPORTED_MODULE_1__.stepsLogic)(currentBlock, blocksLength)\n}\n\nfunction movingSlideForwardOnRadio(htmlCollection) {\n    htmlCollection.forEach(item => {\n        item.addEventListener('click', () => {\n\n            if (currentBlock < blocks.length - 1) {\n                blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');\n                currentBlock += 1;\n                blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');\n            }\n    \n            if (currentBlock >= 1) {\n                backBtn.classList.add('quiz-side__body__button-container__button-back--active');\n            } \n    \n            if (blocksLength == currentBlock) {\n                buttonsContainer.style.display = 'none';\n            }\n    \n            (0,_steps__WEBPACK_IMPORTED_MODULE_1__.stepsLogic)(currentBlock, blocksLength)\n        })\n    })\n}\n\nfunction movingSlideForwardOnCheckbox(htmlCollection) {\n    htmlCollection.forEach(item => {\n        item.addEventListener('click', (e) => {\n            const itemIsClicked = e.target;\n            console.log(itemIsClicked)\n            \n\n            if (itemIsClicked) {\n                ___WEBPACK_IMPORTED_MODULE_0__.forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active');\n                ___WEBPACK_IMPORTED_MODULE_0__.forwardBtn.addEventListener('click', further)\n            }\n        }) \n    })\n}\n\nfunction movingSlideBack() {\n    backBtn.addEventListener('click', () => {\n        if (currentBlock > 0) {\n            blocks[currentBlock].classList.remove('quiz-side__body__form-blocks__block--active');\n            currentBlock -= 1;\n            blocks[currentBlock].classList.add('quiz-side__body__form-blocks__block--active');\n            ___WEBPACK_IMPORTED_MODULE_0__.forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active');\n            ___WEBPACK_IMPORTED_MODULE_0__.forwardBtn.addEventListener('click', further)\n        }\n        if (currentBlock < 1) {\n            backBtn.classList.remove('quiz-side__body__button-container__button-back--active');\n        }\n\n        (0,_steps__WEBPACK_IMPORTED_MODULE_1__.stepsLogic)(currentBlock, blocksLength)\n    })\n}\n\n//# sourceURL=webpack://testtaskforrda/./src/movingSlideForwardOnInput.js?");

/***/ }),

/***/ "./src/steps.js":
/*!**********************!*\
  !*** ./src/steps.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stepsLogic\": () => (/* binding */ stepsLogic)\n/* harmony export */ });\nconst step = document.querySelectorAll('.quiz-side__body__form-blocks__block__step')\n\nfunction stepsLogic(currentBlock, blocksLength) {\n    step.forEach(step => {\n        step.textContent = `Шаг ${currentBlock + 1}/${blocksLength + 1}`\n    })\n}\n\n\n//# sourceURL=webpack://testtaskforrda/./src/steps.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;