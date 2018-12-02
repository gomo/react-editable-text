import React from 'react';
import Editable from './Editable'
import classNames from 'classnames'

export default class EditableLine extends Editable {
  render() {
    return (
      <div className="input-group react-editable-text line">
        <div className="input-group-prepend">
          {(() => {
            if(this.state.editable){
              return (
                <button className={this.props.cancelBtnClass} type="button" onClick={(e) => {this.onClickCancel(e)}} dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'cancelLabel')}></button>
              );
            } else if(this.props.label){
              return (
                <span className="input-group-text" dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'label')}></span>
              );
            }
          })()}
        </div>
        <input onClick={(e) => this.onClickEdit(e)} onKeyDown={(e) => this.onKeyDown(e)} onKeyUp={(e) => this.onKeyUp(e)} onKeyPress={(e) => this.onKeyPress(e)} type="text" ref="element" className={classNames('form-control', this.props.formElemClass)} disabled={this.state.saving ? "disabled" : null} readOnly={this.state.editable ? null : "readOnly"} value={this.state.value} onChange={(e)=>{this.onChangeValue(e)}} />
        <div className="input-group-append">
        {(() => {
          if(this.state.editable){
            return (
              <button className={this.props.saveBtnClass} type="button" onClick={(e) => {this.onClickSave(e)}} dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'saveLabel')}></button>
            )
          } else {
            return (
              <button className={this.props.editBtnClass} type="button" onClick={(e) => {this.onClickEdit(e)}} dangerouslySetInnerHTML={this.getInnerHtml(this.props, 'editLabel')}></button>
            )
          }
        })()}
        </div>
      </div>
    );
  }
}