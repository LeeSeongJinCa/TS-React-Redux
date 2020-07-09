import styled from 'styled-components';

import { globalColor } from '../../GlobalStyle';

export const MovieItem = styled.div`
  width: 24%;
  margin: 24px auto;
  padding: 12px;
  box-shadow: 0 0 5px ${globalColor};
  cursor: pointer;
`;

export const MovieItemPoster = styled.div`
  width: 100%;
`;

export const MovieItemPosterImg = styled.img`
  width: 100%;
`;

export const MovieItemInfo = styled.div``;

export const MovieItemInfoTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const MovieItemInfoGenres = styled.span`
  font-size: 14px;
`;
