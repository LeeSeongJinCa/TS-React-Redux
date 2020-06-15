import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Routing from './Routing';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
