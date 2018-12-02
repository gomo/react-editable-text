import React from 'react';
import Editable from './Editable'
import classNames from 'classnames'

export default class EditableBox extends Editable {
  render() {
    return (
      <div className="react-editable-text box">
        <div className="header d-flex justify-content-between align-items-center">
          <label className="mb-0" dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'label')}></label>
          <div className="buttons">
            {(() => {
              if(this.state.editable){
                return (
                  <div>
                    <button className={this.props.cancelBtnClass} onClick={(e) => {this.onClickCancel(e)}} dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'cancelLabel')}></button>
                    &nbsp;
                    <button className={this.props.saveBtnClass} onClick={(e) => {this.onClickSave(e)}} dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'saveLabel')}></button>
                  </div>
                )
              } else {
                return (<button className={this.props.editBtnClass} onClick={(e) => {this.onClickEdit(e)}} dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'editLabel')}></button>)
              }
            })()}
          </div>
        </div>
        <div className="body">
          <textarea
            onClick={(e) => this.onClickEdit(e)}
            onKeyDown={(e) => this.onKeyDown(e)}
            onKeyUp={(e) => this.onKeyUp(e)}
            onKeyPress={(e) => this.onKeyPress(e)}
            ref="element"
            className={classNames('form-control', this.props.formElemClass)}
            disabled={this.state.saving ? "disabled" : null} readOnly={this.state.editable ? null : "readOnly"}
            value={this.state.value}
            onChange={(e)=>{this.onChangeValue(e)}}
            style={this.props.textareaStyle}
          />
        </div>
      </div>
    );
  }
}

var defaultProps = {};
for(var key in Editable.defaultProps){
  defaultProps[key] = Editable.defaultProps[key];
}

defaultProps.saveBtnClass += ' btn-xs';
defaultProps.cancelBtnClass += ' btn-xs';
defaultProps.editBtnClass += ' btn-xs';

EditableBox.defaultProps = defaultProps;
