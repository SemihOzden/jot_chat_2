/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

export const WarningMessages = ({ sendWarningMessage }) => {
  if (sendWarningMessage) {
    return (
      <div className="warningMessages">
        <p className="messageOnTheScreen">{sendWarningMessage}</p>
      </div>
    );
  } else {
    return '';
  }
};

