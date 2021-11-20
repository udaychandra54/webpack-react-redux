import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import store from './store/store';
import {Provider} from 'react-redux'

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
     <App/>
     </Provider>
    </BrowserRouter>
   ,
    document.getElementById('root')
)

if (module.hot) {
    // Accept hot update
    module.hot.accept();
  }