(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCasinoRoulette"] = factory(require("react"));
	else
		root["ReactCasinoRoulette"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/RouletteTable/Chip/Chip.css":
/*!****************************************************!*\
  !*** ./src/components/RouletteTable/Chip/Chip.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/RouletteTable/RouletteTable.css":
/*!********************************************************!*\
  !*** ./src/components/RouletteTable/RouletteTable.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/RouletteWheel/RouletteWheel.css":
/*!********************************************************!*\
  !*** ./src/components/RouletteWheel/RouletteWheel.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/RouletteTable/BottomBets/BottomBets.tsx":
/*!****************************************************************!*\
  !*** ./src/components/RouletteTable/BottomBets/BottomBets.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomBets": () => (/* binding */ BottomBets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chip */ "./src/components/RouletteTable/Chip/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ "./src/context/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.ts");





var BottomBets = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.RouletteTableContext), onBetCatcherHover = _a.onBetCatcherHover, bets = _a.bets;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "outside-section", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1_TO_18"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1_TO_18"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1_TO_18"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "1-18"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1_TO_18"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1_TO_18"], bets) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "outside-section", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.EVEN, "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.EVEN, "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.EVEN },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "EVEN"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.EVEN, bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.EVEN, bets) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "outside-section", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.RED, "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.RED, "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.RED },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rhomb-red" }),
                (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.RED, bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.RED, bets) })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "outside-section", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.BLACK, "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.BLACK, "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.BLACK },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rhomb-black" }),
                (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.BLACK, bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.BLACK, bets) })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "outside-section", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.ODD, "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.ODD, "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.ODD },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "ODD"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.ODD, bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES.ODD, bets) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "outside-section", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["19_TO_36"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["19_TO_36"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["19_TO_36"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "19-36"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["19_TO_36"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["19_TO_36"], bets) })))));
};


/***/ }),

/***/ "./src/components/RouletteTable/BottomBets/index.ts":
/*!**********************************************************!*\
  !*** ./src/components/RouletteTable/BottomBets/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomBets": () => (/* reexport safe */ _BottomBets__WEBPACK_IMPORTED_MODULE_0__.BottomBets)
/* harmony export */ });
/* harmony import */ var _BottomBets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomBets */ "./src/components/RouletteTable/BottomBets/BottomBets.tsx");



/***/ }),

/***/ "./src/components/RouletteTable/Chip/Chip.tsx":
/*!****************************************************!*\
  !*** ./src/components/RouletteTable/Chip/Chip.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chip": () => (/* binding */ Chip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chip_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chip.css */ "./src/components/RouletteTable/Chip/Chip.css");


var Chip = function (_a) {
    var position = _a.position, icon = _a.icon;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "chip ".concat(position), style: { backgroundImage: icon !== undefined ? "url(\"".concat(icon, "\")") : '' } }));
};
Chip.defaultProps = {
    icon: undefined,
};


/***/ }),

/***/ "./src/components/RouletteTable/Chip/index.ts":
/*!****************************************************!*\
  !*** ./src/components/RouletteTable/Chip/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chip": () => (/* reexport safe */ _Chip__WEBPACK_IMPORTED_MODULE_0__.Chip)
/* harmony export */ });
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chip */ "./src/components/RouletteTable/Chip/Chip.tsx");



/***/ }),

/***/ "./src/components/RouletteTable/Columns/Columns.tsx":
/*!**********************************************************!*\
  !*** ./src/components/RouletteTable/Columns/Columns.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Columns": () => (/* binding */ Columns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chip */ "./src/components/RouletteTable/Chip/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ "./src/context/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.ts");





var Columns = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.RouletteTableContext), onBetCatcherHover = _a.onBetCatcherHover, bets = _a.bets;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "column-item", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_COLUMN"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_COLUMN"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_COLUMN"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "value" }, "1st"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_COLUMN"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_COLUMN"], bets) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "column-item", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_COLUMN"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_COLUMN"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_COLUMN"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "value" }, "2nd"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_COLUMN"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_COLUMN"], bets) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "column-item", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_COLUMN"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_COLUMN"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_COLUMN"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "value" }, "3rd"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_COLUMN"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_COLUMN"], bets) })))));
};


/***/ }),

/***/ "./src/components/RouletteTable/Columns/index.ts":
/*!*******************************************************!*\
  !*** ./src/components/RouletteTable/Columns/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Columns": () => (/* reexport safe */ _Columns__WEBPACK_IMPORTED_MODULE_0__.Columns)
/* harmony export */ });
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Columns */ "./src/components/RouletteTable/Columns/Columns.tsx");



/***/ }),

/***/ "./src/components/RouletteTable/Dozens/Dozens.tsx":
/*!********************************************************!*\
  !*** ./src/components/RouletteTable/Dozens/Dozens.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dozens": () => (/* binding */ Dozens)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chip */ "./src/components/RouletteTable/Chip/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ "./src/context/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.ts");





var Dozens = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.RouletteTableContext), onBetCatcherHover = _a.onBetCatcherHover, bets = _a.bets;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "doz-item", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_DOZEN"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_DOZEN"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_DOZEN"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "1-12"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_DOZEN"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["1ST_DOZEN"], bets) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "doz-item", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_DOZEN"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_DOZEN"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_DOZEN"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "13-24"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_DOZEN"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["2ND_DOZEN"], bets) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "doz-item", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_DOZEN"], "data-bet": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_DOZEN"], "data-highlight": _constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_DOZEN"] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "25-36"),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_DOZEN"], bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(_constants__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES["3RD_DOZEN"], bets) })))));
};


/***/ }),

/***/ "./src/components/RouletteTable/Dozens/index.ts":
/*!******************************************************!*\
  !*** ./src/components/RouletteTable/Dozens/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dozens": () => (/* reexport safe */ _Dozens__WEBPACK_IMPORTED_MODULE_0__.Dozens)
/* harmony export */ });
/* harmony import */ var _Dozens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dozens */ "./src/components/RouletteTable/Dozens/Dozens.tsx");



/***/ }),

/***/ "./src/components/RouletteTable/NumberBets/NumberBets.tsx":
/*!****************************************************************!*\
  !*** ./src/components/RouletteTable/NumberBets/NumberBets.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberBets": () => (/* binding */ NumberBets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chip */ "./src/components/RouletteTable/Chip/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ "./src/context/index.ts");
/* harmony import */ var _config_table_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/table.json */ "./src/config/table.json");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.ts");






var NumberBets = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.RouletteTableContext), onBetCatcherHover = _a.onBetCatcherHover, bets = _a.bets;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, Array.from({ length: 36 }, function (_, i) { return i + 1; }).map(function (number) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: number, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.STRAIGHT_UP, "data-bet": "".concat(number), className: "".concat(_config_table_json__WEBPACK_IMPORTED_MODULE_3__.RED.includes(number) ? 'red-item' : 'black-item') },
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderCornerBetCatcher)(number) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "corner-bet-catcher", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.CORNER, "data-highlight": "".concat(number, "-").concat(number + 1, "-").concat(number + 3, "-").concat(number + 4) }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number, "-").concat(number + 1, "-").concat(number + 3, "-").concat(number + 4), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "right-top", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number, "-").concat(number + 1, "-").concat(number + 3, "-").concat(number + 4), bets) })))),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderTopRightDoubleStreetCatcher)(number) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "double-street-catcher-top-right", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.DOUBLE_STREET, "data-highlight": "".concat(number, "-").concat(number - 1, "-").concat(number - 2, "-").concat(number + 3, "-").concat(number + 2, "-").concat(number + 1) }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number, "-").concat(number - 1, "-").concat(number - 2, "-").concat(number + 3, "-").concat(number + 2, "-").concat(number + 1), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "right-top", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number, "-").concat(number - 1, "-").concat(number - 2, "-").concat(number + 3, "-").concat(number + 2, "-").concat(number + 1), bets) })))),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderTopStreetCatcher)(number) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "split-up-bet-catcher-top", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.STREET, "data-highlight": "".concat(number, "-").concat(number - 1, "-").concat(number - 2) }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number, "-").concat(number - 1, "-").concat(number - 2), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center-top", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number, "-").concat(number - 1, "-").concat(number - 2), bets) })))),
        (number === 1 || number === 2) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "spleet-bet-catcher", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.STREET, "data-highlight": "".concat(number === 1 ? '0-1-2' : '00-2-3'), style: { zIndex: 12 } }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number === 1 ? '0-1-2' : '00-2-3'), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "left-top", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number === 1 ? '0-1-2' : '00-2-3'), bets) })))),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderTopCatcher)(number) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "split-up-bet-catcher-top", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.SPLIT, "data-highlight": "".concat(number, "-").concat(number + 1) }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number, "-").concat(number + 1), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center-top", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number, "-").concat(number + 1), bets) })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "value" }, number),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number), bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number), bets) })),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderRightCatcher)(number) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "split-up-bet-catcher-right", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.SPLIT, "data-highlight": "".concat(number, "-").concat(number + 3) }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number, "-").concat(number + 3), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "right-center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number, "-").concat(number + 3), bets) })))),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderBottomCatcher)(number) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "split-up-bet-catcher-bottom", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.STREET, "data-highlight": "".concat(number, "-").concat(number + 1, "-").concat(number + 2) }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number, "-").concat(number + 1, "-").concat(number + 2), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center-bottom", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number, "-").concat(number + 1, "-").concat(number + 2), bets) })))),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderSixLineBetCatcher)(number) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "six-lines-catcher", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.DOUBLE_STREET, "data-highlight": "".concat(number, "-").concat(number + 1, "-").concat(number + 2, "-").concat(number + 3, "-").concat(number + 4, "-").concat(number + 5) }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.shouldRenderChip)("".concat(number, "-").concat(number + 1, "-").concat(number + 2, "-").concat(number + 3, "-").concat(number + 4, "-").concat(number + 5), bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "right-bottom", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.findChipIcon)("".concat(number, "-").concat(number + 1, "-").concat(number + 2, "-").concat(number + 3, "-").concat(number + 4, "-").concat(number + 5), bets) })))))); })));
};


/***/ }),

/***/ "./src/components/RouletteTable/NumberBets/index.ts":
/*!**********************************************************!*\
  !*** ./src/components/RouletteTable/NumberBets/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberBets": () => (/* reexport safe */ _NumberBets__WEBPACK_IMPORTED_MODULE_0__.NumberBets)
/* harmony export */ });
/* harmony import */ var _NumberBets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberBets */ "./src/components/RouletteTable/NumberBets/NumberBets.tsx");



/***/ }),

/***/ "./src/components/RouletteTable/RouletteTable.tsx":
/*!********************************************************!*\
  !*** ./src/components/RouletteTable/RouletteTable.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouletteTable": () => (/* binding */ RouletteTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ZeroBets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZeroBets */ "./src/components/RouletteTable/ZeroBets/index.ts");
/* harmony import */ var _NumberBets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NumberBets */ "./src/components/RouletteTable/NumberBets/index.ts");
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Columns */ "./src/components/RouletteTable/Columns/index.ts");
/* harmony import */ var _Dozens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dozens */ "./src/components/RouletteTable/Dozens/index.ts");
/* harmony import */ var _BottomBets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BottomBets */ "./src/components/RouletteTable/BottomBets/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context */ "./src/context/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");
/* harmony import */ var _config_table_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/table.json */ "./src/config/table.json");
/* harmony import */ var _utills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utills */ "./src/utills/index.ts");
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs */ "./src/libs/index.ts");
/* harmony import */ var _RouletteTable_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RouletteTable.css */ "./src/components/RouletteTable/RouletteTable.css");












var RouletteTable = function (_a) {
    var onBet = _a.onBet, bets = _a.bets, isDebug = _a.isDebug;
    var tableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (tableRef.current === null) {
            return;
        }
        var listener = function (event) {
            var _a, _b, _c, _d, _e, _f;
            var highlightElement = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest('[data-highlight]');
            var highlightData = (_b = highlightElement === null || highlightElement === void 0 ? void 0 : highlightElement.dataset) === null || _b === void 0 ? void 0 : _b.highlight;
            var betElement = (_c = event.target) === null || _c === void 0 ? void 0 : _c.closest('[data-bet]');
            var betData = (_d = betElement === null || betElement === void 0 ? void 0 : betElement.dataset) === null || _d === void 0 ? void 0 : _d.bet;
            var action = (_f = (_e = ((highlightElement !== null && highlightElement !== void 0 ? highlightElement : betElement))) === null || _e === void 0 ? void 0 : _e.dataset) === null || _f === void 0 ? void 0 : _f.action;
            if ((highlightData === undefined || highlightData === '') &&
                (betData === undefined || betData === '')) {
                console.error('No data in [data-bet] or [data-highlight]');
                return;
            }
            if (action === undefined || action === '') {
                console.error('Action is undefined');
                return;
            }
            var isActionSupported = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_7__.ACTION_TYPES).includes(action);
            if (isActionSupported === false) {
                console.error('Unsupported action', action);
                return;
            }
            /* Checks are done */
            var payloadData = (highlightData !== null && highlightData !== void 0 ? highlightData : betData);
            var getPayload = function () {
                var firstId = payloadData.split('-')[0];
                var isPayloadInConfig = (0,_utills__WEBPACK_IMPORTED_MODULE_9__.hasOwn)(_config_table_json__WEBPACK_IMPORTED_MODULE_8__, firstId);
                if (isPayloadInConfig === true) {
                    return _config_table_json__WEBPACK_IMPORTED_MODULE_8__[firstId].map(function (item) { return "".concat(item); });
                }
                return payloadData.split('-').map(function (item) { return item; });
            };
            var payload = getPayload();
            onBet({
                bet: action,
                payload: payload,
                id: payloadData,
            });
        };
        tableRef.current.addEventListener('click', listener);
        var tableRefCurrent = tableRef.current;
        return function () {
            tableRefCurrent === null || tableRefCurrent === void 0 ? void 0 : tableRefCurrent.removeEventListener('click', listener);
        };
    }, [onBet]);
    var doHighlight = function (betId) {
        if (tableRef.current === null) {
            return;
        }
        var hoverClass = 'item-hover';
        var element = tableRef.current.querySelector("[data-bet=\"".concat(betId, "\"]"));
        element === null || element === void 0 ? void 0 : element.classList.toggle(hoverClass);
    };
    var handleBetCatcherHover = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
        var highlightData = event.currentTarget.dataset
            .highlight;
        var toHighlight = highlightData === null || highlightData === void 0 ? void 0 : highlightData.split('-');
        var firstHighlight = toHighlight === null || toHighlight === void 0 ? void 0 : toHighlight[0];
        if (firstHighlight === undefined) {
            return;
        }
        var isFromConfig = Object.keys(_config_table_json__WEBPACK_IMPORTED_MODULE_8__).includes(firstHighlight);
        if (isFromConfig === true) {
            doHighlight(firstHighlight);
            if (_config_table_json__WEBPACK_IMPORTED_MODULE_8__[firstHighlight] === undefined) {
                console.error('Config does not contain the key', firstHighlight);
                return;
            }
            _config_table_json__WEBPACK_IMPORTED_MODULE_8__[firstHighlight].forEach(function (bet) {
                return doHighlight("".concat(bet));
            });
            return;
        }
        toHighlight === null || toHighlight === void 0 ? void 0 : toHighlight.forEach(function (element) {
            doHighlight(element);
        });
    }, []);
    var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return ({ bets: bets, onBetCatcherHover: handleBetCatcherHover }); }, [bets, handleBetCatcherHover]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_6__.RouletteTableContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_libs__WEBPACK_IMPORTED_MODULE_10__.classNames)('roulette-table-container', { debug: isDebug }), ref: tableRef },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "roulette-table-container-first" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ZeroBets__WEBPACK_IMPORTED_MODULE_1__.ZeroBets, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NumberBets__WEBPACK_IMPORTED_MODULE_2__.NumberBets, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Columns__WEBPACK_IMPORTED_MODULE_3__.Columns, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "roulette-table-container-second" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dozens__WEBPACK_IMPORTED_MODULE_4__.Dozens, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "roulette-table-container-third" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BottomBets__WEBPACK_IMPORTED_MODULE_5__.BottomBets, null)))));
};
RouletteTable.defaultProps = {
    isDebug: false,
};


/***/ }),

/***/ "./src/components/RouletteTable/ZeroBets/ZeroBets.tsx":
/*!************************************************************!*\
  !*** ./src/components/RouletteTable/ZeroBets/ZeroBets.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZeroBets": () => (/* binding */ ZeroBets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chip */ "./src/components/RouletteTable/Chip/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context */ "./src/context/index.ts");





var ZeroBets = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.RouletteTableContext), onBetCatcherHover = _a.onBetCatcherHover, bets = _a.bets;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, ['0', '00'].map(function (number) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: "zero-item-".concat(number), className: "zero-item", "data-action": _constants__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES[number], "data-bet": number },
        number === '0' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "spleet-bet-catcher", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.STREET, "data-highlight": "0-00-2", style: { left: 'auto', right: -15, zIndex: 13 } }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)('0-00-2', bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "right-top", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)('0-00-2', bets) })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "corner-bet-catcher ".concat(number === '0' ? 'bottom' : ''), onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.BASKET_US, "data-highlight": number === '0' ? '0-00-1-2-3' : '00-0-1-2-3', style: { zIndex: 14 } }),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(number === '0' ? '0-00-1-2-3' : '00-0-1-2-3', bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: number === '0' ? 'right-bottom' : 'right-top', icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(number === '0' ? '0-00-1-2-3' : '00-0-1-2-3', bets) })),
        number === '0' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "split-up-bet-catcher-top", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.ROW, "data-highlight": "0-00" }),
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)('0-00', bets) === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center-top", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)('0-00', bets) })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "split-up-bet-catcher-right", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SPLIT, "data-highlight": "".concat(number, "-").concat(number === '0' ? 2 : 3), style: {
                zIndex: number === '00' ? 12 : '',
                height: number === '00' ? '85px' : '',
            } }),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)("".concat(number, "-").concat(number === '0' ? 2 : 3), bets) ===
            true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: number === '0'
                ? 'right-top-with-no-offset'
                : 'right-top-with-offset', icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)("".concat(number, "-").concat(number === '0' ? 2 : 3), bets) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "split-up-bet-catcher-right", onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SPLIT, "data-highlight": "".concat(number, "-").concat(number === '0' ? 1 : 2), style: { height: 85, top: 'auto', bottom: 0 } }),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)("".concat(number, "-").concat(number === '0' ? 1 : 2), bets) ===
            true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: number === '0'
                ? 'right-bottom-with-offset'
                : 'right-bottom-with-no-offset', icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)("".concat(number, "-").concat(number === '0' ? 1 : 2), bets) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: number === '0' ? 'basket-catcher-bottom' : 'basket-catcher-top', onMouseEnter: onBetCatcherHover, onMouseLeave: onBetCatcherHover, "data-action": _constants__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.BASKET_US, "data-highlight": "".concat(number === '0' ? '0-00' : '00-0', "-1-2-3"), style: { left: -3 } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "value" }, number),
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.shouldRenderChip)(number, bets) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_1__.Chip, { position: "center", icon: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.findChipIcon)(number, bets) })))); })));
};


/***/ }),

/***/ "./src/components/RouletteTable/ZeroBets/index.ts":
/*!********************************************************!*\
  !*** ./src/components/RouletteTable/ZeroBets/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZeroBets": () => (/* reexport safe */ _ZeroBets__WEBPACK_IMPORTED_MODULE_0__.ZeroBets)
/* harmony export */ });
/* harmony import */ var _ZeroBets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZeroBets */ "./src/components/RouletteTable/ZeroBets/ZeroBets.tsx");



/***/ }),

/***/ "./src/components/RouletteTable/index.ts":
/*!***********************************************!*\
  !*** ./src/components/RouletteTable/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouletteTable": () => (/* reexport safe */ _RouletteTable__WEBPACK_IMPORTED_MODULE_0__.RouletteTable)
/* harmony export */ });
/* harmony import */ var _RouletteTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouletteTable */ "./src/components/RouletteTable/RouletteTable.tsx");



/***/ }),

/***/ "./src/components/RouletteWheel/RouletteWheel.tsx":
/*!********************************************************!*\
  !*** ./src/components/RouletteWheel/RouletteWheel.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouletteWheel": () => (/* binding */ RouletteWheel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_table_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/table.json */ "./src/config/table.json");
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs */ "./src/libs/index.ts");
/* harmony import */ var _RouletteWheel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouletteWheel.css */ "./src/components/RouletteWheel/RouletteWheel.css");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var availableWinningBets = __spreadArray(__spreadArray(__spreadArray([], _config_table_json__WEBPACK_IMPORTED_MODULE_1__["1_TO_18"], true), _config_table_json__WEBPACK_IMPORTED_MODULE_1__["19_TO_36"], true), ['-1', '0', '00'], false).map(function (bet) { return "".concat(bet); });
var RouletteWheel = function (_a) {
    var start = _a.start, winningBet = _a.winningBet, onSpinningEnd = _a.onSpinningEnd, withAnimation = _a.withAnimation, addRest = _a.addRest;
    var wheelNumbers = [
        '4',
        '36',
        '10',
        '30',
        '13',
        '27',
        '22',
        '21',
        '28',
        '18',
        '31',
        '12',
        '2',
        '9',
        '8',
        '3',
        '11',
        '32',
        '00',
        '23',
        '17',
        '14',
        '20',
        '5',
        '26',
        '34',
        '29',
        '25',
        '35',
        '19',
        '6',
        '16',
        '15',
        '7',
        '24',
        '1',
        '33',
        '0',
    ];
    var innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var currentInnerRef = innerRef.current;
        if (winningBet === '-1' || currentInnerRef === null || start === false) {
            return;
        }
        if (addRest === true) {
            currentInnerRef.classList.remove('rest');
        }
        currentInnerRef.removeAttribute('data-spintoindex');
        var betIndex = wheelNumbers.indexOf(winningBet);
        setTimeout(function () {
            currentInnerRef.setAttribute('data-spintoindex', "".concat(betIndex));
            setTimeout(function () {
                if (addRest === true) {
                    currentInnerRef.classList.add('rest');
                }
                onSpinningEnd === null || onSpinningEnd === void 0 ? void 0 : onSpinningEnd();
            }, 9000);
        }, 100);
        // we're ignoring only the onSpinningEnd onSpinningEnd dep
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [winningBet, start]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "roulette-wheel-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_libs__WEBPACK_IMPORTED_MODULE_2__.classNames)('roulette-wheel-plate', {
                'with-animation': withAnimation,
            }) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "roulette-wheel-inner", ref: innerRef }, wheelNumbers.map(function (number) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: "wheel-".concat(number), "data-bet": number, className: "roulette-wheel-bet-number" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "wheel-pit-".concat(number) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "radio", name: "pit", id: "wheel-pit-".concat(number), defaultValue: number }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "roulette-wheel-pit" }, number)))); })))));
};
RouletteWheel.defaultProps = {
    onSpinningEnd: function () { return undefined; },
    withAnimation: true,
    addRest: true,
};


/***/ }),

/***/ "./src/components/RouletteWheel/index.ts":
/*!***********************************************!*\
  !*** ./src/components/RouletteWheel/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouletteWheel": () => (/* reexport safe */ _RouletteWheel__WEBPACK_IMPORTED_MODULE_0__.RouletteWheel)
/* harmony export */ });
/* harmony import */ var _RouletteWheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouletteWheel */ "./src/components/RouletteWheel/RouletteWheel.tsx");



/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
var ACTION_TYPES = {
    0: '0',
    '00': '00',
    STREET: 'STREET',
    ROW: 'ROW',
    BASKET_US: 'BASKET_US',
    SPLIT: 'SPLIT',
    CORNER: 'CORNER',
    DOUBLE_STREET: 'DOUBLE_STREET',
    STRAIGHT_UP: 'STRAIGHT_UP',
    '1ST_COLUMN': '1ST_COLUMN',
    '2ND_COLUMN': '2ND_COLUMN',
    '3RD_COLUMN': '3RD_COLUMN',
    '1ST_DOZEN': '1ST_DOZEN',
    '2ND_DOZEN': '2ND_DOZEN',
    '3RD_DOZEN': '3RD_DOZEN',
    '1_TO_18': '1_TO_18',
    '19_TO_36': '19_TO_36',
    EVEN: 'EVEN',
    ODD: 'ODD',
    RED: 'RED',
    BLACK: 'BLACK',
};


/***/ }),

/***/ "./src/context/RouletteTableContext.ts":
/*!*********************************************!*\
  !*** ./src/context/RouletteTableContext.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouletteTableContext": () => (/* binding */ RouletteTableContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RouletteTableContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    bets: {},
    onBetCatcherHover: function () { return null; },
});


/***/ }),

/***/ "./src/context/index.ts":
/*!******************************!*\
  !*** ./src/context/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouletteTableContext": () => (/* reexport safe */ _RouletteTableContext__WEBPACK_IMPORTED_MODULE_0__.RouletteTableContext)
/* harmony export */ });
/* harmony import */ var _RouletteTableContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouletteTableContext */ "./src/context/RouletteTableContext.ts");



/***/ }),

/***/ "./src/helpers/findChipIcon/findChipIcon.ts":
/*!**************************************************!*\
  !*** ./src/helpers/findChipIcon/findChipIcon.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findChipIcon": () => (/* binding */ findChipIcon)
/* harmony export */ });
var findChipIcon = function (id, bets) { var _a; return (_a = bets[id]) === null || _a === void 0 ? void 0 : _a.icon; };


/***/ }),

/***/ "./src/helpers/findChipIcon/index.ts":
/*!*******************************************!*\
  !*** ./src/helpers/findChipIcon/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findChipIcon": () => (/* reexport safe */ _findChipIcon__WEBPACK_IMPORTED_MODULE_0__.findChipIcon)
/* harmony export */ });
/* harmony import */ var _findChipIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findChipIcon */ "./src/helpers/findChipIcon/findChipIcon.ts");



/***/ }),

/***/ "./src/helpers/getWheelNumbers/getWheelNumbers.ts":
/*!********************************************************!*\
  !*** ./src/helpers/getWheelNumbers/getWheelNumbers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWheelNumbers": () => (/* binding */ getWheelNumbers)
/* harmony export */ });
/* harmony import */ var _utills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utills */ "./src/utills/index.ts");

var getWheelNumbers = function () {
    // 1st step
    var staticWheelNumbers = []; // without 0 and 00
    for (var i = 1; i <= 36; i += 1) {
        staticWheelNumbers.push("".concat(i));
    }
    // 2nd step
    var randomNumbers = [];
    for (var i = 0; i < staticWheelNumbers.length; i += 1) {
        var availableNumbers = staticWheelNumbers.filter(function (number) { return randomNumbers.includes(number) === false; });
        var randomNumber = (0,_utills__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayItem)(availableNumbers);
        randomNumbers.push(randomNumber);
    }
    // 3rd step
    var finalArray = [];
    randomNumbers.forEach(function (number, index) {
        if (index === 18) {
            finalArray.push('00');
        }
        finalArray.push(number);
    });
    finalArray.push('0');
    return finalArray;
};


/***/ }),

/***/ "./src/helpers/getWheelNumbers/index.ts":
/*!**********************************************!*\
  !*** ./src/helpers/getWheelNumbers/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWheelNumbers": () => (/* reexport safe */ _getWheelNumbers__WEBPACK_IMPORTED_MODULE_0__.getWheelNumbers)
/* harmony export */ });
/* harmony import */ var _getWheelNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWheelNumbers */ "./src/helpers/getWheelNumbers/getWheelNumbers.ts");



/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findChipIcon": () => (/* reexport safe */ _findChipIcon__WEBPACK_IMPORTED_MODULE_1__.findChipIcon),
/* harmony export */   "getWheelNumbers": () => (/* reexport safe */ _getWheelNumbers__WEBPACK_IMPORTED_MODULE_2__.getWheelNumbers),
/* harmony export */   "shouldRenderBottomCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderBottomCatcher),
/* harmony export */   "shouldRenderChip": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderChip),
/* harmony export */   "shouldRenderCornerBetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderCornerBetCatcher),
/* harmony export */   "shouldRenderRightCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderRightCatcher),
/* harmony export */   "shouldRenderSixLineBetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderSixLineBetCatcher),
/* harmony export */   "shouldRenderTopCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderTopCatcher),
/* harmony export */   "shouldRenderTopRightDoubleStreetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderTopRightDoubleStreetCatcher),
/* harmony export */   "shouldRenderTopStreetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderTopStreetCatcher)
/* harmony export */ });
/* harmony import */ var _shouldRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shouldRender */ "./src/helpers/shouldRender/index.ts");
/* harmony import */ var _findChipIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findChipIcon */ "./src/helpers/findChipIcon/index.ts");
/* harmony import */ var _getWheelNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWheelNumbers */ "./src/helpers/getWheelNumbers/index.ts");





/***/ }),

/***/ "./src/helpers/shouldRender/index.ts":
/*!*******************************************!*\
  !*** ./src/helpers/shouldRender/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldRenderBottomCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderBottomCatcher),
/* harmony export */   "shouldRenderChip": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderChip),
/* harmony export */   "shouldRenderCornerBetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderCornerBetCatcher),
/* harmony export */   "shouldRenderRightCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderRightCatcher),
/* harmony export */   "shouldRenderSixLineBetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderSixLineBetCatcher),
/* harmony export */   "shouldRenderTopCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderTopCatcher),
/* harmony export */   "shouldRenderTopRightDoubleStreetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderTopRightDoubleStreetCatcher),
/* harmony export */   "shouldRenderTopStreetCatcher": () => (/* reexport safe */ _shouldRender__WEBPACK_IMPORTED_MODULE_0__.shouldRenderTopStreetCatcher)
/* harmony export */ });
/* harmony import */ var _shouldRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shouldRender */ "./src/helpers/shouldRender/shouldRender.ts");



/***/ }),

/***/ "./src/helpers/shouldRender/shouldRender.ts":
/*!**************************************************!*\
  !*** ./src/helpers/shouldRender/shouldRender.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldRenderBottomCatcher": () => (/* binding */ shouldRenderBottomCatcher),
/* harmony export */   "shouldRenderChip": () => (/* binding */ shouldRenderChip),
/* harmony export */   "shouldRenderCornerBetCatcher": () => (/* binding */ shouldRenderCornerBetCatcher),
/* harmony export */   "shouldRenderRightCatcher": () => (/* binding */ shouldRenderRightCatcher),
/* harmony export */   "shouldRenderSixLineBetCatcher": () => (/* binding */ shouldRenderSixLineBetCatcher),
/* harmony export */   "shouldRenderTopCatcher": () => (/* binding */ shouldRenderTopCatcher),
/* harmony export */   "shouldRenderTopRightDoubleStreetCatcher": () => (/* binding */ shouldRenderTopRightDoubleStreetCatcher),
/* harmony export */   "shouldRenderTopStreetCatcher": () => (/* binding */ shouldRenderTopStreetCatcher)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var noTopRender = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
var noRightRender = [34, 35, 36];
var bottomRender = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
var noCornerBetRender = __spreadArray(__spreadArray([], noTopRender, true), [34, 35], false);
var sixLinesBetRender = bottomRender.slice(0, bottomRender.length - 1);
var topRightDobuleStreetRender = noTopRender.slice(0, noTopRender.length - 1);
var shouldRenderTopCatcher = function (currentNumber) {
    return noTopRender.includes(currentNumber) === false;
};
var shouldRenderRightCatcher = function (currentNumber) {
    return noRightRender.includes(currentNumber) === false;
};
var shouldRenderBottomCatcher = function (currentNumber) {
    return bottomRender.includes(currentNumber);
};
var shouldRenderCornerBetCatcher = function (currentNumber) {
    return noCornerBetRender.includes(currentNumber) === false;
};
var shouldRenderSixLineBetCatcher = function (currentNumber) {
    return sixLinesBetRender.includes(currentNumber);
};
var shouldRenderChip = function (id, bets) { return Object.keys(bets).includes(id); };
var shouldRenderTopStreetCatcher = function (currentNumber) {
    return noTopRender.includes(currentNumber);
};
var shouldRenderTopRightDoubleStreetCatcher = function (currentNumber) { return topRightDobuleStreetRender.includes(currentNumber); };


/***/ }),

/***/ "./src/libs/classNames/classNames.ts":
/*!*******************************************!*\
  !*** ./src/libs/classNames/classNames.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": () => (/* binding */ classNames)
/* harmony export */ });
var isArray = function (item) { return Array.isArray(item); };
var isObject = function (item) {
    return item !== null && isArray(item) === false && typeof item === 'object';
};
var isFunction = function (item) { return typeof item === 'function'; };
var isBoolean = function (item) { return typeof item === 'boolean'; };
var hasOwnPrototypeOfToString = function (object) {
    return object.toString !== Object.prototype.toString;
};
var classNames = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    var resultClassName = '';
    var handlePrimitive = function (item, asKey) {
        var isItemBoolean = isBoolean(item);
        if (!item || isItemBoolean === true) {
            return;
        }
        resultClassName += "".concat(asKey !== undefined ? asKey : item, " ");
    };
    var handleObject = function (object) {
        var entries = Object.entries(object);
        /* maybe throw it out */
        var hasObjectOwnPrototypeOfToString = hasOwnPrototypeOfToString(object);
        /**/
        entries.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!value) {
                return;
            }
            var isValueFunction = isFunction(value);
            var isToString = key === 'toString';
            if (isValueFunction === true && isToString === false) {
                var functionResult = value();
                handlePrimitive(functionResult, key);
                return;
            }
            if (isToString === false) {
                resultClassName += "".concat(key, " ");
            }
        });
        /* maybe throw it out */
        if (hasObjectOwnPrototypeOfToString === true) {
            var toStringValue = object.toString();
            handlePrimitive(toStringValue);
        }
        /**/
    };
    var handleArray = function (array) {
        array.forEach(function (item) {
            if (!item || typeof item === 'boolean') {
                return;
            }
            var isItemArray = isArray(item);
            var isItemObject = isObject(item);
            if (isItemArray === true) {
                return handleArray(item);
            }
            if (isItemObject === true) {
                return handleObject(item);
            }
            resultClassName += "".concat(item, " ");
        });
    };
    for (var i = 0; i < classes.length; i += 1) {
        var classNameItem = classes[i];
        var isItemObject = isObject(classNameItem);
        var isItemArray = isArray(classNameItem);
        if (isItemObject === true) {
            handleObject(classNameItem);
            continue;
        }
        if (isItemArray === true) {
            handleArray(classNameItem);
            continue;
        }
        handlePrimitive(classNameItem);
    }
    return resultClassName.trim();
};


/***/ }),

/***/ "./src/libs/classNames/index.ts":
/*!**************************************!*\
  !*** ./src/libs/classNames/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": () => (/* reexport safe */ _classNames__WEBPACK_IMPORTED_MODULE_0__.classNames)
/* harmony export */ });
/* harmony import */ var _classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classNames */ "./src/libs/classNames/classNames.ts");



/***/ }),

/***/ "./src/libs/index.ts":
/*!***************************!*\
  !*** ./src/libs/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": () => (/* reexport safe */ _classNames__WEBPACK_IMPORTED_MODULE_0__.classNames)
/* harmony export */ });
/* harmony import */ var _classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classNames */ "./src/libs/classNames/index.ts");



/***/ }),

/***/ "./src/utills/getRandomArrayItem/getRandomArrayItem.ts":
/*!*************************************************************!*\
  !*** ./src/utills/getRandomArrayItem/getRandomArrayItem.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomArrayItem": () => (/* binding */ getRandomArrayItem)
/* harmony export */ });
var getRandomArrayItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};


/***/ }),

/***/ "./src/utills/getRandomArrayItem/index.ts":
/*!************************************************!*\
  !*** ./src/utills/getRandomArrayItem/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomArrayItem": () => (/* reexport safe */ _getRandomArrayItem__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayItem)
/* harmony export */ });
/* harmony import */ var _getRandomArrayItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomArrayItem */ "./src/utills/getRandomArrayItem/getRandomArrayItem.ts");



/***/ }),

/***/ "./src/utills/getRandomInt/getRandomInt.ts":
/*!*************************************************!*\
  !*** ./src/utills/getRandomInt/getRandomInt.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt)
/* harmony export */ });
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
var getRandomInt = function (minNumber, maxNumber) {
    var min = Math.ceil(minNumber);
    var max = Math.floor(maxNumber);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


/***/ }),

/***/ "./src/utills/getRandomInt/index.ts":
/*!******************************************!*\
  !*** ./src/utills/getRandomInt/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* reexport safe */ _getRandomInt__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)
/* harmony export */ });
/* harmony import */ var _getRandomInt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomInt */ "./src/utills/getRandomInt/getRandomInt.ts");



/***/ }),

/***/ "./src/utills/hasOwn/hasOwn.ts":
/*!*************************************!*\
  !*** ./src/utills/hasOwn/hasOwn.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn)
/* harmony export */ });
var hasOwn = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
};


/***/ }),

/***/ "./src/utills/hasOwn/index.ts":
/*!************************************!*\
  !*** ./src/utills/hasOwn/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwn": () => (/* reexport safe */ _hasOwn__WEBPACK_IMPORTED_MODULE_0__.hasOwn)
/* harmony export */ });
/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasOwn */ "./src/utills/hasOwn/hasOwn.ts");



/***/ }),

/***/ "./src/utills/index.ts":
/*!*****************************!*\
  !*** ./src/utills/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomArrayItem": () => (/* reexport safe */ _getRandomArrayItem__WEBPACK_IMPORTED_MODULE_3__.getRandomArrayItem),
/* harmony export */   "getRandomInt": () => (/* reexport safe */ _getRandomInt__WEBPACK_IMPORTED_MODULE_2__.getRandomInt),
/* harmony export */   "hasOwn": () => (/* reexport safe */ _hasOwn__WEBPACK_IMPORTED_MODULE_1__.hasOwn),
/* harmony export */   "isOdd": () => (/* reexport safe */ _isOdd__WEBPACK_IMPORTED_MODULE_0__.isOdd)
/* harmony export */ });
/* harmony import */ var _isOdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isOdd */ "./src/utills/isOdd/index.ts");
/* harmony import */ var _hasOwn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasOwn */ "./src/utills/hasOwn/index.ts");
/* harmony import */ var _getRandomInt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRandomInt */ "./src/utills/getRandomInt/index.ts");
/* harmony import */ var _getRandomArrayItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getRandomArrayItem */ "./src/utills/getRandomArrayItem/index.ts");






/***/ }),

/***/ "./src/utills/isOdd/index.ts":
/*!***********************************!*\
  !*** ./src/utills/isOdd/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOdd": () => (/* reexport safe */ _isOdd__WEBPACK_IMPORTED_MODULE_0__.isOdd)
/* harmony export */ });
/* harmony import */ var _isOdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isOdd */ "./src/utills/isOdd/isOdd.ts");



/***/ }),

/***/ "./src/utills/isOdd/isOdd.ts":
/*!***********************************!*\
  !*** ./src/utills/isOdd/isOdd.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOdd": () => (/* binding */ isOdd)
/* harmony export */ });
var isOdd = function (number) { return number % 2 !== 0; };


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "./src/config/table.json":
/*!*******************************!*\
  !*** ./src/config/table.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"ODD":[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],"EVEN":[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],"1_TO_18":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"19_TO_36":[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"RED":[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],"BLACK":[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],"1ST_COLUMN":[1,4,7,10,13,16,19,22,25,28,31,34],"2ND_COLUMN":[2,5,8,11,14,17,20,23,26,29,32,35],"3RD_COLUMN":[3,6,9,12,15,18,21,24,27,30,33,36],"1ST_DOZEN":[1,2,3,4,5,6,7,8,9,10,11,12],"2ND_DOZEN":[13,14,15,16,17,18,19,20,21,22,23,24],"3RD_DOZEN":[25,26,27,28,29,30,31,32,33,34,35,36]}');

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouletteTable": () => (/* reexport safe */ _components_RouletteTable__WEBPACK_IMPORTED_MODULE_0__.RouletteTable),
/* harmony export */   "RouletteWheel": () => (/* reexport safe */ _components_RouletteWheel__WEBPACK_IMPORTED_MODULE_1__.RouletteWheel)
/* harmony export */ });
/* harmony import */ var _components_RouletteTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/RouletteTable */ "./src/components/RouletteTable/index.ts");
/* harmony import */ var _components_RouletteWheel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RouletteWheel */ "./src/components/RouletteWheel/index.ts");




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBR1g7QUFDeUI7QUFFVTtBQUNoQjtBQUUzQyxJQUFNLFVBQVUsR0FBTztJQUN0QixTQUE4QixpREFBVSxDQUFDLDBEQUFvQixDQUFDLEVBQTVELGlCQUFpQix5QkFBRSxJQUFJLFVBQXFDLENBQUM7SUFFckUsT0FBTyxDQUNMO1FBQ0Usb0VBQ0UsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLCtEQUF1QixjQUMxQiwrREFBdUIsb0JBQ2pCLCtEQUF1QjtZQUV2QywrRUFBZTtZQUNkLDBEQUFnQixDQUFDLCtEQUF1QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQ2xELDJEQUFDLHVDQUFJLElBQ0gsUUFBUSxFQUFDLFFBQVEsRUFDakIsSUFBSSxFQUFFLHNEQUFZLENBQUMsK0RBQXVCLEVBQUUsSUFBSSxDQUFDLEdBQ2pELENBQ0gsQ0FDRztRQUNOLG9FQUNFLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQix5REFBaUIsY0FDcEIseURBQWlCLG9CQUNYLHlEQUFpQjtZQUVqQywrRUFBZTtZQUNkLDBEQUFnQixDQUFDLHlEQUFpQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQzVDLDJEQUFDLHVDQUFJLElBQ0gsUUFBUSxFQUFDLFFBQVEsRUFDakIsSUFBSSxFQUFFLHNEQUFZLENBQUMseURBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQzNDLENBQ0gsQ0FDRztRQUNOLG9FQUNFLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQix3REFBZ0IsY0FDbkIsd0RBQWdCLG9CQUNWLHdEQUFnQjtZQUVoQztnQkFDRSxvRUFBSyxTQUFTLEVBQUMsV0FBVyxHQUFHO2dCQUM1QiwwREFBZ0IsQ0FBQyx3REFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUMzQywyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxRQUFRLEVBQ2pCLElBQUksRUFBRSxzREFBWSxDQUFDLHdEQUFnQixFQUFFLElBQUksQ0FBQyxHQUMxQyxDQUNILENBQ0csQ0FDRjtRQUNOLG9FQUNFLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQiwwREFBa0IsY0FDckIsMERBQWtCLG9CQUNaLDBEQUFrQjtZQUVsQztnQkFDRSxvRUFBSyxTQUFTLEVBQUMsYUFBYSxHQUFHO2dCQUM5QiwwREFBZ0IsQ0FBQywwREFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUM3QywyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxRQUFRLEVBQ2pCLElBQUksRUFBRSxzREFBWSxDQUFDLDBEQUFrQixFQUFFLElBQUksQ0FBQyxHQUM1QyxDQUNILENBQ0csQ0FDRjtRQUNOLG9FQUNFLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQix3REFBZ0IsY0FDbkIsd0RBQWdCLG9CQUNWLHdEQUFnQjtZQUVoQyw4RUFBYztZQUNiLDBEQUFnQixDQUFDLHdEQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQzNDLDJEQUFDLHVDQUFJLElBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsc0RBQVksQ0FBQyx3REFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBSSxDQUN2RSxDQUNHO1FBQ04sb0VBQ0UsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLGdFQUF3QixjQUMzQixnRUFBd0Isb0JBQ2xCLGdFQUF3QjtZQUV4QyxnRkFBZ0I7WUFDZiwwREFBZ0IsQ0FBQyxnRUFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUNuRCwyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxRQUFRLEVBQ2pCLElBQUksRUFBRSxzREFBWSxDQUFDLGdFQUF3QixFQUFFLElBQUksQ0FBQyxHQUNsRCxDQUNILENBQ0csQ0FDTCxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSDtBQUdOO0FBa0JiLElBQU0sSUFBSSxHQUFtQixVQUFDLEVBQWtCO1FBQWhCLFFBQVEsZ0JBQUUsSUFBSTtJQUNuRCxPQUFPLENBQ0wsb0VBQ0UsU0FBUyxFQUFFLGVBQVEsUUFBUSxDQUFFLEVBQzdCLEtBQUssRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBUSxJQUFJLFFBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQ3RFLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQUksQ0FBQyxZQUFZLEdBQUc7SUFDbEIsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQjtBQUdYO0FBQ3lCO0FBRVU7QUFDaEI7QUFFM0MsSUFBTSxPQUFPLEdBQU87SUFDbkIsU0FBOEIsaURBQVUsQ0FBQywwREFBb0IsQ0FBQyxFQUE1RCxpQkFBaUIseUJBQUUsSUFBSSxVQUFxQyxDQUFDO0lBRXJFLE9BQU8sQ0FDTDtRQUNFLG9FQUNFLFNBQVMsRUFBQyxhQUFhLEVBQ3ZCLFlBQVksRUFBRSxpQkFBaUIsRUFDL0IsWUFBWSxFQUFFLGlCQUFpQixpQkFDbEIsa0VBQTBCLGNBQzdCLGtFQUEwQixvQkFDcEIsa0VBQTBCO1lBRTFDLG9FQUFLLFNBQVMsRUFBQyxPQUFPLFVBQVU7WUFDL0IsMERBQWdCLENBQUMsa0VBQTBCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FDckQsMkRBQUMsdUNBQUksSUFDSCxRQUFRLEVBQUMsUUFBUSxFQUNqQixJQUFJLEVBQUUsc0RBQVksQ0FBQyxrRUFBMEIsRUFBRSxJQUFJLENBQUMsR0FDcEQsQ0FDSCxDQUNHO1FBQ04sb0VBQ0UsU0FBUyxFQUFDLGFBQWEsRUFDdkIsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQixrRUFBMEIsY0FDN0Isa0VBQTBCLG9CQUNwQixrRUFBMEI7WUFFMUMsb0VBQUssU0FBUyxFQUFDLE9BQU8sVUFBVTtZQUMvQiwwREFBZ0IsQ0FBQyxrRUFBMEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUNyRCwyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxRQUFRLEVBQ2pCLElBQUksRUFBRSxzREFBWSxDQUFDLGtFQUEwQixFQUFFLElBQUksQ0FBQyxHQUNwRCxDQUNILENBQ0c7UUFDTixvRUFDRSxTQUFTLEVBQUMsYUFBYSxFQUN2QixZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLGtFQUEwQixjQUM3QixrRUFBMEIsb0JBQ3BCLGtFQUEwQjtZQUUxQyxvRUFBSyxTQUFTLEVBQUMsT0FBTyxVQUFVO1lBQy9CLDBEQUFnQixDQUFDLGtFQUEwQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQ3JELDJEQUFDLHVDQUFJLElBQ0gsUUFBUSxFQUFDLFFBQVEsRUFDakIsSUFBSSxFQUFFLHNEQUFZLENBQUMsa0VBQTBCLEVBQUUsSUFBSSxDQUFDLEdBQ3BELENBQ0gsQ0FDRyxDQUNMLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnQjtBQUdYO0FBQ3lCO0FBRVU7QUFDaEI7QUFFM0MsSUFBTSxNQUFNLEdBQU87SUFDbEIsU0FBOEIsaURBQVUsQ0FBQywwREFBb0IsQ0FBQyxFQUE1RCxpQkFBaUIseUJBQUUsSUFBSSxVQUFxQyxDQUFDO0lBRXJFLE9BQU8sQ0FDTDtRQUNFLG9FQUNFLFNBQVMsRUFBQyxVQUFVLEVBQ3BCLFlBQVksRUFBRSxpQkFBaUIsRUFDL0IsWUFBWSxFQUFFLGlCQUFpQixpQkFDbEIsaUVBQXlCLGNBQzVCLGlFQUF5QixvQkFDbkIsaUVBQXlCO1lBRXpDLCtFQUFlO1lBQ2QsMERBQWdCLENBQUMsaUVBQXlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FDcEQsMkRBQUMsdUNBQUksSUFDSCxRQUFRLEVBQUMsUUFBUSxFQUNqQixJQUFJLEVBQUUsc0RBQVksQ0FBQyxpRUFBeUIsRUFBRSxJQUFJLENBQUMsR0FDbkQsQ0FDSCxDQUNHO1FBQ04sb0VBQ0UsU0FBUyxFQUFDLFVBQVUsRUFDcEIsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQixpRUFBeUIsY0FDNUIsaUVBQXlCLG9CQUNuQixpRUFBeUI7WUFFekMsZ0ZBQWdCO1lBQ2YsMERBQWdCLENBQUMsaUVBQXlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FDcEQsMkRBQUMsdUNBQUksSUFDSCxRQUFRLEVBQUMsUUFBUSxFQUNqQixJQUFJLEVBQUUsc0RBQVksQ0FBQyxpRUFBeUIsRUFBRSxJQUFJLENBQUMsR0FDbkQsQ0FDSCxDQUNHO1FBQ04sb0VBQ0UsU0FBUyxFQUFDLFVBQVUsRUFDcEIsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQixpRUFBeUIsY0FDNUIsaUVBQXlCLG9CQUNuQixpRUFBeUI7WUFFekMsZ0ZBQWdCO1lBQ2YsMERBQWdCLENBQUMsaUVBQXlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FDcEQsMkRBQUMsdUNBQUksSUFDSCxRQUFRLEVBQUMsUUFBUSxFQUNqQixJQUFJLEVBQUUsc0RBQVksQ0FBQyxpRUFBeUIsRUFBRSxJQUFJLENBQUMsR0FDbkQsQ0FDSCxDQUNHLENBQ0wsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQjtBQUdYO0FBQ3lCO0FBRVI7QUFXdEI7QUFDd0I7QUFFM0MsSUFBTSxVQUFVLEdBQU87SUFDdEIsU0FBOEIsaURBQVUsQ0FBQywwREFBb0IsQ0FBQyxFQUE1RCxpQkFBaUIseUJBQUUsSUFBSSxVQUFxQyxDQUFDO0lBRXJFLE9BQU8sQ0FDTCwwSEFDRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxRQUMzRCxvRUFDRSxHQUFHLEVBQUUsTUFBTSxpQkFDRSxnRUFBd0IsY0FDM0IsVUFBRyxNQUFNLENBQUUsRUFDckIsU0FBUyxFQUFFLFVBQ1QsNERBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUN2RDtRQUdELHNFQUE0QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3ZDO1lBQ0Usb0VBQ0UsU0FBUyxFQUFDLG9CQUFvQixFQUM5QixZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLDJEQUFtQixvQkFDaEIsVUFBRyxNQUFNLGNBQUksTUFBTSxHQUFHLENBQUMsY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUNuRCxNQUFNLEdBQUcsQ0FBQyxDQUNWLEdBQ0Y7WUFDRCwwREFBZ0IsQ0FDZixVQUFHLE1BQU0sY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxFQUNyRCxJQUFJLENBQ0wsS0FBSyxJQUFJLElBQUksQ0FDWiwyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxXQUFXLEVBQ3BCLElBQUksRUFBRSxzREFBWSxDQUNoQixVQUFHLE1BQU0sY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxFQUNyRCxJQUFJLENBQ0wsR0FDRCxDQUNILENBQ0EsQ0FDSjtRQUdBLGlGQUF1QyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2xEO1lBQ0Usb0VBQ0UsU0FBUyxFQUFDLGlDQUFpQyxFQUMzQyxZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLGtFQUEwQixvQkFDdkIsVUFBRyxNQUFNLGNBQUksTUFBTSxHQUFHLENBQUMsY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUNuRCxNQUFNLEdBQUcsQ0FBQyxjQUNSLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxHQUM5QjtZQUNELDBEQUFnQixDQUNmLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUNqRCxNQUFNLEdBQUcsQ0FBQyxjQUNSLE1BQU0sR0FBRyxDQUFDLENBQUUsRUFDaEIsSUFBSSxDQUNMLEtBQUssSUFBSSxJQUFJLENBQ1osMkRBQUMsdUNBQUksSUFDSCxRQUFRLEVBQUMsV0FBVyxFQUNwQixJQUFJLEVBQUUsc0RBQVksQ0FDaEIsVUFBRyxNQUFNLGNBQUksTUFBTSxHQUFHLENBQUMsY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQ2pELE1BQU0sR0FBRyxDQUFDLGNBQ1IsTUFBTSxHQUFHLENBQUMsQ0FBRSxFQUNoQixJQUFJLENBQ0wsR0FDRCxDQUNILENBQ0EsQ0FDSjtRQUdBLHNFQUE0QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3ZDO1lBQ0Usb0VBQ0UsU0FBUyxFQUFDLDBCQUEwQixFQUNwQyxZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLDJEQUFtQixvQkFDaEIsVUFBRyxNQUFNLGNBQUksTUFBTSxHQUFHLENBQUMsY0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFFLEdBQ3ZEO1lBQ0QsMERBQWdCLENBQ2YsVUFBRyxNQUFNLGNBQUksTUFBTSxHQUFHLENBQUMsY0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFFLEVBQ3ZDLElBQUksQ0FDTCxLQUFLLElBQUksSUFBSSxDQUNaLDJEQUFDLHVDQUFJLElBQ0gsUUFBUSxFQUFDLFlBQVksRUFDckIsSUFBSSxFQUFFLHNEQUFZLENBQ2hCLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxFQUN2QyxJQUFJLENBQ0wsR0FDRCxDQUNILENBQ0EsQ0FDSjtRQUVBLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDakM7WUFDRSxvRUFDRSxTQUFTLEVBQUMsb0JBQW9CLEVBQzlCLFlBQVksRUFBRSxpQkFBaUIsRUFDL0IsWUFBWSxFQUFFLGlCQUFpQixpQkFDbEIsMkRBQW1CLG9CQUNoQixVQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLEVBQ3RELEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FDckI7WUFDRCwwREFBZ0IsQ0FDZixVQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLEVBQ3RDLElBQUksQ0FDTCxLQUFLLElBQUksSUFBSSxDQUNaLDJEQUFDLHVDQUFJLElBQ0gsUUFBUSxFQUFDLFVBQVUsRUFDbkIsSUFBSSxFQUFFLHNEQUFZLENBQ2hCLFVBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUUsRUFDdEMsSUFBSSxDQUNMLEdBQ0QsQ0FDSCxDQUNBLENBQ0o7UUFDQSxnRUFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNqQztZQUNFLG9FQUNFLFNBQVMsRUFBQywwQkFBMEIsRUFDcEMsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQiwwREFBa0Isb0JBQ2YsVUFBRyxNQUFNLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxHQUN6QztZQUNELDBEQUFnQixDQUFDLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLENBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FDN0QsMkRBQUMsdUNBQUksSUFDSCxRQUFRLEVBQUMsWUFBWSxFQUNyQixJQUFJLEVBQUUsc0RBQVksQ0FBQyxVQUFHLE1BQU0sY0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFFLEVBQUUsSUFBSSxDQUFDLEdBQ25ELENBQ0gsQ0FDQSxDQUNKO1FBQ0Qsb0VBQUssU0FBUyxFQUFDLE9BQU8sSUFBRSxNQUFNLENBQU87UUFDcEMsMERBQWdCLENBQUMsVUFBRyxNQUFNLENBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUN0QywyREFBQyx1Q0FBSSxJQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLHNEQUFZLENBQUMsVUFBRyxNQUFNLENBQUUsRUFBRSxJQUFJLENBQUMsR0FBSSxDQUNsRTtRQUNBLGtFQUF3QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ25DO1lBQ0Usb0VBQ0UsU0FBUyxFQUFDLDRCQUE0QixFQUN0QyxZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLDBEQUFrQixvQkFDZixVQUFHLE1BQU0sY0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFFLEdBQ3pDO1lBQ0QsMERBQWdCLENBQUMsVUFBRyxNQUFNLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUM3RCwyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxjQUFjLEVBQ3ZCLElBQUksRUFBRSxzREFBWSxDQUFDLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLENBQUUsRUFBRSxJQUFJLENBQUMsR0FDbkQsQ0FDSCxDQUNBLENBQ0o7UUFDQSxtRUFBeUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNwQztZQUNFLG9FQUNFLFNBQVMsRUFBQyw2QkFBNkIsRUFDdkMsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQiwyREFBbUIsb0JBQ2hCLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxHQUN2RDtZQUNELDBEQUFnQixDQUNmLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBRSxFQUN2QyxJQUFJLENBQ0wsS0FBSyxJQUFJLElBQUksQ0FDWiwyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxlQUFlLEVBQ3hCLElBQUksRUFBRSxzREFBWSxDQUNoQixVQUFHLE1BQU0sY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUFJLE1BQU0sR0FBRyxDQUFDLENBQUUsRUFDdkMsSUFBSSxDQUNMLEdBQ0QsQ0FDSCxDQUNBLENBQ0o7UUFDQSx1RUFBNkIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN4QztZQUNFLG9FQUNFLFNBQVMsRUFBQyxtQkFBbUIsRUFDN0IsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQixrRUFBMEIsb0JBQ3ZCLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsY0FDbkQsTUFBTSxHQUFHLENBQUMsY0FDUixNQUFNLEdBQUcsQ0FBQyxjQUFJLE1BQU0sR0FBRyxDQUFDLENBQUUsR0FDOUI7WUFDRCwwREFBZ0IsQ0FDZixVQUFHLE1BQU0sY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsY0FDakQsTUFBTSxHQUFHLENBQUMsY0FDUixNQUFNLEdBQUcsQ0FBQyxDQUFFLEVBQ2hCLElBQUksQ0FDTCxLQUFLLElBQUksSUFBSSxDQUNaLDJEQUFDLHVDQUFJLElBQ0gsUUFBUSxFQUFDLGNBQWMsRUFDdkIsSUFBSSxFQUFFLHNEQUFZLENBQ2hCLFVBQUcsTUFBTSxjQUFJLE1BQU0sR0FBRyxDQUFDLGNBQUksTUFBTSxHQUFHLENBQUMsY0FBSSxNQUFNLEdBQUcsQ0FBQyxjQUNqRCxNQUFNLEdBQUcsQ0FBQyxjQUNSLE1BQU0sR0FBRyxDQUFDLENBQUUsRUFDaEIsSUFBSSxDQUNMLEdBQ0QsQ0FDSCxDQUNBLENBQ0osQ0FDRyxDQUNQLEVBL000RCxDQStNNUQsQ0FBQyxDQUNELENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNPMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFHakM7QUFDSTtBQUNOO0FBQ0Y7QUFDUTtBQUVXO0FBQ047QUFDRjtBQUNQO0FBQ0U7QUFFWDtBQWtCdEIsSUFBTSxhQUFhLEdBQTRCLFVBQUMsRUFJdEQ7UUFIQyxLQUFLLGFBQ0wsSUFBSSxZQUNKLE9BQU87SUFFUCxJQUFNLFFBQVEsR0FBRyw2Q0FBTSxDQUFpQixJQUFJLENBQUMsQ0FBQztJQUU5QyxnREFBUyxDQUFDO1FBQ1IsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUM3QixPQUFPO1NBQ1I7UUFFRCxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQVk7O1lBQzVCLElBQU0sZ0JBQWdCLEdBQUcsTUFBQyxLQUFLLENBQUMsTUFBeUIsMENBQUUsT0FBTyxDQUNoRSxrQkFBa0IsQ0FDbkIsQ0FBQztZQUNGLElBQU0sYUFBYSxHQUFHLE1BQUMsZ0JBQW1DLGFBQW5DLGdCQUFnQix1QkFBaEIsZ0JBQWdCLENBQXFCLE9BQU8sMENBQy9ELFNBQVMsQ0FBQztZQUVkLElBQU0sVUFBVSxHQUFHLE1BQUMsS0FBSyxDQUFDLE1BQXlCLDBDQUFFLE9BQU8sQ0FDMUQsWUFBWSxDQUNiLENBQUM7WUFDRixJQUFNLE9BQU8sR0FBRyxNQUFDLFVBQTZCLGFBQTdCLFVBQVUsdUJBQVYsVUFBVSxDQUFxQixPQUFPLDBDQUFFLEdBQUcsQ0FBQztZQUU3RCxJQUFNLE1BQU0sR0FBRyxZQUFDLEVBQUMsZ0JBQWdCLGFBQWhCLGdCQUFnQixjQUFoQixnQkFBZ0IsR0FBSSxVQUFVLENBQUMsQ0FBbUIsMENBQy9ELE9BQU8sMENBQUUsTUFBTSxDQUFDO1lBRXBCLElBQ0UsQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLGFBQWEsS0FBSyxFQUFFLENBQUM7Z0JBQ3JELENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssRUFBRSxDQUFDLEVBQ3pDO2dCQUNBLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztnQkFDM0QsT0FBTzthQUNSO1lBRUQsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDckMsT0FBTzthQUNSO1lBRUQsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9EQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckUsSUFBSSxpQkFBaUIsS0FBSyxLQUFLLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLE9BQU87YUFDUjtZQUVELHFCQUFxQjtZQUVyQixJQUFNLFdBQVcsR0FBRyxDQUFDLGFBQWEsYUFBYixhQUFhLGNBQWIsYUFBYSxHQUFJLE9BQU8sQ0FBVyxDQUFDO1lBRXpELElBQU0sVUFBVSxHQUFHO2dCQUNqQixJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUxQyxJQUFNLGlCQUFpQixHQUFHLCtDQUFNLENBQUMsK0NBQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFbEQsSUFBSSxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7b0JBQzlCLE9BQU8sK0NBQU0sQ0FBQyxPQUE4QixDQUFDLENBQUMsR0FBRyxDQUMvQyxVQUFDLElBQUksSUFBSyxpQkFBRyxJQUFJLENBQUUsRUFBVCxDQUFTLENBQ3BCLENBQUM7aUJBQ0g7Z0JBRUQsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDO1lBRUYsSUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7WUFFN0IsS0FBSyxDQUFDO2dCQUNKLEdBQUcsRUFBRSxNQUFtQztnQkFDeEMsT0FBTztnQkFDUCxFQUFFLEVBQUUsV0FBVzthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBRXpDLE9BQU87WUFDTCxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQWE7UUFDaEMsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUM3QixPQUFPO1NBQ1I7UUFFRCxJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFFaEMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsc0JBQWMsS0FBSyxRQUFJLENBQUMsQ0FBQztRQUV4RSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUM7SUFFRixJQUFNLHFCQUFxQixHQUFHLGtEQUFXLENBQ3ZDLFVBQUMsS0FBaUM7UUFDaEMsSUFBTSxhQUFhLEdBQUksS0FBSyxDQUFDLGFBQWdDLENBQUMsT0FBTzthQUNsRSxTQUFTLENBQUM7UUFDYixJQUFNLFdBQVcsR0FBRyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLElBQU0sY0FBYyxHQUFHLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRyxDQUFDLENBQUMsQ0FBQztRQUV4QyxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBRUQsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQywrQ0FBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxFLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUN6QixXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFNUIsSUFBSSwrQ0FBTSxDQUFDLGNBQXFDLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQy9ELE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU87YUFDUjtZQUVELCtDQUFNLENBQUMsY0FBcUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3hELGtCQUFXLENBQUMsVUFBRyxHQUFHLENBQUUsQ0FBQztZQUFyQixDQUFxQixDQUN0QixDQUFDO1lBRUYsT0FBTztTQUNSO1FBRUQsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDM0IsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUNELEVBQUUsQ0FDSCxDQUFDO0lBRUYsSUFBTSxZQUFZLEdBQUcsOENBQU8sQ0FDMUIsY0FBTSxRQUFDLEVBQUUsSUFBSSxRQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBcEQsQ0FBb0QsRUFDMUQsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FDOUIsQ0FBQztJQUVGLE9BQU8sQ0FDTCwyREFBQyxtRUFBNkIsSUFBQyxLQUFLLEVBQUUsWUFBWTtRQUNoRCxvRUFDRSxTQUFTLEVBQUUsa0RBQVUsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUNyRSxHQUFHLEVBQUUsUUFBUTtZQUViLHdFQUFTLFNBQVMsRUFBQyxnQ0FBZ0M7Z0JBQ2pELDJEQUFDLCtDQUFRLE9BQUc7Z0JBQ1osMkRBQUMsbURBQVUsT0FBRztnQkFDZCwyREFBQyw2Q0FBTyxPQUFHLENBQ0g7WUFDVix3RUFBUyxTQUFTLEVBQUMsaUNBQWlDO2dCQUNsRCwyREFBQywyQ0FBTSxPQUFHLENBQ0Y7WUFDVixvRUFBSyxTQUFTLEVBQUMsZ0NBQWdDO2dCQUM3QywyREFBQyxtREFBVSxPQUFHLENBQ1YsQ0FDRixDQUN3QixDQUNqQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsYUFBYSxDQUFDLFlBQVksR0FBRztJQUMzQixPQUFPLEVBQUUsS0FBSztDQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNd0M7QUFHWDtBQUVtQjtBQUNnQjtBQUNWO0FBRWpELElBQU0sUUFBUSxHQUFPO0lBQ3BCLFNBQThCLGlEQUFVLENBQUMsMERBQW9CLENBQUMsRUFBNUQsaUJBQWlCLHlCQUFFLElBQUksVUFBcUMsQ0FBQztJQUVyRSxPQUFPLENBQ0wsMEhBQ0csQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLFFBQzNCLG9FQUNFLEdBQUcsRUFBRSxvQkFBYSxNQUFNLENBQUUsRUFDMUIsU0FBUyxFQUFDLFdBQVcsaUJBQ1Isb0RBQVksQ0FBQyxNQUFvQixDQUFDLGNBQ3JDLE1BQU07UUFHZixNQUFNLEtBQUssR0FBRyxJQUFJLENBQ2pCO1lBQ0Usb0VBQ0UsU0FBUyxFQUFDLG9CQUFvQixFQUM5QixZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLFlBQVksRUFBRSxpQkFBaUIsaUJBQ2xCLDJEQUFtQixvQkFDakIsUUFBUSxFQUN2QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQy9DO1lBQ0QsMERBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUM1QywyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBQyxXQUFXLEVBQ3BCLElBQUksRUFBRSxzREFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FDbEMsQ0FDSCxDQUNBLENBQ0o7UUFHRCxvRUFDRSxTQUFTLEVBQUUsNkJBQXNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLEVBQ2pFLFlBQVksRUFBRSxpQkFBaUIsRUFDL0IsWUFBWSxFQUFFLGlCQUFpQixpQkFDbEIsOERBQXNCLG9CQUNuQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFDNUQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUNyQjtRQUNELDBEQUFnQixDQUNmLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUM1QyxJQUFJLENBQ0wsS0FBSyxJQUFJLElBQUksQ0FDWiwyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDdkQsSUFBSSxFQUFFLHNEQUFZLENBQ2hCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUM1QyxJQUFJLENBQ0wsR0FDRCxDQUNIO1FBR0EsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUNqQjtZQUNFLG9FQUNFLFNBQVMsRUFBQywwQkFBMEIsRUFDcEMsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQix3REFBZ0Isb0JBQ2QsTUFBTSxHQUNyQjtZQUNELDBEQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FDMUMsMkRBQUMsdUNBQUksSUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBRSxzREFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBSSxDQUNqRSxDQUNBLENBQ0o7UUFHRCxvRUFDRSxTQUFTLEVBQUMsNEJBQTRCLEVBQ3RDLFlBQVksRUFBRSxpQkFBaUIsRUFDL0IsWUFBWSxFQUFFLGlCQUFpQixpQkFDbEIsMERBQWtCLG9CQUNmLFVBQUcsTUFBTSxjQUFJLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQ3JELEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3RDLEdBQ0Q7UUFDRCwwREFBZ0IsQ0FBQyxVQUFHLE1BQU0sY0FBSSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUFFLElBQUksQ0FBQztZQUM1RCxJQUFJLElBQUksQ0FDUiwyREFBQyx1Q0FBSSxJQUNILFFBQVEsRUFDTixNQUFNLEtBQUssR0FBRztnQkFDWixDQUFDLENBQUMsMEJBQTBCO2dCQUM1QixDQUFDLENBQUMsdUJBQXVCLEVBRTdCLElBQUksRUFBRSxzREFBWSxDQUFDLFVBQUcsTUFBTSxjQUFJLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQUUsSUFBSSxDQUFDLEdBQy9ELENBQ0g7UUFHRCxvRUFDRSxTQUFTLEVBQUMsNEJBQTRCLEVBQ3RDLFlBQVksRUFBRSxpQkFBaUIsRUFDL0IsWUFBWSxFQUFFLGlCQUFpQixpQkFDbEIsMERBQWtCLG9CQUNmLFVBQUcsTUFBTSxjQUFJLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQ3JELEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQzdDO1FBQ0QsMERBQWdCLENBQUMsVUFBRyxNQUFNLGNBQUksTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsRUFBRSxJQUFJLENBQUM7WUFDNUQsSUFBSSxJQUFJLENBQ1IsMkRBQUMsdUNBQUksSUFDSCxRQUFRLEVBQ04sTUFBTSxLQUFLLEdBQUc7Z0JBQ1osQ0FBQyxDQUFDLDBCQUEwQjtnQkFDNUIsQ0FBQyxDQUFDLDZCQUE2QixFQUVuQyxJQUFJLEVBQUUsc0RBQVksQ0FBQyxVQUFHLE1BQU0sY0FBSSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUFFLElBQUksQ0FBQyxHQUMvRCxDQUNIO1FBR0Qsb0VBQ0UsU0FBUyxFQUNQLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFFakUsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixZQUFZLEVBQUUsaUJBQWlCLGlCQUNsQiw4REFBc0Isb0JBQ25CLFVBQUcsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLFdBQVEsRUFDM0QsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQ25CO1FBRUYsb0VBQUssU0FBUyxFQUFDLE9BQU8sSUFBRSxNQUFNLENBQU87UUFDcEMsMERBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQ2pDLDJEQUFDLHVDQUFJLElBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsc0RBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUksQ0FDN0QsQ0FDRyxDQUNQLEVBL0g0QixDQStINUIsQ0FBQyxDQUNELENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKeUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUI7QUFHSjtBQUNMO0FBRVg7QUFFN0IsSUFBTSxvQkFBb0IsR0FBRyw4Q0FDeEIsMERBQWlCLFNBQ2pCLDJEQUFrQixTQUNsQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQ3BCLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxpQkFBRyxHQUFHLENBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztBQVVsQixJQUFNLGFBQWEsR0FBNEIsVUFBQyxFQU10RDtRQUxDLEtBQUssYUFDTCxVQUFVLGtCQUNWLGFBQWEscUJBQ2IsYUFBYSxxQkFDYixPQUFPO0lBRVAsSUFBTSxZQUFZLEdBQUc7UUFDbkIsR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO1FBQ0osR0FBRztRQUNILElBQUk7UUFDSixJQUFJO1FBQ0osR0FBRztRQUNILElBQUk7UUFDSixHQUFHO1FBQ0gsSUFBSTtRQUNKLEdBQUc7S0FDSixDQUFDO0lBRUYsSUFBTSxRQUFRLEdBQUcsNkNBQU0sQ0FBbUIsSUFBSSxDQUFDLENBQUM7SUFFaEQsZ0RBQVMsQ0FBQztRQUNSLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFFekMsSUFBSSxVQUFVLEtBQUssSUFBSSxJQUFJLGVBQWUsS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN0RSxPQUFPO1NBQ1I7UUFFRCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUM7UUFFRCxlQUFlLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFcEQsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRCxVQUFVLENBQUM7WUFDVCxlQUFlLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLFVBQUcsUUFBUSxDQUFFLENBQUMsQ0FBQztZQUVoRSxVQUFVLENBQUM7Z0JBQ1QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO29CQUNwQixlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkM7Z0JBRUQsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxFQUFJLENBQUM7WUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsMERBQTBEO1FBQzFELHVEQUF1RDtJQUN6RCxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV4QixPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLDBCQUEwQjtRQUN2QyxvRUFDRSxTQUFTLEVBQUUsaURBQVUsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDNUMsZ0JBQWdCLEVBQUUsYUFBYTthQUNoQyxDQUFDO1lBRUYsbUVBQUksU0FBUyxFQUFDLHNCQUFzQixFQUFDLEdBQUcsRUFBRSxRQUFRLElBQy9DLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssUUFDNUIsbUVBQ0UsR0FBRyxFQUFFLGdCQUFTLE1BQU0sQ0FBRSxjQUNaLE1BQU0sRUFDaEIsU0FBUyxFQUFDLDJCQUEyQjtnQkFFckMsc0VBQU8sT0FBTyxFQUFFLG9CQUFhLE1BQU0sQ0FBRTtvQkFDbkMsc0VBQ0UsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLEVBQUMsS0FBSyxFQUNWLEVBQUUsRUFBRSxvQkFBYSxNQUFNLENBQUUsRUFDekIsWUFBWSxFQUFFLE1BQU0sR0FDcEI7b0JBQ0YscUVBQU0sU0FBUyxFQUFDLG9CQUFvQixJQUFFLE1BQU0sQ0FBUSxDQUM5QyxDQUNMLENBQ04sRUFoQjZCLENBZ0I3QixDQUFDLENBQ0MsQ0FDRCxDQUNGLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGFBQWEsQ0FBQyxZQUFZLEdBQUc7SUFDM0IsYUFBYSxFQUFFLGNBQU0sZ0JBQVMsRUFBVCxDQUFTO0lBQzlCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJOEI7Ozs7Ozs7Ozs7Ozs7OztBQ0F6QixJQUFNLFlBQVksR0FBRztJQUMxQixDQUFDLEVBQUUsR0FBRztJQUNOLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsV0FBVztJQUN0QixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFlBQVksRUFBRSxZQUFZO0lBQzFCLFlBQVksRUFBRSxZQUFZO0lBQzFCLFlBQVksRUFBRSxZQUFZO0lBQzFCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixHQUFHLEVBQUUsS0FBSztJQUNWLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm9DO0FBVS9CLElBQU0sb0JBQW9CLEdBQUcsb0RBQWEsQ0FBQztJQUNoRCxJQUFJLEVBQUUsRUFBRTtJQUNSLGlCQUFpQixFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUk7Q0FDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTTs7Ozs7Ozs7Ozs7Ozs7O0FDRWhDLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFBVSxFQUFFLElBQWlDLFlBQ3hFLGlCQUFJLENBQUMsRUFBRSxDQUFDLDBDQUFFLElBQUksSUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hjOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW1CO0FBRTNDLElBQU0sZUFBZSxHQUFHO0lBQzdCLFdBQVc7SUFDWCxJQUFNLGtCQUFrQixHQUFhLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQjtJQUU1RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDL0Isa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQztLQUNqQztJQUVELFdBQVc7SUFDWCxJQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7SUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JELElBQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUNoRCxVQUFDLE1BQU0sSUFBSyxvQkFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQXhDLENBQXdDLENBQ3JELENBQUM7UUFDRixJQUFNLFlBQVksR0FBRywyREFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFELGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDbEM7SUFFRCxXQUFXO0lBQ1gsSUFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDO0lBRWhDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztRQUNsQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FIO0FBQ0E7QUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0UvQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbEUsSUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNuRSxJQUFNLGlCQUFpQixtQ0FBTyxXQUFXLFVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBQyxDQUFDO0FBQ25ELElBQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RSxJQUFNLDBCQUEwQixHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFekUsSUFBTSxzQkFBc0IsR0FBRyxVQUFDLGFBQXFCO0lBQzFELGtCQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUs7QUFBN0MsQ0FBNkMsQ0FBQztBQUV6QyxJQUFNLHdCQUF3QixHQUFHLFVBQUMsYUFBcUI7SUFDNUQsb0JBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssS0FBSztBQUEvQyxDQUErQyxDQUFDO0FBRTNDLElBQU0seUJBQXlCLEdBQUcsVUFBQyxhQUFxQjtJQUM3RCxtQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7QUFBcEMsQ0FBb0MsQ0FBQztBQUVoQyxJQUFNLDRCQUE0QixHQUFHLFVBQUMsYUFBcUI7SUFDaEUsd0JBQWlCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUs7QUFBbkQsQ0FBbUQsQ0FBQztBQUUvQyxJQUFNLDZCQUE2QixHQUFHLFVBQUMsYUFBcUI7SUFDakUsd0JBQWlCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztBQUF6QyxDQUF5QyxDQUFDO0FBRXJDLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsRUFBVSxFQUNWLElBQWlDLElBQzlCLGFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDO0FBRTdCLElBQU0sNEJBQTRCLEdBQUcsVUFBQyxhQUFxQjtJQUNoRSxrQkFBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7QUFBbkMsQ0FBbUMsQ0FBQztBQUUvQixJQUFNLHVDQUF1QyxHQUFHLFVBQ3JELGFBQXFCLElBQ2xCLGlDQUEwQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEN4RCxJQUFNLE9BQU8sR0FBRyxVQUFDLElBQWEsSUFBSyxZQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixDQUFDO0FBRXZELElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBYTtJQUM3QixXQUFJLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtBQUFwRSxDQUFvRSxDQUFDO0FBRXZFLElBQU0sVUFBVSxHQUFHLFVBQUMsSUFBYSxJQUFLLGNBQU8sSUFBSSxLQUFLLFVBQVUsRUFBMUIsQ0FBMEIsQ0FBQztBQUVqRSxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQWEsSUFBSyxjQUFPLElBQUksS0FBSyxTQUFTLEVBQXpCLENBQXlCLENBQUM7QUFFL0QsSUFBTSx5QkFBeUIsR0FBRyxVQUFDLE1BQWM7SUFDL0MsYUFBTSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVE7QUFBN0MsQ0FBNkMsQ0FBQztBQUV6QyxJQUFNLFVBQVUsR0FBRztJQUFDLGlCQUEwQjtTQUExQixVQUEwQixFQUExQixxQkFBMEIsRUFBMUIsSUFBMEI7UUFBMUIsNEJBQTBCOztJQUNuRCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFFekIsSUFBTSxlQUFlLEdBQUcsVUFBQyxJQUFhLEVBQUUsS0FBYztRQUNwRCxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQ25DLE9BQU87U0FDUjtRQUVELGVBQWUsSUFBSSxVQUFHLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFHLENBQUM7SUFDOUQsQ0FBQyxDQUFDO0lBRUYsSUFBTSxZQUFZLEdBQUcsVUFBQyxNQUFjO1FBQ2xDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkMsd0JBQXdCO1FBQ3hCLElBQU0sK0JBQStCLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsSUFBSTtRQUVKLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFZO2dCQUFYLEdBQUcsVUFBRSxLQUFLO1lBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsT0FBTzthQUNSO1lBRUQsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQU0sVUFBVSxHQUFHLEdBQUcsS0FBSyxVQUFVLENBQUM7WUFFdEMsSUFBSSxlQUFlLEtBQUssSUFBSSxJQUFJLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQ3BELElBQU0sY0FBYyxHQUFJLEtBQWtCLEVBQUUsQ0FBQztnQkFFN0MsZUFBZSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFckMsT0FBTzthQUNSO1lBRUQsSUFBSSxVQUFVLEtBQUssS0FBSyxFQUFFO2dCQUN4QixlQUFlLElBQUksVUFBRyxHQUFHLE1BQUcsQ0FBQzthQUM5QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsd0JBQXdCO1FBQ3hCLElBQUksK0JBQStCLEtBQUssSUFBSSxFQUFFO1lBQzVDLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUV4QyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJO0lBQ04sQ0FBQyxDQUFDO0lBRUYsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFxQjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDdEMsT0FBTzthQUNSO1lBRUQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLE9BQU8sV0FBVyxDQUFDLElBQXNCLENBQUMsQ0FBQzthQUM1QztZQUVELElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDekIsT0FBTyxZQUFZLENBQUMsSUFBYyxDQUFDLENBQUM7YUFDckM7WUFFRCxlQUFlLElBQUksVUFBRyxJQUFJLE1BQUcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUMsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU3QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0MsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3pCLFlBQVksQ0FBQyxhQUF1QixDQUFDLENBQUM7WUFFdEMsU0FBUztTQUNWO1FBRUQsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ3hCLFdBQVcsQ0FBQyxhQUErQixDQUFDLENBQUM7WUFFN0MsU0FBUztTQUNWO1FBRUQsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUcyQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBdEIsSUFBTSxrQkFBa0IsR0FBRyxVQUFJLEdBQVE7SUFDNUMsVUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUEzQyxDQUEyQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRFQ7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQzs7R0FFRztBQUNJLElBQU0sWUFBWSxHQUFHLFVBQUMsU0FBaUIsRUFBRSxTQUFpQjtJQUMvRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDM0QsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUjZCOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEIsSUFBTSxNQUFNLEdBQUcsVUFBQyxNQUFjLEVBQUUsUUFBZ0I7SUFDckQsYUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7QUFBdEQsQ0FBc0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FEO0FBQ0M7QUFDTTtBQUNNOzs7Ozs7Ozs7Ozs7Ozs7O0FDSGI7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQixJQUFNLEtBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxhQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7QUNBMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkQ7QUFDQTtBQUVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL0NoaXAvQ2hpcC5jc3M/MzBkMSIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9Sb3VsZXR0ZVRhYmxlLmNzcz9iZmM3Iiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVdoZWVsL1JvdWxldHRlV2hlZWwuY3NzP2I4MWYiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvQm90dG9tQmV0cy9Cb3R0b21CZXRzLnRzeCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9Cb3R0b21CZXRzL2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL0NoaXAvQ2hpcC50c3giLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvQ2hpcC9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9Db2x1bW5zL0NvbHVtbnMudHN4Iiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL0NvbHVtbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvRG96ZW5zL0RvemVucy50c3giLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvRG96ZW5zL2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL051bWJlckJldHMvTnVtYmVyQmV0cy50c3giLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvTnVtYmVyQmV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9Sb3VsZXR0ZVRhYmxlLnRzeCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9aZXJvQmV0cy9aZXJvQmV0cy50c3giLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvWmVyb0JldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlV2hlZWwvUm91bGV0dGVXaGVlbC50c3giLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlV2hlZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb250ZXh0L1JvdWxldHRlVGFibGVDb250ZXh0LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29udGV4dC9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2hlbHBlcnMvZmluZENoaXBJY29uL2ZpbmRDaGlwSWNvbi50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2hlbHBlcnMvZmluZENoaXBJY29uL2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvaGVscGVycy9nZXRXaGVlbE51bWJlcnMvZ2V0V2hlZWxOdW1iZXJzLnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvaGVscGVycy9nZXRXaGVlbE51bWJlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9oZWxwZXJzL2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvaGVscGVycy9zaG91bGRSZW5kZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9oZWxwZXJzL3Nob3VsZFJlbmRlci9zaG91bGRSZW5kZXIudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9saWJzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcy50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2xpYnMvY2xhc3NOYW1lcy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2xpYnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy91dGlsbHMvZ2V0UmFuZG9tQXJyYXlJdGVtL2dldFJhbmRvbUFycmF5SXRlbS50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9nZXRSYW5kb21BcnJheUl0ZW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy91dGlsbHMvZ2V0UmFuZG9tSW50L2dldFJhbmRvbUludC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9nZXRSYW5kb21JbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy91dGlsbHMvaGFzT3duL2hhc093bi50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9oYXNPd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy91dGlsbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy91dGlsbHMvaXNPZGQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy91dGlsbHMvaXNPZGQvaXNPZGQudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FzaW5vUm91bGV0dGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYXNpbm9Sb3VsZXR0ZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pID0+IHtcbnJldHVybiAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoaXAgfSBmcm9tICcuLi9DaGlwJztcbmltcG9ydCB7IFJvdWxldHRlVGFibGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbmltcG9ydCB7IHNob3VsZFJlbmRlckNoaXAsIGZpbmRDaGlwSWNvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQUNUSU9OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IEJvdHRvbUJldHM6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IG9uQmV0Q2F0Y2hlckhvdmVyLCBiZXRzIH0gPSB1c2VDb250ZXh0KFJvdWxldHRlVGFibGVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHNpZGUtc2VjdGlvblwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVNbJzFfVE9fMTgnXX1cbiAgICAgICAgZGF0YS1iZXQ9e0FDVElPTl9UWVBFU1snMV9UT18xOCddfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTWycxX1RPXzE4J119XG4gICAgICA+XG4gICAgICAgIDxkaXY+MS0xODwvZGl2PlxuICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVNbJzFfVE9fMTgnXSwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTWycxX1RPXzE4J10sIGJldHMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0c2lkZS1zZWN0aW9uXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5FVkVOfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTLkVWRU59XG4gICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtBQ1RJT05fVFlQRVMuRVZFTn1cbiAgICAgID5cbiAgICAgICAgPGRpdj5FVkVOPC9kaXY+XG4gICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFUy5FVkVOLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVMuRVZFTiwgYmV0cyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJvdXRzaWRlLXNlY3Rpb25cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlJFRH1cbiAgICAgICAgZGF0YS1iZXQ9e0FDVElPTl9UWVBFUy5SRUR9XG4gICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtBQ1RJT05fVFlQRVMuUkVEfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmhvbWItcmVkXCIgLz5cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVMuUkVELCBiZXRzKSAmJiAoXG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVMuUkVELCBiZXRzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0c2lkZS1zZWN0aW9uXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5CTEFDS31cbiAgICAgICAgZGF0YS1iZXQ9e0FDVElPTl9UWVBFUy5CTEFDS31cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFUy5CTEFDS31cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJob21iLWJsYWNrXCIgLz5cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVMuQkxBQ0ssIGJldHMpICYmIChcbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKEFDVElPTl9UWVBFUy5CTEFDSywgYmV0cyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHNpZGUtc2VjdGlvblwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuT0REfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTLk9ERH1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFUy5PRER9XG4gICAgICA+XG4gICAgICAgIDxkaXY+T0REPC9kaXY+XG4gICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFUy5PREQsIGJldHMpICYmIChcbiAgICAgICAgICA8Q2hpcCBwb3NpdGlvbj1cImNlbnRlclwiIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVMuT0RELCBiZXRzKX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJvdXRzaWRlLXNlY3Rpb25cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTWycxOV9UT18zNiddfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTWycxOV9UT18zNiddfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTWycxOV9UT18zNiddfVxuICAgICAgPlxuICAgICAgICA8ZGl2PjE5LTM2PC9kaXY+XG4gICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFU1snMTlfVE9fMzYnXSwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTWycxOV9UT18zNiddLCBiZXRzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Cb3R0b21CZXRzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vQ2hpcC5jc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaGlwUHJvcHMge1xuICBwb3NpdGlvbjpcbiAgICB8ICdjZW50ZXInXG4gICAgfCAncmlnaHQtdG9wJ1xuICAgIHwgJ3JpZ2h0LWJvdHRvbSdcbiAgICB8ICdjZW50ZXItdG9wJ1xuICAgIHwgJ3JpZ2h0LXRvcC13aXRoLW9mZnNldCdcbiAgICB8ICdyaWdodC1ib3R0b20td2l0aC1vZmZzZXQnXG4gICAgfCAncmlnaHQtYm90dG9tLXdpdGgtbm8tb2Zmc2V0J1xuICAgIHwgJ3JpZ2h0LXRvcC13aXRoLW5vLW9mZnNldCdcbiAgICB8ICdjZW50ZXItYm90dG9tJ1xuICAgIHwgJ2xlZnQtdG9wJ1xuICAgIHwgJ3JpZ2h0LWNlbnRlcic7XG4gIGljb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDaGlwOiBGQzxJQ2hpcFByb3BzPiA9ICh7IHBvc2l0aW9uLCBpY29uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjaGlwICR7cG9zaXRpb259YH1cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogaWNvbiAhPT0gdW5kZWZpbmVkID8gYHVybChcIiR7aWNvbn1cIilgIDogJycgfX1cbiAgICAvPlxuICApO1xufTtcblxuQ2hpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb246IHVuZGVmaW5lZCxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL0NoaXAnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGlwIH0gZnJvbSAnLi4vQ2hpcCc7XG5pbXBvcnQgeyBSb3VsZXR0ZVRhYmxlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBzaG91bGRSZW5kZXJDaGlwLCBmaW5kQ2hpcEljb24gfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IEFDVElPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb2x1bW5zOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBvbkJldENhdGNoZXJIb3ZlciwgYmV0cyB9ID0gdXNlQ29udGV4dChSb3VsZXR0ZVRhYmxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taXRlbVwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVNbJzFTVF9DT0xVTU4nXX1cbiAgICAgICAgZGF0YS1iZXQ9e0FDVElPTl9UWVBFU1snMVNUX0NPTFVNTiddfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTWycxU1RfQ09MVU1OJ119XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj4xc3Q8L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTWycxU1RfQ09MVU1OJ10sIGJldHMpICYmIChcbiAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgcG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKEFDVElPTl9UWVBFU1snMVNUX0NPTFVNTiddLCBiZXRzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1pdGVtXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFU1snMk5EX0NPTFVNTiddfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTWycyTkRfQ09MVU1OJ119XG4gICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtBQ1RJT05fVFlQRVNbJzJORF9DT0xVTU4nXX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjJuZDwvZGl2PlxuICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVNbJzJORF9DT0xVTU4nXSwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTWycyTkRfQ09MVU1OJ10sIGJldHMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWl0ZW1cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTWyczUkRfQ09MVU1OJ119XG4gICAgICAgIGRhdGEtYmV0PXtBQ1RJT05fVFlQRVNbJzNSRF9DT0xVTU4nXX1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFU1snM1JEX0NPTFVNTiddfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+M3JkPC9kaXY+XG4gICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFU1snM1JEX0NPTFVNTiddLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVNbJzNSRF9DT0xVTU4nXSwgYmV0cyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQ29sdW1ucyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoaXAgfSBmcm9tICcuLi9DaGlwJztcbmltcG9ydCB7IFJvdWxldHRlVGFibGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbmltcG9ydCB7IHNob3VsZFJlbmRlckNoaXAsIGZpbmRDaGlwSWNvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQUNUSU9OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IERvemVuczogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb25CZXRDYXRjaGVySG92ZXIsIGJldHMgfSA9IHVzZUNvbnRleHQoUm91bGV0dGVUYWJsZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZG96LWl0ZW1cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTWycxU1RfRE9aRU4nXX1cbiAgICAgICAgZGF0YS1iZXQ9e0FDVElPTl9UWVBFU1snMVNUX0RPWkVOJ119XG4gICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtBQ1RJT05fVFlQRVNbJzFTVF9ET1pFTiddfVxuICAgICAgPlxuICAgICAgICA8ZGl2PjEtMTI8L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTWycxU1RfRE9aRU4nXSwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTWycxU1RfRE9aRU4nXSwgYmV0cyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkb3otaXRlbVwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVNbJzJORF9ET1pFTiddfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTWycyTkRfRE9aRU4nXX1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFU1snMk5EX0RPWkVOJ119XG4gICAgICA+XG4gICAgICAgIDxkaXY+MTMtMjQ8L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTWycyTkRfRE9aRU4nXSwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTWycyTkRfRE9aRU4nXSwgYmV0cyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkb3otaXRlbVwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVNbJzNSRF9ET1pFTiddfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTWyczUkRfRE9aRU4nXX1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFU1snM1JEX0RPWkVOJ119XG4gICAgICA+XG4gICAgICAgIDxkaXY+MjUtMzY8L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTWyczUkRfRE9aRU4nXSwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTWyczUkRfRE9aRU4nXSwgYmV0cyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vRG96ZW5zJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hpcCB9IGZyb20gJy4uL0NoaXAnO1xuaW1wb3J0IHsgUm91bGV0dGVUYWJsZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcvdGFibGUuanNvbic7XG5pbXBvcnQge1xuICBzaG91bGRSZW5kZXJCb3R0b21DYXRjaGVyLFxuICBzaG91bGRSZW5kZXJDaGlwLFxuICBzaG91bGRSZW5kZXJDb3JuZXJCZXRDYXRjaGVyLFxuICBzaG91bGRSZW5kZXJSaWdodENhdGNoZXIsXG4gIHNob3VsZFJlbmRlclNpeExpbmVCZXRDYXRjaGVyLFxuICBzaG91bGRSZW5kZXJUb3BDYXRjaGVyLFxuICBzaG91bGRSZW5kZXJUb3BSaWdodERvdWJsZVN0cmVldENhdGNoZXIsXG4gIHNob3VsZFJlbmRlclRvcFN0cmVldENhdGNoZXIsXG4gIGZpbmRDaGlwSWNvbixcbn0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBBQ1RJT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgTnVtYmVyQmV0czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb25CZXRDYXRjaGVySG92ZXIsIGJldHMgfSA9IHVzZUNvbnRleHQoUm91bGV0dGVUYWJsZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAzNiB9LCAoXywgaSkgPT4gaSArIDEpLm1hcCgobnVtYmVyKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e251bWJlcn1cbiAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNUUkFJR0hUX1VQfVxuICAgICAgICAgIGRhdGEtYmV0PXtgJHtudW1iZXJ9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgY29uZmlnLlJFRC5pbmNsdWRlcyhudW1iZXIpID8gJ3JlZC1pdGVtJyA6ICdibGFjay1pdGVtJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIHN0YXJ0IGNoaXAgKi99XG4gICAgICAgICAge3Nob3VsZFJlbmRlckNvcm5lckJldENhdGNoZXIobnVtYmVyKSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29ybmVyLWJldC1jYXRjaGVyXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5DT1JORVJ9XG4gICAgICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9e2Ake251bWJlcn0tJHtudW1iZXIgKyAxfS0ke251bWJlciArIDN9LSR7XG4gICAgICAgICAgICAgICAgICBudW1iZXIgKyA0XG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKFxuICAgICAgICAgICAgICAgIGAke251bWJlcn0tJHtudW1iZXIgKyAxfS0ke251bWJlciArIDN9LSR7bnVtYmVyICsgNH1gLFxuICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICkgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0LXRvcFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oXG4gICAgICAgICAgICAgICAgICAgIGAke251bWJlcn0tJHtudW1iZXIgKyAxfS0ke251bWJlciArIDN9LSR7bnVtYmVyICsgNH1gLFxuICAgICAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogZW5kIGNoaXAgKi99XG4gICAgICAgICAgey8qIHN0YXJ0IGNoaXAgKi99XG4gICAgICAgICAge3Nob3VsZFJlbmRlclRvcFJpZ2h0RG91YmxlU3RyZWV0Q2F0Y2hlcihudW1iZXIpICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb3VibGUtc3RyZWV0LWNhdGNoZXItdG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5ET1VCTEVfU1RSRUVUfVxuICAgICAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtgJHtudW1iZXJ9LSR7bnVtYmVyIC0gMX0tJHtudW1iZXIgLSAyfS0ke1xuICAgICAgICAgICAgICAgICAgbnVtYmVyICsgM1xuICAgICAgICAgICAgICAgIH0tJHtudW1iZXIgKyAyfS0ke251bWJlciArIDF9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoXG4gICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciAtIDF9LSR7bnVtYmVyIC0gMn0tJHtudW1iZXIgKyAzfS0ke1xuICAgICAgICAgICAgICAgICAgbnVtYmVyICsgMlxuICAgICAgICAgICAgICAgIH0tJHtudW1iZXIgKyAxfWAsXG4gICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHQtdG9wXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihcbiAgICAgICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciAtIDF9LSR7bnVtYmVyIC0gMn0tJHtudW1iZXIgKyAzfS0ke1xuICAgICAgICAgICAgICAgICAgICAgIG51bWJlciArIDJcbiAgICAgICAgICAgICAgICAgICAgfS0ke251bWJlciArIDF9YCxcbiAgICAgICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIGVuZCBjaGlwICovfVxuICAgICAgICAgIHsvKiBzdGFydCBjaGlwICovfVxuICAgICAgICAgIHtzaG91bGRSZW5kZXJUb3BTdHJlZXRDYXRjaGVyKG51bWJlcikgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwbGl0LXVwLWJldC1jYXRjaGVyLXRvcFwiXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuU1RSRUVUfVxuICAgICAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtgJHtudW1iZXJ9LSR7bnVtYmVyIC0gMX0tJHtudW1iZXIgLSAyfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKFxuICAgICAgICAgICAgICAgIGAke251bWJlcn0tJHtudW1iZXIgLSAxfS0ke251bWJlciAtIDJ9YCxcbiAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICApID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJjZW50ZXItdG9wXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihcbiAgICAgICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciAtIDF9LSR7bnVtYmVyIC0gMn1gLFxuICAgICAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogZW5kIGNoaXAgKi99XG4gICAgICAgICAgeyhudW1iZXIgPT09IDEgfHwgbnVtYmVyID09PSAyKSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsZWV0LWJldC1jYXRjaGVyXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5TVFJFRVR9XG4gICAgICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9e2Ake251bWJlciA9PT0gMSA/ICcwLTEtMicgOiAnMDAtMi0zJ31gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMTIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoXG4gICAgICAgICAgICAgICAgYCR7bnVtYmVyID09PSAxID8gJzAtMS0yJyA6ICcwMC0yLTMnfWAsXG4gICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwibGVmdC10b3BcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKFxuICAgICAgICAgICAgICAgICAgICBgJHtudW1iZXIgPT09IDEgPyAnMC0xLTInIDogJzAwLTItMyd9YCxcbiAgICAgICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nob3VsZFJlbmRlclRvcENhdGNoZXIobnVtYmVyKSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXQtdXAtYmV0LWNhdGNoZXItdG9wXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5TUExJVH1cbiAgICAgICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyfS0ke251bWJlciArIDF9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoYCR7bnVtYmVyfS0ke251bWJlciArIDF9YCwgYmV0cykgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlci10b3BcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKGAke251bWJlcn0tJHtudW1iZXIgKyAxfWAsIGJldHMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57bnVtYmVyfTwvZGl2PlxuICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKGAke251bWJlcn1gLCBiZXRzKSAmJiAoXG4gICAgICAgICAgICA8Q2hpcCBwb3NpdGlvbj1cImNlbnRlclwiIGljb249e2ZpbmRDaGlwSWNvbihgJHtudW1iZXJ9YCwgYmV0cyl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyUmlnaHRDYXRjaGVyKG51bWJlcikgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwbGl0LXVwLWJldC1jYXRjaGVyLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5TUExJVH1cbiAgICAgICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyfS0ke251bWJlciArIDN9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoYCR7bnVtYmVyfS0ke251bWJlciArIDN9YCwgYmV0cykgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oYCR7bnVtYmVyfS0ke251bWJlciArIDN9YCwgYmV0cyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nob3VsZFJlbmRlckJvdHRvbUNhdGNoZXIobnVtYmVyKSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXQtdXAtYmV0LWNhdGNoZXItYm90dG9tXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5TVFJFRVR9XG4gICAgICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9e2Ake251bWJlcn0tJHtudW1iZXIgKyAxfS0ke251bWJlciArIDJ9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoXG4gICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgMn1gLFxuICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICkgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlci1ib3R0b21cIlxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKFxuICAgICAgICAgICAgICAgICAgICBgJHtudW1iZXJ9LSR7bnVtYmVyICsgMX0tJHtudW1iZXIgKyAyfWAsXG4gICAgICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzaG91bGRSZW5kZXJTaXhMaW5lQmV0Q2F0Y2hlcihudW1iZXIpICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXgtbGluZXMtY2F0Y2hlclwiXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuRE9VQkxFX1NUUkVFVH1cbiAgICAgICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgMn0tJHtcbiAgICAgICAgICAgICAgICAgIG51bWJlciArIDNcbiAgICAgICAgICAgICAgICB9LSR7bnVtYmVyICsgNH0tJHtudW1iZXIgKyA1fWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKFxuICAgICAgICAgICAgICAgIGAke251bWJlcn0tJHtudW1iZXIgKyAxfS0ke251bWJlciArIDJ9LSR7bnVtYmVyICsgM30tJHtcbiAgICAgICAgICAgICAgICAgIG51bWJlciArIDRcbiAgICAgICAgICAgICAgICB9LSR7bnVtYmVyICsgNX1gLFxuICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICkgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0LWJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oXG4gICAgICAgICAgICAgICAgICAgIGAke251bWJlcn0tJHtudW1iZXIgKyAxfS0ke251bWJlciArIDJ9LSR7bnVtYmVyICsgM30tJHtcbiAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgKyA0XG4gICAgICAgICAgICAgICAgICAgIH0tJHtudW1iZXIgKyA1fWAsXG4gICAgICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vTnVtYmVyQmV0cyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBGQywgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgWmVyb0JldHMgfSBmcm9tICcuL1plcm9CZXRzJztcbmltcG9ydCB7IE51bWJlckJldHMgfSBmcm9tICcuL051bWJlckJldHMnO1xuaW1wb3J0IHsgQ29sdW1ucyB9IGZyb20gJy4vQ29sdW1ucyc7XG5pbXBvcnQgeyBEb3plbnMgfSBmcm9tICcuL0RvemVucyc7XG5pbXBvcnQgeyBCb3R0b21CZXRzIH0gZnJvbSAnLi9Cb3R0b21CZXRzJztcblxuaW1wb3J0IHsgUm91bGV0dGVUYWJsZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcbmltcG9ydCB7IEFDVElPTl9UWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy90YWJsZS5qc29uJztcbmltcG9ydCB7IGhhc093biB9IGZyb20gJy4uLy4uL3V0aWxscyc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnLi4vLi4vbGlicyc7XG5cbmltcG9ydCAnLi9Sb3VsZXR0ZVRhYmxlLmNzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uQmV0UGFyYW1zIHtcbiAgYmV0OiBrZXlvZiB0eXBlb2YgQUNUSU9OX1RZUEVTO1xuICBwYXlsb2FkOiBzdHJpbmdbXTtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQmV0VHlwZSA9IHtcbiAgaWNvbj86IHN0cmluZztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdWxldHRlVGFibGVQcm9wcyB7XG4gIG9uQmV0OiAocGFyYW1zOiBJT25CZXRQYXJhbXMpID0+IHZvaWQ7XG4gIGJldHM6IHsgW2tleTogc3RyaW5nXTogQmV0VHlwZSB9O1xuICBpc0RlYnVnPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdWxldHRlVGFibGU6IEZDPElSb3VsZXR0ZVRhYmxlUHJvcHM+ID0gKHtcbiAgb25CZXQsXG4gIGJldHMsXG4gIGlzRGVidWcsXG59KSA9PiB7XG4gIGNvbnN0IHRhYmxlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0YWJsZVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBoaWdobGlnaHRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCk/LmNsb3Nlc3QoXG4gICAgICAgICdbZGF0YS1oaWdobGlnaHRdJyxcbiAgICAgICk7XG4gICAgICBjb25zdCBoaWdobGlnaHREYXRhID0gKGhpZ2hsaWdodEVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpPy5kYXRhc2V0XG4gICAgICAgID8uaGlnaGxpZ2h0O1xuXG4gICAgICBjb25zdCBiZXRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCk/LmNsb3Nlc3QoXG4gICAgICAgICdbZGF0YS1iZXRdJyxcbiAgICAgICk7XG4gICAgICBjb25zdCBiZXREYXRhID0gKGJldEVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpPy5kYXRhc2V0Py5iZXQ7XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9ICgoaGlnaGxpZ2h0RWxlbWVudCA/PyBiZXRFbGVtZW50KSBhcyBIVE1MRGl2RWxlbWVudClcbiAgICAgICAgPy5kYXRhc2V0Py5hY3Rpb247XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGhpZ2hsaWdodERhdGEgPT09IHVuZGVmaW5lZCB8fCBoaWdobGlnaHREYXRhID09PSAnJykgJiZcbiAgICAgICAgKGJldERhdGEgPT09IHVuZGVmaW5lZCB8fCBiZXREYXRhID09PSAnJylcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBkYXRhIGluIFtkYXRhLWJldF0gb3IgW2RhdGEtaGlnaGxpZ2h0XScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24gPT09IHVuZGVmaW5lZCB8fCBhY3Rpb24gPT09ICcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0FjdGlvblN1cHBvcnRlZCA9IE9iamVjdC5rZXlzKEFDVElPTl9UWVBFUykuaW5jbHVkZXMoYWN0aW9uKTtcblxuICAgICAgaWYgKGlzQWN0aW9uU3VwcG9ydGVkID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBhY3Rpb24nLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrcyBhcmUgZG9uZSAqL1xuXG4gICAgICBjb25zdCBwYXlsb2FkRGF0YSA9IChoaWdobGlnaHREYXRhID8/IGJldERhdGEpIGFzIHN0cmluZztcblxuICAgICAgY29uc3QgZ2V0UGF5bG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RJZCA9IHBheWxvYWREYXRhLnNwbGl0KCctJylbMF07XG5cbiAgICAgICAgY29uc3QgaXNQYXlsb2FkSW5Db25maWcgPSBoYXNPd24oY29uZmlnLCBmaXJzdElkKTtcblxuICAgICAgICBpZiAoaXNQYXlsb2FkSW5Db25maWcgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gY29uZmlnW2ZpcnN0SWQgYXMga2V5b2YgdHlwZW9mIGNvbmZpZ10ubWFwKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGAke2l0ZW19YCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBheWxvYWREYXRhLnNwbGl0KCctJykubWFwKChpdGVtKSA9PiBpdGVtKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHBheWxvYWQgPSBnZXRQYXlsb2FkKCk7XG5cbiAgICAgIG9uQmV0KHtcbiAgICAgICAgYmV0OiBhY3Rpb24gYXMga2V5b2YgdHlwZW9mIEFDVElPTl9UWVBFUyxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgaWQ6IHBheWxvYWREYXRhLFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRhYmxlUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lcik7XG5cbiAgICBjb25zdCB0YWJsZVJlZkN1cnJlbnQgPSB0YWJsZVJlZi5jdXJyZW50O1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRhYmxlUmVmQ3VycmVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgfSwgW29uQmV0XSk7XG5cbiAgY29uc3QgZG9IaWdobGlnaHQgPSAoYmV0SWQ6IHN0cmluZykgPT4ge1xuICAgIGlmICh0YWJsZVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaG92ZXJDbGFzcyA9ICdpdGVtLWhvdmVyJztcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0YWJsZVJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJldD1cIiR7YmV0SWR9XCJdYCk7XG5cbiAgICBlbGVtZW50Py5jbGFzc0xpc3QudG9nZ2xlKGhvdmVyQ2xhc3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJldENhdGNoZXJIb3ZlciA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodERhdGEgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkuZGF0YXNldFxuICAgICAgICAuaGlnaGxpZ2h0O1xuICAgICAgY29uc3QgdG9IaWdobGlnaHQgPSBoaWdobGlnaHREYXRhPy5zcGxpdCgnLScpO1xuXG4gICAgICBjb25zdCBmaXJzdEhpZ2hsaWdodCA9IHRvSGlnaGxpZ2h0Py5bMF07XG5cbiAgICAgIGlmIChmaXJzdEhpZ2hsaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGcm9tQ29uZmlnID0gT2JqZWN0LmtleXMoY29uZmlnKS5pbmNsdWRlcyhmaXJzdEhpZ2hsaWdodCk7XG5cbiAgICAgIGlmIChpc0Zyb21Db25maWcgPT09IHRydWUpIHtcbiAgICAgICAgZG9IaWdobGlnaHQoZmlyc3RIaWdobGlnaHQpO1xuXG4gICAgICAgIGlmIChjb25maWdbZmlyc3RIaWdobGlnaHQgYXMga2V5b2YgdHlwZW9mIGNvbmZpZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbmZpZyBkb2VzIG5vdCBjb250YWluIHRoZSBrZXknLCBmaXJzdEhpZ2hsaWdodCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnW2ZpcnN0SGlnaGxpZ2h0IGFzIGtleW9mIHR5cGVvZiBjb25maWddLmZvckVhY2goKGJldCkgPT5cbiAgICAgICAgICBkb0hpZ2hsaWdodChgJHtiZXR9YCksXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b0hpZ2hsaWdodD8uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBkb0hpZ2hsaWdodChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW10sXG4gICk7XG5cbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoeyBiZXRzLCBvbkJldENhdGNoZXJIb3ZlcjogaGFuZGxlQmV0Q2F0Y2hlckhvdmVyIH0pLFxuICAgIFtiZXRzLCBoYW5kbGVCZXRDYXRjaGVySG92ZXJdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdWxldHRlVGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3JvdWxldHRlLXRhYmxlLWNvbnRhaW5lcicsIHsgZGVidWc6IGlzRGVidWcgfSl9XG4gICAgICAgIHJlZj17dGFibGVSZWZ9XG4gICAgICA+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdWxldHRlLXRhYmxlLWNvbnRhaW5lci1maXJzdFwiPlxuICAgICAgICAgIDxaZXJvQmV0cyAvPlxuICAgICAgICAgIDxOdW1iZXJCZXRzIC8+XG4gICAgICAgICAgPENvbHVtbnMgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3VsZXR0ZS10YWJsZS1jb250YWluZXItc2Vjb25kXCI+XG4gICAgICAgICAgPERvemVucyAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bGV0dGUtdGFibGUtY29udGFpbmVyLXRoaXJkXCI+XG4gICAgICAgICAgPEJvdHRvbUJldHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JvdWxldHRlVGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuUm91bGV0dGVUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzRGVidWc6IGZhbHNlLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hpcCB9IGZyb20gJy4uL0NoaXAnO1xuXG5pbXBvcnQgeyBBQ1RJT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZmluZENoaXBJY29uLCBzaG91bGRSZW5kZXJDaGlwIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBSb3VsZXR0ZVRhYmxlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgWmVyb0JldHM6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IG9uQmV0Q2F0Y2hlckhvdmVyLCBiZXRzIH0gPSB1c2VDb250ZXh0KFJvdWxldHRlVGFibGVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7WycwJywgJzAwJ10ubWFwKChudW1iZXIpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YHplcm8taXRlbS0ke251bWJlcn1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInplcm8taXRlbVwiXG4gICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFU1tudW1iZXIgYXMgJzAnIHwgJzAwJ119XG4gICAgICAgICAgZGF0YS1iZXQ9e251bWJlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBzdGFydCBjaGlwICovfVxuICAgICAgICAgIHtudW1iZXIgPT09ICcwJyAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsZWV0LWJldC1jYXRjaGVyXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5TVFJFRVR9XG4gICAgICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9XCIwLTAwLTJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6ICdhdXRvJywgcmlnaHQ6IC0xNSwgekluZGV4OiAxMyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcCgnMC0wMC0yJywgYmV0cykgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0LXRvcFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oJzAtMDAtMicsIGJldHMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICB7Lyogc3RhcnQgY2hpcCAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb3JuZXItYmV0LWNhdGNoZXIgJHtudW1iZXIgPT09ICcwJyA/ICdib3R0b20nIDogJyd9YH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5CQVNLRVRfVVN9XG4gICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17bnVtYmVyID09PSAnMCcgPyAnMC0wMC0xLTItMycgOiAnMDAtMC0xLTItMyd9XG4gICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDE0IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChcbiAgICAgICAgICAgIG51bWJlciA9PT0gJzAnID8gJzAtMDAtMS0yLTMnIDogJzAwLTAtMS0yLTMnLFxuICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICApID09PSB0cnVlICYmIChcbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtudW1iZXIgPT09ICcwJyA/ICdyaWdodC1ib3R0b20nIDogJ3JpZ2h0LXRvcCd9XG4gICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihcbiAgICAgICAgICAgICAgICBudW1iZXIgPT09ICcwJyA/ICcwLTAwLTEtMi0zJyA6ICcwMC0wLTEtMi0zJyxcbiAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICB7Lyogc3RhcnQgY2hpcCAqL31cbiAgICAgICAgICB7bnVtYmVyID09PSAnMCcgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwbGl0LXVwLWJldC1jYXRjaGVyLXRvcFwiXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuUk9XfVxuICAgICAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PVwiMC0wMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKCcwLTAwJywgYmV0cykgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwIHBvc2l0aW9uPVwiY2VudGVyLXRvcFwiIGljb249e2ZpbmRDaGlwSWNvbignMC0wMCcsIGJldHMpfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogZW5kIGNoaXAgKi99XG4gICAgICAgICAgey8qIHN0YXJ0IGNoaXAgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXQtdXAtYmV0LWNhdGNoZXItcmlnaHRcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNQTElUfVxuICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9e2Ake251bWJlcn0tJHtudW1iZXIgPT09ICcwJyA/IDIgOiAzfWB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB6SW5kZXg6IG51bWJlciA9PT0gJzAwJyA/IDEyIDogJycsXG4gICAgICAgICAgICAgIGhlaWdodDogbnVtYmVyID09PSAnMDAnID8gJzg1cHgnIDogJycsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoYCR7bnVtYmVyfS0ke251bWJlciA9PT0gJzAnID8gMiA6IDN9YCwgYmV0cykgPT09XG4gICAgICAgICAgICB0cnVlICYmIChcbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtcbiAgICAgICAgICAgICAgICBudW1iZXIgPT09ICcwJ1xuICAgICAgICAgICAgICAgICAgPyAncmlnaHQtdG9wLXdpdGgtbm8tb2Zmc2V0J1xuICAgICAgICAgICAgICAgICAgOiAncmlnaHQtdG9wLXdpdGgtb2Zmc2V0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihgJHtudW1iZXJ9LSR7bnVtYmVyID09PSAnMCcgPyAyIDogM31gLCBiZXRzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogZW5kIGNoaXAgKi99XG4gICAgICAgICAgey8qIHN0YXJ0IGNoaXAgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXQtdXAtYmV0LWNhdGNoZXItcmlnaHRcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNQTElUfVxuICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9e2Ake251bWJlcn0tJHtudW1iZXIgPT09ICcwJyA/IDEgOiAyfWB9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDg1LCB0b3A6ICdhdXRvJywgYm90dG9tOiAwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChgJHtudW1iZXJ9LSR7bnVtYmVyID09PSAnMCcgPyAxIDogMn1gLCBiZXRzKSA9PT1cbiAgICAgICAgICAgIHRydWUgJiYgKFxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgcG9zaXRpb249e1xuICAgICAgICAgICAgICAgIG51bWJlciA9PT0gJzAnXG4gICAgICAgICAgICAgICAgICA/ICdyaWdodC1ib3R0b20td2l0aC1vZmZzZXQnXG4gICAgICAgICAgICAgICAgICA6ICdyaWdodC1ib3R0b20td2l0aC1uby1vZmZzZXQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKGAke251bWJlcn0tJHtudW1iZXIgPT09ICcwJyA/IDEgOiAyfWAsIGJldHMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICB7Lyogc3RhcnQgY2hpcCAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBudW1iZXIgPT09ICcwJyA/ICdiYXNrZXQtY2F0Y2hlci1ib3R0b20nIDogJ2Jhc2tldC1jYXRjaGVyLXRvcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5CQVNLRVRfVVN9XG4gICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyID09PSAnMCcgPyAnMC0wMCcgOiAnMDAtMCd9LTEtMi0zYH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IC0zIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogZW5kIGNoaXAgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPntudW1iZXJ9PC9kaXY+XG4gICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAobnVtYmVyLCBiZXRzKSAmJiAoXG4gICAgICAgICAgICA8Q2hpcCBwb3NpdGlvbj1cImNlbnRlclwiIGljb249e2ZpbmRDaGlwSWNvbihudW1iZXIsIGJldHMpfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9aZXJvQmV0cyc7XG4iLCJleHBvcnQgKiBmcm9tICcuL1JvdWxldHRlVGFibGUnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvdGFibGUuanNvbic7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnLi4vLi4vbGlicyc7XG5cbmltcG9ydCAnLi9Sb3VsZXR0ZVdoZWVsLmNzcyc7XG5cbmNvbnN0IGF2YWlsYWJsZVdpbm5pbmdCZXRzID0gW1xuICAuLi5jb25maWdbJzFfVE9fMTgnXSxcbiAgLi4uY29uZmlnWycxOV9UT18zNiddLFxuICAuLi5bJy0xJywgJzAnLCAnMDAnXSxcbl0ubWFwKChiZXQpID0+IGAke2JldH1gKTtcblxuZXhwb3J0IGludGVyZmFjZSBJUm91bGV0dGVXaGVlbFByb3BzIHtcbiAgc3RhcnQ6IGJvb2xlYW47XG4gIHdpbm5pbmdCZXQ6ICh0eXBlb2YgYXZhaWxhYmxlV2lubmluZ0JldHMpW251bWJlcl07XG4gIG9uU3Bpbm5pbmdFbmQ/OiAoKSA9PiB2b2lkO1xuICB3aXRoQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgYWRkUmVzdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSb3VsZXR0ZVdoZWVsOiBGQzxJUm91bGV0dGVXaGVlbFByb3BzPiA9ICh7XG4gIHN0YXJ0LFxuICB3aW5uaW5nQmV0LFxuICBvblNwaW5uaW5nRW5kLFxuICB3aXRoQW5pbWF0aW9uLFxuICBhZGRSZXN0LFxufSkgPT4ge1xuICBjb25zdCB3aGVlbE51bWJlcnMgPSBbXG4gICAgJzQnLFxuICAgICczNicsXG4gICAgJzEwJyxcbiAgICAnMzAnLFxuICAgICcxMycsXG4gICAgJzI3JyxcbiAgICAnMjInLFxuICAgICcyMScsXG4gICAgJzI4JyxcbiAgICAnMTgnLFxuICAgICczMScsXG4gICAgJzEyJyxcbiAgICAnMicsXG4gICAgJzknLFxuICAgICc4JyxcbiAgICAnMycsXG4gICAgJzExJyxcbiAgICAnMzInLFxuICAgICcwMCcsXG4gICAgJzIzJyxcbiAgICAnMTcnLFxuICAgICcxNCcsXG4gICAgJzIwJyxcbiAgICAnNScsXG4gICAgJzI2JyxcbiAgICAnMzQnLFxuICAgICcyOScsXG4gICAgJzI1JyxcbiAgICAnMzUnLFxuICAgICcxOScsXG4gICAgJzYnLFxuICAgICcxNicsXG4gICAgJzE1JyxcbiAgICAnNycsXG4gICAgJzI0JyxcbiAgICAnMScsXG4gICAgJzMzJyxcbiAgICAnMCcsXG4gIF07XG5cbiAgY29uc3QgaW5uZXJSZWYgPSB1c2VSZWY8SFRNTFVMaXN0RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SW5uZXJSZWYgPSBpbm5lclJlZi5jdXJyZW50O1xuXG4gICAgaWYgKHdpbm5pbmdCZXQgPT09ICctMScgfHwgY3VycmVudElubmVyUmVmID09PSBudWxsIHx8IHN0YXJ0ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhZGRSZXN0ID09PSB0cnVlKSB7XG4gICAgICBjdXJyZW50SW5uZXJSZWYuY2xhc3NMaXN0LnJlbW92ZSgncmVzdCcpO1xuICAgIH1cblxuICAgIGN1cnJlbnRJbm5lclJlZi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3BpbnRvaW5kZXgnKTtcblxuICAgIGNvbnN0IGJldEluZGV4ID0gd2hlZWxOdW1iZXJzLmluZGV4T2Yod2lubmluZ0JldCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGN1cnJlbnRJbm5lclJlZi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3BpbnRvaW5kZXgnLCBgJHtiZXRJbmRleH1gKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChhZGRSZXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgY3VycmVudElubmVyUmVmLmNsYXNzTGlzdC5hZGQoJ3Jlc3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU3Bpbm5pbmdFbmQ/LigpO1xuICAgICAgfSwgOTAwMCk7XG4gICAgfSwgMTAwKTtcbiAgICAvLyB3ZSdyZSBpZ25vcmluZyBvbmx5IHRoZSBvblNwaW5uaW5nRW5kIG9uU3Bpbm5pbmdFbmQgZGVwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbd2lubmluZ0JldCwgc3RhcnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bGV0dGUtd2hlZWwtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncm91bGV0dGUtd2hlZWwtcGxhdGUnLCB7XG4gICAgICAgICAgJ3dpdGgtYW5pbWF0aW9uJzogd2l0aEFuaW1hdGlvbixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJyb3VsZXR0ZS13aGVlbC1pbm5lclwiIHJlZj17aW5uZXJSZWZ9PlxuICAgICAgICAgIHt3aGVlbE51bWJlcnMubWFwKChudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2B3aGVlbC0ke251bWJlcn1gfVxuICAgICAgICAgICAgICBkYXRhLWJldD17bnVtYmVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VsZXR0ZS13aGVlbC1iZXQtbnVtYmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B3aGVlbC1waXQtJHtudW1iZXJ9YH0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBpdFwiXG4gICAgICAgICAgICAgICAgICBpZD17YHdoZWVsLXBpdC0ke251bWJlcn1gfVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtudW1iZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VsZXR0ZS13aGVlbC1waXRcIj57bnVtYmVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblJvdWxldHRlV2hlZWwuZGVmYXVsdFByb3BzID0ge1xuICBvblNwaW5uaW5nRW5kOiAoKSA9PiB1bmRlZmluZWQsXG4gIHdpdGhBbmltYXRpb246IHRydWUsXG4gIGFkZFJlc3Q6IHRydWUsXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Sb3VsZXR0ZVdoZWVsJztcbiIsImV4cG9ydCBjb25zdCBBQ1RJT05fVFlQRVMgPSB7XG4gIDA6ICcwJyxcbiAgJzAwJzogJzAwJyxcbiAgU1RSRUVUOiAnU1RSRUVUJyxcbiAgUk9XOiAnUk9XJyxcbiAgQkFTS0VUX1VTOiAnQkFTS0VUX1VTJyxcbiAgU1BMSVQ6ICdTUExJVCcsXG4gIENPUk5FUjogJ0NPUk5FUicsXG4gIERPVUJMRV9TVFJFRVQ6ICdET1VCTEVfU1RSRUVUJyxcbiAgU1RSQUlHSFRfVVA6ICdTVFJBSUdIVF9VUCcsXG4gICcxU1RfQ09MVU1OJzogJzFTVF9DT0xVTU4nLFxuICAnMk5EX0NPTFVNTic6ICcyTkRfQ09MVU1OJyxcbiAgJzNSRF9DT0xVTU4nOiAnM1JEX0NPTFVNTicsXG4gICcxU1RfRE9aRU4nOiAnMVNUX0RPWkVOJyxcbiAgJzJORF9ET1pFTic6ICcyTkRfRE9aRU4nLFxuICAnM1JEX0RPWkVOJzogJzNSRF9ET1pFTicsXG4gICcxX1RPXzE4JzogJzFfVE9fMTgnLFxuICAnMTlfVE9fMzYnOiAnMTlfVE9fMzYnLFxuICBFVkVOOiAnRVZFTicsXG4gIE9ERDogJ09ERCcsXG4gIFJFRDogJ1JFRCcsXG4gIEJMQUNLOiAnQkxBQ0snLFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0eXBlIHsgSVJvdWxldHRlVGFibGVQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdWxldHRlVGFibGVDb250ZXh0UHJvcHMge1xuICBiZXRzOiBJUm91bGV0dGVUYWJsZVByb3BzWydiZXRzJ107XG4gIG9uQmV0Q2F0Y2hlckhvdmVyOiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUm91bGV0dGVUYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgYmV0czoge30sXG4gIG9uQmV0Q2F0Y2hlckhvdmVyOiAoKSA9PiBudWxsLFxufSBhcyBJUm91bGV0dGVUYWJsZUNvbnRleHRQcm9wcyk7XG4iLCJleHBvcnQgKiBmcm9tICcuL1JvdWxldHRlVGFibGVDb250ZXh0JztcbiIsImltcG9ydCB0eXBlIHsgSVJvdWxldHRlVGFibGVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZSc7XG5cbmV4cG9ydCBjb25zdCBmaW5kQ2hpcEljb24gPSAoaWQ6IHN0cmluZywgYmV0czogSVJvdWxldHRlVGFibGVQcm9wc1snYmV0cyddKSA9PlxuICBiZXRzW2lkXT8uaWNvbjtcbiIsImV4cG9ydCAqIGZyb20gJy4vZmluZENoaXBJY29uJztcbiIsImltcG9ydCB7IGdldFJhbmRvbUFycmF5SXRlbSB9IGZyb20gJy4uLy4uL3V0aWxscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRXaGVlbE51bWJlcnMgPSAoKSA9PiB7XG4gIC8vIDFzdCBzdGVwXG4gIGNvbnN0IHN0YXRpY1doZWVsTnVtYmVyczogc3RyaW5nW10gPSBbXTsgLy8gd2l0aG91dCAwIGFuZCAwMFxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDM2OyBpICs9IDEpIHtcbiAgICBzdGF0aWNXaGVlbE51bWJlcnMucHVzaChgJHtpfWApO1xuICB9XG5cbiAgLy8gMm5kIHN0ZXBcbiAgY29uc3QgcmFuZG9tTnVtYmVyczogc3RyaW5nW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpY1doZWVsTnVtYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGF2YWlsYWJsZU51bWJlcnMgPSBzdGF0aWNXaGVlbE51bWJlcnMuZmlsdGVyKFxuICAgICAgKG51bWJlcikgPT4gcmFuZG9tTnVtYmVycy5pbmNsdWRlcyhudW1iZXIpID09PSBmYWxzZSxcbiAgICApO1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGdldFJhbmRvbUFycmF5SXRlbShhdmFpbGFibGVOdW1iZXJzKTtcblxuICAgIHJhbmRvbU51bWJlcnMucHVzaChyYW5kb21OdW1iZXIpO1xuICB9XG5cbiAgLy8gM3JkIHN0ZXBcbiAgY29uc3QgZmluYWxBcnJheTogc3RyaW5nW10gPSBbXTtcblxuICByYW5kb21OdW1iZXJzLmZvckVhY2goKG51bWJlciwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDE4KSB7XG4gICAgICBmaW5hbEFycmF5LnB1c2goJzAwJyk7XG4gICAgfVxuXG4gICAgZmluYWxBcnJheS5wdXNoKG51bWJlcik7XG4gIH0pO1xuXG4gIGZpbmFsQXJyYXkucHVzaCgnMCcpO1xuXG4gIHJldHVybiBmaW5hbEFycmF5O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZ2V0V2hlZWxOdW1iZXJzJztcbiIsImV4cG9ydCAqIGZyb20gJy4vc2hvdWxkUmVuZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZmluZENoaXBJY29uJztcbmV4cG9ydCAqIGZyb20gJy4vZ2V0V2hlZWxOdW1iZXJzJztcbiIsImV4cG9ydCAqIGZyb20gJy4vc2hvdWxkUmVuZGVyJztcbiIsImltcG9ydCB7IElSb3VsZXR0ZVRhYmxlUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JvdWxldHRlVGFibGUnO1xuXG5jb25zdCBub1RvcFJlbmRlciA9IFszLCA2LCA5LCAxMiwgMTUsIDE4LCAyMSwgMjQsIDI3LCAzMCwgMzMsIDM2XTtcbmNvbnN0IG5vUmlnaHRSZW5kZXIgPSBbMzQsIDM1LCAzNl07XG5jb25zdCBib3R0b21SZW5kZXIgPSBbMSwgNCwgNywgMTAsIDEzLCAxNiwgMTksIDIyLCAyNSwgMjgsIDMxLCAzNF07XG5jb25zdCBub0Nvcm5lckJldFJlbmRlciA9IFsuLi5ub1RvcFJlbmRlciwgMzQsIDM1XTtcbmNvbnN0IHNpeExpbmVzQmV0UmVuZGVyID0gYm90dG9tUmVuZGVyLnNsaWNlKDAsIGJvdHRvbVJlbmRlci5sZW5ndGggLSAxKTtcbmNvbnN0IHRvcFJpZ2h0RG9idWxlU3RyZWV0UmVuZGVyID0gbm9Ub3BSZW5kZXIuc2xpY2UoMCwgbm9Ub3BSZW5kZXIubGVuZ3RoIC0gMSk7XG5cbmV4cG9ydCBjb25zdCBzaG91bGRSZW5kZXJUb3BDYXRjaGVyID0gKGN1cnJlbnROdW1iZXI6IG51bWJlcikgPT5cbiAgbm9Ub3BSZW5kZXIuaW5jbHVkZXMoY3VycmVudE51bWJlcikgPT09IGZhbHNlO1xuXG5leHBvcnQgY29uc3Qgc2hvdWxkUmVuZGVyUmlnaHRDYXRjaGVyID0gKGN1cnJlbnROdW1iZXI6IG51bWJlcikgPT5cbiAgbm9SaWdodFJlbmRlci5pbmNsdWRlcyhjdXJyZW50TnVtYmVyKSA9PT0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBzaG91bGRSZW5kZXJCb3R0b21DYXRjaGVyID0gKGN1cnJlbnROdW1iZXI6IG51bWJlcikgPT5cbiAgYm90dG9tUmVuZGVyLmluY2x1ZGVzKGN1cnJlbnROdW1iZXIpO1xuXG5leHBvcnQgY29uc3Qgc2hvdWxkUmVuZGVyQ29ybmVyQmV0Q2F0Y2hlciA9IChjdXJyZW50TnVtYmVyOiBudW1iZXIpID0+XG4gIG5vQ29ybmVyQmV0UmVuZGVyLmluY2x1ZGVzKGN1cnJlbnROdW1iZXIpID09PSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IHNob3VsZFJlbmRlclNpeExpbmVCZXRDYXRjaGVyID0gKGN1cnJlbnROdW1iZXI6IG51bWJlcikgPT5cbiAgc2l4TGluZXNCZXRSZW5kZXIuaW5jbHVkZXMoY3VycmVudE51bWJlcik7XG5cbmV4cG9ydCBjb25zdCBzaG91bGRSZW5kZXJDaGlwID0gKFxuICBpZDogc3RyaW5nLFxuICBiZXRzOiBJUm91bGV0dGVUYWJsZVByb3BzWydiZXRzJ10sXG4pID0+IE9iamVjdC5rZXlzKGJldHMpLmluY2x1ZGVzKGlkKTtcblxuZXhwb3J0IGNvbnN0IHNob3VsZFJlbmRlclRvcFN0cmVldENhdGNoZXIgPSAoY3VycmVudE51bWJlcjogbnVtYmVyKSA9PlxuICBub1RvcFJlbmRlci5pbmNsdWRlcyhjdXJyZW50TnVtYmVyKTtcblxuZXhwb3J0IGNvbnN0IHNob3VsZFJlbmRlclRvcFJpZ2h0RG91YmxlU3RyZWV0Q2F0Y2hlciA9IChcbiAgY3VycmVudE51bWJlcjogbnVtYmVyLFxuKSA9PiB0b3BSaWdodERvYnVsZVN0cmVldFJlbmRlci5pbmNsdWRlcyhjdXJyZW50TnVtYmVyKTtcbiIsImNvbnN0IGlzQXJyYXkgPSAoaXRlbTogdW5rbm93bikgPT4gQXJyYXkuaXNBcnJheShpdGVtKTtcblxuY29uc3QgaXNPYmplY3QgPSAoaXRlbTogdW5rbm93bikgPT5cbiAgaXRlbSAhPT0gbnVsbCAmJiBpc0FycmF5KGl0ZW0pID09PSBmYWxzZSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCc7XG5cbmNvbnN0IGlzRnVuY3Rpb24gPSAoaXRlbTogdW5rbm93bikgPT4gdHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbic7XG5cbmNvbnN0IGlzQm9vbGVhbiA9IChpdGVtOiB1bmtub3duKSA9PiB0eXBlb2YgaXRlbSA9PT0gJ2Jvb2xlYW4nO1xuXG5jb25zdCBoYXNPd25Qcm90b3R5cGVPZlRvU3RyaW5nID0gKG9iamVjdDogb2JqZWN0KSA9PlxuICBvYmplY3QudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmV4cG9ydCBjb25zdCBjbGFzc05hbWVzID0gKC4uLmNsYXNzZXM6IEFycmF5PHVua25vd24+KSA9PiB7XG4gIGxldCByZXN1bHRDbGFzc05hbWUgPSAnJztcblxuICBjb25zdCBoYW5kbGVQcmltaXRpdmUgPSAoaXRlbTogdW5rbm93biwgYXNLZXk/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpc0l0ZW1Cb29sZWFuID0gaXNCb29sZWFuKGl0ZW0pO1xuXG4gICAgaWYgKCFpdGVtIHx8IGlzSXRlbUJvb2xlYW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXN1bHRDbGFzc05hbWUgKz0gYCR7YXNLZXkgIT09IHVuZGVmaW5lZCA/IGFzS2V5IDogaXRlbX0gYDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPYmplY3QgPSAob2JqZWN0OiBvYmplY3QpID0+IHtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob2JqZWN0KTtcblxuICAgIC8qIG1heWJlIHRocm93IGl0IG91dCAqL1xuICAgIGNvbnN0IGhhc09iamVjdE93blByb3RvdHlwZU9mVG9TdHJpbmcgPSBoYXNPd25Qcm90b3R5cGVPZlRvU3RyaW5nKG9iamVjdCk7XG4gICAgLyoqL1xuXG4gICAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1ZhbHVlRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKHZhbHVlKTtcbiAgICAgIGNvbnN0IGlzVG9TdHJpbmcgPSBrZXkgPT09ICd0b1N0cmluZyc7XG5cbiAgICAgIGlmIChpc1ZhbHVlRnVuY3Rpb24gPT09IHRydWUgJiYgaXNUb1N0cmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25SZXN1bHQgPSAodmFsdWUgYXMgRnVuY3Rpb24pKCk7XG5cbiAgICAgICAgaGFuZGxlUHJpbWl0aXZlKGZ1bmN0aW9uUmVzdWx0LCBrZXkpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzVG9TdHJpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc3VsdENsYXNzTmFtZSArPSBgJHtrZXl9IGA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKiBtYXliZSB0aHJvdyBpdCBvdXQgKi9cbiAgICBpZiAoaGFzT2JqZWN0T3duUHJvdG90eXBlT2ZUb1N0cmluZyA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgdG9TdHJpbmdWYWx1ZSA9IG9iamVjdC50b1N0cmluZygpO1xuXG4gICAgICBoYW5kbGVQcmltaXRpdmUodG9TdHJpbmdWYWx1ZSk7XG4gICAgfVxuICAgIC8qKi9cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcnJheSA9IChhcnJheTogQXJyYXk8dW5rbm93bj4pID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0gfHwgdHlwZW9mIGl0ZW0gPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzSXRlbUFycmF5ID0gaXNBcnJheShpdGVtKTtcbiAgICAgIGNvbnN0IGlzSXRlbU9iamVjdCA9IGlzT2JqZWN0KGl0ZW0pO1xuXG4gICAgICBpZiAoaXNJdGVtQXJyYXkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUFycmF5KGl0ZW0gYXMgQXJyYXk8dW5rbm93bj4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNJdGVtT2JqZWN0ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVPYmplY3QoaXRlbSBhcyBvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRDbGFzc05hbWUgKz0gYCR7aXRlbX0gYDtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjbGFzc05hbWVJdGVtID0gY2xhc3Nlc1tpXTtcblxuICAgIGNvbnN0IGlzSXRlbU9iamVjdCA9IGlzT2JqZWN0KGNsYXNzTmFtZUl0ZW0pO1xuXG4gICAgY29uc3QgaXNJdGVtQXJyYXkgPSBpc0FycmF5KGNsYXNzTmFtZUl0ZW0pO1xuXG4gICAgaWYgKGlzSXRlbU9iamVjdCA9PT0gdHJ1ZSkge1xuICAgICAgaGFuZGxlT2JqZWN0KGNsYXNzTmFtZUl0ZW0gYXMgb2JqZWN0KTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzSXRlbUFycmF5ID09PSB0cnVlKSB7XG4gICAgICBoYW5kbGVBcnJheShjbGFzc05hbWVJdGVtIGFzIEFycmF5PHVua25vd24+KTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJpbWl0aXZlKGNsYXNzTmFtZUl0ZW0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdENsYXNzTmFtZS50cmltKCk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzc05hbWVzJztcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3NOYW1lcyc7XG4iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tQXJyYXlJdGVtID0gPFQ+KGFycjogVFtdKSA9PlxuICBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9nZXRSYW5kb21BcnJheUl0ZW0nO1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoaW5jbHVzaXZlKVxuICovXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1pbk51bWJlcjogbnVtYmVyLCBtYXhOdW1iZXI6IG51bWJlcikgPT4ge1xuICBjb25zdCBtaW4gPSBNYXRoLmNlaWwobWluTnVtYmVyKTtcbiAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcihtYXhOdW1iZXIpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZ2V0UmFuZG9tSW50JztcbiIsImV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqZWN0OiBvYmplY3QsIHByb3BlcnR5OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaGFzT3duJztcbiIsImV4cG9ydCAqIGZyb20gJy4vaXNPZGQnO1xuZXhwb3J0ICogZnJvbSAnLi9oYXNPd24nO1xuZXhwb3J0ICogZnJvbSAnLi9nZXRSYW5kb21JbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9nZXRSYW5kb21BcnJheUl0ZW0nO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pc09kZCc7XG4iLCJleHBvcnQgY29uc3QgaXNPZGQgPSAobnVtYmVyOiBudW1iZXIpID0+IG51bWJlciAlIDIgIT09IDA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUm91bGV0dGVUYWJsZSB9IGZyb20gJy4vY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlJztcbmltcG9ydCB7IFJvdWxldHRlV2hlZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvUm91bGV0dGVXaGVlbCc7XG5cbmV4cG9ydCB7IFJvdWxldHRlVGFibGUsIFJvdWxldHRlV2hlZWwgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==