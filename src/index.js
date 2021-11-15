import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {users} from './mocks/mocks.json';
//import {Router, Switch, BrowserRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';


const init = (data) =>{
  //const api = createApi();
  const store = createStore(reducer);
  
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App data = {data}/>
      </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root'));
};

init(users);





 
