/* eslint-disable react/prop-types */
/* eslint-disable import/first */
import React from 'react';
import ProviderComponent from './providerComponent';

class JotChat extends React.Component {
  render() {
    const initialState = {
      formId: this.props.initialState.formId,
      apiKey: this.props.initialState.apiKey,
      allMessages: [],
      saveFormQuestions: [],
      count: 0,
      username: '',
      yesNoMessage: '',
      sendingMessage: '',
      getFormTitle: ''
    };
    return (
      <ProviderComponent initialState={initialState} />
    );
  }
}
export default JotChat;
