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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/react/Components/RegexResult.js":
/*!*************************************************!*\
  !*** ./scripts/react/Components/RegexResult.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nclass RegexResult extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n    render() {\r\n        let res = this.props.regexResult;\r\n        if (!res)\r\n            return (null);\r\n        if (!res.success)\r\n            return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"No Match\"));\r\n        let input = this.props.input || \"\";\r\n        let unmatchedStart = input.substr(0, res.groups[0].index);\r\n        let unmatchedEnd = input.substr(res.groups[0].index + res.groups[0].length);\r\n        let style = {\r\n            backgroundColor: 'green',\r\n        };\r\n        let groups = new Array();\r\n        for (let group of res.groups) {\r\n            let captures = new Array();\r\n            if (group.captures && group.captures.length > 1) {\r\n                for (let capture of group.captures) {\r\n                    captures.push(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, capture.value));\r\n                }\r\n                groups.push(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    group.value,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null, captures)));\r\n            }\r\n            else {\r\n                groups.push(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, group.value));\r\n            }\r\n        }\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, unmatchedStart),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { style: style }, res.groups[0].value),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, unmatchedEnd),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null, groups)));\r\n    }\r\n}\r\nfunction mapProps(state, ownProps) {\r\n    return Object.assign({}, ownProps, { input: state.input, regexResult: state.result });\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapProps)(RegexResult));\r\n//# sourceMappingURL=RegexResult.js.map\n\n//# sourceURL=webpack:///./scripts/react/Components/RegexResult.js?");

/***/ }),

/***/ "./scripts/react/Components/TextBox.js":
/*!*********************************************!*\
  !*** ./scripts/react/Components/TextBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nclass TextBox extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n    render() {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"form-group\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", { htmlFor: this.props.id, className: \"control-label\" }, this.props.label),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"text\", className: \"form-control\", id: this.props.id, value: this.props.value, onChange: this.props.onChange, onKeyUp: this.props.onKeyUp })));\r\n    }\r\n}\r\nfunction mapProps(state, ownProps) {\r\n    return Object.assign({}, ownProps);\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapProps)(TextBox));\r\n//# sourceMappingURL=TextBox.js.map\n\n//# sourceURL=webpack:///./scripts/react/Components/TextBox.js?");

/***/ }),

/***/ "./scripts/react/Redux/Actions.js":
/*!****************************************!*\
  !*** ./scripts/react/Redux/Actions.js ***!
  \****************************************/
/*! exports provided: ActionTypes, RegexTester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegexTester\", function() { return RegexTester; });\nvar ActionTypes;\r\n(function (ActionTypes) {\r\n    let RegexTester;\r\n    (function (RegexTester) {\r\n        RegexTester.GetTestResultRequest = \"GetTestResultRequest\";\r\n        RegexTester.GetTestResultSuccess = \"GetTestResultSuccess\";\r\n        RegexTester.GetTestResultFailure = \"GetTestResultFailure\";\r\n        RegexTester.RegexChanging = \"RegexChanging\";\r\n        RegexTester.RegexChanged = \"RegexChanged\";\r\n        RegexTester.InputChanging = \"InputChanging\";\r\n        RegexTester.InputChanged = \"InputChanged\";\r\n    })(RegexTester = ActionTypes.RegexTester || (ActionTypes.RegexTester = {}));\r\n})(ActionTypes || (ActionTypes = {}));\r\nfunction simpleAction(type) {\r\n    return {\r\n        type: type\r\n    };\r\n}\r\nfunction dataAction(type, data) {\r\n    return {\r\n        type,\r\n        data\r\n    };\r\n}\r\nvar RegexTester;\r\n(function (RegexTester) {\r\n    RegexTester.getTestResultRequest = () => simpleAction(ActionTypes.RegexTester.GetTestResultRequest);\r\n    RegexTester.getTestResultSuccess = (data) => dataAction(ActionTypes.RegexTester.GetTestResultSuccess, data);\r\n    RegexTester.getTestResultFailure = (data) => dataAction(ActionTypes.RegexTester.GetTestResultFailure, data);\r\n    RegexTester.regexChanging = (data) => dataAction(ActionTypes.RegexTester.RegexChanging, data);\r\n    RegexTester.regexChanged = () => simpleAction(ActionTypes.RegexTester.RegexChanged);\r\n    RegexTester.inputChanging = (data) => dataAction(ActionTypes.RegexTester.InputChanging, data);\r\n    RegexTester.inputChanged = () => simpleAction(ActionTypes.RegexTester.InputChanged);\r\n})(RegexTester || (RegexTester = {}));\r\n//# sourceMappingURL=Actions.js.map\n\n//# sourceURL=webpack:///./scripts/react/Redux/Actions.js?");

/***/ }),

/***/ "./scripts/react/Redux/Reducers.js":
/*!*****************************************!*\
  !*** ./scripts/react/Redux/Reducers.js ***!
  \*****************************************/
/*! exports provided: regex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regex\", function() { return regex; });\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ \"./scripts/react/Redux/Actions.js\");\n\r\nvar regex;\r\n(function (regex) {\r\n    regex.initialState = {\r\n        regex: null,\r\n        input: null,\r\n        result: null,\r\n        isTesting: false\r\n    };\r\n    function reducer(state = regex.initialState, action) {\r\n        switch (action.type) {\r\n            case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.GetTestResultRequest:\r\n                return Object.assign({}, state, { isTesting: true });\r\n            case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.GetTestResultSuccess:\r\n                return Object.assign({}, state, { isTesting: false, result: action.data });\r\n            case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.GetTestResultFailure:\r\n                return Object.assign({}, state, { isTesting: false, result: null });\r\n            case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.RegexChanging:\r\n                return Object.assign({}, state, { regex: action.data });\r\n            case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"ActionTypes\"].RegexTester.InputChanging:\r\n                return Object.assign({}, state, { input: action.data });\r\n            default:\r\n                return state;\r\n        }\r\n    }\r\n    regex.reducer = reducer;\r\n})(regex || (regex = {}));\r\n//# sourceMappingURL=Reducers.js.map\n\n//# sourceURL=webpack:///./scripts/react/Redux/Reducers.js?");

/***/ }),

/***/ "./scripts/react/Tools/Regex.js":
/*!**************************************!*\
  !*** ./scripts/react/Tools/Regex.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Redux/Actions */ \"./scripts/react/Redux/Actions.js\");\n/* harmony import */ var _Components_TextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/TextBox */ \"./scripts/react/Components/TextBox.js\");\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Service */ \"./scripts/react/Tools/Service.js\");\n/* harmony import */ var _Components_RegexResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/RegexResult */ \"./scripts/react/Components/RegexResult.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Regex extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n    regexChanged(e) {\r\n        this.props.regexChanged(e.target.value, this.props.input);\r\n    }\r\n    inputChanged(e) {\r\n        this.props.inputChanged(this.props.regex, e.target.value);\r\n    }\r\n    render() {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", { className: \"row\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col-md-9\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"fieldset\", null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"legend\", { className: \"sr-only\" }, \"Regular Expression Tester\"),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { id: \"regex\", label: \"Regular Expression\", value: this.props.regex, onChange: this.regexChanged.bind(this) }),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { id: \"text\", label: \"Input\", value: this.props.input, onChange: this.inputChanged.bind(this) })))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", { className: \"row\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"col-md-4 regex-result\" },\r\n                    \"Match: \",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_RegexResult__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)))));\r\n    }\r\n}\r\nfunction mapProps(state, ownProps) {\r\n    return Object.assign({}, ownProps, { regex: state.regex, input: state.input });\r\n}\r\nfunction mapDispatchToProps(dispatch) {\r\n    return {\r\n        regexChanged: (regex, input) => {\r\n            dispatch(_Service__WEBPACK_IMPORTED_MODULE_4__[\"service\"].regexTest(regex, input));\r\n            dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_2__[\"RegexTester\"].regexChanging(regex));\r\n        },\r\n        inputChanged: (regex, input) => {\r\n            dispatch(_Service__WEBPACK_IMPORTED_MODULE_4__[\"service\"].regexTest(regex, input));\r\n            dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_2__[\"RegexTester\"].inputChanging(input));\r\n        },\r\n    };\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapProps, mapDispatchToProps)(Regex));\r\n//# sourceMappingURL=Regex.js.map\n\n//# sourceURL=webpack:///./scripts/react/Tools/Regex.js?");

/***/ }),

/***/ "./scripts/react/Tools/Service.js":
/*!****************************************!*\
  !*** ./scripts/react/Tools/Service.js ***!
  \****************************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"service\", function() { return service; });\n/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Actions */ \"./scripts/react/Redux/Actions.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nvar service;\r\n(function (service) {\r\n    function regexTest(regex, input) {\r\n        return (dispatch) => __awaiter(this, void 0, void 0, function* () {\r\n            dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultRequest());\r\n            let request = {\r\n                regex: regex,\r\n                text: input\r\n            };\r\n            try {\r\n                let response = yield fetch(\"/tools/api/regex\", {\r\n                    method: \"POST\",\r\n                    body: JSON.stringify(request),\r\n                    headers: new Headers({\r\n                        \"Content-Type\": \"application/json\",\r\n                        \"Accept\": \"application/json\"\r\n                    }),\r\n                });\r\n                if (response.ok) {\r\n                    let regexResult = yield response.json();\r\n                    dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultSuccess(regexResult));\r\n                }\r\n                else {\r\n                    dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultFailure(response.status));\r\n                }\r\n            }\r\n            catch (e) {\r\n                dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultFailure(e));\r\n            }\r\n        });\r\n    }\r\n    service.regexTest = regexTest;\r\n})(service || (service = {}));\r\n//# sourceMappingURL=Service.js.map\n\n//# sourceURL=webpack:///./scripts/react/Tools/Service.js?");

/***/ }),

/***/ "./scripts/react/Tools/Tool.js":
/*!*************************************!*\
  !*** ./scripts/react/Tools/Tool.js ***!
  \*************************************/
/*! exports provided: tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tools\", function() { return tools; });\n/* harmony import */ var _Redux_Reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Reducers */ \"./scripts/react/Redux/Reducers.js\");\n/* harmony import */ var _Regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Regex */ \"./scripts/react/Tools/Regex.js\");\n\r\n\r\nconst tools = [\r\n    {\r\n        name: \"regex\",\r\n        initialState: _Redux_Reducers__WEBPACK_IMPORTED_MODULE_0__[\"regex\"].initialState,\r\n        reducer: _Redux_Reducers__WEBPACK_IMPORTED_MODULE_0__[\"regex\"].reducer,\r\n        component: _Regex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    }\r\n];\r\n//# sourceMappingURL=Tool.js.map\n\n//# sourceURL=webpack:///./scripts/react/Tools/Tool.js?");

/***/ }),

/***/ "./scripts/react/app.tsx":
/*!*******************************!*\
  !*** ./scripts/react/app.tsx ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Tools_Tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools/Tool */ \"./scripts/react/Tools/Tool.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.tool = _Tools_Tool__WEBPACK_IMPORTED_MODULE_5__[\"tools\"].find(function (tool) {\n      return tool.name == props.tool;\n    });\n\n    if (!_this.tool) {\n      throw Error(\"Unknown tool\");\n    }\n\n    var enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__[\"compose\"];\n    _this.store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(_this.tool.reducer, _this.tool.initialState, enhancedCompose(Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var EntryPoint = this.tool.component;\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n        store: this.store\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](EntryPoint, null));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar appElement = document.getElementById('app');\nvar tool = appElement.getAttribute(\"data-tool\") || \"regex\";\nreact_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"](react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](App, {\n  tool: tool\n}), appElement);\n\n//# sourceURL=webpack:///./scripts/react/app.tsx?");

/***/ }),

/***/ "./scripts/react/tools/Service.js":
/*!****************************************!*\
  !*** ./scripts/react/tools/Service.js ***!
  \****************************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"service\", function() { return service; });\n/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Actions */ \"./scripts/react/Redux/Actions.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nvar service;\r\n(function (service) {\r\n    function regexTest(regex, input) {\r\n        return (dispatch) => __awaiter(this, void 0, void 0, function* () {\r\n            dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultRequest());\r\n            let request = {\r\n                regex: regex,\r\n                text: input\r\n            };\r\n            try {\r\n                let response = yield fetch(\"/tools/api/regex\", {\r\n                    method: \"POST\",\r\n                    body: JSON.stringify(request),\r\n                    headers: new Headers({\r\n                        \"Content-Type\": \"application/json\",\r\n                        \"Accept\": \"application/json\"\r\n                    }),\r\n                });\r\n                if (response.ok) {\r\n                    let regexResult = yield response.json();\r\n                    dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultSuccess(regexResult));\r\n                }\r\n                else {\r\n                    dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultFailure(response.status));\r\n                }\r\n            }\r\n            catch (e) {\r\n                dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_0__[\"RegexTester\"].getTestResultFailure(e));\r\n            }\r\n        });\r\n    }\r\n    service.regexTest = regexTest;\r\n})(service || (service = {}));\r\n//# sourceMappingURL=Service.js.map\n\n//# sourceURL=webpack:///./scripts/react/tools/Service.js?");

/***/ }),

/***/ "./scripts/react/tools/regex.tsx":
/*!***************************************!*\
  !*** ./scripts/react/tools/regex.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Redux/Actions */ \"./scripts/react/Redux/Actions.js\");\n/* harmony import */ var _Components_TextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/TextBox */ \"./scripts/react/Components/TextBox.js\");\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Service */ \"./scripts/react/tools/Service.js\");\n/* harmony import */ var _Components_RegexResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/RegexResult */ \"./scripts/react/Components/RegexResult.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Regex =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Regex, _React$Component);\n\n  function Regex(props) {\n    _classCallCheck(this, Regex);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Regex).call(this, props));\n  }\n\n  _createClass(Regex, [{\n    key: \"regexChanged\",\n    value: function regexChanged(e) {\n      this.props.regexChanged(e.target.value, this.props.input);\n    }\n  }, {\n    key: \"inputChanged\",\n    value: function inputChanged(e) {\n      this.props.inputChanged(this.props.regex, e.target.value);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"col-md-9\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"legend\", {\n        className: \"sr-only\"\n      }, \"Regular Expression Tester\"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: \"regex\",\n        label: \"Regular Expression\",\n        value: this.props.regex,\n        onChange: this.regexChanged.bind(this)\n      }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: \"text\",\n        label: \"Input\",\n        value: this.props.input,\n        onChange: this.inputChanged.bind(this)\n      })))), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"section\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"col-md-4 regex-result\"\n      }, \"Match: \", react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Components_RegexResult__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))));\n    }\n  }]);\n\n  return Regex;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapProps(state, ownProps) {\n  return Object.assign({}, ownProps, {\n    regex: state.regex,\n    input: state.input\n  });\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    regexChanged: function regexChanged(regex, input) {\n      dispatch(_Service__WEBPACK_IMPORTED_MODULE_4__[\"service\"].regexTest(regex, input));\n      dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_2__[\"RegexTester\"].regexChanging(regex));\n    },\n    inputChanged: function inputChanged(regex, input) {\n      dispatch(_Service__WEBPACK_IMPORTED_MODULE_4__[\"service\"].regexTest(regex, input));\n      dispatch(_Redux_Actions__WEBPACK_IMPORTED_MODULE_2__[\"RegexTester\"].inputChanging(input));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapProps, mapDispatchToProps)(Regex));\n\n//# sourceURL=webpack:///./scripts/react/tools/regex.tsx?");

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./scripts/react/app.tsx ./scripts/react/tools/regex.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! K:\\VSTS\\Asm\\AndrewMcLachlan.com\\src\\Asm.AmCom.Web\\scripts\\react\\app.tsx */\"./scripts/react/app.tsx\");\nmodule.exports = __webpack_require__(/*! K:\\VSTS\\Asm\\AndrewMcLachlan.com\\src\\Asm.AmCom.Web\\scripts\\react\\tools\\regex.tsx */\"./scripts/react/tools/regex.tsx\");\n\n\n//# sourceURL=webpack:///multi_./scripts/react/app.tsx_./scripts/react/tools/regex.tsx?");

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