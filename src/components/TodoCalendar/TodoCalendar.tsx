import React, { Dispatch } from 'react';
import * as S from './style';
import {
  TodoCalendarDay,
  TodoCalendarDate,
} from '../../components';
import { IInputsType } from '../../static/todoForm';

interface Props {
  todoDispatch: Dispatch<IInputsType>;
}

const TodoCalendar: React.FC<Props> = ({
  todoDispatch,
}) => {
  return (
    <S.Calendar>
      <TodoCalendarDay />
      <TodoCalendarDate todoDispatch={todoDispatch} />
    </S.Calendar>
  );
};

export default TodoCalendar;
