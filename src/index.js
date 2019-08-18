import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import * as serviceWorker from './serviceWorker';

const initialState={
    formId:'92112257961961',
    apiKey:'7fcefff03d226f77300b4f82a5311166',
    saveMessage:[],
    saveFormQuestions:[]
}

function reducer(state=initialState,action){
    switch(action.type){
        case "SAVE_MESSAGE":
            return {
                ...state,
                saveMessage:[...state.saveMessage,action.typeMessage]
            };
        case "SAVE_FORM_QUESTIONS":
            return{
                ...state,
                saveFormQuestions:action.formQuestion
            }

        default:
            return state
    }
}

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
