/* eslint-disable prefer-template */
import React from 'react';

// eslint-disable-next-line react/prop-types
var tempDate = new Date();
var getHour = '';
if (Number(tempDate.getHours()) >= 13) {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' PM';
} else {
  getHour = tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
}
// eslint-disable-next-line react/prop-types
export const IncomingMessages = ({ messages }) => (
  <div className="incoming_msg" key={messages.order}>
    <div className="incoming_msg_img"> <img
      src="userSend.png"
      alt="sunil"
    />
    </div>
    <div className="received_msg">
      <div className="received_withd_msg">
        <p>{messages.message}</p>

        <span className="time_date"> {getHour}</span>

      </div>
    </div>
  </div>
);
