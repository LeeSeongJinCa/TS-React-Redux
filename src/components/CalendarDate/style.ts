import styled from 'styled-components';
import { CalendarDTemp } from '../Calendar/style';

export const CalendarDate = styled(CalendarDTemp)`
  border-radius: 5px;
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

export const CalendarDaySpan = styled.span``;
