import React, { Dispatch, useState } from 'react';
import * as S from './style';
import { IInputsType } from '../../static/todoForm';

interface Props {
  todoDispatch: Dispatch<IInputsType>;
}

const TodoCalendarSetting: React.FC<Props> = ({
  todoDispatch,
}) => {
  const [thisMonth, setThisMont] = useState('2020-06-23');
    /*
    ! About Day
    const start = getId("start");
    const end = getId("end");
    start.addEventListener("change", () => {
    if (start.value) end.min = start.value;
    }, false);
    end.addEventListener("change", () => {
    if (end.value) start.max = end.value;
    }, false);

    ! About 달력 날짜 보여주기
    const thisMonth = getId("this_month");
    const fullYear = today.getFullYear();
    const month = today.getMonth() + 1;
    thisMonth.innerHTML = `${fullYear}-${month < 10 ? `0${month}` : month}`;
    */
  return (
    <S.CalnedarDaySetting>
      <h1>달력 날짜: <span id="this_month">{thisMonth}</span></h1>
      <label htmlFor="title">제목</label>
      <input type="text" autoComplete="off" name="title" id="title" placeholder="제목" /><br />
      <label htmlFor="start">시작 날짜</label><input type="date" name="start" id="start" /><br />
      <label htmlFor="end">종료 날짜</label><input type="date" name="end" id="end" /><br />
      <button id="click">스케줄 만들기</button>
      <div id="setting_month">
        <button>-</button>
        <button>+</button>
      </div>
    </S.CalnedarDaySetting>
  );
};

export default TodoCalendarSetting;
