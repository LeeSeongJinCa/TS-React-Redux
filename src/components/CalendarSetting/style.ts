import styled from 'styled-components';

export const CalnedarSetting = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const CalendarSettingMonthWrap = styled.h1``;

export const CalendarSettingMonth = styled.span``;

export const CalendarSettingTitleLabel = styled.label`
  display: inline-block;
`;

export const CalendarSettingTitleInput = styled.input`
  padding: 8px 12px;
  border: 2px solid #f2f2f3;
  border-radius: 8px;
  font-size: 20px;
  box-shadow: 0 0 3px #f2f2f2,
    inset 2px 3px 4px #cdcdcd;
  &:focus {
    border-color: #67a7ec
  }
  &.error {
    border-color: #e27e7f;
  }
  &.confirmed {
    border-color: #7cd184;
  }
`;

export const CalendarSettingButton = styled.button`
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 16px;
`;
