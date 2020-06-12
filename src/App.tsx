import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
// import {
//   ChattingContainer,
//   SideBarContainer,
//   HeaderContainer,
//   ModalContainer,
// } from './containers';
// import Routing from './Routing';

function App() {
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
      <div>first</div>
    </BrowserRouter>
  );
}

export default App;
