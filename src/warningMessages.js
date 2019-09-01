/* eslint-disable react/prop-types */
import React from 'react';

export const WarningMessages = ({ warnMessage }) => (
  <div className="outgoing_msg">
    <div className="sent_msg">
      <p>
        {warnMessage}
      </p>
    </div>
  </div>
);

