import React from 'react';
import {
  Todo,
} from '../../components';
import {
  TodoHeaderContainer,
  TodoMainContainer,
  TodoAddButtonContainer,
  CalendarContainer,
} from '../../containers';

interface Props {}

const TodoContainer: React.FC<Props> = () => {
  return (
    <Todo>
      <TodoHeaderContainer />
      <TodoMainContainer />
      <CalendarContainer />
      <TodoAddButtonContainer />
    </Todo>
  );
};

export default TodoContainer;
