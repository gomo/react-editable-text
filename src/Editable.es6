import React from 'react';


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
  }

  onClickEdit(e){
    this.setState({editable: true});
    this.firstValue = this.state.value;
    this.refs.element.focus();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.value && this.props.value != nextProps.value){
      this.setState({
        value: nextProps.value
      });
    }
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

  back(){
    this.setState({
      editable: true,
      saving: false
    }); 
  }

  getInnerHtml(target, key){
    return {__html: target[key]}
  }

  onKeyPress(e){
    if(this.props.needsSaveOnKeyPress(e)){
      e.preventDefault();
      this.onClickSave(e);
      return false;
    }
  }

  onKeyUp(e){
    if(e.keyCode == 27){//ESCキー
      this.onClickCancel();
    }
  }
}

Editable.propTypes = {
  label: React.PropTypes.string,
  cancelLabel: React.PropTypes.string,
  saveLabel: React.PropTypes.string,
  editLabel: React.PropTypes.string,
  value: React.PropTypes.string,
  saveBtnClass: React.PropTypes.string,
  cancelBtnClass: React.PropTypes.string,
  editBtnClass: React.PropTypes.string,
  onSave: React.PropTypes.func.isRequired,
  needsSaveOnKeyPress: React.PropTypes.func
}

Editable.defaultProps = {
  label: '',
  cancelLabel: 'Cancel',
  saveLabel: 'Save',
  editLabel: 'Edit',
  saveBtnClass: 'btn btn-warning',
  cancelBtnClass: 'btn btn-default',
  editBtnClass: 'btn btn-primary',
  needsSaveOnKeyPress: () => false
};