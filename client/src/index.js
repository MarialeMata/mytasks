import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';  
import registerServiceWorker from './registerServiceWorker';
import history from './utils/history';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();
