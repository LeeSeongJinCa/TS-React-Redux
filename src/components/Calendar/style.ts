import styled from 'styled-components';

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  height: 480px;
`;

export const CalendarDay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 70px) / 7);
  height: calc((100% - 60px) / 6);
  margin: 10px 10px 0 0;
  padding: 20px;
  border-bottom: 4px solid red;
  background-color: #ffc5c5;
  font-weight: bold;
  font-size: 16px;
`;

export const CalendarDaySpan = styled.span``;

export const CalnedarSetting = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const CalendarSettingMonthWrap = styled.h1``;

export const CalendarSettingMonth = styled.span``;

export const CalendarSettingTitleLabel = styled.label``;

export const CalendarSettingTitleInput = styled.input``;
