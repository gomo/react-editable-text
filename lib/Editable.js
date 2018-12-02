"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
}(_react.default.Component);

exports.default = Editable;
Editable.propTypes = {
  label: _propTypes.default.string,
  cancelLabel: _propTypes.default.string,
  saveLabel: _propTypes.default.string,
  editLabel: _propTypes.default.string,
  value: _propTypes.default.string,
  saveBtnClass: _propTypes.default.string,
  cancelBtnClass: _propTypes.default.string,
  editBtnClass: _propTypes.default.string,
  onSave: _propTypes.default.func.isRequired,
  needsSaveOnKeyPress: _propTypes.default.func,
  onClickEdit: _propTypes.default.func
};
Editable.defaultProps = {
  label: '',
  cancelLabel: 'Cancel',
  saveLabel: 'Save',
  editLabel: 'Edit',
  saveBtnClass: 'btn btn-warning',
  cancelBtnClass: 'btn btn-secondary',
  editBtnClass: 'btn btn-primary',
  needsSaveOnKeyPress: function needsSaveOnKeyPress() {
    return false;
  }
};