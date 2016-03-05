import React from 'react';


export default class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lable: "",
      editable: false,
      value: this.props.initialValue,
      saving: false
    };

    this.firstValue;
  }

  onClickEdit(e){
    this.setState({editable: true});
    this.firstValue = this.state.value;
    this.refs.element.focus();
  }

  onClickCancel(){
    this.setState({
      editable: false,
      value: this.firstValue
    });
  }

  onChangeValue(e){
    this.setState({value: e.target.value});
  }

  onClickSave(e){
    if(this.firstValue == this.state.value){
      this.fix();
    } else {
      this.setState({saving: true});
      this.props.onSave(this.state.value, this);      
    }

    e.target.blur();
  }

  fix(){
    this.setState({
      editable: false,
      saving: false
    });
  }

  getInnerHtml(target, key){
    return {__html: target[key]}
  }
}

Editable.propTypes = {
  label: React.PropTypes.string,
  cancelLabel: React.PropTypes.string,
  saveLabel: React.PropTypes.string,
  editLabel: React.PropTypes.string,
  initialValue: React.PropTypes.string,
  saveBtnClass: React.PropTypes.string,
  cancelBtnClass: React.PropTypes.string,
  editBtnClass: React.PropTypes.string,
  onSave: React.PropTypes.func.isRequired
}

Editable.defaultProps = {
  label: '',
  cancelLabel: 'Cancel',
  saveLabel: 'Save',
  editLabel: 'Edit',
  saveBtnClass: 'btn btn-warning',
  cancelBtnClass: 'btn btn-default',
  editBtnClass: 'btn btn-primary',
};