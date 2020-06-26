import React, {
  useMemo,
  Dispatch,
} from 'react';
import * as S from './style';
import {
  TodoTableRow,
  TodoTableType,
  Calendar,
} from '../../components';
import {
  todoInputList,
  IInputs,
  IInputsType,
} from '../../static/todoForm';

interface Props {
  todoState: IInputsType;
  todoDispatch: Dispatch<IInputsType>;
}

const TodoTable: React.FC<Props> = ({
  todoState,
  todoDispatch,
}) => {
  const tableRows: React.ReactElement[] = useMemo(() => {
    return todoInputList.map(({ id }: IInputs, i) =>
      <TodoTableRow
        key={id}
        type="text"
        id={id}
        todoState={todoState}
        todoDispatch={todoDispatch}
      />,
    );
  }, []);

  return (
    <S.TodoInputTable>
      <TodoTableType
        todoState={todoState}
        todoDispatch={todoDispatch}
      />
      {tableRows}
    </S.TodoInputTable>
  );
};

export default TodoTable;
