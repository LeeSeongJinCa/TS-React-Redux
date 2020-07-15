import React from 'react';

import * as S from './style';
import { addTodoSvg } from '../../assets';
import { IMovieItem } from '../../modules/movie';

interface Props {
  item: IMovieItem;
}

const MovieItem: React.FC<Props> = ({
  item,
}) => {
  if (typeof item === 'undefined') return null;
  const { poster_path, title, genre_ids } = item;
  const url = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : addTodoSvg;
  return (
    <S.MovieItem>
      <S.MovieItemPoster>
        <S.MovieItemPosterImg
          loading="lazy"
          src={url}
          alt="movieName"
          title="movieName"
        />
      </S.MovieItemPoster>
      <S.MovieItemInfo>
        <S.MovieItemInfoTitle>{title}</S.MovieItemInfoTitle>
        <S.MovieItemInfoGenres>{genre_ids}</S.MovieItemInfoGenres>
      </S.MovieItemInfo>
    </S.MovieItem>
  );
};

export default MovieItem;
