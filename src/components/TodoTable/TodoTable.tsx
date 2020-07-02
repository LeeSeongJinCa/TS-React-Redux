import React, {
  useMemo,
  Dispatch,
  ReactElement,
} from 'react';
import * as S from './style';
import {
  TodoTableRow,
  TodoTableType,
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
  const tableRows: ReactElement[] = useMemo(() => {
    return todoInputList.map(({ id }: IInputs) =>
      <TodoTableRow
        key={id}
        type="text"
        id={id}
        todoState={todoState}
        todoDispatch={todoDispatch}
      />,
    );
  }, [todoState]);

  const typeRows: ReactElement = useMemo(() => {
    return (<TodoTableType
      todoState={todoState}
      todoDispatch={todoDispatch}
    />);
  }, [todoState]);

  return (
    <S.TodoInputTable>
      {typeRows}
      {tableRows}
    </S.TodoInputTable>
  );
};

export default TodoTable;
