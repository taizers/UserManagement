import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer, Operation } from './reducer';
import thunk from 'redux-thunk';
import createApi from './api';

//данные с сервера в createStore передать вторым параметром данные

const init = () => {
  const api = createApi();
  const store = createStore(reducer,applyMiddleware(thunk.withExtraArgument(api)));

  store.dispatch(Operation.loadData(1));

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





 
