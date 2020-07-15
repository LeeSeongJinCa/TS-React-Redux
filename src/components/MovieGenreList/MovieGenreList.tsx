import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import { MovieGenreItem } from '../../components';
import { StoreState } from '../../modules';
import { MovieState, IGenre } from '../../modules/movie';

interface Props { }

const MovieGenreList: React.FC<Props> = () => {
  const { genres }: MovieState = useSelector((state: StoreState) => state.movie);
  console.log(genres);

  const memorizedGenre = useMemo(
    () =>
      genres.map((genre: IGenre) => <MovieGenreItem key={genre.id} genre={genre} />),
    [genres],
  );

  return <S.MovieGenreListWrap>{memorizedGenre}</S.MovieGenreListWrap>;
};

export default React.memo(MovieGenreList);
