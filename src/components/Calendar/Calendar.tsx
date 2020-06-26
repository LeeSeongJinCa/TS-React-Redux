import React, {
  useMemo,
  ReactElement,
  MouseEvent,
  Dispatch,
  useState,
  useRef,
  SetStateAction,
  MutableRefObject,
  useEffect,
} from 'react';
import * as S from './style';
import { ScheduleState } from '../../modules/schedule';
import { IInputsType } from '../../static/todoForm';

interface Props {
  schedule: ScheduleState;
  setSchedule: () => void;
}

const Calendar: React.FC<Props> = ({ schedule, setSchedule }) => {
  const today: Date = new Date();

  const diaptchTime = (e: MouseEvent<HTMLDivElement>) => {
    const { id, isondate } = e.currentTarget.dataset;
  };

  const testEl = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const { id, isondate } = target.dataset;
    if (isondate === 'no') return;
    console.log(id);
    target.classList.add('selected');
  };

  const onClickDateItem = (e: MouseEvent<HTMLDivElement>): void => {
    diaptchTime(e);
    testEl(e);
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

  // const addScheduleClosure = (callback) => {
  //   const arr = [];
  //   return (value) => {
  //     arr.push(value);
  //     callback(value.title, value.start, value.end);
  //   };
  // };

  // const adding = addScheduleClosure(addSchedule);
  // const clickButton = getId('click');
  // clickButton.addEventListener('click', () => {
  //   const titleInput = document.getElementById('title').value;
  //   const startInput = document.getElementById('start').value;
  //   const endInput = document.getElementById('end').value;

  //   if (titleInput.trim() === '' || startInput === '' || endInput === '') {
  //     return alert('제목, 시작 날짜, 종료 날짜를 모두 입력해야 합니다.');
  //   }

  //   adding({ title: titleInput, start: startInput, end: endInput });
  // });

  // adding({ title: '2', start: '2020-06-10', end: '2020-06-18' });

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
    const startInput = document.getElementById("start").value;
    const endInput = document.getElementById("end").value;

    if (titleInput.trim() === "" || startInput === "" || endInput === "") {
      return alert("제목, 시작 날짜, 종료 날짜를 모두 입력해야 합니다.");
    }

    adding({ title: titleInput, start: startInput, end: endInput });
  });

  adding({ title: "2", start: "2020-06-10", end: "2020-06-18" });
  adding({ title: "4", start: "2020-06-03", end: "2020-06-11" });
  adding({ title: "1", start: "2020-06-16", end: "2020-06-23" });
  adding({ title: "3", start: "2020-06-14", end: "2020-06-15" });

  ! 예시 사이트
  ? https://dhtmlx.com/docs/products/dhtmlxScheduler/sample_recurring.shtml
  ! Point
  한줄 -> line, line_start, line_end가 한 번에 다 들어감
  두 줄 -> line_start, line_end만 나눔
  세 줄 이상 -> line, line_start, line_end를 다 나눠야 함

  */

  const memoizedCalendar = useMemo<ReactElement[]>(
    () => setCalendarData(today, today.getFullYear(), today.getMonth() + 1),
    [],
  );

  const setCalendarDayData = useMemo(() => {
    const dayArr: string[] = ['일', '월', '화', '수', '목', '금', '토'],
      dayJsx = dayArr.map((id: string) => (
        <S.CalendarDay className="by" key={id}>
          <S.CalendarDaySpan>{id}</S.CalendarDaySpan>
        </S.CalendarDay>
      ));
    return dayJsx;
  }, []);


  const [thisMonth, setThisMonth]:
    [string, Dispatch<SetStateAction<string>>] = useState('');

  useEffect(() => {
    const fullYear: number = today.getFullYear();
    const month: number = today.getMonth();
    setThisMonth(`${fullYear}-${month < 10 ? `0${month}` : month}`);
  }, []);

  return (
    <>
      {schedule.startDate} || {schedule.endDate}
      <S.CalnedarSetting>
        <S.CalendarSettingMonthWrap>
          달력 날짜: <S.CalendarSettingMonth>{thisMonth}</S.CalendarSettingMonth>
        </S.CalendarSettingMonthWrap>
        <S.CalendarSettingTitleLabel htmlFor="title">제목</S.CalendarSettingTitleLabel>
        <S.CalendarSettingTitleInput
          type="text"
          autoComplete="off"
          name="title"
          id="title"
          placeholder="제목"
        />
      </S.CalnedarSetting>
      <S.Calendar>
        {setCalendarDayData}
        {memoizedCalendar}
      </S.Calendar>
    </>
  );
};

export default Calendar;
