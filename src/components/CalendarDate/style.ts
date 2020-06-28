import styled from 'styled-components';
import { CalendarDTemp } from '../Calendar/style';
import { globalButtonColor, globalColor, globalComplementaryColor } from '../../GlobalStyle';

export const CalendarDate = styled(CalendarDTemp)`
  border-radius: 50%;
  transition: 0.3s;
  color: ${globalColor};
  font-size: 20px;
  cursor: pointer;
  &.prev {
    color: ${globalComplementaryColor};
    cursor: default;
  }
  &.between {
    color: white;
    background-color: #8d8d8d;
  }
  &.selected {
    background-color: ${globalButtonColor};
    color: white;
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
