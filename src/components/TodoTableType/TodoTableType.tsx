import React, {
  useState,
  useRef,
  Dispatch,
} from 'react';
import {
  TodoTableTypeInput,
  TodoTableTypeList,
} from '../../components';
import * as S from '../TodoTableRow/style';
import {
  selectList,
} from '../../static/selectForm';
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

  const onClickSelectedType = (event: any) => {
    const { type, idx } = event.target.dataset;
    const baseData = selectList[idx].base64;
    todoDispatch({ type: 'typing', typing: type });
    setSpreadOut(false);
    shownImg.current.src = baseData;
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
