import styled from 'styled-components';

import {
  globalBackColor, globalColor, globalComplementaryColor,
} from '../../GlobalStyle';

interface ISearchInput {
  isFocus?: boolean;
}

export const Movie = styled.div`
  border: 1px solid red;
`;

export const MovieHeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  background-color: ${globalBackColor};
`;

export const MovieHeaderSelector = styled.select`
  padding: 8px;
  border: 0;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const MovieHeaderOption = styled.option``;

export const MovieHeaderSearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: transparent;
`;

export const MovieHeaderSearchImg = styled.img`
  width: 32px;
  margin-right: 8px;
`;

export const MovieHeaderSearchInput = styled.input`
  width: ${({ isFocus }: ISearchInput) => isFocus ? 260 : 0}px;
  padding: 0;
  border: 0;
  border-bottom: 1px solid #707070;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s;
  &::placeholder {
    color: ${globalComplementaryColor};
  }
  &:focus {
    border-color: #709fb0;
  }
`;
