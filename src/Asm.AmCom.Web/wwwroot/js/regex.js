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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/react/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/react/Components/TextBox.js":
/*!*********************************************!*\
  !*** ./scripts/react/Components/TextBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar TextBox =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TextBox, _React$Component);\n\n  function TextBox(props) {\n    _classCallCheck(this, TextBox);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TextBox).call(this, props));\n  }\n\n  _createClass(TextBox, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", {\n        htmlFor: this.props.id,\n        className: \"control-label\"\n      }, this.props.label), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n        type: \"text\",\n        className: \"form-control\",\n        id: this.props.id,\n        value: this.props.value,\n        onChange: this.props.onChange,\n        onKeyUp: this.props.onKeyUp\n      }));\n    }\n  }]);\n\n  return TextBox;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapProps(state, ownProps) {\n  return Object.assign({}, ownProps);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapProps)(TextBox));\n\n//# sourceURL=webpack:///./scripts/react/Components/TextBox.js?");

/***/ }),

/***/ "./scripts/react/Redux/Actions.js":
/*!****************************************!*\
  !*** ./scripts/react/Redux/Actions.js ***!
  \****************************************/
/*! exports provided: ActionTypes, RegexTester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegexTester\", function() { return RegexTester; });\nvar ActionTypes;\n\n(function (ActionTypes) {\n  var RegexTester;\n\n  (function (RegexTester) {\n    RegexTester.GetTestResultRequest = \"GetTestResultRequest\";\n    RegexTester.GetTestResultSuccess = \"GetTestResultSuccess\";\n    RegexTester.GetTestResultFailure = \"GetTestResultFailure\";\n    RegexTester.RegexChanging = \"RegexChanging\";\n    RegexTester.RegexChanged = \"RegexChanged\";\n    RegexTester.InputChanging = \"InputChanging\";\n    RegexTester.InputChanged = \"InputChanged\";\n  })(RegexTester = ActionTypes.RegexTester || (ActionTypes.RegexTester = {}));\n})(ActionTypes || (ActionTypes = {}));\n\nfunction simpleAction(type) {\n  return {\n    type: type\n  };\n}\n\nfunction dataAction(type, data) {\n  return {\n    type: type,\n    data: data\n  };\n}\n\nvar RegexTester;\n\n(function (RegexTester) {\n  RegexTester.getTestResultRequest = function () {\n    return simpleAction(ActionTypes.RegexTester.GetTestResultRequest);\n  };\n\n  RegexTester.getTestResultSuccess = function (data) {\n    return dataAction(ActionTypes.RegexTester.GetTestResultSuccess, data);\n  };\n\n  RegexTester.getTestResultFailure = function (data) {\n    return dataAction(ActionTypes.RegexTester.GetTestResultFailure, data);\n  };\n\n  RegexTester.regexChanging = function (data) {\n    return dataAction(ActionTypes.RegexTester.RegexChanging, data);\n  };\n\n  RegexTester.regexChanged = function () {\n    return simpleAction(ActionTypes.RegexTester.RegexChanged);\n  };\n\n  RegexTester.inputChanging = function (data) {\n    return dataAction(ActionTypes.RegexTester.InputChanging, data);\n  };\n\n  RegexTester.inputChanged = function () {\n    return simpleAction(ActionTypes.RegexTester.InputChanged);\n  };\n})(RegexTester || (RegexTester = {}));\n\n//# sourceURL=webpack:///./scripts/react/Redux/Actions.js?");

/***/ }),

/***/ "./scripts/react/Redux/Reducers.js":
/*!*****************************************!*\
  !*** ./scripts/react/Redux/Reducers.js ***!
  \*****************************************/
/*! exports provided: regex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regex\", function() { return regex; });\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ \"./scripts/react/Redux/Actions.js\");\n\nvar regex;\n\n(function (regex) {\n  regex.initialState = {\n    regex: null,\n    input: null,\n    result: null,\n    isTesting: false\n  };\n\n  function reducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : regex.initialState;\n    var action = arguments.length > 1 ? arguments[1] : undefined;\n\n    switch (action.type) {\n      case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.GetTestResultRequest:\n        return Object.assign({}, state, {\n          isTesting: true\n        });\n\n      case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.GetTestResultSuccess:\n        return Object.assign({}, state, {\n          isTesting: false,\n          result: action.data\n        });\n\n      case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.GetTestResultFailure:\n        return Object.assign({}, state, {\n          isTesting: false,\n          result: null\n        });\n\n      case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.RegexChanging:\n        return Object.assign({}, state, {\n          regex: action.data\n        });\n\n      case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.InputChanging:\n        return Object.assign({}, state, {\n          input: action.data\n        });\n\n      default:\n        return state;\n    }\n  }\n\n  regex.reducer = reducer;\n})(regex || (regex = {}));\n\n//# sourceURL=webpack:///./scripts/react/Redux/Reducers.js?");

/***/ }),

/***/ "./scripts/react/Tools/Regex.js":
/*!**************************************!*\
  !*** ./scripts/react/Tools/Regex.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Redux/Actions */ \"./scripts/react/Redux/Actions.js\");\n/* harmony import */ var _Components_TextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/TextBox */ \"./scripts/react/Components/TextBox.js\");\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Service */ \"./scripts/react/Tools/Service.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Regex =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Regex, _React$Component);\n\n  function Regex(props) {\n    _classCallCheck(this, Regex);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Regex).call(this, props));\n  }\n\n  _createClass(Regex, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n    /*ready(() => {\r\n        let text = document.getElementById(\"text\") as HTMLInputElement;\r\n        let regex = document.getElementById(\"regex\") as HTMLInputElement;\r\n          if (regex) regex.addEventListener(\"keyup\", this.doTest.bind(this));\r\n        if (text) text.addEventListener(\"keyup\", this.doTest.bind(this));\r\n    });*/\n    // service.regexTest(this.props.regex, this.props.input);\n\n    /*    doTest() {\r\n            this.props.dispatch(service.regexTest(this.props.regex, this.props.input));\r\n        }*/\n\n  }, {\n    key: \"regexChanged\",\n    value: function regexChanged(e) {\n      this.props.regexChanged(e.target.value, this.props.input);\n    }\n  }, {\n    key: \"inputChanged\",\n    value: function inputChanged(e) {\n      this.props.inputChanged(this.props.regex, e.target.value);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"col-md-9\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"legend\", {\n        className: \"sr-only\"\n      }, \"Regular Expression Tester\"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: \"regex\",\n        label: \"Regular Expression\",\n        value: this.props.regex,\n        onChange: this.regexChanged.bind(this)\n      }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: \"text\",\n        label: \"Input\",\n        value: this.props.input,\n        onChange: this.inputChanged.bind(this)\n      })))), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"col-md-4 regex-result\"\n      }, \"Match:\")));\n    }\n  }]);\n\n  return Regex;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapProps(state, ownProps) {\n  return Object.assign({}, ownProps, {\n    regex: state.regex,\n    input: state.input\n  });\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    regexChanged: function regexChanged(regex, input) {\n      dispatch(_Service__WEBPACK_IMPORTED_MODULE_4__[\"service\"].regexTest(regex, input));\n      dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_2__[\"RegexTester\"].regexChanging(regex));\n    },\n    inputChanged: function inputChanged(regex, input) {\n      dispatch(_Service__WEBPACK_IMPORTED_MODULE_4__[\"service\"].regexTest(regex, input));\n      dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_2__[\"RegexTester\"].inputChanging(input));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapProps, mapDispatchToProps)(Regex));\n\n//# sourceURL=webpack:///./scripts/react/Tools/Regex.js?");

/***/ }),

/***/ "./scripts/react/Tools/Service.js":
/*!****************************************!*\
  !*** ./scripts/react/Tools/Service.js ***!
  \****************************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"service\", function() { return service; });\n/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Actions */ \"./scripts/react/Redux/Actions.js\");\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\nvar service;\n\n(function (service) {\n  function regexTest(regex, input) {\n    var _this = this;\n\n    return function (dispatch) {\n      return __awaiter(_this, void 0, void 0,\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var request, response, regexResult;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultRequest());\n                request = {\n                  regex: regex,\n                  text: input\n                };\n                _context.prev = 2;\n                _context.next = 5;\n                return fetch(\"/tools/api/regex\", {\n                  method: \"POST\",\n                  body: JSON.stringify(request),\n                  headers: new Headers({\n                    \"Content-Type\": \"application/json\",\n                    \"Accept\": \"application/json\"\n                  })\n                });\n\n              case 5:\n                response = _context.sent;\n\n                if (!response.ok) {\n                  _context.next = 13;\n                  break;\n                }\n\n                _context.next = 9;\n                return response.json();\n\n              case 9:\n                regexResult = _context.sent;\n                dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultSuccess(regexResult));\n                _context.next = 14;\n                break;\n\n              case 13:\n                dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultFailure(response.status));\n\n              case 14:\n                _context.next = 19;\n                break;\n\n              case 16:\n                _context.prev = 16;\n                _context.t0 = _context[\"catch\"](2);\n                dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultFailure(_context.t0));\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 16]]);\n      }));\n    };\n  }\n\n  service.regexTest = regexTest;\n})(service || (service = {}));\n\n//# sourceURL=webpack:///./scripts/react/Tools/Service.js?");

/***/ }),

/***/ "./scripts/react/Tools/Tool.js":
/*!*************************************!*\
  !*** ./scripts/react/Tools/Tool.js ***!
  \*************************************/
/*! exports provided: tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tools\", function() { return tools; });\n/* harmony import */ var _Redux_Reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Reducers */ \"./scripts/react/Redux/Reducers.js\");\n/* harmony import */ var _Regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Regex */ \"./scripts/react/Tools/Regex.js\");\n\n\nvar tools = [{\n  name: \"regex\",\n  initialState: _Redux_Reducers__WEBPACK_IMPORTED_MODULE_0__[\"regex\"].initialState,\n  reducer: _Redux_Reducers__WEBPACK_IMPORTED_MODULE_0__[\"regex\"].reducer,\n  component: _Regex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n\n//# sourceURL=webpack:///./scripts/react/Tools/Tool.js?");

/***/ }),

/***/ "./scripts/react/app.js":
/*!******************************!*\
  !*** ./scripts/react/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Tools_Tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools/Tool */ \"./scripts/react/Tools/Tool.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.tool = _Tools_Tool__WEBPACK_IMPORTED_MODULE_5__[\"tools\"].find(function (tool) {\n      return tool.name == props.tool;\n    });\n\n    if (!_this.tool) {\n      throw Error(\"Unknown tool\");\n    }\n\n    var enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__[\"compose\"];\n    _this.store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(_this.tool.reducer, _this.tool.initialState, enhancedCompose(Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var EntryPoint = this.tool.component;\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n        store: this.store\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](EntryPoint, null));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar appElement = document.getElementById('app');\nvar tool = appElement.getAttribute(\"data-tool\") || \"regex\";\nreact_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"](react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](App, {\n  tool: tool\n}), appElement);\n\n//# sourceURL=webpack:///./scripts/react/app.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactRedux;\n\n//# sourceURL=webpack:///external_%22ReactRedux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Redux;\n\n//# sourceURL=webpack:///external_%22Redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!*****************************!*\
  !*** external "ReduxThunk" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReduxThunk;\n\n//# sourceURL=webpack:///external_%22ReduxThunk%22?");

/***/ })

/******/ });