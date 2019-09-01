/* eslint-disable no-else-return */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

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

            <span className="time_date"> 11:01 AM | June 9</span>

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

              <span className="time_date"> 11:01 AM | June 9</span>

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
            <span className="time_date"> 11:01 AM | June 9</span>
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
};
