import React from 'react';
import { Route } from 'react-router-dom';
import {
  MainContainer,
  TodoContainer,
} from './containers';

interface RoutingProps { }

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" render={MainContainer} exact={true} />
      <Route path="/todo" render={TodoContainer} />
    </>
  );
};

export default Routing;
