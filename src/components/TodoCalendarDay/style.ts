import styled from 'styled-components';

export const CalendarDay = styled.div`
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
  &.by {
    border-bottom: 4px solid red;
    border-radius: 0;
    background-color: #ffc5c5;
  }
  &.month {
    background-color: #BBFFC9;
  }
  &.week {
    background-color: #FFFFBB;
  }
  &.today {
    position: relative;
    background-color: #FFE0BB;
  }
  &.today::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ff0000;
  }
`;

export const CalendarDaySpan = styled.span``;
