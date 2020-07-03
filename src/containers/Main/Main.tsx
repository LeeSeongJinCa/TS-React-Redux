import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Main } from '../../components';
import { InboxContainer, PreviewContainer } from '../../containers';
import { GetIInput } from '../../static/todoForm';
import { apiGetTodo } from '../../utils';

interface Props {}

const MainContainer: React.FC<Props> = () => {
  const [inputs, setInputs]: [
    GetIInput[],
    Dispatch<SetStateAction<GetIInput[]>>,
  ] = useState([]);

  const getTodo = async () => {
    setInputs((await apiGetTodo()).data);
  };
  const setTodo = (setValue: GetIInput[]) => {
    setInputs(setValue);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <Main>
      <PreviewContainer inputs={inputs} />
      <InboxContainer inputs={inputs} getTodo={getTodo} setTodo={setTodo} />
    </Main>
  );
};

export default MainContainer;
