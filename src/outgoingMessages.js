/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
import React from 'react';

export const OutgoingMessages = ({ question }) => {
  var tempDate = new Date();
  // eslint-disable-next-line prefer-template
  var getHour = '';
  if (Number(tempDate.getHours()) >= 13) {
    getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
  } else {
    getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
  }

  if (question.type === 'control_datetime') {
    if (question.format === 'mmddyyyy') {
      return (
        <div className="outgoing_msg" key={question.order}>
          <div className="outgoing_msg_img">
            <img src="jot_pencil.png" alt="pencil" />
          </div>
          <div className="sent_msg">
            <p>
              <span className="outgoing_msg_question">{`${question.text} Format: MM-DD-YYYY`}</span>
            </p>
            <span className="time_date"> {getHour}</span>
          </div>
        </div>
      );
    } else if (question.format === 'ddmmyyyy') {
      return (
        <div className="outgoing_msg" key={question.order}>
          <div className="outgoing_msg_img">
            <img src="jot_pencil.png" alt="pencil" />
          </div>
          <div className="sent_msg">
            <p>
              <span className="outgoing_msg_question">{`${question.text} Format: DD-MM-YYYY`}</span>
            </p>
            <span className="time_date"> {getHour}</span>
          </div>
        </div>
      );
    } else if (question.format === 'yyyymmdd') {
      return (
        <div className="outgoing_msg" key={question.order}>
          <div className="outgoing_msg_img">
            <img src="jot_pencil.png" alt="pencil" />
          </div>
          <div className="sent_msg">
            <p>
              <span className="outgoing_msg_question">{`${question.text} Format: YYYY-MM-DD`}</span>
            </p>
            <span className="time_date"> {getHour}</span>
          </div>
        </div>
      );
    }
  } else if (question.type === 'control_dropdown') {
    const divideOptions = question.options.split('|');
    return (
      <div className="outgoing_msg" key={question.order}>
        <div className="outgoing_msg_img">
          <img src="jot_pencil.png" alt="pencil" />
        </div>
        <div className="sent_msg">
          <p key={question.order}>
            <span className="outgoing_msg_question">{question.text}</span><br />
            {divideOptions.map((item) => {
                                return (<p className="options_P" key={item}>Type {divideOptions.indexOf(item)} for: {item}</p>);
                            })}
          </p>
          <span className="time_date"> {getHour}</span>
        </div>
      </div>
    );
  } else if (question.type === 'control_radio') {
    const divideOptions = question.options.split('|');
    return (
      <div className="outgoing_msg" key={question.order}>
        <div className="outgoing_msg_img">
          <img src="jot_pencil.png" alt="pencil" />
        </div>
        <div className="sent_msg">
          <p key={question.order}>
            <span className="outgoing_msg_question"> {question.text} </span><br />
            {divideOptions.map((item) => {
                                return (<p className="options_P" key={item}>Type {divideOptions.indexOf(item)} for: {item}</p>);
                            })}
          </p>
          <span className="time_date"> {getHour}</span>
        </div>
      </div>
    );
  } else if (question.type === 'control_checkbox') {
    const divideOptions = question.options.split('|');
    return (
      <div className="outgoing_msg" key={question.order}>
        <div className="outgoing_msg_img">
          <img src="jot_pencil.png" alt="pencil" />
        </div>
        <div className="sent_msg">
          <p key={question.order}>
            <span className="outgoing_msg_question">{question.text}</span>
            <span className="checkMultipleSelection">(,) for multiple selection </span><br />
            {divideOptions.map((item) => {
                                return (<p className="options_P" key={item}>Type {divideOptions.indexOf(item)} for: {item}</p>);
                            })}
          </p>
          <span className="time_date"> {getHour}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="outgoing_msg" key={question.order}>
      <div className="outgoing_msg_img">
        <img src="jot_pencil.png" alt="pencil" />
      </div>
      <div className="sent_msg">
        <p>
          <span className="outgoing_msg_question">{question.text}</span>

          {/* <input type="button"value="Yes"/>
                            <input type="button"value="No"/> */}
        </p>
        <span className="time_date"> {getHour}</span>
      </div>
    </div>
  );
};
