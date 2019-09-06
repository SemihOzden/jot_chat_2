/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

var tempDate = new Date();
var getHour = '';
if (Number(tempDate.getHours()) >= 13) {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
} else {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
}
// eslint-disable-next-line react/prop-types
export const YesNoMessages = ({ messages }) => {
  if (messages.toUpperCase() === 'YES') {
    return (
      <div className="incoming_msg">
        <div className="incoming_msg_img"> <img
          src="userSend.png"
          alt="sunil"
        />
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{messages}</p>

            <span className="time_date"> {getHour}</span>

          </div>
        </div>
      </div>
    );
  } else if (messages.toUpperCase() === 'NO') {
    return (
      <div>
        <div className="incoming_msg">
          <div className="incoming_msg_img"> <img
            src="userSend.png"
            alt="sunil"
                    />
          </div>
          <div className="received_msg">
            <div className="received_withd_msg">
              <p>{messages}</p>

              <span className="time_date"> {getHour}</span>

            </div>
          </div>
        </div>
        <div className="outgoing_msg" >
          <div className="outgoing_msg_img">
            <img src="jot_pencil.png" alt="pencil" />
          </div>
          <div className="sent_msg">
            <p>
                Thank you for your answer. Please refresh the page to fullfill the form.
            </p>
            <span className="time_date"> {getHour}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
};
