import React from 'react';
import { Route } from 'react-router-dom';
import {
  // NoticeContainer,
  // MypageContainer,
  // ApplyStayContainer,
  // ApplyExtensionContainer,
  MainContainer,
  TodoContainer,
} from './containers';

interface RoutingProps { }

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" render={MainContainer} exact={true} />
      <Route path="/todo" render={TodoContainer} exact={true} />
      {/* <Route path="/etc/notice" component={NoticeContainer} exact />
      <Route path="/etc/mypage" component={MypageContainer} exact />
      <Route path="/apply/stay" component={ApplyStayContainer} exact />
      <Route
        path="/apply/extension"
        component={ApplyExtensionContainer}
        exact
      /> */}
    </>
  );
};

export default Routing;
