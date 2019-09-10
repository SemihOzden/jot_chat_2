/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const WarningMessages = ({ sendWarningMessage }) => {
  if (sendWarningMessage) {
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnter={3000}
        transitionLeave={3000}
      >
        <div className="warningMessages">
          <p className="messageOnTheScreen">{sendWarningMessage}</p>
        </div>
      </ReactCSSTransitionGroup>
    );
  } else {
    return '';
  }
};

