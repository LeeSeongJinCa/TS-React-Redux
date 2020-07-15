import React from 'react';

import * as S from './style';
import { addTodoSvg } from '../../assets';
import { IGenre } from '../../modules/movie';

interface Props {
  genre: IGenre;
}

const MovieGenreItem: React.FC<Props> = ({
  genre,
}) => {
  if (typeof genre === 'undefined') return null;
  const { id, name } = genre;
  return (
    <S.MovieItem>
      <S.MovieItemPoster>
        <S.MovieItemPosterImg
          loading="lazy"
          src={addTodoSvg}
          alt="movieName"
          title="movieName"
        />
      </S.MovieItemPoster>
      <S.MovieItemInfo>
        <S.MovieItemInfoTitle>{id}</S.MovieItemInfoTitle>
        <S.MovieItemInfoGenres>{name}</S.MovieItemInfoGenres>
      </S.MovieItemInfo>
    </S.MovieItem>
  );
};

export default MovieGenreItem;
