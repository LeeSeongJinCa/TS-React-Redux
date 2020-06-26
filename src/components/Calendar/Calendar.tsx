import React from 'react';
import { INCREMENT, DECREMENT } from '../../modules/counter';
import * as S from './style';

interface Props {
  count: number;
  setCounterNumber: any;
}

const Calendar: React.FC<Props> = ({ count, setCounterNumber }) => {
  return (
    <S.Calendar>
      <S.CalendarCount>
        숫자: <span>{count}</span>
      </S.CalendarCount>
      <S.CalendarBtn onClick={setCounterNumber} data-type={INCREMENT}>
        +
      </S.CalendarBtn>
      <S.CalendarBtn onClick={setCounterNumber} data-type={DECREMENT}>
        -
      </S.CalendarBtn>
    </S.Calendar>
  );
};

export default Calendar;
