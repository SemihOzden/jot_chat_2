/* eslint-disable import/first */
import React, { Component } from 'react';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import update from 'immutability-helper';
import { Provider } from 'react-redux';

class ProviderComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line react/prop-types
  reducer = (state = this.props.initialState, action) => {
    switch (action.type) {
      case 'SAVE_MESSAGE':
        return {
          ...state,
          allMessages: [...state.allMessages, action.nexFormQuestion]

        };
      case 'SEND_FORM_INFO':
        return {
          ...state,
          sendingMessage: action.sendingMessage
        };
      case 'YESNO_MESSAGE':
        return {
          ...state,
          yesNoMessage: action.yesOrNoMessage
        };
      case 'SAVE_FORM_QUESTIONS':
        return {
          ...state,
          saveFormQuestions: [...state.saveFormQuestions, action.formQuestion]
        };
      case 'UPDATE_QUESTIONS_MESSAGE':
        const allMessagesLastIndex = state.allMessages.indexOf(state.allMessages[state.allMessages.length - 1]);
        return update(state, {
          allMessages: {
            [allMessagesLastIndex]: {
              message: { $set: action.message }
            }
          },
          count: {
            $set: state.count + 1
          }

        });
      case 'SAVE_USERNAME':
        return {
          ...state,
          username: action.getUsername
        };
      case 'UPDATE_COUNT_IN_NEXT_QUES':
        return update(state, {
          count: {
            $set: action.comingCount + 2
          }
        });

      default:
        return state;
    }
  };

  render() {
    const store = createStore(this.reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    );
  }
}

export default ProviderComponent;

