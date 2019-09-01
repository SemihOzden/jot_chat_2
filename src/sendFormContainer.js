/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
class SendFormContainer extends Component {
  constructor(props) {
    super(props);
  }
    handleSendForm=() => {
      this.props.sendForm();
    }
    render() {
      if (this.props.saveFormQuestions.length === this.props.count) {
        return (
          <div className="sendForm">
            <input type="button" value="Send Form" onClick={this.handleSendForm} />
          </div>
        );
      }
      return '';
    }
}

const mapStateToProps = state => ({
  formId: state.formId,
  apiKey: state.apiKey,
  saveFormQuestions: state.saveFormQuestions,
  count: state.count,
  allMessages: state.allMessages,
  username: state.username,
  yesNoMessage: state.yesNoMessage
});
export default connect(mapStateToProps)(SendFormContainer);
