import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store';
import { Provider } from 'react-redux';
import App from "./components/App";
import RonyTest from "./components/RonyTest"

// create the store with function exported from reducers file:

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RonyTest />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
