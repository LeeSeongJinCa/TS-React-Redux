import React from 'react';
import * as S from './style';

interface Props {
  selectedType: boolean;
  setSpreadOut: React.Dispatch<React.SetStateAction<boolean>>;
  isSpreadOut: boolean;
}

const TodoTableTypeInput: React.FC<Props> = ({ selectedType, setSpreadOut, isSpreadOut }) => {
  const onClickSpreadOut = () => {
    setSpreadOut(!isSpreadOut);
  };

  return (
    <S.TodoInputTableRowSeletedType onClick={onClickSpreadOut}>
      {selectedType}
    </S.TodoInputTableRowSeletedType>
  );
};

export default TodoTableTypeInput;
