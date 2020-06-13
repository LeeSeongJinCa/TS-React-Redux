import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
// import {
//   ChattingContainer,
//   SideBarContainer,
//   HeaderContainer,
//   ModalContainer,
// } from './containers';
import Routing from './Routing';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/*
      <MainWrapper>
      <SideBarContainer />
      <ChattingContainer />
      <ContentWrapper>
        <HeaderContainer />
        <ModalContainer />
        <Routing />
      </ContentWrapper>
      </MainWrapper>
    */}
      <Routing />
    </BrowserRouter>
  );
};

export default App;
