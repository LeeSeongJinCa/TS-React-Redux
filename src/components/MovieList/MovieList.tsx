import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import { MovieLoading } from '../../components';
import { addTodoSvg } from '../../assets';
import { StoreState } from '../../modules';
import { MovieState, IMovieList, IMovieItem } from '../../modules/movie';

interface Props {}

const MovieList: React.FC<Props> = () => {
  const { genres, loading, list }: MovieState = useSelector(
    (state: StoreState) => state.movie,
  );

  /* list.items: {
    poster_path(pin):"/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
    popularity(pin):36.622
    vote_count(pin):14162
    video(pin):false
    media_type(pin):"movie"
    id(pin):284053
    adult(pin):false
    backdrop_path(pin):"/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg"
    original_language(pin):"en"
    original_title(pin):"Thor: Ragnarok"
    genre_ids: [28, 12, 35, 14]
    title(pin):"Thor: Ragnarok"
    vote_average(pin):7.6
    overview(pin):"Thorion, hreat, the ruthless Hela."
    release_date(pin):"2017-10-25"
  }
  */

  const test = () => {
    // Todo: items를 꺼내와야함... 
  };

  test();

  return (
    <S.MovieListWrap>
      {loading ? (
        <MovieLoading />
      ) : (
        genres.map(({ id, name }) => (
          <S.MovieItem key={id}>
            <S.MovieItemPoster>
              <S.MovieItemPosterImg
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
        ))
      )}
    </S.MovieListWrap>
  );
};

export default MovieList;
