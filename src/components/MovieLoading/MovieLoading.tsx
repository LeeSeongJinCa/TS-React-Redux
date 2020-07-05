import React from 'react';

import * as S from './style';
import { typingLoadingSvg } from '../../assets';

interface Props { }

const MovieList: React.FC<Props> = () => {
  return (
    <S.MovieLoading>
      <img src={typingLoadingSvg} alt="loading" title="loading" />
      <p>
        Loading data.
        Plz wait a moment.
      </p>
    </S.MovieLoading>
  );
};

export default MovieList;
