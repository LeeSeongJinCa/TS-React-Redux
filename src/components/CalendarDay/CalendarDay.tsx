import React, { useMemo } from 'react';
import * as S from './style';

interface Props {
  today: Date;
  setSchedule: any;
}

const CalendarDay: React.FC<Props> = () => {
  const setCalendarDay = useMemo(() => {
    const dayArr: string[] = ['일', '월', '화', '수', '목', '금', '토'],
      dayJsx = dayArr.map((id: string) => (
        <S.CalendarDay className="by" key={id}>
          <S.CalendarDaySpan>{id}</S.CalendarDaySpan>
        </S.CalendarDay>
      ));
    return dayJsx;
  }, []);

  return <>{setCalendarDay}</>;
};

export default CalendarDay;
