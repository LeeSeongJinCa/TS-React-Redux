import React, {
  useMemo,
  useState,
  useEffect,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import * as S from './style';
import { CalendarDate } from '../../components';
import { ScheduleState } from '../../modules/schedule';

interface Props {
  schedule: ScheduleState;
  setSchedule: (e: MouseEvent<HTMLDivElement>) => void;
}

const Calendar: React.FC<Props> = ({ schedule, setSchedule }) => {
  const today: Date = new Date();

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
        {setCalendarDayData}
        <CalendarDate today={today} setSchedule={setSchedule} />
      </S.Calendar>
    </>
  );
};

export default Calendar;
