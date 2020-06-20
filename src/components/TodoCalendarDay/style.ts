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
  border-bottom: 4px solid red;
  background-color: #ffc5c5;
  font-weight: bold;
  font-size: 16px;
`;

export const CalendarDaySpan = styled.span``;
