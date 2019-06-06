import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { App } from './modules';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from '../src/store';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
