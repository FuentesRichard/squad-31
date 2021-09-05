"use strict";
(() => {
var exports = {};
exports.id = "pages/Cadastro";
exports.ids = ["pages/Cadastro"];
exports.modules = {

/***/ "./pages/Cadastro.js":
/*!***************************!*\
  !*** ./pages/Cadastro.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\DG\\Dev\\Projetos\\Hackaton-Squad-31\\PoC\\Frontend\\pages\\Cadastro.js";



const FormCadastro = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().form)`
   display: flex;
   flex-direction: column;
   
   div {
      display: flex;
   }
`;
const FlexContainerInput = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`;
const FlexContainerLabel = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
   display: flex;
   flex-direction: column;
   margin-top: 2px;
`;

function Cadastro() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FormCadastro, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
      for: "email",
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      id: "email",
      type: "email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
      for: "senha",
      children: "Senha"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      id: "senha",
      type: "password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
      for: "nome",
      children: "Nome"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      id: "nome",
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
      for: "sobrenome",
      children: "Sobrenome"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      id: "sobrenome",
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FlexContainerInput, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          name: "genero",
          id: "masculino",
          type: "radio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          name: "genero",
          id: "feminino",
          type: "radio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          name: "genero",
          id: "outro",
          type: "radio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FlexContainerLabel, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          for: "masculino",
          children: "Masculino"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          for: "feminino",
          children: "Feminino"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          for: "outro",
          children: "Outro"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cadastro);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Cadastro.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvQ2FkYXN0cm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxZQUFZLEdBQUdELCtEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFTQSxNQUFNRyxrQkFBa0IsR0FBR0gsOERBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1LLGtCQUFrQixHQUFHTCw4REFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQSxDQUpBOztBQU1BLFNBQVNNLFFBQVQsR0FBb0I7QUFDakIsc0JBQ0csOERBQUMsWUFBRDtBQUFBLDRCQUVHO0FBQU8sU0FBRyxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSCxlQUdHO0FBQU8sUUFBRSxFQUFDLE9BQVY7QUFBa0IsVUFBSSxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISCxlQUtHO0FBQU8sU0FBRyxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSCxlQU1HO0FBQU8sUUFBRSxFQUFDLE9BQVY7QUFBa0IsVUFBSSxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSCxlQVFHO0FBQU8sU0FBRyxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSCxlQVNHO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsVUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSCxlQVdHO0FBQU8sU0FBRyxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSCxlQVlHO0FBQU8sUUFBRSxFQUFDLFdBQVY7QUFBc0IsVUFBSSxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSCxlQWNHO0FBQUEsOEJBQ0csOERBQUMsa0JBQUQ7QUFBQSxnQ0FDRztBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUUsRUFBQyxXQUF4QjtBQUFvQyxjQUFJLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxlQUVHO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsWUFBRSxFQUFDLFVBQXhCO0FBQW1DLGNBQUksRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZILGVBR0c7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixZQUFFLEVBQUMsT0FBeEI7QUFBZ0MsY0FBSSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFPRyw4REFBQyxrQkFBRDtBQUFBLGdDQUNHO0FBQU8sYUFBRyxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZUFFRztBQUFPLGFBQUcsRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZILGVBR0c7QUFBTyxhQUFHLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQWdDRjs7QUFFRCxpRUFBZUEsUUFBZjs7Ozs7Ozs7OztBQzNEQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IYWNrYXRvbl90ZXN0Ly4vcGFnZXMvQ2FkYXN0cm8uanMiLCJ3ZWJwYWNrOi8vSGFja2F0b25fdGVzdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vSGFja2F0b25fdGVzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL0hhY2thdG9uX3Rlc3QvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEZvcm1DYWRhc3RybyA9IHN0eWxlZC5mb3JtYFxyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBcclxuICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRmxleENvbnRhaW5lcklucHV0ID0gc3R5bGVkLmRpdmBcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbmA7XHJcblxyXG5jb25zdCBGbGV4Q29udGFpbmVyTGFiZWwgPSBzdHlsZWQuZGl2YFxyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBtYXJnaW4tdG9wOiAycHg7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDYWRhc3RybygpIHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1DYWRhc3Rybz5cclxuXHJcbiAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiAvPlxyXG5cclxuICAgICAgICAgPGxhYmVsIGZvcj1cInNlbmhhXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgaWQ9XCJzZW5oYVwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcblxyXG4gICAgICAgICA8bGFiZWwgZm9yPVwibm9tZVwiPk5vbWU8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgdHlwZT1cInRleHRcIiAvPlxyXG5cclxuICAgICAgICAgPGxhYmVsIGZvcj1cInNvYnJlbm9tZVwiPlNvYnJlbm9tZTwvbGFiZWw+XHJcbiAgICAgICAgIDxpbnB1dCBpZD1cInNvYnJlbm9tZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuXHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGbGV4Q29udGFpbmVySW5wdXQ+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZ2VuZXJvXCIgaWQ9XCJtYXNjdWxpbm9cIiB0eXBlPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImdlbmVyb1wiIGlkPVwiZmVtaW5pbm9cIiB0eXBlPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImdlbmVyb1wiIGlkPVwib3V0cm9cIiB0eXBlPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXhDb250YWluZXJJbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGbGV4Q29udGFpbmVyTGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXNjdWxpbm9cIj5NYXNjdWxpbm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmVtaW5pbm9cIj5GZW1pbmlubzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJvdXRyb1wiPk91dHJvPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9GbGV4Q29udGFpbmVyTGFiZWw+XHJcblxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvRm9ybUNhZGFzdHJvPlxyXG4gICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWRhc3RybztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZvcm1DYWRhc3RybyIsImZvcm0iLCJGbGV4Q29udGFpbmVySW5wdXQiLCJkaXYiLCJGbGV4Q29udGFpbmVyTGFiZWwiLCJDYWRhc3RybyJdLCJzb3VyY2VSb290IjoiIn0=