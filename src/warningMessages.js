import React from 'react';

export const WarningMessages = ({ warnMessage }) => (
  <div className="outgoing_msg" key={`${warnMessage}a`}>
    <div className="outgoing_msg_img">
      <img src="jot_pencil.png" alt="pencil" />
    </div>
    <div className="sent_msg">
      <p>
        {warnMessage}
      </p>
      <span className="time_date"> 11:01 AM | June 9</span>
    </div>
  </div>
);

