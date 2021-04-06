import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HotelsContextProvider from './contexts/HotelsContext';


ReactDOM.render(

    <HotelsContextProvider>
    <App/>
    </HotelsContextProvider>,

  document.getElementById('root')
);

