import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Routing from './Routing';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
