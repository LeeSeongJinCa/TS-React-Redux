import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Routing from './Routing';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
