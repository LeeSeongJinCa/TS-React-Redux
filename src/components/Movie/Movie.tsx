import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './style';
import { fetchListThunk, fetchGenreThunk } from '../../modules/movie';
import {
  MovieHeader,
  MovieList,
} from '../../components';

interface Props { }

const Movie: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListThunk(1));
    dispatch(fetchGenreThunk());
  }, []);

  return (
    <S.Movie>
      <MovieHeader />
      <MovieList />
    </S.Movie>
  );
};

export default Movie;
