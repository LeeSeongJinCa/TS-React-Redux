import React, {
  Dispatch,
  SetStateAction,
} from 'react';
import * as S from './style';
import {
  IInputsType,
} from '../../static/todoForm';

interface Props {
  setSpreadOut: Dispatch<SetStateAction<boolean>>;
  isSpreadOut: boolean;
  todoState: IInputsType;
}

const TodoTableTypeInput: React.FC<Props> = ({
  setSpreadOut,
  isSpreadOut,
  todoState,
}) => {
  const { typing } = todoState;

  const onClickSpreadOut = () => {
    setSpreadOut(!isSpreadOut);
  };

  return (
    <S.TodoInputTableRowSeletedType onClick={onClickSpreadOut}>
      {typing}
    </S.TodoInputTableRowSeletedType>
  );
};

export default TodoTableTypeInput;
