/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom'; //
// import './index.css';
// import * as serviceWorker from './serviceWorker'; //
import ProviderComponent from './providerComponent';

const initialState = {
  formId: '92112257961961',
  apiKey: '7fcefff03d226f77300b4f82a5311166',
  allMessages: [],
  saveFormQuestions: [],
  count: 0,
  username: '',
  yesNoMessage: ''
};

/*
"main": "./lib/cjs/index.js",
  "module":"./lib/esm/index.js",
  */

// ***scripts */
// "build": "rollup -c rollup.config.js",
//     "prepublishOnly": "npm run build"

// class JotChat extends React.Component {
//   render() {
//     return (
//       <ProviderComponent initialState={initialState} />
//     );
//   }
// }
// export default JotChat;
ReactDOM.render(<ProviderComponent initialState={initialState} />, document.getElementById('root'));

// ReactDOM.render(
//   <ProviderComponent initialState={initialState} />
//   , document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register(); //
