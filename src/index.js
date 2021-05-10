import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import HotelsContextProvider from './contexts/HotelsContext';


ReactDOM.render(
        <BrowserRouter basename="/react-hotel">
          <HotelsContextProvider>
          <App/>
          </HotelsContextProvider>
      </BrowserRouter>,
  document.getElementById('root')
);

