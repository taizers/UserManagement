import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer, ActionCreators } from './reducer';
import createSagaMiddleware from '@redux-saga/core';
import { watchFetchData, watchPushData } from './reducer';
import { START_PAGE } from './consts';

const init = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer,applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchFetchData);
  sagaMiddleware.run(watchPushData);
  store.dispatch(ActionCreators.FETCHED_DATA(START_PAGE));

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root'));
};

init();





 
