import React, { useState, useRef } from 'react';
import {
  TodoTableTypeInput,
  TodoTableTypeList,
} from '../../components';
import * as S from '../TodoTableRow/style';
import {
  selectList,
} from '../../static/selectForm';

interface Props {}

const TodoTableType: React.FC<Props> = () => {
  const [isSpreadOut, setSpreadOut] = useState(false);
  const [selectedType, setSelectedType] = useState('not');
  const shownImg: React.MutableRefObject<any> = useRef(null);

  const onClickSelectedType = (event: any) => {
    const { type, idx } = event.target.dataset;
    const baseData = selectList[idx].base64;
    setSelectedType(type);
    setSpreadOut(false);
    shownImg.current.src = baseData;
  };

  return (
    <S.TodoInputTableRow>
      <TodoTableTypeInput
        isSpreadOut={isSpreadOut}
        selectedType={selectedType}
        setSpreadOut={setSpreadOut}
      />
      <TodoTableTypeList
        isSpreadOut={isSpreadOut}
        onClickSelectedType={onClickSelectedType}
        shownImg={shownImg}
      />
    </S.TodoInputTableRow>
  );
};

export default TodoTableType;
