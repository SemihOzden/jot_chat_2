/* eslint-disable prefer-template */
import React from 'react';
import { connect } from 'react-redux';
import JotPencil from './jot_pencil.png';

var tempDate = new Date();
var getHour = '';
if (Number(tempDate.getHours()) >= 13) {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
} else {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
}
class FinishMessage extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    if (this.props.saveFormQuestions.length === this.props.count) {
      return (
        <div className="outgoing_msg">
          <div className="outgoing_msg_img">
            <img src={JotPencil} alt="pencil" />
          </div>
          <div className="sent_msg">
            <p>
              <span className="outgoing_msg_question"> You fulfilled the form. Please click Send Form button to send the form.</span>
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
  yesNoMessage: state.yesNoMessage
});

export default connect(mapStateToProps)(FinishMessage);

