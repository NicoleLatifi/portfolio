import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { createStore } from 'redux'
import { rootReducer } from './store/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)