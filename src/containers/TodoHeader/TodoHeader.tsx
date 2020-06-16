import React, { useState } from 'react';
import { TodoHeader } from '../../components';

interface Props {
  imgRef: React.MutableRefObject<any>;
}

const TodoHeaderContainer: React.FC<Props> = ({ imgRef }) => {
  const [test, setTest] = useState(null);
  return <TodoHeader imgRef={imgRef} />;
};

export default TodoHeaderContainer;
