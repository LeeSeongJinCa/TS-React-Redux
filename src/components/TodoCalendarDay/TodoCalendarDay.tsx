import React, {
  useMemo,
} from 'react';
import * as S from './style';

interface Props { }

const TodoCalendarDay: React.FC<Props> = ({ }) => {
  const setCalendarDayData = useMemo(() => {
    const dayArr: string[] = ['일', '월', '화', '수', '목', '금', '토'],
      dayJsx = dayArr.map(id => (
        <S.CalendarDay className="by" key={id}>
          <S.CalendarDaySpan>{id}</S.CalendarDaySpan>
        </S.CalendarDay>),
      );
    return dayJsx;
  }, []);

  return (
    <>
      {setCalendarDayData}
    </>
  );
};

export default TodoCalendarDay;
