import React, { useEffect, Dispatch, useState, SetStateAction } from 'react';
import * as S from './style';

interface Props {
  today: Date;
  setMonth: (e: any) => void;
}

const CalendarSetting: React.FC<Props> = ({
  today,
  setMonth,
}) => {
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
        <S.CalendarSettingButton onClick={setMonth} data-direc={-1}>
          {'<'}
        </S.CalendarSettingButton>
        <S.CalendarSettingButton onClick={setMonth} data-direc={1}>
          {'>'}
        </S.CalendarSettingButton>
      </S.CalendarSettingMonthWrap>
      <S.CalendarSettingTitleLabel>
        <S.CalendarSettingTitleInput
          type="text"
          autoComplete="off"
          name="title"
          id="title"
          placeholder="제목"
        />
      </S.CalendarSettingTitleLabel>
    </S.CalnedarSetting>
  );
};

export default CalendarSetting;
