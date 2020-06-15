import styled from 'styled-components';
import {
  globalComplementaryBackColor,
  globalButtonColor,
  globalComplementaryColor,
} from '../../GlobalStyle';

export const Todo = styled.section``;

export const TodoInputTable = styled.div`
  padding: 24px;
`;

export const TodoInputTableRow = styled.div`
  position: relative;
  margin-bottom: 40px;
  border-bottom: 1px solid ${globalComplementaryColor};
`;

export const TodoInputTableRowSeletedType = styled.span`
  display: block;
  padding: 8px 16px;
  font-size: 20px;
  color: ${globalComplementaryColor};
  transition: 0.8s;
  cursor: pointer;
  &:hover { color: ${globalButtonColor}; }
`;

export const TodoInputTableRowSeletedList = styled.ul`
  display: none;
  padding: 0 16px;
  &.spread {
    display: block;
  }
`;

export const TodoInputTableRowSeletedItem = styled.li`
  padding: 4px;
  color: ${globalComplementaryColor};
  transition: 0.8s;
  cursor: pointer;
  &:hover { color: ${globalButtonColor}; }
`;

export const TodoInputTableRowInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 0;
  font-size: 20px;
  background-color: transparent;
  &::placeholder { color: ${globalComplementaryBackColor}; }
  &:hover::placeholder {
    transition: 0.5s;
    color: ${globalButtonColor};
  }
`;

export const TodoInputTableRowImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 35px;
`;
