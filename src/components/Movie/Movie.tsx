import React from 'react';

import * as S from './style';
import {
  MovieHeader,
  MovieList,
} from '../../components';

interface Props { }

const Movie: React.FC<Props> = () => {
  return (
    <S.Movie>
      <MovieHeader />
      <MovieList />
    </S.Movie>
  );
};

export default Movie;
