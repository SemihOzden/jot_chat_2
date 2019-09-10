/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

var tempDate = new Date();
var getHour = '';
if (Number(tempDate.getHours()) >= 13) {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
} else {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
}

class SendFormMessage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.sendingMessage !== '') {
    // eslint-disable-next-line no-console
      console.log('send Info message in sendFormMessage page', this.props.sendingMessage);
      return (
        <div className="outgoing_msg">
          <div className="outgoing_msg_img">
            <img src="jot_pencil.png" alt="pencil" />
          </div>
          <div className="sent_msg">
            <p>
              <span className="outgoing_msg_question">{this.props.sendingMessage}</span>
            </p>
            <span className="time_date">{getHour}</span>
          </div>
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
  yesNoMessage: state.yesNoMessage,
  sendingMessage: state.sendingMessage
});
export default connect(mapStateToProps)(SendFormMessage);
