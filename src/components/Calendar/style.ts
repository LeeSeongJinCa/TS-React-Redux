import styled from 'styled-components';

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  height: 480px;
`;

export const CalendarDate = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 70px) / 7);
  height: calc((100% - 60px) / 6);
  margin: 10px 10px 0 0;
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s;
  cursor: pointer;
  &.month {
    background-color: #bbffc9;
  }
  &.week {
    background-color: #ffffbb;
  }
  &.today {
    position: relative;
    background-color: #ffe0bb;
  }
  &.selected {
    background-color: #3b5bdb;
  }
  &.today::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ff0000;
  }
  &.month:hover {
    background-color: #44ff6b;
  }
  &.week:hover {
    background-color: #ffff5c;
  }
  &.today:hover {
    background-color: #ffa73e;
  }

  .cal_line {
    height: 20px;
    padding-left: 8px;
    background-color: #c586ff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
    box-sizing: border-box;
    cursor: pointer;
  }
  .cal_line_start {
    border-radius: 4px 0 0 4px;
  }
  .cal_line_end {
    border-radius: 0 4px 4px 0;
  }
  .cal_line_start.cal_line_end {
    border-radius: 4px;
  }
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
