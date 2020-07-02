import React, {
  useState,
  useRef,
  Dispatch,
  MouseEvent,
  useMemo,
} from 'react';

import {
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  notSvg,
} from '../../assets';
import {
  TodoTableTypeInput,
  TodoTableTypeList,
} from '../../components';
import * as S from '../TodoTableRow/style';
import {
  IInputsType,
} from '../../static/todoForm';

interface Props {
  todoState: IInputsType;
  todoDispatch: Dispatch<IInputsType>;
}

const TodoTableType: React.FC<Props> = ({
  todoState,
  todoDispatch,
}) => {
  const [isSpreadOut, setSpreadOut] = useState(false);
  const shownImg: React.MutableRefObject<any> = useRef(null);
  const imgMap = useMemo(() => new Map([
    ['not', notSvg],
    ['study', pencilSvg],
    ['music', musicSvg],
    ['sports', sportsSvg],
    ['business', businessSvg],
  ]), []);

  const onClickSelectedType = (event: MouseEvent<HTMLLIElement>) => {
    const { type } = event.currentTarget.dataset;
    todoDispatch({ type: 'typing', typing: type });
    setSpreadOut(false);
    shownImg.current.src = imgMap.get(type);
  };

  return (
    <S.TodoInputTableRow>
      <TodoTableTypeInput
        isSpreadOut={isSpreadOut}
        todoState={todoState}
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
