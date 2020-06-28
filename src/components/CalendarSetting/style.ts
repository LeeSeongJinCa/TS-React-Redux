import styled from 'styled-components';
import { globalBackColor } from '../../GlobalStyle';

export const CalnedarSetting = styled.div`
  text-align: center;
`;

export const CalendarSettingMonthWrap = styled.h1``;

export const CalendarSettingMonth = styled.span``;

export const CalendarSettingButtonWrap = styled.div`
  margin: 16px 0;
`;

export const CalendarSettingButton = styled.button`
  margin: 0 8px;
  padding: 8px 32px;
  border-radius: 16px;
  color: white;
  background-color: ${globalBackColor};
  font-size: 24px;
  box-shadow:
    -3px -3px 3px #ffffff,
    inset 0 0 5px #ffffff;
`;

export const CalendarSettingSelectedWrap = styled.div`
  margin: 4px 0;
`;

export const CalendarSettingSelectedDateWrap = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const CalendarSettingSelectedDate = styled.span`
  color: #646464;
`;


