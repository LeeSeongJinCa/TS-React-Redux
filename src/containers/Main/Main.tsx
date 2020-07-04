import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Main } from '../../components';
import { InboxContainer, PreviewContainer } from '../../containers';
import { apiGetTodo } from '../../utils';
import { setTodoThunk, setTodos } from '../../modules/todo';

interface Props { }

const MainContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const initTodo = async () => {
    dispatch(setTodoThunk((await apiGetTodo()).data, setTodos));
  };

  useEffect(() => {
    initTodo();
  }, []);

  return (
    <Main>
      <PreviewContainer />
      <InboxContainer />
    </Main>
  );
};

export default MainContainer;
