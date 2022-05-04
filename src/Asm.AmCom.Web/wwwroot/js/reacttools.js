/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/react/Components/ColourGrid.tsx":
/*!*************************************************!*\
  !*** ./scripts/react/Components/ColourGrid.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColourGrid": () => (/* binding */ ColourGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_Colour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Colour */ "./scripts/react/model/Colour.ts");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/functions */ "./scripts/react/helpers/functions.ts");



var ColourGrid = function ColourGrid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "colour-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, props.title), props.colours.map(function (colour, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      key: index,
      className: "clickable",
      style: {
        backgroundColor: (0,_model_Colour__WEBPACK_IMPORTED_MODULE_1__.toHex)(colour)
      },
      onClick: function onClick() {
        return (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.colourToClipboard)(colour);
      },
      title: "click to copy hex value"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, colour.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, (0,_model_Colour__WEBPACK_IMPORTED_MODULE_1__.toHex)(colour))));
  })));
};

/***/ }),

/***/ "./scripts/react/Components/ColourGroup.tsx":
/*!**************************************************!*\
  !*** ./scripts/react/Components/ColourGroup.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColourGroup": () => (/* binding */ ColourGroup)
/* harmony export */ });
/* harmony import */ var _model_Colour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Colour */ "./scripts/react/model/Colour.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/functions */ "./scripts/react/helpers/functions.ts");



var ColourGroup = function ColourGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: "colour-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, props.title), props.colours.map(function (colour, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
      key: index,
      className: "clickable colour ".concat(colour.name.toLowerCase().replace(" ", "-"), " ").concat(textColour(colour)),
      onClick: function onClick() {
        return (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.colourToClipboard)(colour);
      },
      title: "click to copy hex value"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, colour.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, (0,_model_Colour__WEBPACK_IMPORTED_MODULE_0__.toHex)(colour), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), (0,_model_Colour__WEBPACK_IMPORTED_MODULE_0__.toRgb)(colour))));
  })));
};

var textColour = function textColour(colour) {
  return colour.r + colour.g + colour.b < 400 ? "colour-dark" : "colour-light";
};

/***/ }),

/***/ "./scripts/react/Components/IPAddress.tsx":
/*!************************************************!*\
  !*** ./scripts/react/Components/IPAddress.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IPAddress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IPv4Address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IPv4Address */ "./scripts/react/IPv4Address.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var IPAddress = /*#__PURE__*/function (_React$Component) {
  _inherits(IPAddress, _React$Component);

  var _super = _createSuper(IPAddress);

  function IPAddress(props) {
    var _this;

    _classCallCheck(this, IPAddress);

    _this = _super.call(this, props);

    _this.validateWithDotCheck = function (e) {
      if (e.key === "." && e.currentTarget.value.length > 0) {
        e.currentTarget.nextElementSibling.focus();
        e.stopPropagation();
        e.preventDefault();
      } else {
        _this.validate(e);
      }
    };

    _this.validate = function (e) {
      if (e.key.length === 1 && !"0123456789".includes(e.key)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    _this.validateMaxWithNext = function (e) {
      _this.validateMax(e);

      if (e.target.value.length === 3) {
        e.currentTarget.nextElementSibling.focus();
      }
    };

    _this.validateMax = function (e) {
      var intval = parseInt(e.currentTarget.value, 10);

      if (intval > 255) {
        e.currentTarget.value = "255";
      }

      var newState = {};
      newState[e.currentTarget.name] = e.currentTarget.value;

      _this.setState(newState, function () {
        if (_this.props.onChange) {
          if (_this.state.octet1 && _this.state.octet2 && _this.state.octet3 && _this.state.octet4) {
            _this.props.onChange(new _IPv4Address__WEBPACK_IMPORTED_MODULE_1__.IPv4Address(_this.state.octet1, _this.state.octet2, _this.state.octet3, _this.state.octet4));
          }
        }
      });
    };

    _this.state = {
      octet1: _this.props.value && _this.props.value.octet1,
      octet2: _this.props.value && _this.props.value.octet2,
      octet3: _this.props.value && _this.props.value.octet3,
      octet4: _this.props.value && _this.props.value.octet4
    };
    return _this;
  }

  _createClass(IPAddress, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: this.props.id,
        className: "control-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-inline ip-address"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_1",
        name: "octet1",
        value: this.state.octet1,
        onChange: this.validateMaxWithNext,
        onKeyDown: this.validateWithDotCheck
      }), "\xA0.\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_2",
        name: "octet2",
        value: this.state.octet2,
        onChange: this.validateMaxWithNext,
        onKeyDown: this.validateWithDotCheck
      }), "\xA0.\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_3",
        name: "octet3",
        value: this.state.octet3,
        onChange: this.validateMaxWithNext,
        onKeyDown: this.validateWithDotCheck
      }), "\xA0.\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_4",
        name: "octet4",
        value: this.state.octet4,
        onChange: this.validateMax,
        onKeyDown: this.validate
      })));
    }
  }]);

  return IPAddress;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./scripts/react/Components/RegexResult.tsx":
/*!**************************************************!*\
  !*** ./scripts/react/Components/RegexResult.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RegexResult = /*#__PURE__*/function (_React$Component) {
  _inherits(RegexResult, _React$Component);

  var _super = _createSuper(RegexResult);

  function RegexResult(props) {
    var _this;

    _classCallCheck(this, RegexResult);

    _this = _super.call(this, props);

    _this.hover = function (e) {
      var target = document.getElementById(e.currentTarget.getAttribute("data-highlight"));
      if (!target) return;
      target.classList.add("hover");
    };

    _this.unhover = function (e) {
      var target = document.getElementById(e.currentTarget.getAttribute("data-highlight"));
      if (!target) return;
      target.classList.remove("hover");
    };

    return _this;
  }

  _createClass(RegexResult, [{
    key: "render",
    value: function render() {
      var res = this.props.regexResult;
      if (!res || !res.success || res.groups.length === 1) return null;
      var groups = new Array();

      var _iterator = _createForOfIteratorHelper(res.groups.slice(1)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          if (!group.success || group.captures.length === 0) continue;
          var captures = new Array();
          var gIndex = res.groups.indexOf(group);

          if (group.captures && group.captures.length > 1) {
            var _iterator2 = _createForOfIteratorHelper(group.captures),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var capture = _step2.value;
                captures.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
                  "data-highlight": "capture_".concat(gIndex, "_").concat(group.captures.indexOf(capture)),
                  onMouseOver: this.hover,
                  onMouseOut: this.unhover
                }, capture.value));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            groups.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
              "data-highlight": "group_".concat(gIndex),
              onMouseOver: this.hover,
              onMouseOut: this.unhover
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, res.groups.indexOf(group)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, group.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, captures))));
          } else {
            groups.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
              "data-highlight": "group_".concat(gIndex),
              onMouseOver: this.hover,
              onMouseOut: this.unhover
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, res.groups.indexOf(group)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, group.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null)));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Groups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
        className: "table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Captures"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, groups)));
    }
  }]);

  return RegexResult;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function mapProps(state, ownProps) {
  return Object.assign(Object.assign({}, ownProps), {
    regexResult: state.result
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapProps)(RegexResult));

/***/ }),

/***/ "./scripts/react/Components/RegexResultSummary.tsx":
/*!*********************************************************!*\
  !*** ./scripts/react/Components/RegexResultSummary.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RegexResultSummary = /*#__PURE__*/function (_React$Component) {
  _inherits(RegexResultSummary, _React$Component);

  var _super = _createSuper(RegexResultSummary);

  function RegexResultSummary(props) {
    _classCallCheck(this, RegexResultSummary);

    return _super.call(this, props);
  }

  _createClass(RegexResultSummary, [{
    key: "render",
    value: function render() {
      var res = this.props.regexResult;
      if (!res) return null;
      if (!res.success) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "nomatch"
      }, "No Match");
      var input = res.input || "";
      var unmatchedStart = input.substr(0, res.groups[0].index);
      var unmatchedEnd = input.substr(res.groups[0].index + res.groups[0].length);
      var groups = [];
      var pos = unmatchedStart.length;

      var _iterator = _createForOfIteratorHelper(res.groups.slice(1)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          if (!group.success || group.captures.length === 0 || group.captures[0].index < pos) continue;

          var _ungrouped = input.substring(pos, group.captures[0].index);

          if (_ungrouped.length > 0) {
            groups.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, _ungrouped));
            pos += _ungrouped.length;
          }

          var captures = [];
          var gIndex = res.groups.indexOf(group);

          var _iterator2 = _createForOfIteratorHelper(group.captures),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var capture = _step2.value;
              var uncaptured = input.substring(pos, capture.index);

              if (uncaptured.length > 0) {
                captures.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, uncaptured));
              }

              captures.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
                id: "capture_" + gIndex + "_" + group.captures.indexOf(capture)
              }, capture.value));
              pos = capture.index + capture.length;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          groups.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            id: "group_" + gIndex
          }, captures));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (pos < input.length) {
        var ungrouped = input.substring(pos, input.length - unmatchedEnd.length);

        if (ungrouped.length > 0) {
          groups.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ungrouped));
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "nonmatch start"
      }, unmatchedStart), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "match"
      }, groups), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "nonmatch end"
      }, unmatchedEnd));
    }
  }]);

  return RegexResultSummary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function mapProps(state, ownProps) {
  return Object.assign(Object.assign({}, ownProps), {
    regexResult: state.result
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapProps)(RegexResultSummary));

/***/ }),

/***/ "./scripts/react/Components/TextBox.tsx":
/*!**********************************************!*\
  !*** ./scripts/react/Components/TextBox.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var TextBox = function TextBox(_a) {
  var className = _a.className,
      label = _a.label,
      props = __rest(_a, ["className", "label"]);

  className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, props.readOnly === true ? "form-control-plaintext" : "form-control");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: props.id,
    className: "control-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", Object.assign({
    type: "text",
    className: className
  }, props)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBox);

/***/ }),

/***/ "./scripts/react/Core.ts":
/*!*******************************!*\
  !*** ./scripts/react/Core.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataAction": () => (/* binding */ dataAction),
/* harmony export */   "ready": () => (/* binding */ ready),
/* harmony export */   "simpleAction": () => (/* binding */ simpleAction)
/* harmony export */ });
function ready(fn) {
  document.addEventListener("DOMContentLoaded", fn);
}

Array.prototype.selectMany = function (func) {
  var result = [];
  this.forEach(function (o) {
    return result.push(func(o));
  });
  return result;
};

function simpleAction(type) {
  return {
    type: type
  };
}
function dataAction(type, data) {
  return {
    data: data,
    type: type
  };
}

/***/ }),

/***/ "./scripts/react/IPv4Address.ts":
/*!**************************************!*\
  !*** ./scripts/react/IPv4Address.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPv4Address": () => (/* binding */ IPv4Address),
/* harmony export */   "IPv4AddressWithCIDR": () => (/* binding */ IPv4AddressWithCIDR)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var IPv4Address = /*#__PURE__*/function () {
  function IPv4Address(octet1, octet2, octet3, octet4) {
    var _this = this;

    _classCallCheck(this, IPv4Address);

    this.toString = function () {
      return _this.octet1 + "." + _this.octet2 + "." + _this.octet3 + "." + _this.octet4;
    };

    this.toUInt32 = function () {
      var split = _this.getAddressBytes();

      var result = 0;

      for (var i = 0, j = 24; i < split.length; i++, j -= 8) {
        result += split[i] << j;
      }

      return result;
    };

    this.toCidr = function (mask) {
      var bitCheck = -2147483648;
      var reverseCheck = 1;

      var addressNumber = _this.toUInt32();

      var maskNumber = mask.toUInt32();
      var cidrNumber = 0;

      for (var i = 31; i >= 0; i--) {
        if ((bitCheck & maskNumber) === bitCheck) {
          cidrNumber++;
          bitCheck >>= 1;
        } else {
          var reverse = 0;

          for (var j = 0; j < 32; j++) {
            if ((reverseCheck & maskNumber) === 0) {
              reverse++;
              reverseCheck <<= 1;
            } else if (reverse + cidrNumber !== 32) {
              throw new Error("Invalid mask");
            }
          }

          break;
        }
      }

      var byteMask = -16777216;
      var maskedAddress = addressNumber & maskNumber;
      var newIp = [];

      for (var _i = 0; _i < 4; _i++) {
        newIp.push((maskedAddress & byteMask) >>> (3 - _i) * 8);
        byteMask >>>= 8;
      }

      return new IPv4AddressWithCIDR(newIp[0], newIp[1], newIp[2], newIp[3], cidrNumber);
    };

    this.octet1 = octet1;
    this.octet2 = octet2;
    this.octet3 = octet3;
    this.octet4 = octet4;
  }

  _createClass(IPv4Address, [{
    key: "octet1",
    get: function get() {
      return this._octet1;
    },
    set: function set(value) {
      if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
      this._octet1 = value;
    }
  }, {
    key: "octet2",
    get: function get() {
      return this._octet2;
    },
    set: function set(value) {
      if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
      this._octet2 = value;
    }
  }, {
    key: "octet3",
    get: function get() {
      return this._octet3;
    },
    set: function set(value) {
      if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
      this._octet3 = value;
    }
  }, {
    key: "octet4",
    get: function get() {
      return this._octet4;
    },
    set: function set(value) {
      if (value === undefined || value === null || value < 0 || value > 255) throw new Error("Invalid address");
      this._octet4 = value;
    }
  }, {
    key: "getAddressBytes",
    value: function getAddressBytes() {
      return [this.octet1, this.octet2, this.octet3, this.octet4];
    }
  }]);

  return IPv4Address;
}();
var IPv4AddressWithCIDR = /*#__PURE__*/function (_IPv4Address) {
  _inherits(IPv4AddressWithCIDR, _IPv4Address);

  var _super = _createSuper(IPv4AddressWithCIDR);

  function IPv4AddressWithCIDR(octet1, octet2, octet3, octet4, cidrNumber) {
    var _this2;

    _classCallCheck(this, IPv4AddressWithCIDR);

    _this2 = _super.call(this, octet1, octet2, octet3, octet4);

    _this2.toString = function () {
      return _this2.octet1 + "." + _this2.octet2 + "." + _this2.octet3 + "." + _this2.octet4 + "/" + _this2.mask;
    };

    _this2.mask = cidrNumber;
    return _this2;
  }

  return _createClass(IPv4AddressWithCIDR);
}(IPv4Address);

/***/ }),

/***/ "./scripts/react/Redux/Cidr/ActionTypes.ts":
/*!*************************************************!*\
  !*** ./scripts/react/Redux/Cidr/ActionTypes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetCidrFailure": () => (/* binding */ GetCidrFailure),
/* harmony export */   "GetCidrRequest": () => (/* binding */ GetCidrRequest),
/* harmony export */   "GetCidrSuccess": () => (/* binding */ GetCidrSuccess),
/* harmony export */   "IPChanging": () => (/* binding */ IPChanging),
/* harmony export */   "MaskChanging": () => (/* binding */ MaskChanging)
/* harmony export */ });
var GetCidrRequest = "GetCidrRequest";
var GetCidrSuccess = "GetCidrSuccess";
var GetCidrFailure = "GetCidrFailure";
var IPChanging = "IPChanging";
var MaskChanging = "MaskChanging";

/***/ }),

/***/ "./scripts/react/Redux/Cidr/Actions.ts":
/*!*********************************************!*\
  !*** ./scripts/react/Redux/Cidr/Actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCidrFailure": () => (/* binding */ getCidrFailure),
/* harmony export */   "getCidrRequest": () => (/* binding */ getCidrRequest),
/* harmony export */   "getCidrSuccess": () => (/* binding */ getCidrSuccess),
/* harmony export */   "ipChanging": () => (/* binding */ ipChanging),
/* harmony export */   "maskChanging": () => (/* binding */ maskChanging)
/* harmony export */ });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core */ "./scripts/react/Core.ts");
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionTypes */ "./scripts/react/Redux/Cidr/ActionTypes.ts");


var getCidrRequest = function getCidrRequest() {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.simpleAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.GetCidrRequest);
};
var getCidrSuccess = function getCidrSuccess(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.GetCidrSuccess, data);
};
var getCidrFailure = function getCidrFailure(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.GetCidrFailure, data);
};
var ipChanging = function ipChanging(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.IPChanging, data);
};
var maskChanging = function maskChanging(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.MaskChanging, data);
};

/***/ }),

/***/ "./scripts/react/Redux/Cidr/Reducers.ts":
/*!**********************************************!*\
  !*** ./scripts/react/Redux/Cidr/Reducers.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes */ "./scripts/react/Redux/Cidr/ActionTypes.ts");

var initialState = {
  cidr: null,
  ipAddress: null,
  isGetting: false,
  netMask: null
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.GetCidrRequest:
      return Object.assign(Object.assign({}, state), {
        isGetting: true
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.GetCidrSuccess:
      return Object.assign(Object.assign({}, state), {
        cidr: action.data,
        isGetting: false
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.GetCidrFailure:
      return Object.assign(Object.assign({}, state), {
        cidr: null,
        isGetting: false
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.IPChanging:
      return Object.assign(Object.assign({}, state), {
        ipAddress: action.data
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.MaskChanging:
      return Object.assign(Object.assign({}, state), {
        netMask: action.data
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./scripts/react/Redux/Regex/ActionTypes.ts":
/*!**************************************************!*\
  !*** ./scripts/react/Redux/Regex/ActionTypes.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetTestResultFailure": () => (/* binding */ GetTestResultFailure),
/* harmony export */   "GetTestResultRequest": () => (/* binding */ GetTestResultRequest),
/* harmony export */   "GetTestResultSuccess": () => (/* binding */ GetTestResultSuccess),
/* harmony export */   "InputChanged": () => (/* binding */ InputChanged),
/* harmony export */   "InputChanging": () => (/* binding */ InputChanging),
/* harmony export */   "RegexChanged": () => (/* binding */ RegexChanged),
/* harmony export */   "RegexChanging": () => (/* binding */ RegexChanging)
/* harmony export */ });
var GetTestResultRequest = "GetTestResultRequest";
var GetTestResultSuccess = "GetTestResultSuccess";
var GetTestResultFailure = "GetTestResultFailure";
var RegexChanging = "RegexChanging";
var RegexChanged = "RegexChanged";
var InputChanging = "InputChanging";
var InputChanged = "InputChanged";

/***/ }),

/***/ "./scripts/react/Redux/Regex/Actions.ts":
/*!**********************************************!*\
  !*** ./scripts/react/Redux/Regex/Actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTestResultFailure": () => (/* binding */ getTestResultFailure),
/* harmony export */   "getTestResultRequest": () => (/* binding */ getTestResultRequest),
/* harmony export */   "getTestResultSuccess": () => (/* binding */ getTestResultSuccess),
/* harmony export */   "inputChanged": () => (/* binding */ inputChanged),
/* harmony export */   "inputChanging": () => (/* binding */ inputChanging),
/* harmony export */   "regexChanged": () => (/* binding */ regexChanged),
/* harmony export */   "regexChanging": () => (/* binding */ regexChanging)
/* harmony export */ });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core */ "./scripts/react/Core.ts");
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionTypes */ "./scripts/react/Redux/Regex/ActionTypes.ts");


var getTestResultRequest = function getTestResultRequest() {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.simpleAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.GetTestResultRequest);
};
var getTestResultSuccess = function getTestResultSuccess(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.GetTestResultSuccess, data);
};
var getTestResultFailure = function getTestResultFailure(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.GetTestResultFailure, data);
};
var regexChanging = function regexChanging(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.RegexChanging, data);
};
var regexChanged = function regexChanged() {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.simpleAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.RegexChanged);
};
var inputChanging = function inputChanging(data) {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.dataAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.InputChanging, data);
};
var inputChanged = function inputChanged() {
  return (0,_Core__WEBPACK_IMPORTED_MODULE_0__.simpleAction)(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__.InputChanged);
};

/***/ }),

/***/ "./scripts/react/Redux/Regex/Reducers.ts":
/*!***********************************************!*\
  !*** ./scripts/react/Redux/Regex/Reducers.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes */ "./scripts/react/Redux/Regex/ActionTypes.ts");

var initialState = {
  input: null,
  isTesting: false,
  regex: null,
  result: null
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.GetTestResultRequest:
      return Object.assign(Object.assign({}, state), {
        isTesting: true
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.GetTestResultSuccess:
      return Object.assign(Object.assign({}, state), {
        isTesting: false,
        result: action.data
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.GetTestResultFailure:
      return Object.assign(Object.assign({}, state), {
        isTesting: false,
        result: null
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.RegexChanging:
      return Object.assign(Object.assign({}, state), {
        regex: action.data
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.InputChanging:
      return Object.assign(Object.assign({}, state), {
        input: action.data
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./scripts/react/Tools/Base64.tsx":
/*!****************************************!*\
  !*** ./scripts/react/Tools/Base64.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base64)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Base64 = /*#__PURE__*/function (_React$Component) {
  _inherits(Base64, _React$Component);

  var _super = _createSuper(Base64);

  function Base64(props) {
    var _this;

    _classCallCheck(this, Base64);

    _this = _super.call(this, props);

    _this.inputChanged = function (e) {
      return _this.setState({
        input: e.currentTarget.value
      });
    };

    _this.xCode = function (e) {
      var resultValue;

      try {
        resultValue = _this.b64DecodeUnicode(_this.state.input);
      } catch (e) {
        resultValue = _this.b64EncodeUnicode(_this.state.input);
      }

      _this.setState({
        output: resultValue.toString()
      });
    };

    _this.b64EncodeUnicode = function (str) {
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_, p1) {
        return String.fromCharCode(+("0x" + p1));
      }));
    };

    _this.b64DecodeUnicode = function (str) {
      return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
    };

    _this.state = {
      input: props.input
    };
    return _this;
  }

  _createClass(Base64, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "theString",
        className: "control-label"
      }, "String to encode / decode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
        className: "form-control",
        id: "source",
        spellCheck: false,
        onChange: this.inputChanged
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "btn btn-primary mb-3",
        id: "encodeDecode",
        onClick: this.xCode
      }, "Encode / Decode")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-md-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "result",
        className: "control-label"
      }, "Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
        className: "form-control",
        id: "result",
        spellCheck: false,
        value: this.state.output
      })))));
    }
  }]);

  return Base64;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./scripts/react/Tools/Cidr.tsx":
/*!**************************************!*\
  !*** ./scripts/react/Tools/Cidr.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/Cidr/Actions */ "./scripts/react/Redux/Cidr/Actions.ts");
/* harmony import */ var _Components_IPAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/IPAddress */ "./scripts/react/Components/IPAddress.tsx");
/* harmony import */ var _Components_TextBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/TextBox */ "./scripts/react/Components/TextBox.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Cidr = /*#__PURE__*/function (_React$Component) {
  _inherits(Cidr, _React$Component);

  var _super = _createSuper(Cidr);

  function Cidr(props) {
    var _this;

    _classCallCheck(this, Cidr);

    _this = _super.call(this, props);
    _this.stateChangedDB = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.stateChanged, 250);
    _this.ipChanged = _this.ipChanged.bind(_assertThisInitialized(_this));
    _this.maskChanged = _this.maskChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cidr, [{
    key: "render",
    value: function render() {
      var result = null;

      if (this.props.cidr) {
        result = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_TextBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: "result",
          className: "clickable",
          value: this.props.cidr,
          readOnly: true,
          label: "CIDR Notation",
          onClick: function onClick(e) {
            return navigator.clipboard.writeText(e.currentTarget.value);
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_IPAddress__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "address",
        label: "IP Address",
        value: this.props.ipAddress,
        onChange: this.ipChanged
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_IPAddress__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "mask",
        label: "Subnet Mask",
        value: this.props.netMask,
        onChange: this.maskChanged
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "col cidr-result "
      }, result)));
    }
  }, {
    key: "ipChanged",
    value: function ipChanged(e) {
      this.stateChangedDB(e, this.props.netMask);
      this.props.ipChanged(e);
    }
  }, {
    key: "maskChanged",
    value: function maskChanged(e) {
      this.stateChangedDB(this.props.ipAddress, e);
      this.props.maskChanged(e);
    }
  }]);

  return Cidr;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

function mapProps(state, ownProps) {
  return Object.assign(Object.assign({}, ownProps), {
    cidr: state.cidr,
    ipAddress: state.ipAddress,
    netMask: state.netMask
  });
}

function mapDispatchToProps(dispatch) {
  return {
    ipChanged: function ipChanged(ip) {
      dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__.ipChanging(ip));
    },
    maskChanged: function maskChanged(mask) {
      dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__.maskChanging(mask));
    },
    stateChanged: function stateChanged(ip, mask) {
      if (ip === null || mask === null) return;
      var cidr = ip.toCidr(mask).toString();
      dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__.getCidrSuccess(cidr));
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapProps, mapDispatchToProps)(Cidr));

/***/ }),

/***/ "./scripts/react/Tools/Colours.tsx":
/*!*****************************************!*\
  !*** ./scripts/react/Tools/Colours.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colours": () => (/* binding */ Colours),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_ColourGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/ColourGrid */ "./scripts/react/Components/ColourGrid.tsx");
/* harmony import */ var _Components_ColourGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/ColourGroup */ "./scripts/react/Components/ColourGroup.tsx");



var Colours = function Colours() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ColourGroup__WEBPACK_IMPORTED_MODULE_2__.ColourGroup, {
    title: "Core Colours",
    colours: coreColours
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ColourGroup__WEBPACK_IMPORTED_MODULE_2__.ColourGroup, {
    title: "Secondary Colours",
    colours: secondaryColours
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ColourGroup__WEBPACK_IMPORTED_MODULE_2__.ColourGroup, {
    title: "VS Colours",
    colours: vsColours
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ColourGrid__WEBPACK_IMPORTED_MODULE_1__.ColourGrid, {
    title: "Blues",
    colours: blues
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ColourGrid__WEBPACK_IMPORTED_MODULE_1__.ColourGrid, {
    title: "Reds",
    colours: reds
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colours);
var coreColours = [{
  name: "Dark",
  r: 0x14,
  g: 0x25,
  b: 0x2c
}, {
  name: "Blue",
  r: 0x73,
  g: 0xbe,
  b: 0xe9
}, {
  name: "Bone",
  r: 0xf8,
  g: 0xf8,
  b: 0xd2
}];
var secondaryColours = [{
  name: "Lighter",
  r: 0x29,
  g: 0x33,
  b: 0x3D
}, {
  name: "Rich Blue",
  r: 0x3C,
  g: 0x74,
  b: 0xA8
}, {
  name: "Light Blue",
  r: 0xAA,
  g: 0xDC,
  b: 0xF7
}, {
  name: "Muted Bone",
  r: 0xDA,
  g: 0xDA,
  b: 0xD3
}];
var vsColours = [{
  name: "Keyword",
  r: 0x81,
  g: 0xE2,
  b: 0x81
}];
var blues = [{
  name: "Blue (Crayola)",
  r: 0x1F,
  g: 0x75,
  b: 0xFE
}, {
  name: "Periwinkle",
  r: 0xCC,
  g: 0xCC,
  b: 0xFF
}, {
  name: "Ultramarine",
  r: 0x40,
  g: 0x00,
  b: 0xFF
}, {
  name: "Medium Blue",
  r: 0x00,
  g: 0x00,
  b: 0xCD
}, {
  name: "Savoy blue",
  r: 0x4B,
  g: 0x61,
  b: 0xD1
}, {
  name: "Liberty",
  r: 0x54,
  g: 0x5A,
  b: 0xA7
}, {
  name: "Egyptian Blue",
  r: 0x10,
  g: 0x34,
  b: 0xA6
}, {
  name: "Neon Blue",
  r: 0x4D,
  g: 0x4D,
  b: 0xFF
}, {
  name: "Dark Blue",
  r: 0x00,
  g: 0x00,
  b: 0x8B
}, {
  name: "Picotee Blue",
  r: 0x2E,
  g: 0x27,
  b: 0x87
}, {
  name: "Navy Blue",
  r: 0x00,
  g: 0x00,
  b: 0x80
}, {
  name: "Midnight Blue",
  r: 0x19,
  g: 0x19,
  b: 0x70
}, {
  name: "Independence",
  r: 0x4C,
  g: 0x51,
  b: 0x6D
}, {
  name: "Space Cadet",
  r: 0x1E,
  g: 0x29,
  b: 0x52
}, {
  name: "International Klein Blue",
  r: 0x12,
  g: 0x0A,
  b: 0x8F
}, {
  name: "Original Blurple",
  r: 0x72,
  g: 0x89,
  b: 0xda
}, {
  name: "Blurple",
  r: 0x58,
  g: 0x65,
  b: 0xf2
}, {
  name: "Cool black",
  r: 0x00,
  g: 0x2E,
  b: 0x63
}, {
  name: "Baby blue",
  r: 0x89,
  g: 0xCF,
  b: 0xF0
}, {
  name: "Light blue",
  r: 0xAD,
  g: 0xD8,
  b: 0xE6
}, {
  name: "Powder Blue",
  r: 0xB0,
  g: 0xE0,
  b: 0xE6
}, {
  name: "Uranian Blue",
  r: 0xAF,
  g: 0xDB,
  b: 0xF5
}, {
  name: "Argentinian Blue",
  r: 0x6C,
  g: 0xB4,
  b: 0xEE
}, {
  name: "Ruddy Blue",
  r: 0x76,
  g: 0xAB,
  b: 0xDF
}, {
  name: "Celtic Blue",
  r: 0x24,
  g: 0x6B,
  b: 0xCE
}, {
  name: "Spanish Blue",
  r: 0x00,
  g: 0x70,
  b: 0xBB
}, {
  name: "Bleu de France",
  r: 0x31,
  g: 0x8C,
  b: 0xE7
}, {
  name: "Delft Blue",
  r: 0x1F,
  g: 0x30,
  b: 0x5E
}, {
  name: "Duck Blue",
  r: 0x00,
  g: 0x77,
  b: 0x91
}, {
  name: "Resolution Blue",
  r: 0x00,
  g: 0x23,
  b: 0x87
}, {
  name: "Polynesian Blue",
  r: 0x22,
  g: 0x4C,
  b: 0x98
}, {
  name: "Moroccan Blue",
  r: 0x46,
  g: 0x8f,
  b: 0xea
}, {
  name: "Sapphire",
  r: 0x08,
  g: 0x25,
  b: 0x67
}, {
  name: "Fluorescent blue",
  r: 0x15,
  g: 0xF4,
  b: 0xEE
}, {
  name: "Yale Blue",
  r: 0x00,
  g: 0x35,
  b: 0x6B
}, {
  name: "Teal blue",
  r: 0x36,
  g: 0x75,
  b: 0x88
}];
var reds = [{
  name: "Amaranth purple",
  r: 0xAB,
  g: 0x27,
  b: 0x4F
}, {
  name: "Barn red",
  r: 0x7C,
  g: 0x09,
  b: 0x02
}, {
  name: "Bittersweet",
  r: 0xFE,
  g: 0x6F,
  b: 0x5E
}, {
  name: "Bittersweet shimmer",
  r: 0xBF,
  g: 0x4F,
  b: 0x51
}, {
  name: "Blood red",
  r: 0x66,
  g: 0x00,
  b: 0x00
}, {
  name: "Bright pink (Crayola)",
  r: 0xFB,
  g: 0x60,
  b: 0x7F
}, {
  name: "Burgundy",
  r: 0x80,
  g: 0x00,
  b: 0x20
}, {
  name: "Candy apple red",
  r: 0xFF,
  g: 0x08,
  b: 0x00
}, {
  name: "Cantaloupe melon",
  r: 0xFD,
  g: 0xBC,
  b: 0xB4
}, {
  name: "Cardinal",
  r: 0xC5,
  g: 0x1E,
  b: 0x3A
}, {
  name: "Carmine",
  r: 0x96,
  g: 0x00,
  b: 0x18
}, {
  name: "Cerise",
  r: 0xDE,
  g: 0x31,
  b: 0x63
}, {
  name: "Chili red",
  r: 0xE2,
  g: 0x3D,
  b: 0x28
}, {
  name: "Chocolate cosmos",
  r: 0x58,
  g: 0x11,
  b: 0x1A
}, {
  name: "Cinnabar",
  r: 0xE4,
  g: 0x4D,
  b: 0x2E
}, {
  name: "Coquelicot",
  r: 0xFF,
  g: 0x38,
  b: 0x00
}, {
  name: "Coral pink",
  r: 0xF8,
  g: 0x83,
  b: 0x79
}, {
  name: "Cordovan",
  r: 0x89,
  g: 0x3F,
  b: 0x45
}, {
  name: "Cornell red",
  r: 0xB3,
  g: 0x1B,
  b: 0x1B
}, {
  name: "Crimson",
  r: 0xDC,
  g: 0x14,
  b: 0x3C
}, {
  name: "Dark red",
  r: 0x8B,
  g: 0x00,
  b: 0x00
}, {
  name: "Fire brick",
  r: 0xB2,
  g: 0x22,
  b: 0x22
}, {
  name: "Fire engine red",
  r: 0xCE,
  g: 0x20,
  b: 0x29
}, {
  name: "Folly",
  r: 0xFF,
  g: 0x00,
  b: 0x4F
}, {
  name: "Garnet",
  r: 0x73,
  g: 0x36,
  b: 0x35
}, {
  name: "Imperial red",
  r: 0xED,
  g: 0x29,
  b: 0x39
}, {
  name: "Indian red",
  r: 0xCD,
  g: 0x5C,
  b: 0x5C
}, {
  name: "Jasper",
  r: 0xD0,
  g: 0x53,
  b: 0x40
}, {
  name: "Light coral",
  r: 0xF0,
  g: 0x80,
  b: 0x80
}, {
  name: "Light red",
  r: 0xFF,
  g: 0x7F,
  b: 0x7F
}, {
  name: "Madder",
  r: 0xA5,
  g: 0x00,
  b: 0x21
}, {
  name: "Mahogany",
  r: 0xC0,
  g: 0x40,
  b: 0x00
}, {
  name: "Maroon",
  r: 0x80,
  g: 0x00,
  b: 0x00
}, {
  name: "Misty rose",
  r: 0xFF,
  g: 0xE4,
  b: 0xE1
}, {
  name: "Off-red (RGB)",
  r: 0xFE,
  g: 0x00,
  b: 0x00
}, {
  name: "Old rose",
  r: 0xC0,
  g: 0x80,
  b: 0x81
}, {
  name: "OU crimson",
  r: 0x84,
  g: 0x16,
  b: 0x17
}, {
  name: "Penn red",
  r: 0x99,
  g: 0x00,
  b: 0x00
}, {
  name: "Persian red",
  r: 0xCC,
  g: 0x33,
  b: 0x33
}, {
  name: "Pink",
  r: 0xFF,
  g: 0xC0,
  b: 0xCB
}, {
  name: "Red",
  r: 0xFF,
  g: 0x00,
  b: 0x00
}, {
  name: "Red-brown",
  r: 0xA5,
  g: 0x2A,
  b: 0x2A
}, {
  name: "Red (CMYK)",
  r: 0xED,
  g: 0x1B,
  b: 0x24
}, {
  name: "Red (Crayola)",
  r: 0xEE,
  g: 0x20,
  b: 0x4E
}, {
  name: "Red (Munsell)",
  r: 0xF2,
  g: 0x00,
  b: 0x3C
}, {
  name: "Red (NCS)",
  r: 0xC4,
  g: 0x02,
  b: 0x34
}, {
  name: "Red (Pantone)",
  r: 0xED,
  g: 0x28,
  b: 0x39
}, {
  name: "Redwood",
  r: 0xAB,
  g: 0x4E,
  b: 0x52
}, {
  name: "Rojo",
  r: 0xE6,
  g: 0x00,
  b: 0x26
}, {
  name: "Rose ebony",
  r: 0x67,
  g: 0x48,
  b: 0x46
}, {
  name: "Rose red",
  r: 0xC2,
  g: 0x1E,
  b: 0x56
}, {
  name: "Rose taupe",
  r: 0x90,
  g: 0x5D,
  b: 0x5D
}, {
  name: "Rose vale",
  r: 0xAB,
  g: 0x4E,
  b: 0x52
}, {
  name: "Rosewood",
  r: 0x65,
  g: 0x00,
  b: 0x0B
}, {
  name: "Rosy brown",
  r: 0xBC,
  g: 0x8F,
  b: 0x8F
}, {
  name: "Rust",
  r: 0xB7,
  g: 0x41,
  b: 0x0E
}, {
  name: "Rusty red",
  r: 0xDA,
  g: 0x2C,
  b: 0x43
}, {
  name: "Salmon",
  r: 0xFA,
  g: 0x80,
  b: 0x72
}, {
  name: "Salmon pink",
  r: 0xFF,
  g: 0x91,
  b: 0xA4
}, {
  name: "Scarlet",
  r: 0xFF,
  g: 0x24,
  b: 0x00
}, {
  name: "Syracuse red-orange",
  r: 0xD4,
  g: 0x45,
  b: 0x00
}, {
  name: "Tea rose (red)",
  r: 0xF4,
  g: 0xC2,
  b: 0xC2
}, {
  name: "Tomato",
  r: 0xFF,
  g: 0x63,
  b: 0x47
}, {
  name: "Turkey red",
  r: 0xA9,
  g: 0x11,
  b: 0x01
}, {
  name: "Vermilion",
  r: 0xE3,
  g: 0x42,
  b: 0x34
}, {
  name: "Wine",
  r: 0x72,
  g: 0x2F,
  b: 0x37
}];

/***/ }),

/***/ "./scripts/react/Tools/Regex.tsx":
/*!***************************************!*\
  !*** ./scripts/react/Tools/Regex.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/Regex/Actions */ "./scripts/react/Redux/Regex/Actions.ts");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Service */ "./scripts/react/Tools/Service.ts");
/* harmony import */ var _Components_RegexResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/RegexResult */ "./scripts/react/Components/RegexResult.tsx");
/* harmony import */ var _Components_RegexResultSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/RegexResultSummary */ "./scripts/react/Components/RegexResultSummary.tsx");
/* harmony import */ var _Components_TextBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/TextBox */ "./scripts/react/Components/TextBox.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var Regex = /*#__PURE__*/function (_React$Component) {
  _inherits(Regex, _React$Component);

  var _super = _createSuper(Regex);

  function Regex(props) {
    var _this;

    _classCallCheck(this, Regex);

    _this = _super.call(this, props);
    _this.stateChangedDB = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.stateChanged, 250);
    _this.regexChanged = _this.regexChanged.bind(_assertThisInitialized(_this));
    _this.inputChanged = _this.inputChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Regex, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "col-md-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_TextBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "regex",
        label: "Regular Expression",
        value: this.props.regex,
        onChange: this.regexChanged
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_TextBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "text",
        label: "Input",
        value: this.props.input,
        onChange: this.inputChanged,
        maxLength: 50
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
        className: "row mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "col-md-4 regex-result-summary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_RegexResultSummary__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
        className: "row mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "col-md-4 regex-result"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_RegexResult__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
    }
  }, {
    key: "regexChanged",
    value: function regexChanged(e) {
      this.stateChangedDB(e.target.value, this.props.input);
      this.props.regexChanged(e.target.value);
    }
  }, {
    key: "inputChanged",
    value: function inputChanged(e) {
      this.stateChangedDB(this.props.regex, e.target.value);
      this.props.inputChanged(e.target.value);
    }
  }]);

  return Regex;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

function mapProps(state, ownProps) {
  return Object.assign(Object.assign({}, ownProps), {
    input: state.input,
    regex: state.regex
  });
}

function mapDispatchToProps(dispatch) {
  return {
    inputChanged: function inputChanged(input) {
      dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_3__.inputChanging(input));
    },
    regexChanged: function regexChanged(regex) {
      dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_3__.regexChanging(regex));
    },
    stateChanged: function stateChanged(regex, input) {
      dispatch((0,_Service__WEBPACK_IMPORTED_MODULE_4__.regexTest)(regex, input));
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapProps, mapDispatchToProps)(Regex));

/***/ }),

/***/ "./scripts/react/Tools/Service.ts":
/*!****************************************!*\
  !*** ./scripts/react/Tools/Service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cidrTest": () => (/* binding */ cidrTest),
/* harmony export */   "regexTest": () => (/* binding */ regexTest)
/* harmony export */ });
/* harmony import */ var _Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Cidr/Actions */ "./scripts/react/Redux/Cidr/Actions.ts");
/* harmony import */ var _Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/Regex/Actions */ "./scripts/react/Redux/Regex/Actions.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



function regexTest(regex, input) {
  var _this = this;

  return function (dispatch) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var request, response, regexResult;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__.getTestResultRequest());
              request = {
                regex: regex,
                text: input
              };
              _context.prev = 2;
              _context.next = 5;
              return fetch("/tools/api/regex", {
                body: JSON.stringify(request),
                headers: new Headers({
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                }),
                method: "POST"
              });

            case 5:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 14;
                break;
              }

              _context.next = 9;
              return response.json();

            case 9:
              regexResult = _context.sent;
              regexResult.input = input;
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__.getTestResultSuccess(regexResult));
              _context.next = 15;
              break;

            case 14:
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__.getTestResultFailure(response.status));

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__.getTestResultFailure(_context.t0));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 17]]);
    }));
  };
}
function cidrTest(ipAddress, subnetMask) {
  var _this2 = this;

  return function (dispatch) {
    return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var response, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__.getCidrRequest());
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("/tools/api/cidr?ipaddress=".concat(ipAddress.toString(), "&subnetmask=").concat(subnetMask.toString()), {
                headers: new Headers({
                  Accept: "application/json"
                }),
                method: "GET"
              });

            case 4:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 12;
                break;
              }

              _context2.next = 8;
              return response.json();

            case 8:
              result = _context2.sent;
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__.getCidrSuccess(result));
              _context2.next = 13;
              break;

            case 12:
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__.getCidrFailure(response.status));

            case 13:
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__.getCidrFailure(_context2.t0));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 15]]);
    }));
  };
}

/***/ }),

/***/ "./scripts/react/Tools/Tool.ts":
/*!*************************************!*\
  !*** ./scripts/react/Tools/Tool.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tools": () => (/* binding */ tools)
/* harmony export */ });
/* harmony import */ var _Redux_Cidr_Reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Cidr/Reducers */ "./scripts/react/Redux/Cidr/Reducers.ts");
/* harmony import */ var _Redux_Regex_Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/Regex/Reducers */ "./scripts/react/Redux/Regex/Reducers.ts");
/* harmony import */ var _Base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base64 */ "./scripts/react/Tools/Base64.tsx");
/* harmony import */ var _Cidr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cidr */ "./scripts/react/Tools/Cidr.tsx");
/* harmony import */ var _Regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regex */ "./scripts/react/Tools/Regex.tsx");
/* harmony import */ var _Colours__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Colours */ "./scripts/react/Tools/Colours.tsx");






var tools = [{
  component: _Regex__WEBPACK_IMPORTED_MODULE_4__["default"],
  initialState: _Redux_Regex_Reducers__WEBPACK_IMPORTED_MODULE_1__.initialState,
  name: "regex",
  reducer: _Redux_Regex_Reducers__WEBPACK_IMPORTED_MODULE_1__.reducer
}, {
  component: _Cidr__WEBPACK_IMPORTED_MODULE_3__["default"],
  initialState: _Redux_Cidr_Reducers__WEBPACK_IMPORTED_MODULE_0__.initialState,
  name: "cidr",
  reducer: _Redux_Cidr_Reducers__WEBPACK_IMPORTED_MODULE_0__.reducer
}, {
  component: _Base64__WEBPACK_IMPORTED_MODULE_2__["default"],
  initialState: {},
  name: "base64",
  reducer: function reducer(state) {
    return state;
  }
}, {
  component: _Colours__WEBPACK_IMPORTED_MODULE_5__["default"],
  initialState: {},
  name: "colours",
  reducer: function reducer(state) {
    return state;
  }
}];

/***/ }),

/***/ "./scripts/react/helpers/functions.ts":
/*!********************************************!*\
  !*** ./scripts/react/helpers/functions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colourToClipboard": () => (/* binding */ colourToClipboard)
/* harmony export */ });
/* harmony import */ var _model_Colour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Colour */ "./scripts/react/model/Colour.ts");

var colourToClipboard = function colourToClipboard(colour) {
  return navigator.clipboard.writeText((0,_model_Colour__WEBPACK_IMPORTED_MODULE_0__.toHex)(colour));
};

/***/ }),

/***/ "./scripts/react/model/Colour.ts":
/*!***************************************!*\
  !*** ./scripts/react/model/Colour.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toHex": () => (/* binding */ toHex),
/* harmony export */   "toRgb": () => (/* binding */ toRgb)
/* harmony export */ });
var toHex = function toHex(colour) {
  return "#".concat(colour.r.toString(16).padStart(2, "0")).concat(colour.g.toString(16).padStart(2, "0")).concat(colour.b.toString(16).padStart(2, "0"));
};
var toRgb = function toRgb(colour) {
  return "".concat(colour.r, ", ").concat(colour.g, ", ").concat(colour.b);
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = ReactRedux;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = Redux;

/***/ }),

/***/ "redux-thunk":
/*!*****************************!*\
  !*** external "ReduxThunk" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = ReduxThunk;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./scripts/react/app.tsx ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Tools_Tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools/Tool */ "./scripts/react/Tools/Tool.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    var possibleTool = _Tools_Tool__WEBPACK_IMPORTED_MODULE_5__.tools.find(function (t) {
      return t.name === props.tool;
    });

    if (!possibleTool) {
      throw Error("Unknown tool: ".concat(props.tool));
    }

    _this.tool = possibleTool;
    var enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__.compose;
    _this.store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_this.tool.reducer, _this.tool.initialState, enhancedCompose((0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_4___default()))));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var EntryPoint = this.tool.component;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: this.store
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EntryPoint, null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var appElement = document.getElementById("app");
var tool = appElement.getAttribute("data-tool") || "regex";
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, {
  tool: tool
}), appElement);
})();

/******/ })()
;
//# sourceMappingURL=reacttools.js.map