import React, {
  useMemo,
  ReactElement,
} from 'react';
import * as S from './style';

interface Props { }

const TodoCalendarDate: React.FC<Props> = () => {
  const today: Date = new Date();

  const getDateHTML = (
    styling: string = '',
    children: number = 0,
    id: string = '',
  ): any => (
      <S.CalendarDay key={id} className={`calendar__day ${styling}`}>
        <S.CalendarDaySpan id={id}>{children ? children : ''}</S.CalendarDaySpan>
      </S.CalendarDay>
    );

  const setFixDayCount = (num: number): string => num < 10 ? `0${num}` : `${num}`;

  const setCalendarData = (todayCopy: Date, year: number, copyMonth: number): ReactElement[] => {
    const month: string = setFixDayCount(copyMonth),
      lastDay: number = new Date(year, +month, 0).getDate(),
      firstDayName: number = new Date(year, +month - 1, 1).getDay(),
      firstDayThisWeek: number = todayCopy.getDate() - todayCopy.getDay(),
      calJSX: ReactElement[] = [];
    let startDayCount: number = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDayName) {
          calJSX.push(getDateHTML('', 0, `${j}`));
        } else if (startDayCount >= firstDayThisWeek
          && startDayCount < firstDayThisWeek + 7
          && startDayCount <= lastDay) {
          if (startDayCount === todayCopy.getDate()) {
            calJSX.push(getDateHTML('week today', startDayCount, `${year}${month}${setFixDayCount(startDayCount)}`));
          } else {
            calJSX.push(getDateHTML('week', startDayCount, `${year}${month}${setFixDayCount(startDayCount)}`));
          }
          startDayCount += 1;
        } else if (i > 0 && startDayCount <= lastDay) {
          calJSX.push(getDateHTML('month', startDayCount, `${year}${month}${setFixDayCount(startDayCount)}`));
          startDayCount += 1;
        }
      }
    }

    return calJSX;
  };

  const memoizedCalendar = useMemo<ReactElement[]>(
    () => setCalendarData(today, today.getFullYear(), (today.getMonth() + 1))
    , []);


  return (
    <>
      {memoizedCalendar}
    </>
  );
};

export default TodoCalendarDate;
