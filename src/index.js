/* eslint-disable react/prop-types */
/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProviderComponent from './providerComponent';

const initialState = {
  formId: '****Your jotform-form ID*****',
  apiKey: '****Your jotform-apiKey****',
  allMessages: [],
  saveFormQuestions: [],
  count: 0,
  username: '',
  yesNoMessage: '',
  sendingMessage: ''
};


ReactDOM.render(<ProviderComponent initialState={initialState} />, document.getElementById('root'));
