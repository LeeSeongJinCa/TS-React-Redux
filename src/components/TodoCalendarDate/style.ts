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
  transition: 0.3s;
  cursor: pointer;
  &.month { background-color: #BBFFC9; }
  &.week  { background-color: #FFFFBB; }
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
  /*
  ::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff0000;
  }
  */
  &.month:hover { background-color: #44ff6b; }
  &.week:hover  { background-color: #ffff5c; }
  &.today:hover { background-color: #ffa73e; }

  #calendar_show {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #calendar_show_date {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
  #calendar_show_lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .calendar__day {
    height: 62.6px;
    width: calc(100% / 7);
    box-sizing: border-box;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    box-shadow:
      0.5px 0 0 0 #888,
      0 0.5px 0 0 #888,
      0.5px 0.5px 0 0 #888,
      0.5px 0 0 0 #888 inset,
      0 0.5px 0 0 #888 inset;
  }
  .calendar__day.month:hover {
    background-color: #BBFF10;
  }
  .calendar__day.today:hover {
    background-color: #FFA0AA;
  }
  .calendar__day_by {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid red;
    border-radius: 0;
    background-color: #ffc5c5;
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
