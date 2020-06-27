import React, {
  MouseEvent, useState, Dispatch, SetStateAction,
} from 'react';
import * as S from './style';
import { CalendarDate, CalendarDay, CalendarSetting } from '../../components';
import { ScheduleState } from '../../modules/schedule';
interface Props {
  schedule: ScheduleState;
  setSchedule: (e: MouseEvent<HTMLDivElement>) => void;
}

const Calendar: React.FC<Props> = ({ schedule, setSchedule }) => {
  const [today, setToday]: [Date, Dispatch<SetStateAction<Date>>] = useState(new Date());

  const setMonth = (e: MouseEvent<HTMLDivElement>) => { // 1 || -1
    const { direc } = e.currentTarget.dataset;
    let month: number = today.getMonth() + 1 + parseInt(direc, 10);
    let year: number = today.getFullYear();
    if (month > 12) {
      month = 1;
      year += 1;
    } else if (month < 1) {
      month = 12;
      year -= 1;
    }
    setToday(new Date(`${year}-${month}`));
  };

  return (
    <>
      <CalendarSetting today={today} setMonth={setMonth} />
      <S.Calendar>
        <CalendarDay />
        <CalendarDate today={today} setSchedule={setSchedule} />
      </S.Calendar>
    </>
  );
};

export default Calendar;
