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

/***/ "./sample/src.js":
/*!***********************!*\
  !*** ./sample/src.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_EditableBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/EditableBox */ "./src/EditableBox.js");
/* harmony import */ var _src_EditableLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/EditableLine */ "./src/EditableLine.js");


console.log(_src_EditableBox__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Editable.js":
/*!*************************!*\
  !*** ./src/Editable.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Editable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Editable, _React$Component);

  function Editable(props) {
    var _this;

    _classCallCheck(this, Editable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editable).call(this, props));
    _this.state = {
      lable: "",
      editable: false,
      value: _this.props.value,
      saving: false
    };
    _this.firstValue;
    _this.keyDownCode;
    return _this;
  }

  _createClass(Editable, [{
    key: "onClickEdit",
    value: function onClickEdit(e) {
      var needsEdit = true;

      if (this.props.onClickEdit) {
        needsEdit = this.props.onClickEdit(e, this);
      }

      if (needsEdit === true) {
        if (!this.state.saving && !this.state.editable) {
          this.setState({
            editable: true,
            saving: false
          });
          this.firstValue = this.state.value;
          this.refs.element.focus();
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value && this.props.value != nextProps.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "onClickCancel",
    value: function onClickCancel() {
      if (!this.state.saving) {
        this.setState({
          editable: false,
          value: this.firstValue
        });
      }
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "onClickSave",
    value: function onClickSave(e) {
      if (this.firstValue == this.state.value) {
        this.setState({
          editable: false,
          saving: false
        });
      } else {
        this.setState({
          saving: true
        });
        this.props.onSave(this.state.value, this);
      }

      e.target.blur();
    }
  }, {
    key: "success",
    value: function success(value) {
      var state = {
        editable: false,
        saving: false
      };

      if (value !== undefined) {
        state.value = value;
      }

      this.setState(state);
    }
  }, {
    key: "fail",
    value: function fail() {
      this.setState({
        editable: true,
        saving: false
      });
    }
  }, {
    key: "getInnerHtml",
    value: function getInnerHtml(target, key) {
      return {
        __html: target[key]
      };
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(e) {
      if (this.props.needsSaveOnKeyPress(e)) {
        e.preventDefault();
        this.onClickSave(e);
        return false;
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      //日本語IMEの入力対策
      this.keyDownCode = e.keyCode;
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      if (this.keyDownCode == e.keyCode && e.keyCode == 27) {
        //ESCキー
        this.onClickCancel();
      }
    }
  }]);

  return Editable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Editable.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cancelLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  saveLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  editLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  saveBtnClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cancelBtnClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  editBtnClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  needsSaveOnKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Editable.defaultProps = {
  label: '',
  cancelLabel: 'Cancel',
  saveLabel: 'Save',
  editLabel: 'Edit',
  saveBtnClass: 'btn btn-warning',
  cancelBtnClass: 'btn btn-default',
  editBtnClass: 'btn btn-primary',
  needsSaveOnKeyPress: function needsSaveOnKeyPress() {
    return false;
  }
};

/***/ }),

/***/ "./src/EditableBox.js":
/*!****************************!*\
  !*** ./src/EditableBox.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editable */ "./src/Editable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var EditableBox =
/*#__PURE__*/
function (_Editable) {
  _inherits(EditableBox, _Editable);

  function EditableBox() {
    _classCallCheck(this, EditableBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditableBox).apply(this, arguments));
  }

  _createClass(EditableBox, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "react-editable-text box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "pull-left",
        dangerouslySetInnerHTML: this.getInnerHtml(this.props, 'label')
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons pull-right"
      }, function () {
        if (_this.state.editable) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: _this.props.cancelBtnClass,
            onClick: function onClick(e) {
              _this.onClickCancel(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'cancelLabel')
          }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: _this.props.saveBtnClass,
            onClick: function onClick(e) {
              _this.onClickSave(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'saveLabel')
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: _this.props.editBtnClass,
            onClick: function onClick(e) {
              _this.onClickEdit(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'editLabel')
          });
        }
      }())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        onClick: function onClick(e) {
          return _this.onClickEdit(e);
        },
        onKeyDown: function onKeyDown(e) {
          return _this.onKeyDown(e);
        },
        onKeyUp: function onKeyUp(e) {
          return _this.onKeyUp(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this.onKeyPress(e);
        },
        ref: "element",
        className: "form-control",
        disabled: this.state.saving ? "disabled" : null,
        readOnly: this.state.editable ? null : "readOnly",
        value: this.state.value,
        onChange: function onChange(e) {
          _this.onChangeValue(e);
        },
        style: this.props.textareaStyle
      })));
    }
  }]);

  return EditableBox;
}(_Editable__WEBPACK_IMPORTED_MODULE_1__["default"]);


var defaultProps = {};

for (var key in _Editable__WEBPACK_IMPORTED_MODULE_1__["default"].defaultProps) {
  defaultProps[key] = _Editable__WEBPACK_IMPORTED_MODULE_1__["default"].defaultProps[key];
}

defaultProps.saveBtnClass += ' btn-xs';
defaultProps.cancelBtnClass += ' btn-xs';
defaultProps.editBtnClass += ' btn-xs';
EditableBox.defaultProps = defaultProps;

/***/ }),

/***/ "./src/EditableLine.js":
/*!*****************************!*\
  !*** ./src/EditableLine.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editable */ "./src/Editable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var EditableLine =
/*#__PURE__*/
function (_Editable) {
  _inherits(EditableLine, _Editable);

  function EditableLine() {
    _classCallCheck(this, EditableLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditableLine).apply(this, arguments));
  }

  _createClass(EditableLine, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group react-editable-text line"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-prepend"
      }, function () {
        if (_this.state.editable) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: _this.props.cancelBtnClass,
            type: "button",
            onClick: function onClick(e) {
              _this.onClickCancel(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'cancelLabel')
          });
        } else if (_this.props.label) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "input-group-text",
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'label')
          });
        }
      }()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onClick: function onClick(e) {
          return _this.onClickEdit(e);
        },
        onKeyDown: function onKeyDown(e) {
          return _this.onKeyDown(e);
        },
        onKeyUp: function onKeyUp(e) {
          return _this.onKeyUp(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this.onKeyPress(e);
        },
        type: "text",
        ref: "element",
        className: "form-control",
        disabled: this.state.saving ? "disabled" : null,
        readOnly: this.state.editable ? null : "readOnly",
        value: this.state.value,
        onChange: function onChange(e) {
          _this.onChangeValue(e);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-append"
      }, function () {
        if (_this.state.editable) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: _this.props.saveBtnClass,
            type: "button",
            onClick: function onClick(e) {
              _this.onClickSave(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'saveLabel')
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            className: _this.props.editBtnClass,
            type: "button",
            onClick: function onClick(e) {
              _this.onClickEdit(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'editLabel')
          });
        }
      }()));
    }
  }]);

  return EditableLine;
}(_Editable__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./sample/src.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./sample/src.js */"./sample/src.js");


/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map