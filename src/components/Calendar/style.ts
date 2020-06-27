import styled from 'styled-components';

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 580px;
  margin: auto;
  padding: 12px;
`;

export const CalendarDTemp = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 70px) / 7);
  height: calc((100% - 60px) / 7);
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 20px;
  font-weight: bold;
  font-size: 16px;
`;
