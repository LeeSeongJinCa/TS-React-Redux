import React from 'react';
import * as S from './style';
import {
  TodoCalendarDay,
  TodoCalendarDate,
} from '../../components';

interface Props {}

const TodoCalendar: React.FC<Props> = () => {
  return (
    <S.Calendar>
      <TodoCalendarDay />
      <TodoCalendarDate />
    </S.Calendar>
  );
};

export default TodoCalendar;
