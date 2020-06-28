import React, { MouseEvent, ReactElement, useMemo } from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules';

interface Props {
  today: Date;
  setSchedule: any;
}

const CalendarDate: React.FC<Props> = ({ today, setSchedule }) => {
  const { startDate, endDate } = useSelector((state: StoreState) => state.schedule);

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

  const getDateElParent = (e: HTMLElement) => e.parentElement;
  const getDateTop = (e: HTMLElement) => getDateElParent(e).offsetTop;
  const getDateLeft = (e: HTMLElement) => getDateElParent(e).offsetLeft;
  const getDateWidth = (e: HTMLElement) => getDateElParent(e).offsetWidth;
  const getDateHeight = (e: HTMLElement) => getDateElParent(e).offsetHeight;

  const addSchedule = (title: string, start: string, end: string) => {
    const starting: Date = new Date(start);
    const ending: Date = new Date(end);
    console.log(title, start, end);

    // start: '2020-06-20', end: '2020-06-22'
    // width: 80px, height: 80px

    // ? 한줄
    // if (getDateTop(start) === getDateTop(end)) {
    //   const topStart = `${(getDateTop(start) + (getDateHeight(start) - 20))}`,
    //     leftStart = getDateLeft(start),
    //     leftEnd = getDateLeft(end);
    //   const template = `<div
    //     data-start="${startDate.getTime()}"
    //     data-end="${endDate.getTime()}"
    //     class="cal_line cal_line_start cal_line_end"
    //     style="position: absolute; top: ${topStart}px; left: ${leftStart}px; width: ${((leftEnd - leftStart)) + (+calWidth)}px;"
    //   >${title}</div>`;

    //   showDate.insertAdjacentHTML("beforeend", template);
    //   return;
    // }
    // ? 두줄
    // if ((getDateTop(end) - getDateTop(start)) === 62) {
    //   const topStart = `${(getDateTop(start) + (getDateHeight(start) - 20))}`;
    //   const topEnd = `${(getDateTop(end) + (getDateHeight(end) - 20))}`;
    //   const leftStart = getDateLeft(start);
    //   const leftEnd = getDateLeft(end);
    //   const calBodyWidth = parseInt(getComputedStyle(document.body).width);
    //   const template = `<div
    //     data-id="${startDate.getTime()}"
    //     class="cal_line cal_line_start"
    //     style="position: absolute; top: ${topStart}px; left: ${leftStart}px; width: ${calBodyWidth - leftStart}px;"
    //   >${title}</div>
    //   <div
    //     data-id="${endDate.getTime()}"
    //     class="cal_line cal_line_end"
    //     style="position: absolute; top: ${topEnd}px; left: 0; width: ${leftEnd + calWidth}px;"
    //   >${title}</div>`;
    //   showDate.insertAdjacentHTML("beforeend", template);
    // }
    // ? 세줄 이상
  };
  /*
  ! About Schedule
  const addScheduleClosure = (callback) => {
    const arr = []
    return (value) => {
      arr.push(value);
      callback(value.title, value.start, value.end);
    };
  };
  const adding = addScheduleClosure(addSchedule);
  const clickButton = getId("click");
  clickButton.addEventListener("click", () => {
    const titleInput = document.getElementById("title").value;
    if (titleInput.trim() === '') {
      return alert("제목을 입력해야 합니다.");
    }
    adding({ title: titleInput, start: startInput, end: endInput });
  });
  adding({ title: "1", start: "2020-06-16", end: "2020-06-23" });

  ! 예시 사이트
  ? https://dhtmlx.com/docs/products/dhtmlxScheduler/sample_recurring.shtml
  */

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
    const realToday: Date = new Date();
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
