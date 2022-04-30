import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/fonts.css';
import './assets/css/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = 'https://data.covid19.go.id/public/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = '*/*';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
