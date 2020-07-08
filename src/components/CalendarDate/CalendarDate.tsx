import React, { MouseEvent, ReactElement, useMemo } from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules';

interface Props {
  today: Date;
  setSchedule: any;
}

const CalendarDate: React.FC<Props> = ({ today, setSchedule }) => {
  const { startDate } = useSelector((state: StoreState) => state.schedule);

  const isIdBefore = (id: string): boolean => {
    const startTime: number = new Date(startDate).getTime();
    const idTime: number = new Date(id).getTime();
    return idTime < startTime ? true : false;
  };

  const traceAndRemoveElHasClass = (e: HTMLElement) => {
    const nextEl: HTMLElement = (e.nextElementSibling as HTMLElement);
    if (nextEl === null) { return; }
    const clsList = nextEl.classList;
    if (!(clsList.value.match('between')
      || clsList.value.match('selected'))) {
      return;
    }
    clsList.remove('between');
    clsList.remove('selected');
    traceAndRemoveElHasClass(nextEl);
  };

  const traceElHasId = (e: HTMLElement, id: string) => {
    const prevEl: HTMLElement = (e.previousElementSibling as HTMLElement);
    const clsList = prevEl.classList;
    if (prevEl.dataset.id === id) { return; }
    if (clsList.contains('selected')) { clsList.remove('selected'); }
    clsList.add('between');
    traceElHasId(prevEl, id);
  };

  const addSelectedClass = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const { isondate } = e.currentTarget.dataset;
    if (isondate === 'no') { return; }
    target.classList.add('selected');
  };

  const onClickDateItem = (e: MouseEvent<HTMLDivElement>): void => {
    if (isIdBefore(e.currentTarget.dataset.id)) { return; }
    addSelectedClass(e);
    setSchedule(e);
    if (startDate === '') { return; }
    if (startDate !== e.currentTarget.dataset.id) {
      traceElHasId(e.currentTarget, startDate);
    }
    traceAndRemoveElHasClass(e.currentTarget);
  };

  const getDateHTML = (
    styling: string = '',
    children: number = 0,
    id: string = '',
    noDate: boolean,
  ): ReactElement => (
      <S.CalendarDate
        onClick={onClickDateItem}
        key={id}
        data-id={id}
        data-isondate={noDate ? 'no' : 'yes'}
        className={styling}
      >
        <S.CalendarDaySpan>{children ? children : ''}</S.CalendarDaySpan>
      </S.CalendarDate>
    );

  const setFixDayCount = (num: number): string =>
    num < 10 ? `0${num}` : `${num}`;

  const setCalendarData = (
    yearCopy: number,
    monthCopy: number,
  ): ReactElement[] => {
    const month: string = setFixDayCount(monthCopy);
    const lastDay: number = new Date(yearCopy, +month, 0).getDate();
    const firstDayName: number = new Date(yearCopy, +month - 1, 1).getDay();
    const calJSX: ReactElement[] = [];
    const prevLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    let startDayCount: number = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDayName) {
          calJSX.push(getDateHTML('prev', prevLastDay - (firstDayName - 1) + j, `${j}`, true));
        } else if (i > 0 && startDayCount <= lastDay) {
          calJSX.push(getDateHTML('month', startDayCount, `${yearCopy}-${month}-${setFixDayCount(startDayCount)}`, false));
          startDayCount += 1;
        }
      }
    }

    return calJSX;
  };

  const memoizedCalendar = useMemo<ReactElement[]>(
    () => setCalendarData(today.getFullYear(), today.getMonth() + 1),
    [setSchedule, today],
  );
  return <>{memoizedCalendar}</>;
};

export default CalendarDate;
