import React, { useState, ChangeEvent, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import { MovieHeader, MovieList, MovieGenreList } from '../../components';
import { MovieSkeleton } from '../../components/Skeleton';
import { StoreState } from '../../modules';
import { MovieState } from '../../modules/movie';

interface Props { }

const Movie: React.FC<Props> = () => {
  const { loading }: MovieState = useSelector((state: StoreState) => state.movie);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [select, setSelect] = useState<string>('all');

  const handleFocus = (ref: any) => {
    setIsFocus(true);
    ref.current.focus();
  };
  const handleNotFocus = () => {
    setIsFocus(false);
  };
  const handleChangeSelect = (e: ChangeEvent<HTMLOptionElement>) => {
    setSelect(e.target.value);
  };

  const getSelectedList = (selected: string): ReactElement | ReactElement[] | null => {
    switch (selected) {
      case 'all':
        return (
          <>
            <MovieGenreList />
            <MovieList />
          </>
        );
      case 'movie':
        return <MovieList />;
      case 'genre':
        return <MovieGenreList />;
      default:
        return null;
    }
  };

  return (
    <S.Movie>
      <MovieHeader
        isFocus={isFocus}
        handleFocus={handleFocus}
        handleNotFocus={handleNotFocus}
        handleChangeSelect={handleChangeSelect}
      />
      {loading ? <MovieSkeleton /> : getSelectedList(select)}
    </S.Movie>
  );
};

export default Movie;
