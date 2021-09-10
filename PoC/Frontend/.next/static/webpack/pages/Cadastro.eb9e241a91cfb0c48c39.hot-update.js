"use strict";
self["webpackHotUpdate_N_E"]("pages/Cadastro",{

/***/ "./pages/SeatMap/SeatMap.jsx":
/*!***********************************!*\
  !*** ./pages/SeatMap/SeatMap.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SeatMap; }
/* harmony export */ });
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_seat_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-seat-picker */ "./node_modules/react-seat-picker/dist/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\DG\\Dev\\Projetos\\Hackaton-Squad-31\\PoC\\Frontend\\pages\\SeatMap\\SeatMap.jsx";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var SeatMap = /*#__PURE__*/function (_Component) {
  (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(SeatMap, _Component);

  var _super = _createSuper(SeatMap);

  function SeatMap() {
    var _this;

    (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SeatMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "state", {
      loading: false
    });

    (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "addSeatCallback", function (_ref, addCb) {
      var row = _ref.row,
          number = _ref.number,
          id = _ref.id;

      _this.setState({
        loading: true
      }, /*#__PURE__*/(0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
        var newTooltip;
        return C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 1500);
                });

              case 2:
                console.log("Added seat ".concat(number, ", row ").concat(row, ", id ").concat(id));
                newTooltip = "tooltip for id-".concat(id, " added by callback");
                addCb(row, number, id, newTooltip);

                _this.setState({
                  loading: false
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    });

    (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "addSeatCallbackContinousCase", function (_ref3, addCb, params, removeCb) {
      var row = _ref3.row,
          number = _ref3.number,
          id = _ref3.id;

      _this.setState({
        loading: true
      }, /*#__PURE__*/(0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2() {
        var newTooltip;
        return C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!removeCb) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 750);
                });

              case 3:
                console.log("Removed seat ".concat(params.number, ", row ").concat(params.row, ", id ").concat(params.id));
                removeCb(params.row, params.number);

              case 5:
                _context2.next = 7;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 750);
                });

              case 7:
                console.log("Added seat ".concat(number, ", row ").concat(row, ", id ").concat(id));
                newTooltip = "tooltip for id-".concat(id, " added by callback");
                addCb(row, number, id, newTooltip);

                _this.setState({
                  loading: false
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    });

    (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "removeSeatCallback", function (_ref5, removeCb) {
      var row = _ref5.row,
          number = _ref5.number,
          id = _ref5.id;

      _this.setState({
        loading: true
      }, /*#__PURE__*/(0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee3() {
        var newTooltip;
        return C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 1500);
                });

              case 2:
                console.log("Removed seat ".concat(number, ", row ").concat(row, ", id ").concat(id)); // A value of null will reset the tooltip to the original while '' will hide the tooltip

                newTooltip = ['A', 'B', 'C'].includes(row) ? null : '';
                removeCb(row, number, newTooltip);

                _this.setState({
                  loading: false
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    });

    return _this;
  }

  (0,C_Users_DG_Dev_Projetos_Hackaton_Squad_31_PoC_Frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SeatMap, [{
    key: "render",
    value: function render() {
      var rows = [[{
        id: 1,
        number: 1,
        isSelected: true,
        tooltip: 'Reserved by you'
      }, {
        id: 2,
        number: 2,
        tooltip: 'Cost: 15$'
      }, null, {
        id: 3,
        number: '3',
        isReserved: true,
        orientation: 'east',
        tooltip: 'Reserved by Rogger'
      }, {
        id: 4,
        number: '4',
        orientation: 'west'
      }, null, {
        id: 5,
        number: 5
      }, {
        id: 6,
        number: 6
      }], [{
        id: 7,
        number: 1,
        isReserved: true,
        tooltip: 'Reserved by Matthias Nadler'
      }, {
        id: 8,
        number: 2,
        isReserved: true
      }, null, {
        id: 9,
        number: '3',
        isReserved: true,
        orientation: 'east'
      }, {
        id: 10,
        number: '4',
        orientation: 'west'
      }, null, {
        id: 11,
        number: 5
      }, {
        id: 12,
        number: 6
      }], [{
        id: 13,
        number: 1
      }, {
        id: 14,
        number: 2
      }, null, {
        id: 15,
        number: 3,
        isReserved: true,
        orientation: 'east'
      }, {
        id: 16,
        number: '4',
        orientation: 'west'
      }, null, {
        id: 17,
        number: 5
      }, {
        id: 18,
        number: 6
      }], [{
        id: 19,
        number: 1,
        tooltip: 'Cost: 25$'
      }, {
        id: 20,
        number: 2
      }, null, {
        id: 21,
        number: 3,
        orientation: 'east'
      }, {
        id: 22,
        number: '4',
        orientation: 'west'
      }, null, {
        id: 23,
        number: 5
      }, {
        id: 24,
        number: 6
      }], [{
        id: 25,
        number: 1,
        isReserved: true
      }, {
        id: 26,
        number: 2,
        orientation: 'east'
      }, null, {
        id: 27,
        number: '3',
        isReserved: true
      }, {
        id: 28,
        number: '4',
        orientation: 'west'
      }, null, {
        id: 29,
        number: 5,
        tooltip: 'Cost: 11$'
      }, {
        id: 30,
        number: 6,
        isReserved: true
      }]];
      var loading = this.state.loading;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_seat_picker__WEBPACK_IMPORTED_MODULE_10__.default, {
          addSeatCallback: this.addSeatCallback,
          removeSeatCallback: this.removeSeatCallback,
          rows: rows,
          maxReservableSeats: 3,
          alpha: true,
          visible: true,
          loading: loading,
          selectedByDefault: true,
          tooltipProps: {
            multiline: true
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, this)
      }, void 0, false);
    }
  }]);

  return SeatMap;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2FkYXN0cm8uZWI5ZTI0MWE5MWNmYjBjNDhjMzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Ozs7SUFFcUJHOzs7Ozs7Ozs7Ozs7Ozs7O3dVQUNYO0FBQ05DLE1BQUFBLE9BQU8sRUFBRTtBQURIOztrVkFJVSxnQkFBc0JDLEtBQXRCLEVBQWdDO0FBQUEsVUFBN0JDLEdBQTZCLFFBQTdCQSxHQUE2QjtBQUFBLFVBQXhCQyxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxVQUFoQkMsRUFBZ0IsUUFBaEJBLEVBQWdCOztBQUNoRCxZQUFLQyxRQUFMLENBQWM7QUFDWkwsUUFBQUEsT0FBTyxFQUFFO0FBREcsT0FBZCwrVEFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNLLElBQUlNLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEseUJBQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBZDtBQUFBLGlCQUFuQixDQURMOztBQUFBO0FBRURFLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsc0JBQTBCUCxNQUExQixtQkFBeUNELEdBQXpDLGtCQUFvREUsRUFBcEQ7QUFDTU8sZ0JBQUFBLFVBSEwsNEJBR29DUCxFQUhwQztBQUlESCxnQkFBQUEsS0FBSyxDQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBY0MsRUFBZCxFQUFrQk8sVUFBbEIsQ0FBTDs7QUFDQSxzQkFBS04sUUFBTCxDQUFjO0FBQUVMLGtCQUFBQSxPQUFPLEVBQUU7QUFBWCxpQkFBZDs7QUFMQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZIO0FBU0Q7OytWQUU4QixpQkFBc0JDLEtBQXRCLEVBQTZCVyxNQUE3QixFQUFxQ0MsUUFBckMsRUFBa0Q7QUFBQSxVQUEvQ1gsR0FBK0MsU0FBL0NBLEdBQStDO0FBQUEsVUFBMUNDLE1B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Q0U7QUFBQSwrQkFDRSwrREFBQyx1REFBRDtBQUNFLHlCQUFlLEVBQUUsS0FBS3FCLGVBRHhCO0FBRUUsNEJBQWtCLEVBQUUsS0FBS0Msa0JBRjNCO0FBR0UsY0FBSSxFQUFFUCxJQUhSO0FBSUUsNEJBQWtCLEVBQUUsQ0FKdEI7QUFLRSxlQUFLLE1BTFA7QUFNRSxpQkFBTyxNQU5UO0FBT0UsaUJBQU8sRUFBRWYsT0FQWDtBQVFFLDJCQUFpQixNQVJuQjtBQVNFLHNCQUFZLEVBQUU7QUFBRXVCLFlBQUFBLFNBQVMsRUFBRTtBQUFiO0FBVGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFERjtBQWVEOzs7O0VBdkVrQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1NlYXRNYXAvU2VhdE1hcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IFNlYXRQaWNrZXIgZnJvbSAncmVhY3Qtc2VhdC1waWNrZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWF0TWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBhZGRTZWF0Q2FsbGJhY2sgPSAoeyByb3csIG51bWJlciwgaWQgfSwgYWRkQ2IpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxNTAwKSlcclxuICAgICAgY29uc29sZS5sb2coYEFkZGVkIHNlYXQgJHtudW1iZXJ9LCByb3cgJHtyb3d9LCBpZCAke2lkfWApXHJcbiAgICAgIGNvbnN0IG5ld1Rvb2x0aXAgPSBgdG9vbHRpcCBmb3IgaWQtJHtpZH0gYWRkZWQgYnkgY2FsbGJhY2tgXHJcbiAgICAgIGFkZENiKHJvdywgbnVtYmVyLCBpZCwgbmV3VG9vbHRpcClcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYWRkU2VhdENhbGxiYWNrQ29udGlub3VzQ2FzZSA9ICh7IHJvdywgbnVtYmVyLCBpZCB9LCBhZGRDYiwgcGFyYW1zLCByZW1vdmVDYikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHJlbW92ZUNiKSB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDc1MCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coYFJlbW92ZWQgc2VhdCAke3BhcmFtcy5udW1iZXJ9LCByb3cgJHtwYXJhbXMucm93fSwgaWQgJHtwYXJhbXMuaWR9YClcclxuICAgICAgICByZW1vdmVDYihwYXJhbXMucm93LCBwYXJhbXMubnVtYmVyKVxyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA3NTApKVxyXG4gICAgICBjb25zb2xlLmxvZyhgQWRkZWQgc2VhdCAke251bWJlcn0sIHJvdyAke3Jvd30sIGlkICR7aWR9YClcclxuICAgICAgY29uc3QgbmV3VG9vbHRpcCA9IGB0b29sdGlwIGZvciBpZC0ke2lkfSBhZGRlZCBieSBjYWxsYmFja2BcclxuICAgICAgYWRkQ2Iocm93LCBudW1iZXIsIGlkLCBuZXdUb29sdGlwKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWF0Q2FsbGJhY2sgPSAoeyByb3csIG51bWJlciwgaWQgfSwgcmVtb3ZlQ2IpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxNTAwKSlcclxuICAgICAgY29uc29sZS5sb2coYFJlbW92ZWQgc2VhdCAke251bWJlcn0sIHJvdyAke3Jvd30sIGlkICR7aWR9YClcclxuICAgICAgLy8gQSB2YWx1ZSBvZiBudWxsIHdpbGwgcmVzZXQgdGhlIHRvb2x0aXAgdG8gdGhlIG9yaWdpbmFsIHdoaWxlICcnIHdpbGwgaGlkZSB0aGUgdG9vbHRpcFxyXG4gICAgICBjb25zdCBuZXdUb29sdGlwID0gWydBJywgJ0InLCAnQyddLmluY2x1ZGVzKHJvdykgPyBudWxsIDogJydcclxuICAgICAgcmVtb3ZlQ2Iocm93LCBudW1iZXIsIG5ld1Rvb2x0aXApXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgIFt7IGlkOiAxLCBudW1iZXI6IDEsIGlzU2VsZWN0ZWQ6IHRydWUsIHRvb2x0aXA6ICdSZXNlcnZlZCBieSB5b3UnIH0sIHsgaWQ6IDIsIG51bWJlcjogMiwgdG9vbHRpcDogJ0Nvc3Q6IDE1JCcgfSwgbnVsbCwgeyBpZDogMywgbnVtYmVyOiAnMycsIGlzUmVzZXJ2ZWQ6IHRydWUsIG9yaWVudGF0aW9uOiAnZWFzdCcsIHRvb2x0aXA6ICdSZXNlcnZlZCBieSBSb2dnZXInIH0sIHsgaWQ6IDQsIG51bWJlcjogJzQnLCBvcmllbnRhdGlvbjogJ3dlc3QnIH0sIG51bGwsIHsgaWQ6IDUsIG51bWJlcjogNSB9LCB7IGlkOiA2LCBudW1iZXI6IDYgfV0sXHJcbiAgICAgIFt7IGlkOiA3LCBudW1iZXI6IDEsIGlzUmVzZXJ2ZWQ6IHRydWUsIHRvb2x0aXA6ICdSZXNlcnZlZCBieSBNYXR0aGlhcyBOYWRsZXInIH0sIHsgaWQ6IDgsIG51bWJlcjogMiwgaXNSZXNlcnZlZDogdHJ1ZSB9LCBudWxsLCB7IGlkOiA5LCBudW1iZXI6ICczJywgaXNSZXNlcnZlZDogdHJ1ZSwgb3JpZW50YXRpb246ICdlYXN0JyB9LCB7IGlkOiAxMCwgbnVtYmVyOiAnNCcsIG9yaWVudGF0aW9uOiAnd2VzdCcgfSwgbnVsbCwgeyBpZDogMTEsIG51bWJlcjogNSB9LCB7IGlkOiAxMiwgbnVtYmVyOiA2IH1dLFxyXG4gICAgICBbeyBpZDogMTMsIG51bWJlcjogMSB9LCB7IGlkOiAxNCwgbnVtYmVyOiAyIH0sIG51bGwsIHsgaWQ6IDE1LCBudW1iZXI6IDMsIGlzUmVzZXJ2ZWQ6IHRydWUsIG9yaWVudGF0aW9uOiAnZWFzdCcgfSwgeyBpZDogMTYsIG51bWJlcjogJzQnLCBvcmllbnRhdGlvbjogJ3dlc3QnIH0sIG51bGwsIHsgaWQ6IDE3LCBudW1iZXI6IDUgfSwgeyBpZDogMTgsIG51bWJlcjogNiB9XSxcclxuICAgICAgW3sgaWQ6IDE5LCBudW1iZXI6IDEsIHRvb2x0aXA6ICdDb3N0OiAyNSQnIH0sIHsgaWQ6IDIwLCBudW1iZXI6IDIgfSwgbnVsbCwgeyBpZDogMjEsIG51bWJlcjogMywgb3JpZW50YXRpb246ICdlYXN0JyB9LCB7IGlkOiAyMiwgbnVtYmVyOiAnNCcsIG9yaWVudGF0aW9uOiAnd2VzdCcgfSwgbnVsbCwgeyBpZDogMjMsIG51bWJlcjogNSB9LCB7IGlkOiAyNCwgbnVtYmVyOiA2IH1dLFxyXG4gICAgICBbeyBpZDogMjUsIG51bWJlcjogMSwgaXNSZXNlcnZlZDogdHJ1ZSB9LCB7IGlkOiAyNiwgbnVtYmVyOiAyLCBvcmllbnRhdGlvbjogJ2Vhc3QnIH0sIG51bGwsIHsgaWQ6IDI3LCBudW1iZXI6ICczJywgaXNSZXNlcnZlZDogdHJ1ZSB9LCB7IGlkOiAyOCwgbnVtYmVyOiAnNCcsIG9yaWVudGF0aW9uOiAnd2VzdCcgfSwgbnVsbCwgeyBpZDogMjksIG51bWJlcjogNSwgdG9vbHRpcDogJ0Nvc3Q6IDExJCcgfSwgeyBpZDogMzAsIG51bWJlcjogNiwgaXNSZXNlcnZlZDogdHJ1ZSB9XVxyXG4gICAgXVxyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxTZWF0UGlja2VyXHJcbiAgICAgICAgICBhZGRTZWF0Q2FsbGJhY2s9e3RoaXMuYWRkU2VhdENhbGxiYWNrfVxyXG4gICAgICAgICAgcmVtb3ZlU2VhdENhbGxiYWNrPXt0aGlzLnJlbW92ZVNlYXRDYWxsYmFja31cclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICBtYXhSZXNlcnZhYmxlU2VhdHM9ezN9XHJcbiAgICAgICAgICBhbHBoYVxyXG4gICAgICAgICAgdmlzaWJsZVxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgIHNlbGVjdGVkQnlEZWZhdWx0XHJcbiAgICAgICAgICB0b29sdGlwUHJvcHM9e3sgbXVsdGlsaW5lOiB0cnVlIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2VhdFBpY2tlciIsIlNlYXRNYXAiLCJsb2FkaW5nIiwiYWRkQ2IiLCJyb3ciLCJudW1iZXIiLCJpZCIsInNldFN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsIm5ld1Rvb2x0aXAiLCJwYXJhbXMiLCJyZW1vdmVDYiIsImluY2x1ZGVzIiwicm93cyIsImlzU2VsZWN0ZWQiLCJ0b29sdGlwIiwiaXNSZXNlcnZlZCIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJhZGRTZWF0Q2FsbGJhY2siLCJyZW1vdmVTZWF0Q2FsbGJhY2siLCJtdWx0aWxpbmUiXSwic291cmNlUm9vdCI6IiJ9