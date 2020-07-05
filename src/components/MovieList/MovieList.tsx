import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import { MovieLoading } from '../../components';
import { addTodoSvg } from '../../assets';
import { StoreState } from '../../modules';

interface Props { }

const MovieList: React.FC<Props> = () => {
  const { genres, loading } = useSelector((state: StoreState) => state.movie);

  return (
    <S.MovieListWrap>
      {loading
        ? <MovieLoading />
        : genres.map(({ id, name }) => <S.MovieItem key={id}>
          <S.MovieItemPoster>
            <S.MovieItemPosterImg src={addTodoSvg} alt="movieName" title="movieName" />
          </S.MovieItemPoster>
          <S.MovieItemInfo>
            <S.MovieItemInfoTitle>{id}</S.MovieItemInfoTitle>
            <S.MovieItemInfoGenres>{name}</S.MovieItemInfoGenres>
          </S.MovieItemInfo>
        </S.MovieItem>)
      }
    </S.MovieListWrap>
  );
};

export default MovieList;
