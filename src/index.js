/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import update from 'immutability-helper';

const initialState = {
  formId: '92112257961961',
  apiKey: '7fcefff03d226f77300b4f82a5311166',
  allMessages: [],
  saveFormQuestions: [],
  count: 0,
  username: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_MESSAGE':
      return {
        ...state,
        allMessages: [...state.allMessages, action.nexFormQuestion]

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
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}> <App /></Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
