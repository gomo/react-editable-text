"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Editable2 = _interopRequireDefault(require("./Editable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _react.default.createElement("div", {
        className: "input-group react-editable-text line"
      }, _react.default.createElement("div", {
        className: "input-group-prepend"
      }, function () {
        if (_this.state.editable) {
          return _react.default.createElement("button", {
            className: _this.props.cancelBtnClass,
            type: "button",
            onClick: function onClick(e) {
              _this.onClickCancel(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'cancelLabel')
          });
        } else if (_this.props.label) {
          return _react.default.createElement("span", {
            className: "input-group-text",
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'label')
          });
        }
      }()), _react.default.createElement("input", {
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
      }), _react.default.createElement("div", {
        className: "input-group-append"
      }, function () {
        if (_this.state.editable) {
          return _react.default.createElement("button", {
            className: _this.props.saveBtnClass,
            type: "button",
            onClick: function onClick(e) {
              _this.onClickSave(e);
            },
            dangerouslySetInnerHTML: _this.getInnerHtml(_this.props, 'saveLabel')
          });
        } else {
          return _react.default.createElement("button", {
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
}(_Editable2.default);

exports.default = EditableLine;