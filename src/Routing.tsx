import React from 'react';
import { Route } from 'react-router-dom';
import {
  MainContainer,
  TodoContainer,
  MovieContainer,
} from './containers';

interface RoutingProps { }

const Routing: React.StatelessComponent<RoutingProps> = () => {
  return (
    <>
      <Route path="/" component={MainContainer} exact={true} />
      <Route path="/todo" component={TodoContainer} />
      <Route path="/movie" component={MovieContainer} />
    </>
  );
};

export default Routing;
