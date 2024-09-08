/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************************!*\
  !*** ./scripts/standard/Core.ts ***!
  \**********************************/


function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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