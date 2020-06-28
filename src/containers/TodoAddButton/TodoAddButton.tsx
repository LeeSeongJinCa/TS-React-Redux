import React from 'react';
import { TodoAddButton } from '../../components';

interface Props {
  postTodo: () => void;
}

const TodoAddButtonContainer: React.FC<Props> = ({
  postTodo,
}) => {
  return <TodoAddButton postTodo={postTodo} />;
};

export default TodoAddButtonContainer;
