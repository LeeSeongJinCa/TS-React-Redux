import React, {
  useMemo,
  ReactElement,
  Dispatch,
  MouseEvent,
} from 'react';
import * as S from './style';
import { IInputsType } from '../../static/todoForm';

interface Props {
  todoDispatch: Dispatch<IInputsType>;
}

const TodoCalendarDate: React.FC<Props> = ({
  todoDispatch,
}) => {
  const today: Date = new Date();

  const onClickDispatchTime = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
    const { id, no } = event.currentTarget.dataset;
    const timeId = new Date(id);
    console.log('no', no, 'id', id, 'timeId', timeId);
    if (no === 'no') return;
    todoDispatch({ type: 'time', time: timeId.getTime() });
  };

  const getDateHTML = (
    styling: string = '',
    children: number = 0,
    id: string = '',
    noDate?: boolean,
  ): any => (
      <S.CalendarDay
        onClick={onClickDispatchTime}
        key={id}
        data-id={id}
        data-no={noDate ? 'no' : 'yes'}
        className={`calendar__day ${styling}`}
      ><S.CalendarDaySpan>{children ? children : ''}</S.CalendarDaySpan>
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
          calJSX.push(getDateHTML('', 0, `${j}`, true));
        } else if (startDayCount >= firstDayThisWeek
          && startDayCount < firstDayThisWeek + 7
          && startDayCount <= lastDay) {
          if (startDayCount === todayCopy.getDate()) {
            calJSX.push(getDateHTML('week today', startDayCount, `${year}.${month}.${setFixDayCount(startDayCount)}`));
          } else {
            calJSX.push(getDateHTML('week', startDayCount, `${year}.${month}.${setFixDayCount(startDayCount)}`));
          }
          startDayCount += 1;
        } else if (i > 0 && startDayCount <= lastDay) {
          calJSX.push(getDateHTML('month', startDayCount, `${year}.${month}.${setFixDayCount(startDayCount)}`));
          startDayCount += 1;
        }
      }
    }

    return calJSX;
  };

  /* 
  // ? id 얻는 함수
  const getId = (id) => document.getElementById(id);

  // ! 선언 모음
  const today = new Date(),
    showDate = getId("calendar_show_date"),
    showLines = getId("calendar_show_lines");

  // ! About Calendar
  const getDateHTML = (styling = "", children = "", id = "") => {
    return (`<div class='${styling} calendar__day'>
      <span id='${id}'>${children}</span>
    </div>`);
  };
  const setFixDayCount = (number) => number < 10 ? `0${number}` : number;

  const setCalendarData = (year, copyMonth) => {
    const month = setFixDayCount(copyMonth);
    const firstDayName = new Date(year, month - 1, 1).getDay();
    const lastDay = new Date(year, month, 0).getDate();
    let calHtml = "";
    let startDayCount = 1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i == 0 && j < firstDayName) {
          calHtml += getDateHTML();
        } else if (i > 0 && startDayCount <= lastDay) {
          calHtml += getDateHTML("month", startDayCount, `${year}${month}${setFixDayCount(startDayCount++)}`);
        }
      }
    }

    const calendar = getId("calendar_show_date");
    calendar.innerHTML = calHtml;
    const todayDateEl = getId(`${year}${month}${today.getDate()}`);
    todayDateEl.parentNode.classList.add("today");
  };

  setCalendarData(today.getFullYear(), (today.getMonth() + 1));

  // ! About Schedule
  const getDateElParent = (date) => getId(date.split("-").join("")).parentNode,
    getDateTop = (date) => getDateElParent(date).offsetTop,
    getDateLeft = (date) => getDateElParent(date).offsetLeft,
    getDateWidth = (date) => getDateElParent(date).offsetWidth,
    getDateHeight = (date) => getDateElParent(date).offsetHeight;

  const addSchedule = (title, start, end) => {
    console.log(start, end);

    const startDate = new Date(start),
      endDate = new Date(end),
      computedStyle = getComputedStyle(showDate.childNodes[0]),
      calWidth = parseInt(computedStyle.width),
      calHeight = parseInt(computedStyle.height);

    console.log(calWidth, calHeight); // 각 요일의 width, height

    // ? 한줄
    if (getDateTop(start) === getDateTop(end)) {
      const topStart = `${(getDateTop(start) + (getDateHeight(start) - 20))}`,
        leftStart = getDateLeft(start),
        leftEnd = getDateLeft(end);
      const template = `<div
        data-start="${startDate.getTime()}"
        data-end="${endDate.getTime()}"
        class="cal_line cal_line_start cal_line_end"
        style="position: absolute; top: ${topStart}px; left: ${leftStart}px; width: ${((leftEnd - leftStart)) + (+calWidth)}px;"
      >${title}</div>`;

      showDate.insertAdjacentHTML("beforeend", template);
      return;
    }
    // ? 두줄
    console.log("간격 ", (getDateTop(end) - getDateTop(start)))
    if ((getDateTop(end) - getDateTop(start)) === 62) {
      console.log("eqweqwe");
      const topStart = `${(getDateTop(start) + (getDateHeight(start) - 20))}`;
      const topEnd = `${(getDateTop(end) + (getDateHeight(end) - 20))}`;
      const leftStart = getDateLeft(start);
      const leftEnd = getDateLeft(end);
      const calBodyWidth = parseInt(getComputedStyle(document.body).width);
      const template = `<div
        data-id="${startDate.getTime()}"
        class="cal_line cal_line_start"
        style="position: absolute; top: ${topStart}px; left: ${leftStart}px; width: ${calBodyWidth - leftStart}px;"
      >${title}</div>
      <div
        data-id="${endDate.getTime()}"
        class="cal_line cal_line_end"
        style="position: absolute; top: ${topEnd}px; left: 0; width: ${leftEnd + calWidth}px;"
      >${title}</div>`;
      // console.log(template);
      showDate.insertAdjacentHTML("beforeend", template);
    }

    // ? 세줄 이상

  };

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
    const startInput = document.getElementById("start").value;
    const endInput = document.getElementById("end").value;

    if (titleInput.trim() === "" || startInput === "" || endInput === "") {
      return alert("제목, 시작 날짜, 종료 날짜를 모두 입력해야 합니다.");
    }

    adding({ title: titleInput, start: startInput, end: endInput });
  });

  // adding({ title: "4", start: "2020-06-03", end: "2020-06-11" });
  adding({ title: "2", start: "2020-06-10", end: "2020-06-18" });
  // adding({ title: "1", start: "2020-06-16", end: "2020-06-23" });
  // adding({ title: "3", start: "2020-06-14", end: "2020-06-15" });

  // 예시 사이트
  https://dhtmlx.com/docs/products/dhtmlxScheduler/sample_recurring.shtml
  ! Point
  한줄 -> line, line_start, line_end가 한 번에 다 들어감
  두 줄 -> line_start, line_end만 나눔
  세 줄 이상 -> line, line_start, line_end를 다 나눠야 함

  */

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
