/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./scripts/standard/Core.ts ***!
  \**********************************/


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.getElementsByClassName("theme-switch");

  var _iterator = _createForOfIteratorHelper(elems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var e = _step.value;
      e.onclick = switchTheme;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var copyable = document.getElementsByClassName("copyable");

  var _iterator2 = _createForOfIteratorHelper(copyable),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _e = _step2.value;
      _e.onclick = copyToClipboard;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
var prefersDark = "(prefers-color-scheme: dark)";
var prefersLight = "(prefers-color-scheme: light)";
var mqDark = window.matchMedia(prefersDark);
mqDark.addEventListener("change", listener);
var mqLight = window.matchMedia(prefersLight);
mqLight.addEventListener("change", listener);
setInitialTheme();

function listener(e) {
  if (!e.matches || hasThemeOverride()) {
    return;
  }

  if (e.media === prefersDark) {
    changeWebsiteTheme("dark");
  } else if (e.media === prefersLight) {
    changeWebsiteTheme("light");
  }
}

function setInitialTheme() {
  var theme = window.localStorage.getItem("theme");

  if (theme) {
    changeWebsiteTheme(theme);
  } else if (mqDark.matches) {
    changeWebsiteTheme("dark");
  } else {
    changeWebsiteTheme("light");
  }
}

function switchTheme(e) {
  var body = document.getElementsByTagName("body")[0];
  var theme = "light";

  if (hasThemeOverride()) {
    theme = body.classList.contains("dark") ? "light" : "dark";
  } else {
    theme = mqDark.matches ? "light" : "dark";
  }

  window.localStorage.setItem("theme", theme);
  changeWebsiteTheme(theme);
}

function hasThemeOverride() {
  return window.localStorage.getItem("theme") !== null;
}

function changeWebsiteTheme(theme) {
  var body = document.getElementsByTagName("body")[0];
  var nav = document.getElementById("top-nav");
  body.classList.remove("dark");
  body.classList.remove("light");
  body.classList.add(theme.toLowerCase());
  nav.classList.remove("navbar-dark");
  nav.classList.remove("navbar-light");
  nav.classList.add("navbar-".concat(theme.toLowerCase()));
}

function copyToClipboard(e) {
  var target = e.currentTarget;
  target.innerText && navigator.clipboard.writeText(target.innerText);
}
/******/ })()
;
//# sourceMappingURL=core.js.map