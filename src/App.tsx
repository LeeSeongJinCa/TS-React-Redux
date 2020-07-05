import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Routing from './Routing';
import { useDispatch } from 'react-redux';

import { fetchInitTodo } from './modules/todo';
import { fetchGenreThunk } from './modules/movie';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitTodo());
    dispatch(fetchGenreThunk());
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
