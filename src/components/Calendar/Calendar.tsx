import React, {
  useState,
  useEffect,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import * as S from './style';
import { CalendarDate, CalendarDay } from '../../components';
import { ScheduleState } from '../../modules/schedule';

interface Props {
  schedule: ScheduleState;
  setSchedule: (e: MouseEvent<HTMLDivElement>) => void;
}

const Calendar: React.FC<Props> = ({ schedule, setSchedule }) => {
  const today: Date = new Date();

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
          달력 날짜:{' '}
          <S.CalendarSettingMonth>{thisMonth}</S.CalendarSettingMonth>
        </S.CalendarSettingMonthWrap>
        <S.CalendarSettingTitleLabel htmlFor="title">
          제목
        </S.CalendarSettingTitleLabel>
        <S.CalendarSettingTitleInput
          type="text"
          autoComplete="off"
          name="title"
          id="title"
          placeholder="제목"
        />
      </S.CalnedarSetting>
      <S.Calendar>
        <CalendarDay />
        <CalendarDate today={today} setSchedule={setSchedule} />
      </S.Calendar>
    </>
  );
};

export default Calendar;
