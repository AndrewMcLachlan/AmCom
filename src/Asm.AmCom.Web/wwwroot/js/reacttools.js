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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/react/app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
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
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./scripts/react/Components/IPAddress.tsx":
/*!************************************************!*\
  !*** ./scripts/react/Components/IPAddress.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IPAddress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IPv4Address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IPv4Address */ "./scripts/react/IPv4Address.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var IPAddress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IPAddress, _React$Component);

  function IPAddress(props) {
    var _this;

    _classCallCheck(this, IPAddress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IPAddress).call(this, props));

    _this.validateWithDotCheck = function (e) {
      if (e.charCode === 46 && e.currentTarget.value.length > 0) {
        e.currentTarget.nextElementSibling.focus();
        e.stopPropagation();
        e.preventDefault();
      } else {
        _this.validate(e);
      }
    };

    _this.validate = function (e) {
      if (e.charCode > 31 && (e.charCode < 48 || e.charCode > 57)) {
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
            _this.props.onChange(new _IPv4Address__WEBPACK_IMPORTED_MODULE_1__["IPv4Address"](_this.state.octet1, _this.state.octet2, _this.state.octet3, _this.state.octet4));
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        htmlFor: this.props.id,
        className: "control-label"
      }, this.props.label), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "form-inline ip-address"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_1",
        name: "octet1",
        value: this.state.octet1,
        onChange: this.validateMaxWithNext,
        onKeyPress: this.validateWithDotCheck
      }), "\xA0.\xA0", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_2",
        name: "octet2",
        value: this.state.octet2,
        onChange: this.validateMaxWithNext,
        onKeyPress: this.validateWithDotCheck
      }), "\xA0.\xA0", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_3",
        name: "octet3",
        value: this.state.octet3,
        onChange: this.validateMaxWithNext,
        onKeyPress: this.validateWithDotCheck
      }), "\xA0.\xA0", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        max: "255",
        min: "0",
        maxLength: 3,
        className: "form-control",
        id: this.props.id + "_4",
        name: "octet4",
        value: this.state.octet4,
        onChange: this.validateMax,
        onKeyPress: this.validate
      })));
    }
  }]);

  return IPAddress;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./scripts/react/Components/RegexResult.tsx":
/*!**************************************************!*\
  !*** ./scripts/react/Components/RegexResult.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RegexResult =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegexResult, _React$Component);

  function RegexResult(props) {
    var _this;

    _classCallCheck(this, RegexResult);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegexResult).call(this, props));

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
      var groups = new Array(); // Skip the first group as we already display it

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = res.groups.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;
          if (!group.success || group.captures.length === 0) continue;
          var captures = new Array();
          var gIndex = res.groups.indexOf(group);

          if (group.captures && group.captures.length > 1) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = group.captures[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var capture = _step2.value;
                captures.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
                  "data-highlight": "capture_".concat(gIndex, "_").concat(group.captures.indexOf(capture)),
                  onMouseOver: this.hover,
                  onMouseOut: this.unhover
                }, capture.value));
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            groups.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
              "data-highlight": "group_".concat(gIndex),
              onMouseOver: this.hover,
              onMouseOut: this.unhover
            }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, res.groups.indexOf(group)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, group.value), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, captures))));
          } else {
            groups.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
              "data-highlight": "group_".concat(gIndex),
              onMouseOver: this.hover,
              onMouseOut: this.unhover
            }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, res.groups.indexOf(group)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, group.value), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null)));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Groups"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", {
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Number"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Match"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Captures"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, groups)));
    }
  }]);

  return RegexResult;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    regexResult: state.result
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapProps)(RegexResult));

/***/ }),

/***/ "./scripts/react/Components/RegexResultSummary.tsx":
/*!*********************************************************!*\
  !*** ./scripts/react/Components/RegexResultSummary.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RegexResultSummary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegexResultSummary, _React$Component);

  function RegexResultSummary(props) {
    _classCallCheck(this, RegexResultSummary);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegexResultSummary).call(this, props));
  }

  _createClass(RegexResultSummary, [{
    key: "render",
    value: function render() {
      var res = this.props.regexResult;
      if (!res) return null;
      if (!res.success) return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "nomatch"
      }, "No Match");
      var input = res.input || "";
      var unmatchedStart = input.substr(0, res.groups[0].index);
      var unmatchedEnd = input.substr(res.groups[0].index + res.groups[0].length);
      var groups = [];
      var pos = unmatchedStart.length;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = res.groups.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;
          if (!group.success || group.captures.length === 0 || group.captures[0].index < pos) continue;

          var _ungrouped = input.substring(pos, group.captures[0].index);

          if (_ungrouped.length > 0) {
            groups.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, _ungrouped));
            pos += _ungrouped.length;
          }

          var captures = [];
          var gIndex = res.groups.indexOf(group);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = group.captures[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var capture = _step2.value;
              var uncaptured = input.substring(pos, capture.index);

              if (uncaptured.length > 0) {
                captures.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, uncaptured));
              }

              captures.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
                id: "capture_" + gIndex + "_" + group.captures.indexOf(capture)
              }, capture.value));
              pos = capture.index + capture.length;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          groups.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
            id: "group_" + gIndex
          }, captures)); //pos = group.captures[group.captures.length - 1].index + group.captures[group.captures.length - 1].length;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (pos < input.length) {
        var ungrouped = input.substring(pos, input.length - unmatchedEnd.length);

        if (ungrouped.length > 0) {
          groups.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, ungrouped));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "nonmatch start"
      }, unmatchedStart), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "match"
      }, groups), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "nonmatch end"
      }, unmatchedEnd));
    }
  }]);

  return RegexResultSummary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    regexResult: state.result
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapProps)(RegexResultSummary));

/***/ }),

/***/ "./scripts/react/Components/TextBox.tsx":
/*!**********************************************!*\
  !*** ./scripts/react/Components/TextBox.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TextBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextBox, _React$Component);

  function TextBox(props) {
    _classCallCheck(this, TextBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextBox).call(this, props));
  }

  _createClass(TextBox, [{
    key: "render",
    value: function render() {
      var opts = {};
      var className = "form-control";

      if (this.props.readonly === true) {
        opts.readonly = "readonly";
        className = "form-control-plaintext";
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        htmlFor: this.props.id,
        className: "control-label"
      }, this.props.label), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", Object.assign({
        type: "text",
        maxLength: this.props.maxLength,
        className: className,
        id: this.props.id,
        value: this.props.value
      }, opts, {
        onChange: this.props.onChange,
        onKeyUp: this.props.onKeyUp
      })));
    }
  }]);

  return TextBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapProps(state, ownProps) {
  return Object.assign({}, ownProps);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapProps)(TextBox));

/***/ }),

/***/ "./scripts/react/Core.ts":
/*!*******************************!*\
  !*** ./scripts/react/Core.ts ***!
  \*******************************/
/*! exports provided: ready, simpleAction, dataAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleAction", function() { return simpleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataAction", function() { return dataAction; });
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
/*! exports provided: IPv4Address, IPv4AddressWithCIDR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPv4Address", function() { return IPv4Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPv4AddressWithCIDR", function() { return IPv4AddressWithCIDR; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* tslint:disable:max-classes-per-file */
var IPv4Address =
/*#__PURE__*/
function () {
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
    key: "getAddressBytes",
    value: function getAddressBytes() {
      return [this.octet1, this.octet2, this.octet3, this.octet4];
    }
  }, {
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
  }]);

  return IPv4Address;
}();
var IPv4AddressWithCIDR =
/*#__PURE__*/
function (_IPv4Address) {
  _inherits(IPv4AddressWithCIDR, _IPv4Address);

  function IPv4AddressWithCIDR(octet1, octet2, octet3, octet4, cidrNumber) {
    var _this2;

    _classCallCheck(this, IPv4AddressWithCIDR);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(IPv4AddressWithCIDR).call(this, octet1, octet2, octet3, octet4));

    _this2.toString = function () {
      return _this2.octet1 + "." + _this2.octet2 + "." + _this2.octet3 + "." + _this2.octet4 + "/" + _this2.mask;
    };

    _this2.mask = cidrNumber;
    return _this2;
  }

  return IPv4AddressWithCIDR;
}(IPv4Address);

/***/ }),

/***/ "./scripts/react/Redux/Cidr/ActionTypes.ts":
/*!*************************************************!*\
  !*** ./scripts/react/Redux/Cidr/ActionTypes.ts ***!
  \*************************************************/
/*! exports provided: GetCidrRequest, GetCidrSuccess, GetCidrFailure, IPChanging, MaskChanging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCidrRequest", function() { return GetCidrRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCidrSuccess", function() { return GetCidrSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCidrFailure", function() { return GetCidrFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPChanging", function() { return IPChanging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskChanging", function() { return MaskChanging; });
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
/*! exports provided: getCidrRequest, getCidrSuccess, getCidrFailure, ipChanging, maskChanging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCidrRequest", function() { return getCidrRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCidrSuccess", function() { return getCidrSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCidrFailure", function() { return getCidrFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipChanging", function() { return ipChanging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskChanging", function() { return maskChanging; });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core */ "./scripts/react/Core.ts");
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionTypes */ "./scripts/react/Redux/Cidr/ActionTypes.ts");


var getCidrRequest = function getCidrRequest() {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["simpleAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["GetCidrRequest"]);
};
var getCidrSuccess = function getCidrSuccess(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["GetCidrSuccess"], data);
};
var getCidrFailure = function getCidrFailure(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["GetCidrFailure"], data);
};
var ipChanging = function ipChanging(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["IPChanging"], data);
};
var maskChanging = function maskChanging(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["MaskChanging"], data);
};

/***/ }),

/***/ "./scripts/react/Redux/Cidr/Reducers.ts":
/*!**********************************************!*\
  !*** ./scripts/react/Redux/Cidr/Reducers.ts ***!
  \**********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
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
    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GetCidrRequest"]:
      return Object.assign({}, state, {
        isGetting: true
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GetCidrSuccess"]:
      return Object.assign({}, state, {
        cidr: action.data,
        isGetting: false
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GetCidrFailure"]:
      return Object.assign({}, state, {
        cidr: null,
        isGetting: false
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["IPChanging"]:
      return Object.assign({}, state, {
        ipAddress: action.data
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["MaskChanging"]:
      return Object.assign({}, state, {
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
/*! exports provided: GetTestResultRequest, GetTestResultSuccess, GetTestResultFailure, RegexChanging, RegexChanged, InputChanging, InputChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTestResultRequest", function() { return GetTestResultRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTestResultSuccess", function() { return GetTestResultSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTestResultFailure", function() { return GetTestResultFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexChanging", function() { return RegexChanging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexChanged", function() { return RegexChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputChanging", function() { return InputChanging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputChanged", function() { return InputChanged; });
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
/*! exports provided: getTestResultRequest, getTestResultSuccess, getTestResultFailure, regexChanging, regexChanged, inputChanging, inputChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestResultRequest", function() { return getTestResultRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestResultSuccess", function() { return getTestResultSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestResultFailure", function() { return getTestResultFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexChanging", function() { return regexChanging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexChanged", function() { return regexChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputChanging", function() { return inputChanging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputChanged", function() { return inputChanged; });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core */ "./scripts/react/Core.ts");
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionTypes */ "./scripts/react/Redux/Regex/ActionTypes.ts");


var getTestResultRequest = function getTestResultRequest() {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["simpleAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["GetTestResultRequest"]);
};
var getTestResultSuccess = function getTestResultSuccess(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["GetTestResultSuccess"], data);
};
var getTestResultFailure = function getTestResultFailure(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["GetTestResultFailure"], data);
};
var regexChanging = function regexChanging(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["RegexChanging"], data);
};
var regexChanged = function regexChanged() {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["simpleAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["RegexChanged"]);
};
var inputChanging = function inputChanging(data) {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["dataAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["InputChanging"], data);
};
var inputChanged = function inputChanged() {
  return Object(_Core__WEBPACK_IMPORTED_MODULE_0__["simpleAction"])(_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["InputChanged"]);
};

/***/ }),

/***/ "./scripts/react/Redux/Regex/Reducers.ts":
/*!***********************************************!*\
  !*** ./scripts/react/Redux/Regex/Reducers.ts ***!
  \***********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
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
    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GetTestResultRequest"]:
      return Object.assign({}, state, {
        isTesting: true
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GetTestResultSuccess"]:
      return Object.assign({}, state, {
        isTesting: false,
        result: action.data
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GetTestResultFailure"]:
      return Object.assign({}, state, {
        isTesting: false,
        result: null
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["RegexChanging"]:
      return Object.assign({}, state, {
        regex: action.data
      });

    case _ActionTypes__WEBPACK_IMPORTED_MODULE_0__["InputChanging"]:
      return Object.assign({}, state, {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base64; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Base64 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Base64, _React$Component);

  function Base64(props) {
    var _this;

    _classCallCheck(this, Base64);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Base64).call(this, props));

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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-md-9"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("legend", {
        className: "sr-only"
      }, "Base 64 Encode / Decode"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        htmlFor: "theString",
        className: "control-label"
      }, "String to encode / decode"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", {
        className: "form-control",
        id: "source",
        spellCheck: false,
        onChange: this.inputChanged
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
        className: "btn btn-primary mb-3",
        id: "encodeDecode",
        onClick: this.xCode
      }, "Encode / Decode")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-md-9"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        htmlFor: "result",
        className: "control-label"
      }, "Result"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", {
        className: "form-control",
        id: "result",
        spellCheck: false,
        value: this.state.output
      })))));
    }
  }]);

  return Base64;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./scripts/react/Tools/Cidr.tsx":
/*!**************************************!*\
  !*** ./scripts/react/Tools/Cidr.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/Cidr/Actions */ "./scripts/react/Redux/Cidr/Actions.ts");
/* harmony import */ var _Components_IPAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/IPAddress */ "./scripts/react/Components/IPAddress.tsx");
/* harmony import */ var _Components_TextBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/TextBox */ "./scripts/react/Components/TextBox.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Cidr =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cidr, _React$Component);

  function Cidr(props) {
    var _this;

    _classCallCheck(this, Cidr);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cidr).call(this, props));
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
        result = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: "result",
          value: this.props.cidr,
          readonly: true,
          label: "CIDR Notation"
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "col-md-9"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("legend", {
        className: "sr-only"
      }, "CIDR Notation Converter"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_IPAddress__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "address",
        label: "IP Address",
        value: this.props.ipAddress,
        onChange: this.ipChanged
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_IPAddress__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "mask",
        label: "Subnet Mask",
        value: this.props.netMask,
        onChange: this.maskChanged
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "col-md-4 cidr-result"
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
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    cidr: state.cidr,
    ipAddress: state.ipAddress,
    netMask: state.netMask
  });
}

function mapDispatchToProps(dispatch) {
  return {
    ipChanged: function ipChanged(ip) {
      dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__["ipChanging"](ip));
    },
    maskChanged: function maskChanged(mask) {
      dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__["maskChanging"](mask));
    },
    stateChanged: function stateChanged(ip, mask) {
      if (ip === null || mask === null) return;
      var cidr = ip.toCidr(mask).toString();
      dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_3__["getCidrSuccess"](cidr));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapProps, mapDispatchToProps)(Cidr));

/***/ }),

/***/ "./scripts/react/Tools/Regex.tsx":
/*!***************************************!*\
  !*** ./scripts/react/Tools/Regex.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Regex =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Regex, _React$Component);

  function Regex(props) {
    var _this;

    _classCallCheck(this, Regex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Regex).call(this, props));
    _this.stateChangedDB = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.stateChanged, 250);
    _this.regexChanged = _this.regexChanged.bind(_assertThisInitialized(_this));
    _this.inputChanged = _this.inputChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Regex, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "col-md-9"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("legend", {
        className: "sr-only"
      }, "Regular Expression Tester"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "regex",
        label: "Regular Expression",
        value: this.props.regex,
        onChange: this.regexChanged
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_TextBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "text",
        label: "Input",
        value: this.props.input,
        onChange: this.inputChanged,
        maxLength: 50
      })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", {
        className: "row mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "col-md-4 regex-result-summary"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_RegexResultSummary__WEBPACK_IMPORTED_MODULE_6__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", {
        className: "row mt-4"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "col-md-4 regex-result"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_RegexResult__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
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
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    input: state.input,
    regex: state.regex
  });
}

function mapDispatchToProps(dispatch) {
  return {
    inputChanged: function inputChanged(input) {
      dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_3__["inputChanging"](input));
    },
    regexChanged: function regexChanged(regex) {
      dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_3__["regexChanging"](regex));
    },
    stateChanged: function stateChanged(regex, input) {
      dispatch(Object(_Service__WEBPACK_IMPORTED_MODULE_4__["regexTest"])(regex, input));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapProps, mapDispatchToProps)(Regex));

/***/ }),

/***/ "./scripts/react/Tools/Service.ts":
/*!****************************************!*\
  !*** ./scripts/react/Tools/Service.ts ***!
  \****************************************/
/*! exports provided: regexTest, cidrTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexTest", function() { return regexTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cidrTest", function() { return cidrTest; });
/* harmony import */ var _Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Cidr/Actions */ "./scripts/react/Redux/Cidr/Actions.ts");
/* harmony import */ var _Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/Regex/Actions */ "./scripts/react/Redux/Regex/Actions.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



function regexTest(regex, input) {
  var _this = this;

  return function (dispatch) {
    return __awaiter(_this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var request, response, regexResult;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__["getTestResultRequest"]());
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
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__["getTestResultSuccess"](regexResult));
              _context.next = 15;
              break;

            case 14:
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__["getTestResultFailure"](response.status));

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              dispatch(_Redux_Regex_Actions__WEBPACK_IMPORTED_MODULE_1__["getTestResultFailure"](_context.t0));

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
    return __awaiter(_this2, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var response, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__["getCidrRequest"]());
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
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__["getCidrSuccess"](result));
              _context2.next = 13;
              break;

            case 12:
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__["getCidrFailure"](response.status));

            case 13:
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              dispatch(_Redux_Cidr_Actions__WEBPACK_IMPORTED_MODULE_0__["getCidrFailure"](_context2.t0));

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
/*! exports provided: tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony import */ var _Redux_Cidr_Reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/Cidr/Reducers */ "./scripts/react/Redux/Cidr/Reducers.ts");
/* harmony import */ var _Redux_Regex_Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/Regex/Reducers */ "./scripts/react/Redux/Regex/Reducers.ts");
/* harmony import */ var _Base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base64 */ "./scripts/react/Tools/Base64.tsx");
/* harmony import */ var _Cidr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cidr */ "./scripts/react/Tools/Cidr.tsx");
/* harmony import */ var _Regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Regex */ "./scripts/react/Tools/Regex.tsx");





var tools = [{
  component: _Regex__WEBPACK_IMPORTED_MODULE_4__["default"],
  initialState: _Redux_Regex_Reducers__WEBPACK_IMPORTED_MODULE_1__["initialState"],
  name: "regex",
  reducer: _Redux_Regex_Reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"]
}, {
  component: _Cidr__WEBPACK_IMPORTED_MODULE_3__["default"],
  initialState: _Redux_Cidr_Reducers__WEBPACK_IMPORTED_MODULE_0__["initialState"],
  name: "cidr",
  reducer: _Redux_Cidr_Reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"]
}, {
  component: _Base64__WEBPACK_IMPORTED_MODULE_2__["default"],
  initialState: {},
  name: "base64",
  reducer: function reducer(state) {
    return state;
  }
}];

/***/ }),

/***/ "./scripts/react/app.tsx":
/*!*******************************!*\
  !*** ./scripts/react/app.tsx ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    var possibleTool = _Tools_Tool__WEBPACK_IMPORTED_MODULE_5__["tools"].find(function (t) {
      return t.name === props.tool;
    });

    if (!possibleTool) {
      throw Error("Unknown tool: ".concat(possibleTool.name));
    }

    _this.tool = possibleTool;
    var enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__["compose"];
    _this.store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_this.tool.reducer, _this.tool.initialState, enhancedCompose(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var EntryPoint = this.tool.component;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: this.store
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EntryPoint, null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var appElement = document.getElementById("app");
var tool = appElement.getAttribute("data-tool") || "regex";
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, {
  tool: tool
}), appElement);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),

/***/ "redux-thunk":
/*!*****************************!*\
  !*** external "ReduxThunk" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReduxThunk;

/***/ })

/******/ });
//# sourceMappingURL=reacttools.js.map