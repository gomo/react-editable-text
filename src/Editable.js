import React from 'react';
import PropTypes from 'prop-types';

export default class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lable: "",
      editable: false,
      value: this.props.value,
      saving: false
    };

    this.firstValue;
    this.keyDownCode;
  }

  onClickEdit(e){
    var needsEdit = true;
    if(this.props.onClickEdit){
      needsEdit = this.props.onClickEdit(e, this);
    }

    if(needsEdit === true){
      if(!this.state.saving && !this.state.editable){
        this.setState({
          editable: true,
          saving: false
        });
        this.firstValue = this.state.value;
        this.refs.element.focus();
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.value && this.props.value != nextProps.value){
      this.setState({
        value: nextProps.value
      });
    }
  }

  onClickCancel(){
    if(!this.state.saving){
      this.setState({
        editable: false,
        value: this.firstValue
      });
    }
  }

  onChangeValue(e){
    this.setState({value: e.target.value});
  }

  onClickSave(e){
    if(this.firstValue == this.state.value){
      this.setState({
        editable: false,
        saving: false
      });
    } else {
      this.setState({saving: true});
      this.props.onSave(this.state.value, this);
    }

    e.target.blur();
  }

  success(value){
    var state = {
      editable: false,
      saving: false
    };

    if(value !== undefined){
      state.value = value;
    }
    this.setState(state);
  }

  fail(){
    this.setState({
      editable: true,
      saving: false
    });
  }

  getInnerHtml(target, key){
    return React.isValidElement(target[key]) ? null : {__html: target[key]}
  }

  getChildDom(target, key){
    return React.isValidElement(target[key]) ? target[key] : null
  }

  onKeyPress(e){
    if(this.props.needsSaveOnKeyPress(e)){
      e.preventDefault();
      this.onClickSave(e);
      return false;
    }
  }

  onKeyDown(e){
    //日本語IMEの入力対策
    this.keyDownCode = e.keyCode;
  }

  onKeyUp(e){
    if(this.keyDownCode == e.keyCode && e.keyCode == 27){//ESCキー
      this.onClickCancel();
    }
  }
}

Editable.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  cancelLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  saveLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  editLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  value: PropTypes.string,
  saveBtnClass: PropTypes.string,
  cancelBtnClass: PropTypes.string,
  editBtnClass: PropTypes.string,
  formElemClass: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  needsSaveOnKeyPress: PropTypes.func,
  onClickEdit: PropTypes.func
}

Editable.defaultProps = {
  label: '',
  cancelLabel: 'Cancel',
  saveLabel: 'Save',
  editLabel: 'Edit',
  saveBtnClass: 'btn btn-warning',
  cancelBtnClass: 'btn btn-secondary',
  editBtnClass: 'btn btn-primary',
  needsSaveOnKeyPress: () => false
};
