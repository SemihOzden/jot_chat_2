import React from 'react';

export const OutgoingMessages = ({ question }) => {
  if (question.type === 'control_datetime') {
    return (
      <div className="outgoing_msg" key={question.order}>
        <div className="outgoing_msg_img">
          <img src="jot_pencil.png" alt="pencil" />
        </div>
        <div className="sent_msg">
          <p>
            {`${question.text} Format: ${question.format}`}
          </p>
          <span className="time_date"> 11:01 AM | June 9</span>
        </div>
      </div>
    );
  } else if (question.type === 'control_dropdown') {
    const divideOptions = question.options.split('|');
    return (
      <div className="outgoing_msg" key={question.order}>
        <div className="outgoing_msg_img">
          <img src="jot_pencil.png" alt="pencil" />
        </div>
        <div className="sent_msg">
          <p key={question.order}>
            {question.text}<br />
            {divideOptions.map((item) => {
                                return (<p className="options_P" key={item}>Type {divideOptions.indexOf(item)} for: {item}</p>);
                            })}
          </p>
          <span className="time_date"> 11:01 AM | June 9</span>
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
            {question.text}<br />
            {divideOptions.map((item) => {
                                return (<p className="options_P" key={item}>Type {divideOptions.indexOf(item)} for: {item}</p>);
                            })}
          </p>
          <span className="time_date"> 11:01 AM | June 9</span>
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
            {question.text}<br />
            {divideOptions.map((item) => {
                                return (<p className="options_P" key={item}>Type {divideOptions.indexOf(item)} for: {item}</p>);
                            })}
          </p>
          <span className="time_date"> 11:01 AM | June 9</span>
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
          {question.text}

          {/* <input type="button"value="Yes"/>
                            <input type="button"value="No"/> */}
        </p>
        <span className="time_date"> 11:01 AM | June 9</span>
      </div>
    </div>
  );
};
