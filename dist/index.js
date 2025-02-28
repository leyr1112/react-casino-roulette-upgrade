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
        '17',
        '23',
        '00',
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
        '4',
        '33',
        '0',
    ];
    console.log(wheelNumbers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUNBO0FBRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvQ2hpcC9DaGlwLmNzcz8zMGQxIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL1JvdWxldHRlVGFibGUuY3NzP2JmYzciLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlV2hlZWwvUm91bGV0dGVXaGVlbC5jc3M/YjgxZiIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9Cb3R0b21CZXRzL0JvdHRvbUJldHMudHN4Iiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL0JvdHRvbUJldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvQ2hpcC9DaGlwLnRzeCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9DaGlwL2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL0NvbHVtbnMvQ29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvQ29sdW1ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9Eb3plbnMvRG96ZW5zLnRzeCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9Eb3plbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb21wb25lbnRzL1JvdWxldHRlVGFibGUvTnVtYmVyQmV0cy9OdW1iZXJCZXRzLnRzeCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9OdW1iZXJCZXRzL2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL1JvdWxldHRlVGFibGUudHN4Iiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlL1plcm9CZXRzL1plcm9CZXRzLnRzeCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9aZXJvQmV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVXaGVlbC9Sb3VsZXR0ZVdoZWVsLnRzeCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbXBvbmVudHMvUm91bGV0dGVXaGVlbC9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2NvbnRleHQvUm91bGV0dGVUYWJsZUNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9jb250ZXh0L2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvaGVscGVycy9maW5kQ2hpcEljb24vZmluZENoaXBJY29uLnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvaGVscGVycy9maW5kQ2hpcEljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9oZWxwZXJzL2dldFdoZWVsTnVtYmVycy9nZXRXaGVlbE51bWJlcnMudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9oZWxwZXJzL2dldFdoZWVsTnVtYmVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2hlbHBlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS8uL3NyYy9oZWxwZXJzL3Nob3VsZFJlbmRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2hlbHBlcnMvc2hvdWxkUmVuZGVyL3Nob3VsZFJlbmRlci50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL2xpYnMvY2xhc3NOYW1lcy9jbGFzc05hbWVzLnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvbGlicy9jbGFzc05hbWVzL2luZGV4LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvbGlicy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9nZXRSYW5kb21BcnJheUl0ZW0vZ2V0UmFuZG9tQXJyYXlJdGVtLnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvdXRpbGxzL2dldFJhbmRvbUFycmF5SXRlbS9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9nZXRSYW5kb21JbnQvZ2V0UmFuZG9tSW50LnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvdXRpbGxzL2dldFJhbmRvbUludC9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9oYXNPd24vaGFzT3duLnRzIiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvdXRpbGxzL2hhc093bi9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9pc09kZC9pbmRleC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlLy4vc3JjL3V0aWxscy9pc09kZC9pc09kZC50cyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlL2V4dGVybmFsIHVtZCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9SZWFjdENhc2lub1JvdWxldHRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUmVhY3RDYXNpbm9Sb3VsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1JlYWN0Q2FzaW5vUm91bGV0dGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RDYXNpbm9Sb3VsZXR0ZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENhc2lub1JvdWxldHRlXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykgPT4ge1xucmV0dXJuICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hpcCB9IGZyb20gJy4uL0NoaXAnO1xuaW1wb3J0IHsgUm91bGV0dGVUYWJsZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuaW1wb3J0IHsgc2hvdWxkUmVuZGVyQ2hpcCwgZmluZENoaXBJY29uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBBQ1RJT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgQm90dG9tQmV0czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb25CZXRDYXRjaGVySG92ZXIsIGJldHMgfSA9IHVzZUNvbnRleHQoUm91bGV0dGVUYWJsZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0c2lkZS1zZWN0aW9uXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFU1snMV9UT18xOCddfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTWycxX1RPXzE4J119XG4gICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtBQ1RJT05fVFlQRVNbJzFfVE9fMTgnXX1cbiAgICAgID5cbiAgICAgICAgPGRpdj4xLTE4PC9kaXY+XG4gICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFU1snMV9UT18xOCddLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVNbJzFfVE9fMTgnXSwgYmV0cyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJvdXRzaWRlLXNlY3Rpb25cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLkVWRU59XG4gICAgICAgIGRhdGEtYmV0PXtBQ1RJT05fVFlQRVMuRVZFTn1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFUy5FVkVOfVxuICAgICAgPlxuICAgICAgICA8ZGl2PkVWRU48L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTLkVWRU4sIGJldHMpICYmIChcbiAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgcG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKEFDVElPTl9UWVBFUy5FVkVOLCBiZXRzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHNpZGUtc2VjdGlvblwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuUkVEfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTLlJFRH1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFUy5SRUR9XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaG9tYi1yZWRcIiAvPlxuICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFUy5SRUQsIGJldHMpICYmIChcbiAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKEFDVElPTl9UWVBFUy5SRUQsIGJldHMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJvdXRzaWRlLXNlY3Rpb25cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLkJMQUNLfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTLkJMQUNLfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTLkJMQUNLfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmhvbWItYmxhY2tcIiAvPlxuICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFUy5CTEFDSywgYmV0cykgJiYgKFxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTLkJMQUNLLCBiZXRzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0c2lkZS1zZWN0aW9uXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5PRER9XG4gICAgICAgIGRhdGEtYmV0PXtBQ1RJT05fVFlQRVMuT0REfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTLk9ERH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5PREQ8L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTLk9ERCwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwIHBvc2l0aW9uPVwiY2VudGVyXCIgaWNvbj17ZmluZENoaXBJY29uKEFDVElPTl9UWVBFUy5PREQsIGJldHMpfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHNpZGUtc2VjdGlvblwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVNbJzE5X1RPXzM2J119XG4gICAgICAgIGRhdGEtYmV0PXtBQ1RJT05fVFlQRVNbJzE5X1RPXzM2J119XG4gICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtBQ1RJT05fVFlQRVNbJzE5X1RPXzM2J119XG4gICAgICA+XG4gICAgICAgIDxkaXY+MTktMzY8L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTWycxOV9UT18zNiddLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVNbJzE5X1RPXzM2J10sIGJldHMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL0JvdHRvbUJldHMnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9DaGlwLmNzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoaXBQcm9wcyB7XG4gIHBvc2l0aW9uOlxuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdyaWdodC10b3AnXG4gICAgfCAncmlnaHQtYm90dG9tJ1xuICAgIHwgJ2NlbnRlci10b3AnXG4gICAgfCAncmlnaHQtdG9wLXdpdGgtb2Zmc2V0J1xuICAgIHwgJ3JpZ2h0LWJvdHRvbS13aXRoLW9mZnNldCdcbiAgICB8ICdyaWdodC1ib3R0b20td2l0aC1uby1vZmZzZXQnXG4gICAgfCAncmlnaHQtdG9wLXdpdGgtbm8tb2Zmc2V0J1xuICAgIHwgJ2NlbnRlci1ib3R0b20nXG4gICAgfCAnbGVmdC10b3AnXG4gICAgfCAncmlnaHQtY2VudGVyJztcbiAgaWNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENoaXA6IEZDPElDaGlwUHJvcHM+ID0gKHsgcG9zaXRpb24sIGljb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGNoaXAgJHtwb3NpdGlvbn1gfVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBpY29uICE9PSB1bmRlZmluZWQgPyBgdXJsKFwiJHtpY29ufVwiKWAgOiAnJyB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5DaGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQ2hpcCc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoaXAgfSBmcm9tICcuLi9DaGlwJztcbmltcG9ydCB7IFJvdWxldHRlVGFibGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbmltcG9ydCB7IHNob3VsZFJlbmRlckNoaXAsIGZpbmRDaGlwSWNvbiB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQUNUSU9OX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbHVtbnM6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IG9uQmV0Q2F0Y2hlckhvdmVyLCBiZXRzIH0gPSB1c2VDb250ZXh0KFJvdWxldHRlVGFibGVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1pdGVtXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFU1snMVNUX0NPTFVNTiddfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTWycxU1RfQ09MVU1OJ119XG4gICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtBQ1RJT05fVFlQRVNbJzFTVF9DT0xVTU4nXX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjFzdDwvZGl2PlxuICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVNbJzFTVF9DT0xVTU4nXSwgYmV0cykgJiYgKFxuICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oQUNUSU9OX1RZUEVTWycxU1RfQ09MVU1OJ10sIGJldHMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWl0ZW1cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTWycyTkRfQ09MVU1OJ119XG4gICAgICAgIGRhdGEtYmV0PXtBQ1RJT05fVFlQRVNbJzJORF9DT0xVTU4nXX1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFU1snMk5EX0NPTFVNTiddfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+Mm5kPC9kaXY+XG4gICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKEFDVElPTl9UWVBFU1snMk5EX0NPTFVNTiddLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVNbJzJORF9DT0xVTU4nXSwgYmV0cyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taXRlbVwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVNbJzNSRF9DT0xVTU4nXX1cbiAgICAgICAgZGF0YS1iZXQ9e0FDVElPTl9UWVBFU1snM1JEX0NPTFVNTiddfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTWyczUkRfQ09MVU1OJ119XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj4zcmQ8L2Rpdj5cbiAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoQUNUSU9OX1RZUEVTWyczUkRfQ09MVU1OJ10sIGJldHMpICYmIChcbiAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgcG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKEFDVElPTl9UWVBFU1snM1JEX0NPTFVNTiddLCBiZXRzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Db2x1bW5zJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hpcCB9IGZyb20gJy4uL0NoaXAnO1xuaW1wb3J0IHsgUm91bGV0dGVUYWJsZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuaW1wb3J0IHsgc2hvdWxkUmVuZGVyQ2hpcCwgZmluZENoaXBJY29uIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBBQ1RJT05fVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgRG96ZW5zOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBvbkJldENhdGNoZXJIb3ZlciwgYmV0cyB9ID0gdXNlQ29udGV4dChSb3VsZXR0ZVRhYmxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkb3otaXRlbVwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVNbJzFTVF9ET1pFTiddfVxuICAgICAgICBkYXRhLWJldD17QUNUSU9OX1RZUEVTWycxU1RfRE9aRU4nXX1cbiAgICAgICAgZGF0YS1oaWdobGlnaHQ9e0FDVElPTl9UWVBFU1snMVNUX0RPWkVOJ119XG4gICAgICA+XG4gICAgICAgIDxkaXY+MS0xMjwvZGl2PlxuICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVNbJzFTVF9ET1pFTiddLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVNbJzFTVF9ET1pFTiddLCBiZXRzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImRvei1pdGVtXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFU1snMk5EX0RPWkVOJ119XG4gICAgICAgIGRhdGEtYmV0PXtBQ1RJT05fVFlQRVNbJzJORF9ET1pFTiddfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTWycyTkRfRE9aRU4nXX1cbiAgICAgID5cbiAgICAgICAgPGRpdj4xMy0yNDwvZGl2PlxuICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVNbJzJORF9ET1pFTiddLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVNbJzJORF9ET1pFTiddLCBiZXRzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImRvei1pdGVtXCJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFU1snM1JEX0RPWkVOJ119XG4gICAgICAgIGRhdGEtYmV0PXtBQ1RJT05fVFlQRVNbJzNSRF9ET1pFTiddfVxuICAgICAgICBkYXRhLWhpZ2hsaWdodD17QUNUSU9OX1RZUEVTWyczUkRfRE9aRU4nXX1cbiAgICAgID5cbiAgICAgICAgPGRpdj4yNS0zNjwvZGl2PlxuICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChBQ1RJT05fVFlQRVNbJzNSRF9ET1pFTiddLCBiZXRzKSAmJiAoXG4gICAgICAgICAgPENoaXBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihBQ1RJT05fVFlQRVNbJzNSRF9ET1pFTiddLCBiZXRzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9Eb3plbnMnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGlwIH0gZnJvbSAnLi4vQ2hpcCc7XG5pbXBvcnQgeyBSb3VsZXR0ZVRhYmxlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZy90YWJsZS5qc29uJztcbmltcG9ydCB7XG4gIHNob3VsZFJlbmRlckJvdHRvbUNhdGNoZXIsXG4gIHNob3VsZFJlbmRlckNoaXAsXG4gIHNob3VsZFJlbmRlckNvcm5lckJldENhdGNoZXIsXG4gIHNob3VsZFJlbmRlclJpZ2h0Q2F0Y2hlcixcbiAgc2hvdWxkUmVuZGVyU2l4TGluZUJldENhdGNoZXIsXG4gIHNob3VsZFJlbmRlclRvcENhdGNoZXIsXG4gIHNob3VsZFJlbmRlclRvcFJpZ2h0RG91YmxlU3RyZWV0Q2F0Y2hlcixcbiAgc2hvdWxkUmVuZGVyVG9wU3RyZWV0Q2F0Y2hlcixcbiAgZmluZENoaXBJY29uLFxufSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IEFDVElPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBOdW1iZXJCZXRzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBvbkJldENhdGNoZXJIb3ZlciwgYmV0cyB9ID0gdXNlQ29udGV4dChSb3VsZXR0ZVRhYmxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDM2IH0sIChfLCBpKSA9PiBpICsgMSkubWFwKChudW1iZXIpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17bnVtYmVyfVxuICAgICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuU1RSQUlHSFRfVVB9XG4gICAgICAgICAgZGF0YS1iZXQ9e2Ake251bWJlcn1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICBjb25maWcuUkVELmluY2x1ZGVzKG51bWJlcikgPyAncmVkLWl0ZW0nIDogJ2JsYWNrLWl0ZW0nXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7Lyogc3RhcnQgY2hpcCAqL31cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQ29ybmVyQmV0Q2F0Y2hlcihudW1iZXIpICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3JuZXItYmV0LWNhdGNoZXJcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLkNPUk5FUn1cbiAgICAgICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgM30tJHtcbiAgICAgICAgICAgICAgICAgIG51bWJlciArIDRcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoXG4gICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgM30tJHtudW1iZXIgKyA0fWAsXG4gICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHQtdG9wXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihcbiAgICAgICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgM30tJHtudW1iZXIgKyA0fWAsXG4gICAgICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICB7Lyogc3RhcnQgY2hpcCAqL31cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyVG9wUmlnaHREb3VibGVTdHJlZXRDYXRjaGVyKG51bWJlcikgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdWJsZS1zdHJlZXQtY2F0Y2hlci10b3AtcmlnaHRcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLkRPVUJMRV9TVFJFRVR9XG4gICAgICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9e2Ake251bWJlcn0tJHtudW1iZXIgLSAxfS0ke251bWJlciAtIDJ9LSR7XG4gICAgICAgICAgICAgICAgICBudW1iZXIgKyAzXG4gICAgICAgICAgICAgICAgfS0ke251bWJlciArIDJ9LSR7bnVtYmVyICsgMX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChcbiAgICAgICAgICAgICAgICBgJHtudW1iZXJ9LSR7bnVtYmVyIC0gMX0tJHtudW1iZXIgLSAyfS0ke251bWJlciArIDN9LSR7XG4gICAgICAgICAgICAgICAgICBudW1iZXIgKyAyXG4gICAgICAgICAgICAgICAgfS0ke251bWJlciArIDF9YCxcbiAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICApID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyaWdodC10b3BcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKFxuICAgICAgICAgICAgICAgICAgICBgJHtudW1iZXJ9LSR7bnVtYmVyIC0gMX0tJHtudW1iZXIgLSAyfS0ke251bWJlciArIDN9LSR7XG4gICAgICAgICAgICAgICAgICAgICAgbnVtYmVyICsgMlxuICAgICAgICAgICAgICAgICAgICB9LSR7bnVtYmVyICsgMX1gLFxuICAgICAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogZW5kIGNoaXAgKi99XG4gICAgICAgICAgey8qIHN0YXJ0IGNoaXAgKi99XG4gICAgICAgICAge3Nob3VsZFJlbmRlclRvcFN0cmVldENhdGNoZXIobnVtYmVyKSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXQtdXAtYmV0LWNhdGNoZXItdG9wXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5TVFJFRVR9XG4gICAgICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9e2Ake251bWJlcn0tJHtudW1iZXIgLSAxfS0ke251bWJlciAtIDJ9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoXG4gICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciAtIDF9LSR7bnVtYmVyIC0gMn1gLFxuICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICkgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlci10b3BcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKFxuICAgICAgICAgICAgICAgICAgICBgJHtudW1iZXJ9LSR7bnVtYmVyIC0gMX0tJHtudW1iZXIgLSAyfWAsXG4gICAgICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICB7KG51bWJlciA9PT0gMSB8fCBudW1iZXIgPT09IDIpICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxlZXQtYmV0LWNhdGNoZXJcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNUUkVFVH1cbiAgICAgICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyID09PSAxID8gJzAtMS0yJyA6ICcwMC0yLTMnfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxMiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChcbiAgICAgICAgICAgICAgICBgJHtudW1iZXIgPT09IDEgPyAnMC0xLTInIDogJzAwLTItMyd9YCxcbiAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICApID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJsZWZ0LXRvcFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oXG4gICAgICAgICAgICAgICAgICAgIGAke251bWJlciA9PT0gMSA/ICcwLTEtMicgOiAnMDAtMi0zJ31gLFxuICAgICAgICAgICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyVG9wQ2F0Y2hlcihudW1iZXIpICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxpdC11cC1iZXQtY2F0Y2hlci10b3BcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNQTElUfVxuICAgICAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtgJHtudW1iZXJ9LSR7bnVtYmVyICsgMX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChgJHtudW1iZXJ9LSR7bnVtYmVyICsgMX1gLCBiZXRzKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyLXRvcFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oYCR7bnVtYmVyfS0ke251bWJlciArIDF9YCwgYmV0cyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPntudW1iZXJ9PC9kaXY+XG4gICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoYCR7bnVtYmVyfWAsIGJldHMpICYmIChcbiAgICAgICAgICAgIDxDaGlwIHBvc2l0aW9uPVwiY2VudGVyXCIgaWNvbj17ZmluZENoaXBJY29uKGAke251bWJlcn1gLCBiZXRzKX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzaG91bGRSZW5kZXJSaWdodENhdGNoZXIobnVtYmVyKSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXQtdXAtYmV0LWNhdGNoZXItcmlnaHRcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNQTElUfVxuICAgICAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtgJHtudW1iZXJ9LSR7bnVtYmVyICsgM31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChgJHtudW1iZXJ9LSR7bnVtYmVyICsgM31gLCBiZXRzKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihgJHtudW1iZXJ9LSR7bnVtYmVyICsgM31gLCBiZXRzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQm90dG9tQ2F0Y2hlcihudW1iZXIpICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxpdC11cC1iZXQtY2F0Y2hlci1ib3R0b21cIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNUUkVFVH1cbiAgICAgICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgMn1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChcbiAgICAgICAgICAgICAgICBgJHtudW1iZXJ9LSR7bnVtYmVyICsgMX0tJHtudW1iZXIgKyAyfWAsXG4gICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyLWJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oXG4gICAgICAgICAgICAgICAgICAgIGAke251bWJlcn0tJHtudW1iZXIgKyAxfS0ke251bWJlciArIDJ9YCxcbiAgICAgICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nob3VsZFJlbmRlclNpeExpbmVCZXRDYXRjaGVyKG51bWJlcikgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpeC1saW5lcy1jYXRjaGVyXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5ET1VCTEVfU1RSRUVUfVxuICAgICAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtgJHtudW1iZXJ9LSR7bnVtYmVyICsgMX0tJHtudW1iZXIgKyAyfS0ke1xuICAgICAgICAgICAgICAgICAgbnVtYmVyICsgM1xuICAgICAgICAgICAgICAgIH0tJHtudW1iZXIgKyA0fS0ke251bWJlciArIDV9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoXG4gICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgMn0tJHtudW1iZXIgKyAzfS0ke1xuICAgICAgICAgICAgICAgICAgbnVtYmVyICsgNFxuICAgICAgICAgICAgICAgIH0tJHtudW1iZXIgKyA1fWAsXG4gICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHQtYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbihcbiAgICAgICAgICAgICAgICAgICAgYCR7bnVtYmVyfS0ke251bWJlciArIDF9LSR7bnVtYmVyICsgMn0tJHtudW1iZXIgKyAzfS0ke1xuICAgICAgICAgICAgICAgICAgICAgIG51bWJlciArIDRcbiAgICAgICAgICAgICAgICAgICAgfS0ke251bWJlciArIDV9YCxcbiAgICAgICAgICAgICAgICAgICAgYmV0cyxcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9OdW1iZXJCZXRzJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEZDLCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBaZXJvQmV0cyB9IGZyb20gJy4vWmVyb0JldHMnO1xuaW1wb3J0IHsgTnVtYmVyQmV0cyB9IGZyb20gJy4vTnVtYmVyQmV0cyc7XG5pbXBvcnQgeyBDb2x1bW5zIH0gZnJvbSAnLi9Db2x1bW5zJztcbmltcG9ydCB7IERvemVucyB9IGZyb20gJy4vRG96ZW5zJztcbmltcG9ydCB7IEJvdHRvbUJldHMgfSBmcm9tICcuL0JvdHRvbUJldHMnO1xuXG5pbXBvcnQgeyBSb3VsZXR0ZVRhYmxlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuaW1wb3J0IHsgQUNUSU9OX1RZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL3RhYmxlLmpzb24nO1xuaW1wb3J0IHsgaGFzT3duIH0gZnJvbSAnLi4vLi4vdXRpbGxzJztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICcuLi8uLi9saWJzJztcblxuaW1wb3J0ICcuL1JvdWxldHRlVGFibGUuY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBJT25CZXRQYXJhbXMge1xuICBiZXQ6IGtleW9mIHR5cGVvZiBBQ1RJT05fVFlQRVM7XG4gIHBheWxvYWQ6IHN0cmluZ1tdO1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBCZXRUeXBlID0ge1xuICBpY29uPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUm91bGV0dGVUYWJsZVByb3BzIHtcbiAgb25CZXQ6IChwYXJhbXM6IElPbkJldFBhcmFtcykgPT4gdm9pZDtcbiAgYmV0czogeyBba2V5OiBzdHJpbmddOiBCZXRUeXBlIH07XG4gIGlzRGVidWc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUm91bGV0dGVUYWJsZTogRkM8SVJvdWxldHRlVGFibGVQcm9wcz4gPSAoe1xuICBvbkJldCxcbiAgYmV0cyxcbiAgaXNEZWJ1Zyxcbn0pID0+IHtcbiAgY29uc3QgdGFibGVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRhYmxlUmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KT8uY2xvc2VzdChcbiAgICAgICAgJ1tkYXRhLWhpZ2hsaWdodF0nLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodERhdGEgPSAoaGlnaGxpZ2h0RWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCk/LmRhdGFzZXRcbiAgICAgICAgPy5oaWdobGlnaHQ7XG5cbiAgICAgIGNvbnN0IGJldEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KT8uY2xvc2VzdChcbiAgICAgICAgJ1tkYXRhLWJldF0nLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGJldERhdGEgPSAoYmV0RWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCk/LmRhdGFzZXQ/LmJldDtcblxuICAgICAgY29uc3QgYWN0aW9uID0gKChoaWdobGlnaHRFbGVtZW50ID8/IGJldEVsZW1lbnQpIGFzIEhUTUxEaXZFbGVtZW50KVxuICAgICAgICA/LmRhdGFzZXQ/LmFjdGlvbjtcblxuICAgICAgaWYgKFxuICAgICAgICAoaGlnaGxpZ2h0RGF0YSA9PT0gdW5kZWZpbmVkIHx8IGhpZ2hsaWdodERhdGEgPT09ICcnKSAmJlxuICAgICAgICAoYmV0RGF0YSA9PT0gdW5kZWZpbmVkIHx8IGJldERhdGEgPT09ICcnKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgaW4gW2RhdGEtYmV0XSBvciBbZGF0YS1oaWdobGlnaHRdJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGFjdGlvbiA9PT0gJycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzQWN0aW9uU3VwcG9ydGVkID0gT2JqZWN0LmtleXMoQUNUSU9OX1RZUEVTKS5pbmNsdWRlcyhhY3Rpb24pO1xuXG4gICAgICBpZiAoaXNBY3Rpb25TdXBwb3J0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIGFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2tzIGFyZSBkb25lICovXG5cbiAgICAgIGNvbnN0IHBheWxvYWREYXRhID0gKGhpZ2hsaWdodERhdGEgPz8gYmV0RGF0YSkgYXMgc3RyaW5nO1xuXG4gICAgICBjb25zdCBnZXRQYXlsb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdElkID0gcGF5bG9hZERhdGEuc3BsaXQoJy0nKVswXTtcblxuICAgICAgICBjb25zdCBpc1BheWxvYWRJbkNvbmZpZyA9IGhhc093bihjb25maWcsIGZpcnN0SWQpO1xuXG4gICAgICAgIGlmIChpc1BheWxvYWRJbkNvbmZpZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBjb25maWdbZmlyc3RJZCBhcyBrZXlvZiB0eXBlb2YgY29uZmlnXS5tYXAoXG4gICAgICAgICAgICAoaXRlbSkgPT4gYCR7aXRlbX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF5bG9hZERhdGEuc3BsaXQoJy0nKS5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGF5bG9hZCA9IGdldFBheWxvYWQoKTtcblxuICAgICAgb25CZXQoe1xuICAgICAgICBiZXQ6IGFjdGlvbiBhcyBrZXlvZiB0eXBlb2YgQUNUSU9OX1RZUEVTLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBpZDogcGF5bG9hZERhdGEsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGFibGVSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyKTtcblxuICAgIGNvbnN0IHRhYmxlUmVmQ3VycmVudCA9IHRhYmxlUmVmLmN1cnJlbnQ7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGFibGVSZWZDdXJyZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbb25CZXRdKTtcblxuICBjb25zdCBkb0hpZ2hsaWdodCA9IChiZXRJZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRhYmxlUmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBob3ZlckNsYXNzID0gJ2l0ZW0taG92ZXInO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRhYmxlUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYmV0PVwiJHtiZXRJZH1cIl1gKTtcblxuICAgIGVsZW1lbnQ/LmNsYXNzTGlzdC50b2dnbGUoaG92ZXJDbGFzcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmV0Q2F0Y2hlckhvdmVyID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgaGlnaGxpZ2h0RGF0YSA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KS5kYXRhc2V0XG4gICAgICAgIC5oaWdobGlnaHQ7XG4gICAgICBjb25zdCB0b0hpZ2hsaWdodCA9IGhpZ2hsaWdodERhdGE/LnNwbGl0KCctJyk7XG5cbiAgICAgIGNvbnN0IGZpcnN0SGlnaGxpZ2h0ID0gdG9IaWdobGlnaHQ/LlswXTtcblxuICAgICAgaWYgKGZpcnN0SGlnaGxpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0Zyb21Db25maWcgPSBPYmplY3Qua2V5cyhjb25maWcpLmluY2x1ZGVzKGZpcnN0SGlnaGxpZ2h0KTtcblxuICAgICAgaWYgKGlzRnJvbUNvbmZpZyA9PT0gdHJ1ZSkge1xuICAgICAgICBkb0hpZ2hsaWdodChmaXJzdEhpZ2hsaWdodCk7XG5cbiAgICAgICAgaWYgKGNvbmZpZ1tmaXJzdEhpZ2hsaWdodCBhcyBrZXlvZiB0eXBlb2YgY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignQ29uZmlnIGRvZXMgbm90IGNvbnRhaW4gdGhlIGtleScsIGZpcnN0SGlnaGxpZ2h0KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdbZmlyc3RIaWdobGlnaHQgYXMga2V5b2YgdHlwZW9mIGNvbmZpZ10uZm9yRWFjaCgoYmV0KSA9PlxuICAgICAgICAgIGRvSGlnaGxpZ2h0KGAke2JldH1gKSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRvSGlnaGxpZ2h0Py5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGRvSGlnaGxpZ2h0KGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXSxcbiAgKTtcblxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7IGJldHMsIG9uQmV0Q2F0Y2hlckhvdmVyOiBoYW5kbGVCZXRDYXRjaGVySG92ZXIgfSksXG4gICAgW2JldHMsIGhhbmRsZUJldENhdGNoZXJIb3Zlcl0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um91bGV0dGVUYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncm91bGV0dGUtdGFibGUtY29udGFpbmVyJywgeyBkZWJ1ZzogaXNEZWJ1ZyB9KX1cbiAgICAgICAgcmVmPXt0YWJsZVJlZn1cbiAgICAgID5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm91bGV0dGUtdGFibGUtY29udGFpbmVyLWZpcnN0XCI+XG4gICAgICAgICAgPFplcm9CZXRzIC8+XG4gICAgICAgICAgPE51bWJlckJldHMgLz5cbiAgICAgICAgICA8Q29sdW1ucyAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdWxldHRlLXRhYmxlLWNvbnRhaW5lci1zZWNvbmRcIj5cbiAgICAgICAgICA8RG96ZW5zIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VsZXR0ZS10YWJsZS1jb250YWluZXItdGhpcmRcIj5cbiAgICAgICAgICA8Qm90dG9tQmV0cyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91bGV0dGVUYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5Sb3VsZXR0ZVRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNEZWJ1ZzogZmFsc2UsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGlwIH0gZnJvbSAnLi4vQ2hpcCc7XG5cbmltcG9ydCB7IEFDVElPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBmaW5kQ2hpcEljb24sIHNob3VsZFJlbmRlckNoaXAgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IFJvdWxldHRlVGFibGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBaZXJvQmV0czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb25CZXRDYXRjaGVySG92ZXIsIGJldHMgfSA9IHVzZUNvbnRleHQoUm91bGV0dGVUYWJsZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtbJzAnLCAnMDAnXS5tYXAoKG51bWJlcikgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgemVyby1pdGVtLSR7bnVtYmVyfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiemVyby1pdGVtXCJcbiAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTW251bWJlciBhcyAnMCcgfCAnMDAnXX1cbiAgICAgICAgICBkYXRhLWJldD17bnVtYmVyfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIHN0YXJ0IGNoaXAgKi99XG4gICAgICAgICAge251bWJlciA9PT0gJzAnICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxlZXQtYmV0LWNhdGNoZXJcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLlNUUkVFVH1cbiAgICAgICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD1cIjAtMDAtMlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogJ2F1dG8nLCByaWdodDogLTE1LCB6SW5kZXg6IDEzIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKCcwLTAwLTInLCBiZXRzKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHQtdG9wXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZpbmRDaGlwSWNvbignMC0wMC0yJywgYmV0cyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIGVuZCBjaGlwICovfVxuICAgICAgICAgIHsvKiBzdGFydCBjaGlwICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvcm5lci1iZXQtY2F0Y2hlciAke251bWJlciA9PT0gJzAnID8gJ2JvdHRvbScgOiAnJ31gfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLkJBU0tFVF9VU31cbiAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtudW1iZXIgPT09ICcwJyA/ICcwLTAwLTEtMi0zJyA6ICcwMC0wLTEtMi0zJ31cbiAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMTQgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKFxuICAgICAgICAgICAgbnVtYmVyID09PSAnMCcgPyAnMC0wMC0xLTItMycgOiAnMDAtMC0xLTItMycsXG4gICAgICAgICAgICBiZXRzLFxuICAgICAgICAgICkgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgcG9zaXRpb249e251bWJlciA9PT0gJzAnID8gJ3JpZ2h0LWJvdHRvbScgOiAncmlnaHQtdG9wJ31cbiAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKFxuICAgICAgICAgICAgICAgIG51bWJlciA9PT0gJzAnID8gJzAtMDAtMS0yLTMnIDogJzAwLTAtMS0yLTMnLFxuICAgICAgICAgICAgICAgIGJldHMsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIGVuZCBjaGlwICovfVxuICAgICAgICAgIHsvKiBzdGFydCBjaGlwICovfVxuICAgICAgICAgIHtudW1iZXIgPT09ICcwJyAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXQtdXAtYmV0LWNhdGNoZXItdG9wXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS1hY3Rpb249e0FDVElPTl9UWVBFUy5ST1d9XG4gICAgICAgICAgICAgICAgZGF0YS1oaWdobGlnaHQ9XCIwLTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFJlbmRlckNoaXAoJzAtMDAnLCBiZXRzKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgPENoaXAgcG9zaXRpb249XCJjZW50ZXItdG9wXCIgaWNvbj17ZmluZENoaXBJY29uKCcwLTAwJywgYmV0cyl9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICB7Lyogc3RhcnQgY2hpcCAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxpdC11cC1iZXQtY2F0Y2hlci1yaWdodFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuU1BMSVR9XG4gICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyfS0ke251bWJlciA9PT0gJzAnID8gMiA6IDN9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHpJbmRleDogbnVtYmVyID09PSAnMDAnID8gMTIgOiAnJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIgPT09ICcwMCcgPyAnODVweCcgOiAnJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChgJHtudW1iZXJ9LSR7bnVtYmVyID09PSAnMCcgPyAyIDogM31gLCBiZXRzKSA9PT1cbiAgICAgICAgICAgIHRydWUgJiYgKFxuICAgICAgICAgICAgPENoaXBcbiAgICAgICAgICAgICAgcG9zaXRpb249e1xuICAgICAgICAgICAgICAgIG51bWJlciA9PT0gJzAnXG4gICAgICAgICAgICAgICAgICA/ICdyaWdodC10b3Atd2l0aC1uby1vZmZzZXQnXG4gICAgICAgICAgICAgICAgICA6ICdyaWdodC10b3Atd2l0aC1vZmZzZXQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWNvbj17ZmluZENoaXBJY29uKGAke251bWJlcn0tJHtudW1iZXIgPT09ICcwJyA/IDIgOiAzfWAsIGJldHMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICB7Lyogc3RhcnQgY2hpcCAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxpdC11cC1iZXQtY2F0Y2hlci1yaWdodFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uQmV0Q2F0Y2hlckhvdmVyfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgIGRhdGEtYWN0aW9uPXtBQ1RJT05fVFlQRVMuU1BMSVR9XG4gICAgICAgICAgICBkYXRhLWhpZ2hsaWdodD17YCR7bnVtYmVyfS0ke251bWJlciA9PT0gJzAnID8gMSA6IDJ9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogODUsIHRvcDogJ2F1dG8nLCBib3R0b206IDAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzaG91bGRSZW5kZXJDaGlwKGAke251bWJlcn0tJHtudW1iZXIgPT09ICcwJyA/IDEgOiAyfWAsIGJldHMpID09PVxuICAgICAgICAgICAgdHJ1ZSAmJiAoXG4gICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICBwb3NpdGlvbj17XG4gICAgICAgICAgICAgICAgbnVtYmVyID09PSAnMCdcbiAgICAgICAgICAgICAgICAgID8gJ3JpZ2h0LWJvdHRvbS13aXRoLW9mZnNldCdcbiAgICAgICAgICAgICAgICAgIDogJ3JpZ2h0LWJvdHRvbS13aXRoLW5vLW9mZnNldCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpY29uPXtmaW5kQ2hpcEljb24oYCR7bnVtYmVyfS0ke251bWJlciA9PT0gJzAnID8gMSA6IDJ9YCwgYmV0cyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIGVuZCBjaGlwICovfVxuICAgICAgICAgIHsvKiBzdGFydCBjaGlwICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIG51bWJlciA9PT0gJzAnID8gJ2Jhc2tldC1jYXRjaGVyLWJvdHRvbScgOiAnYmFza2V0LWNhdGNoZXItdG9wJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbkJldENhdGNoZXJIb3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25CZXRDYXRjaGVySG92ZXJ9XG4gICAgICAgICAgICBkYXRhLWFjdGlvbj17QUNUSU9OX1RZUEVTLkJBU0tFVF9VU31cbiAgICAgICAgICAgIGRhdGEtaGlnaGxpZ2h0PXtgJHtudW1iZXIgPT09ICcwJyA/ICcwLTAwJyA6ICcwMC0wJ30tMS0yLTNgfVxuICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogLTMgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBlbmQgY2hpcCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+e251bWJlcn08L2Rpdj5cbiAgICAgICAgICB7c2hvdWxkUmVuZGVyQ2hpcChudW1iZXIsIGJldHMpICYmIChcbiAgICAgICAgICAgIDxDaGlwIHBvc2l0aW9uPVwiY2VudGVyXCIgaWNvbj17ZmluZENoaXBJY29uKG51bWJlciwgYmV0cyl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL1plcm9CZXRzJztcbiIsImV4cG9ydCAqIGZyb20gJy4vUm91bGV0dGVUYWJsZSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy90YWJsZS5qc29uJztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICcuLi8uLi9saWJzJztcblxuaW1wb3J0ICcuL1JvdWxldHRlV2hlZWwuY3NzJztcblxuY29uc3QgYXZhaWxhYmxlV2lubmluZ0JldHMgPSBbXG4gIC4uLmNvbmZpZ1snMV9UT18xOCddLFxuICAuLi5jb25maWdbJzE5X1RPXzM2J10sXG4gIC4uLlsnLTEnLCAnMCcsICcwMCddLFxuXS5tYXAoKGJldCkgPT4gYCR7YmV0fWApO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSb3VsZXR0ZVdoZWVsUHJvcHMge1xuICBzdGFydDogYm9vbGVhbjtcbiAgd2lubmluZ0JldDogKHR5cGVvZiBhdmFpbGFibGVXaW5uaW5nQmV0cylbbnVtYmVyXTtcbiAgb25TcGlubmluZ0VuZD86ICgpID0+IHZvaWQ7XG4gIHdpdGhBbmltYXRpb24/OiBib29sZWFuO1xuICBhZGRSZXN0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdWxldHRlV2hlZWw6IEZDPElSb3VsZXR0ZVdoZWVsUHJvcHM+ID0gKHtcbiAgc3RhcnQsXG4gIHdpbm5pbmdCZXQsXG4gIG9uU3Bpbm5pbmdFbmQsXG4gIHdpdGhBbmltYXRpb24sXG4gIGFkZFJlc3QsXG59KSA9PiB7XG4gIGNvbnN0IHdoZWVsTnVtYmVycyA9IFtcbiAgICAnNCcsXG4gICAgJzM2JyxcbiAgICAnMTAnLFxuICAgICczMCcsXG4gICAgJzEzJyxcbiAgICAnMjcnLFxuICAgICcyMicsXG4gICAgJzIxJyxcbiAgICAnMjgnLFxuICAgICcxOCcsXG4gICAgJzMxJyxcbiAgICAnMTInLFxuICAgICcyJyxcbiAgICAnOScsXG4gICAgJzgnLFxuICAgICczJyxcbiAgICAnMTEnLFxuICAgICczMicsXG4gICAgJzE3JyxcbiAgICAnMjMnLFxuICAgICcwMCcsXG4gICAgJzE0JyxcbiAgICAnMjAnLFxuICAgICc1JyxcbiAgICAnMjYnLFxuICAgICczNCcsXG4gICAgJzI5JyxcbiAgICAnMjUnLFxuICAgICczNScsXG4gICAgJzE5JyxcbiAgICAnNicsXG4gICAgJzE2JyxcbiAgICAnMTUnLFxuICAgICc3JyxcbiAgICAnMjQnLFxuICAgICc0JyxcbiAgICAnMzMnLFxuICAgICcwJyxcbiAgXTtcblxuICBjb25zb2xlLmxvZyh3aGVlbE51bWJlcnMpO1xuICBjb25zdCBpbm5lclJlZiA9IHVzZVJlZjxIVE1MVUxpc3RFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJbm5lclJlZiA9IGlubmVyUmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAod2lubmluZ0JldCA9PT0gJy0xJyB8fCBjdXJyZW50SW5uZXJSZWYgPT09IG51bGwgfHwgc3RhcnQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFkZFJlc3QgPT09IHRydWUpIHtcbiAgICAgIGN1cnJlbnRJbm5lclJlZi5jbGFzc0xpc3QucmVtb3ZlKCdyZXN0Jyk7XG4gICAgfVxuXG4gICAgY3VycmVudElubmVyUmVmLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcGludG9pbmRleCcpO1xuXG4gICAgY29uc3QgYmV0SW5kZXggPSB3aGVlbE51bWJlcnMuaW5kZXhPZih3aW5uaW5nQmV0KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY3VycmVudElubmVyUmVmLnNldEF0dHJpYnV0ZSgnZGF0YS1zcGludG9pbmRleCcsIGAke2JldEluZGV4fWApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGFkZFJlc3QgPT09IHRydWUpIHtcbiAgICAgICAgICBjdXJyZW50SW5uZXJSZWYuY2xhc3NMaXN0LmFkZCgncmVzdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25TcGlubmluZ0VuZD8uKCk7XG4gICAgICB9LCA5MDAwKTtcbiAgICB9LCAxMDApO1xuICAgIC8vIHdlJ3JlIGlnbm9yaW5nIG9ubHkgdGhlIG9uU3Bpbm5pbmdFbmQgb25TcGlubmluZ0VuZCBkZXBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFt3aW5uaW5nQmV0LCBzdGFydF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VsZXR0ZS13aGVlbC1jb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdyb3VsZXR0ZS13aGVlbC1wbGF0ZScsIHtcbiAgICAgICAgICAnd2l0aC1hbmltYXRpb24nOiB3aXRoQW5pbWF0aW9uLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJvdWxldHRlLXdoZWVsLWlubmVyXCIgcmVmPXtpbm5lclJlZn0+XG4gICAgICAgICAge3doZWVsTnVtYmVycy5tYXAoKG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17YHdoZWVsLSR7bnVtYmVyfWB9XG4gICAgICAgICAgICAgIGRhdGEtYmV0PXtudW1iZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdWxldHRlLXdoZWVsLWJldC1udW1iZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHdoZWVsLXBpdC0ke251bWJlcn1gfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGl0XCJcbiAgICAgICAgICAgICAgICAgIGlkPXtgd2hlZWwtcGl0LSR7bnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e251bWJlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdWxldHRlLXdoZWVsLXBpdFwiPntudW1iZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUm91bGV0dGVXaGVlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uU3Bpbm5pbmdFbmQ6ICgpID0+IHVuZGVmaW5lZCxcbiAgd2l0aEFuaW1hdGlvbjogdHJ1ZSxcbiAgYWRkUmVzdDogdHJ1ZSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL1JvdWxldHRlV2hlZWwnO1xuIiwiZXhwb3J0IGNvbnN0IEFDVElPTl9UWVBFUyA9IHtcbiAgMDogJzAnLFxuICAnMDAnOiAnMDAnLFxuICBTVFJFRVQ6ICdTVFJFRVQnLFxuICBST1c6ICdST1cnLFxuICBCQVNLRVRfVVM6ICdCQVNLRVRfVVMnLFxuICBTUExJVDogJ1NQTElUJyxcbiAgQ09STkVSOiAnQ09STkVSJyxcbiAgRE9VQkxFX1NUUkVFVDogJ0RPVUJMRV9TVFJFRVQnLFxuICBTVFJBSUdIVF9VUDogJ1NUUkFJR0hUX1VQJyxcbiAgJzFTVF9DT0xVTU4nOiAnMVNUX0NPTFVNTicsXG4gICcyTkRfQ09MVU1OJzogJzJORF9DT0xVTU4nLFxuICAnM1JEX0NPTFVNTic6ICczUkRfQ09MVU1OJyxcbiAgJzFTVF9ET1pFTic6ICcxU1RfRE9aRU4nLFxuICAnMk5EX0RPWkVOJzogJzJORF9ET1pFTicsXG4gICczUkRfRE9aRU4nOiAnM1JEX0RPWkVOJyxcbiAgJzFfVE9fMTgnOiAnMV9UT18xOCcsXG4gICcxOV9UT18zNic6ICcxOV9UT18zNicsXG4gIEVWRU46ICdFVkVOJyxcbiAgT0REOiAnT0REJyxcbiAgUkVEOiAnUkVEJyxcbiAgQkxBQ0s6ICdCTEFDSycsXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBJUm91bGV0dGVUYWJsZVByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm91bGV0dGVUYWJsZUNvbnRleHRQcm9wcyB7XG4gIGJldHM6IElSb3VsZXR0ZVRhYmxlUHJvcHNbJ2JldHMnXTtcbiAgb25CZXRDYXRjaGVySG92ZXI6IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBSb3VsZXR0ZVRhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBiZXRzOiB7fSxcbiAgb25CZXRDYXRjaGVySG92ZXI6ICgpID0+IG51bGwsXG59IGFzIElSb3VsZXR0ZVRhYmxlQ29udGV4dFByb3BzKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vUm91bGV0dGVUYWJsZUNvbnRleHQnO1xuIiwiaW1wb3J0IHR5cGUgeyBJUm91bGV0dGVUYWJsZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Sb3VsZXR0ZVRhYmxlJztcblxuZXhwb3J0IGNvbnN0IGZpbmRDaGlwSWNvbiA9IChpZDogc3RyaW5nLCBiZXRzOiBJUm91bGV0dGVUYWJsZVByb3BzWydiZXRzJ10pID0+XG4gIGJldHNbaWRdPy5pY29uO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9maW5kQ2hpcEljb24nO1xuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tQXJyYXlJdGVtIH0gZnJvbSAnLi4vLi4vdXRpbGxzJztcblxuZXhwb3J0IGNvbnN0IGdldFdoZWVsTnVtYmVycyA9ICgpID0+IHtcbiAgLy8gMXN0IHN0ZXBcbiAgY29uc3Qgc3RhdGljV2hlZWxOdW1iZXJzOiBzdHJpbmdbXSA9IFtdOyAvLyB3aXRob3V0IDAgYW5kIDAwXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzY7IGkgKz0gMSkge1xuICAgIHN0YXRpY1doZWVsTnVtYmVycy5wdXNoKGAke2l9YCk7XG4gIH1cblxuICAvLyAybmQgc3RlcFxuICBjb25zdCByYW5kb21OdW1iZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGljV2hlZWxOdW1iZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlTnVtYmVycyA9IHN0YXRpY1doZWVsTnVtYmVycy5maWx0ZXIoXG4gICAgICAobnVtYmVyKSA9PiByYW5kb21OdW1iZXJzLmluY2x1ZGVzKG51bWJlcikgPT09IGZhbHNlLFxuICAgICk7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gZ2V0UmFuZG9tQXJyYXlJdGVtKGF2YWlsYWJsZU51bWJlcnMpO1xuXG4gICAgcmFuZG9tTnVtYmVycy5wdXNoKHJhbmRvbU51bWJlcik7XG4gIH1cblxuICAvLyAzcmQgc3RlcFxuICBjb25zdCBmaW5hbEFycmF5OiBzdHJpbmdbXSA9IFtdO1xuXG4gIHJhbmRvbU51bWJlcnMuZm9yRWFjaCgobnVtYmVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMTgpIHtcbiAgICAgIGZpbmFsQXJyYXkucHVzaCgnMDAnKTtcbiAgICB9XG5cbiAgICBmaW5hbEFycmF5LnB1c2gobnVtYmVyKTtcbiAgfSk7XG5cbiAgZmluYWxBcnJheS5wdXNoKCcwJyk7XG5cbiAgcmV0dXJuIGZpbmFsQXJyYXk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9nZXRXaGVlbE51bWJlcnMnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zaG91bGRSZW5kZXInO1xuZXhwb3J0ICogZnJvbSAnLi9maW5kQ2hpcEljb24nO1xuZXhwb3J0ICogZnJvbSAnLi9nZXRXaGVlbE51bWJlcnMnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zaG91bGRSZW5kZXInO1xuIiwiaW1wb3J0IHsgSVJvdWxldHRlVGFibGVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUm91bGV0dGVUYWJsZSc7XG5cbmNvbnN0IG5vVG9wUmVuZGVyID0gWzMsIDYsIDksIDEyLCAxNSwgMTgsIDIxLCAyNCwgMjcsIDMwLCAzMywgMzZdO1xuY29uc3Qgbm9SaWdodFJlbmRlciA9IFszNCwgMzUsIDM2XTtcbmNvbnN0IGJvdHRvbVJlbmRlciA9IFsxLCA0LCA3LCAxMCwgMTMsIDE2LCAxOSwgMjIsIDI1LCAyOCwgMzEsIDM0XTtcbmNvbnN0IG5vQ29ybmVyQmV0UmVuZGVyID0gWy4uLm5vVG9wUmVuZGVyLCAzNCwgMzVdO1xuY29uc3Qgc2l4TGluZXNCZXRSZW5kZXIgPSBib3R0b21SZW5kZXIuc2xpY2UoMCwgYm90dG9tUmVuZGVyLmxlbmd0aCAtIDEpO1xuY29uc3QgdG9wUmlnaHREb2J1bGVTdHJlZXRSZW5kZXIgPSBub1RvcFJlbmRlci5zbGljZSgwLCBub1RvcFJlbmRlci5sZW5ndGggLSAxKTtcblxuZXhwb3J0IGNvbnN0IHNob3VsZFJlbmRlclRvcENhdGNoZXIgPSAoY3VycmVudE51bWJlcjogbnVtYmVyKSA9PlxuICBub1RvcFJlbmRlci5pbmNsdWRlcyhjdXJyZW50TnVtYmVyKSA9PT0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBzaG91bGRSZW5kZXJSaWdodENhdGNoZXIgPSAoY3VycmVudE51bWJlcjogbnVtYmVyKSA9PlxuICBub1JpZ2h0UmVuZGVyLmluY2x1ZGVzKGN1cnJlbnROdW1iZXIpID09PSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IHNob3VsZFJlbmRlckJvdHRvbUNhdGNoZXIgPSAoY3VycmVudE51bWJlcjogbnVtYmVyKSA9PlxuICBib3R0b21SZW5kZXIuaW5jbHVkZXMoY3VycmVudE51bWJlcik7XG5cbmV4cG9ydCBjb25zdCBzaG91bGRSZW5kZXJDb3JuZXJCZXRDYXRjaGVyID0gKGN1cnJlbnROdW1iZXI6IG51bWJlcikgPT5cbiAgbm9Db3JuZXJCZXRSZW5kZXIuaW5jbHVkZXMoY3VycmVudE51bWJlcikgPT09IGZhbHNlO1xuXG5leHBvcnQgY29uc3Qgc2hvdWxkUmVuZGVyU2l4TGluZUJldENhdGNoZXIgPSAoY3VycmVudE51bWJlcjogbnVtYmVyKSA9PlxuICBzaXhMaW5lc0JldFJlbmRlci5pbmNsdWRlcyhjdXJyZW50TnVtYmVyKTtcblxuZXhwb3J0IGNvbnN0IHNob3VsZFJlbmRlckNoaXAgPSAoXG4gIGlkOiBzdHJpbmcsXG4gIGJldHM6IElSb3VsZXR0ZVRhYmxlUHJvcHNbJ2JldHMnXSxcbikgPT4gT2JqZWN0LmtleXMoYmV0cykuaW5jbHVkZXMoaWQpO1xuXG5leHBvcnQgY29uc3Qgc2hvdWxkUmVuZGVyVG9wU3RyZWV0Q2F0Y2hlciA9IChjdXJyZW50TnVtYmVyOiBudW1iZXIpID0+XG4gIG5vVG9wUmVuZGVyLmluY2x1ZGVzKGN1cnJlbnROdW1iZXIpO1xuXG5leHBvcnQgY29uc3Qgc2hvdWxkUmVuZGVyVG9wUmlnaHREb3VibGVTdHJlZXRDYXRjaGVyID0gKFxuICBjdXJyZW50TnVtYmVyOiBudW1iZXIsXG4pID0+IHRvcFJpZ2h0RG9idWxlU3RyZWV0UmVuZGVyLmluY2x1ZGVzKGN1cnJlbnROdW1iZXIpO1xuIiwiY29uc3QgaXNBcnJheSA9IChpdGVtOiB1bmtub3duKSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pO1xuXG5jb25zdCBpc09iamVjdCA9IChpdGVtOiB1bmtub3duKSA9PlxuICBpdGVtICE9PSBudWxsICYmIGlzQXJyYXkoaXRlbSkgPT09IGZhbHNlICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JztcblxuY29uc3QgaXNGdW5jdGlvbiA9IChpdGVtOiB1bmtub3duKSA9PiB0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJztcblxuY29uc3QgaXNCb29sZWFuID0gKGl0ZW06IHVua25vd24pID0+IHR5cGVvZiBpdGVtID09PSAnYm9vbGVhbic7XG5cbmNvbnN0IGhhc093blByb3RvdHlwZU9mVG9TdHJpbmcgPSAob2JqZWN0OiBvYmplY3QpID0+XG4gIG9iamVjdC50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZXhwb3J0IGNvbnN0IGNsYXNzTmFtZXMgPSAoLi4uY2xhc3NlczogQXJyYXk8dW5rbm93bj4pID0+IHtcbiAgbGV0IHJlc3VsdENsYXNzTmFtZSA9ICcnO1xuXG4gIGNvbnN0IGhhbmRsZVByaW1pdGl2ZSA9IChpdGVtOiB1bmtub3duLCBhc0tleT86IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGlzSXRlbUJvb2xlYW4gPSBpc0Jvb2xlYW4oaXRlbSk7XG5cbiAgICBpZiAoIWl0ZW0gfHwgaXNJdGVtQm9vbGVhbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlc3VsdENsYXNzTmFtZSArPSBgJHthc0tleSAhPT0gdW5kZWZpbmVkID8gYXNLZXkgOiBpdGVtfSBgO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9iamVjdCA9IChvYmplY3Q6IG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhvYmplY3QpO1xuXG4gICAgLyogbWF5YmUgdGhyb3cgaXQgb3V0ICovXG4gICAgY29uc3QgaGFzT2JqZWN0T3duUHJvdG90eXBlT2ZUb1N0cmluZyA9IGhhc093blByb3RvdHlwZU9mVG9TdHJpbmcob2JqZWN0KTtcbiAgICAvKiovXG5cbiAgICBlbnRyaWVzLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVmFsdWVGdW5jdGlvbiA9IGlzRnVuY3Rpb24odmFsdWUpO1xuICAgICAgY29uc3QgaXNUb1N0cmluZyA9IGtleSA9PT0gJ3RvU3RyaW5nJztcblxuICAgICAgaWYgKGlzVmFsdWVGdW5jdGlvbiA9PT0gdHJ1ZSAmJiBpc1RvU3RyaW5nID09PSBmYWxzZSkge1xuICAgICAgICBjb25zdCBmdW5jdGlvblJlc3VsdCA9ICh2YWx1ZSBhcyBGdW5jdGlvbikoKTtcblxuICAgICAgICBoYW5kbGVQcmltaXRpdmUoZnVuY3Rpb25SZXN1bHQsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNUb1N0cmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0Q2xhc3NOYW1lICs9IGAke2tleX0gYDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qIG1heWJlIHRocm93IGl0IG91dCAqL1xuICAgIGlmIChoYXNPYmplY3RPd25Qcm90b3R5cGVPZlRvU3RyaW5nID09PSB0cnVlKSB7XG4gICAgICBjb25zdCB0b1N0cmluZ1ZhbHVlID0gb2JqZWN0LnRvU3RyaW5nKCk7XG5cbiAgICAgIGhhbmRsZVByaW1pdGl2ZSh0b1N0cmluZ1ZhbHVlKTtcbiAgICB9XG4gICAgLyoqL1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFycmF5ID0gKGFycmF5OiBBcnJheTx1bmtub3duPikgPT4ge1xuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbSB8fCB0eXBlb2YgaXRlbSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNJdGVtQXJyYXkgPSBpc0FycmF5KGl0ZW0pO1xuICAgICAgY29uc3QgaXNJdGVtT2JqZWN0ID0gaXNPYmplY3QoaXRlbSk7XG5cbiAgICAgIGlmIChpc0l0ZW1BcnJheSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaGFuZGxlQXJyYXkoaXRlbSBhcyBBcnJheTx1bmtub3duPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0l0ZW1PYmplY3QgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZU9iamVjdChpdGVtIGFzIG9iamVjdCk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdENsYXNzTmFtZSArPSBgJHtpdGVtfSBgO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNsYXNzTmFtZUl0ZW0gPSBjbGFzc2VzW2ldO1xuXG4gICAgY29uc3QgaXNJdGVtT2JqZWN0ID0gaXNPYmplY3QoY2xhc3NOYW1lSXRlbSk7XG5cbiAgICBjb25zdCBpc0l0ZW1BcnJheSA9IGlzQXJyYXkoY2xhc3NOYW1lSXRlbSk7XG5cbiAgICBpZiAoaXNJdGVtT2JqZWN0ID09PSB0cnVlKSB7XG4gICAgICBoYW5kbGVPYmplY3QoY2xhc3NOYW1lSXRlbSBhcyBvYmplY3QpO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNJdGVtQXJyYXkgPT09IHRydWUpIHtcbiAgICAgIGhhbmRsZUFycmF5KGNsYXNzTmFtZUl0ZW0gYXMgQXJyYXk8dW5rbm93bj4pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcmltaXRpdmUoY2xhc3NOYW1lSXRlbSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0Q2xhc3NOYW1lLnRyaW0oKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2NsYXNzTmFtZXMnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzc05hbWVzJztcbiIsImV4cG9ydCBjb25zdCBnZXRSYW5kb21BcnJheUl0ZW0gPSA8VD4oYXJyOiBUW10pID0+XG4gIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG4iLCJleHBvcnQgKiBmcm9tICcuL2dldFJhbmRvbUFycmF5SXRlbSc7XG4iLCIvKipcbiAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChpbmNsdXNpdmUpXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21JbnQgPSAobWluTnVtYmVyOiBudW1iZXIsIG1heE51bWJlcjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG1pbiA9IE1hdGguY2VpbChtaW5OdW1iZXIpO1xuICBjb25zdCBtYXggPSBNYXRoLmZsb29yKG1heE51bWJlcik7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9nZXRSYW5kb21JbnQnO1xuIiwiZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmplY3Q6IG9iamVjdCwgcHJvcGVydHk6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9oYXNPd24nO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pc09kZCc7XG5leHBvcnQgKiBmcm9tICcuL2hhc093bic7XG5leHBvcnQgKiBmcm9tICcuL2dldFJhbmRvbUludCc7XG5leHBvcnQgKiBmcm9tICcuL2dldFJhbmRvbUFycmF5SXRlbSc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2lzT2RkJztcbiIsImV4cG9ydCBjb25zdCBpc09kZCA9IChudW1iZXI6IG51bWJlcikgPT4gbnVtYmVyICUgMiAhPT0gMDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBSb3VsZXR0ZVRhYmxlIH0gZnJvbSAnLi9jb21wb25lbnRzL1JvdWxldHRlVGFibGUnO1xuaW1wb3J0IHsgUm91bGV0dGVXaGVlbCB9IGZyb20gJy4vY29tcG9uZW50cy9Sb3VsZXR0ZVdoZWVsJztcblxuZXhwb3J0IHsgUm91bGV0dGVUYWJsZSwgUm91bGV0dGVXaGVlbCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9