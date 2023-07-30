import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={1500}
      // Other default options can be added here
      />
    </React.StrictMode>
  </Provider>
);

