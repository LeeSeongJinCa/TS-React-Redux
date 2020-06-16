import React from 'react';
import {
  Todo,
} from '../../components';
import {
  TodoHeaderContainer,
  TodoMainContainer,
  TodoAddButtonContainer,
} from '../../containers';

interface Props {}

const TodoContainer: React.FC<Props> = () => {
  return (
    <Todo>
      <TodoHeaderContainer />
      <TodoMainContainer />
      <TodoAddButtonContainer />
    </Todo>
  );
};

export default TodoContainer;
