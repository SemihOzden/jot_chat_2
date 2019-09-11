/* eslint-disable react/prop-types */
/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProviderComponent from './providerComponent';

const initialState = {
  formId: '92112257961961',
  apiKey: '7fcefff03d226f77300b4f82a5311166',
  allMessages: [],
  saveFormQuestions: [],
  count: 0,
  username: '',
  yesNoMessage: '',
  sendingMessage: '',
  getFormTitle: ''
};

ReactDOM.render(<ProviderComponent initialState={initialState} />, document.getElementById('root'));
