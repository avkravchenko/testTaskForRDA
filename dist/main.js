/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const firstFormInputs = document.querySelectorAll('input[type=\"radio\"]')\nconst firstFormContainers = document.querySelectorAll('.quiz-side__body__form-blocks__block__answers__answer');\nconst forwardBtn = document.querySelector('.quiz-side__body__button-container__button-forward');\n\nfirstFormInputs.forEach((elem, index) => {\n    elem.addEventListener(\"change\", function() {\n       firstFormContainers.forEach((container) => {\n          container.classList.remove('quiz-side__body__form-blocks__block__answers__answer--checked');\n       });\n       \n       if (elem.checked) {\n          firstFormContainers[index].classList.add('quiz-side__body__form-blocks__block__answers__answer--checked');\n          forwardBtn.classList.add('quiz-side__body__button-container__button-forward--active')\n       }\n    })\n })\n\n//# sourceURL=webpack://testtaskforrda/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;