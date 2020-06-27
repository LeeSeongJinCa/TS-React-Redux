import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import { StoreState } from '../../modules';

interface Props {
  today: Date;
  setMonth: (e: any) => void;
}

const CalendarSetting: React.FC<Props> = ({
  today,
  setMonth,
}) => {
  const { startDate, endDate } = useSelector((state: StoreState) => state.schedule);

  const getCurMon = (to: Date): string => {
    const fullYear: number = to.getFullYear();
    const month: number = to.getMonth() + 1;
    return `${fullYear}-${month < 10 ? `0${month}` : month}`;
  };

  return (
    <S.CalnedarSetting>
      <S.CalendarSettingMonthWrap>
        달력 날짜:{' '}
        <S.CalendarSettingMonth>{getCurMon(today)}</S.CalendarSettingMonth>
      </S.CalendarSettingMonthWrap>
      <S.CalendarSettingButtonWrap>
        <S.CalendarSettingButton onClick={setMonth} data-direc={-1}>
          {'<'}
        </S.CalendarSettingButton>
        <S.CalendarSettingButton onClick={setMonth} data-direc={1}>
          {'>'}
        </S.CalendarSettingButton>
      </S.CalendarSettingButtonWrap>
      <S.CalendarSettingTitleLabel>
        <S.CalendarSettingTitleInput
          type="text"
          autoComplete="off"
          name="title"
          id="title"
          placeholder="제목"
        />
      </S.CalendarSettingTitleLabel>
      <S.CalendarSettingSelectedWrap>
        <S.CalendarSettingSelectedDateWrap>
          시작 날짜:{' '}
          <S.CalendarSettingSelectedDate>
            {startDate ? startDate : '날짜 추가'}
          </S.CalendarSettingSelectedDate>
        </S.CalendarSettingSelectedDateWrap>
        <S.CalendarSettingSelectedDateWrap>
          종료 날짜:{' '}
          <S.CalendarSettingSelectedDate>
            {endDate ? endDate : '날짜 추가'}
          </S.CalendarSettingSelectedDate>
        </S.CalendarSettingSelectedDateWrap>
      </S.CalendarSettingSelectedWrap>
    </S.CalnedarSetting>
  );
};

export default CalendarSetting;
