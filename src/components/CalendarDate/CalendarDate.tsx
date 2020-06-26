import React, { MouseEvent, ReactElement, useMemo } from 'react';
import * as S from './style';

interface Props {
  today: Date;
  setSchedule: any;
}

const CalendarDate: React.FC<Props> = ({ today, setSchedule }) => {
  const testEl = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const { isondate } = target.dataset;
    if (isondate === 'no') return;
    target.classList.add('selected');
  };

  const onClickDateItem = (e: MouseEvent<HTMLDivElement>): void => {
    testEl(e);
    setSchedule(e);
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
      className={`calendar__day ${styling}`}
    >
      <S.CalendarDaySpan>{children ? children : ''}</S.CalendarDaySpan>
    </S.CalendarDate>
  );

  const setFixDayCount = (num: number): string =>
    num < 10 ? `0${num}` : `${num}`;

  const setCalendarData = (
    todayCopy: Date,
    year: number,
    copyMonth: number,
  ): ReactElement[] => {
    const month: string = setFixDayCount(copyMonth);
    const lastDay: number = new Date(year, +month, 0).getDate();
    const firstDayName: number = new Date(year, +month - 1, 1).getDay();
    // const firstDayThisWeek: number = todayCopy.getDate() - todayCopy.getDay();
    const calJSX: ReactElement[] = [];
    let startDayCount: number = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDayName) {
          calJSX.push(getDateHTML('', 0, `${j}`, true));
          break;
        }
        if (i > 0 && startDayCount <= lastDay) {
          if (startDayCount === todayCopy.getDate()) {
            calJSX.push(
              getDateHTML(
                'today',
                startDayCount,
                `${year}-${month}-${setFixDayCount(startDayCount)}`,
                false,
              ),
            );
          } else {
            calJSX.push(
              getDateHTML(
                'month',
                startDayCount,
                `${year}-${month}-${setFixDayCount(startDayCount)}`,
                false,
              ),
            );
          }
        }
        startDayCount += 1;
      }
    }

    return calJSX;
  };

  const getDateElParent = (date: string) => document.body;
  const getDateTop = (date: string) => getDateElParent(date).offsetTop;
  const getDateLeft = (date: string) => getDateElParent(date).offsetLeft;
  const getDateWidth = (date: string) => getDateElParent(date).offsetWidth;
  const getDateHeight = (date: string) => getDateElParent(date).offsetHeight;

  const addSchedule = (title: string, start: string, end: string) => {
    const startDate: Date = new Date(start),
      endDate: Date = new Date(end);

    // start: '2020-06-20', end: '2020-06-22'
    // width: 80px, height: 70px

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

  const memoizedCalendar = useMemo<ReactElement[]>(
    () => setCalendarData(today, today.getFullYear(), today.getMonth() + 1),
    [],
  );
  return <>{memoizedCalendar}</>;
};

export default CalendarDate;
