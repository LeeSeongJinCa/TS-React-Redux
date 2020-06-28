import React, {
  Dispatch,
  MouseEvent,
} from 'react';
import * as S from './style';
import {
  IInputsType,
} from '../../static/todoForm';
import {
  cancelSvg,
} from '../../assets';

interface Props {
  id: string;
  todoDispatch: Dispatch<IInputsType>;
}

const TodoTableRowImg: React.FC<Props> = ({
  id,
  todoDispatch,
}) => {
  const onClickCancel = () => {
    todoDispatch({ type: id, [id]: '' });
  };

  return (
    <S.TodoInputTableRowImg
      src={cancelSvg}
      alt="cancle"
      title="cancle"
      onClick={onClickCancel}
    />
  );
};

export default TodoTableRowImg;
