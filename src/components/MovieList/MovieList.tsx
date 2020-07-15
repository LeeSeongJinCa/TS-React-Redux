import React, { useMemo, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import { MovieItem } from '../../components';
import { StoreState } from '../../modules';
import { MovieState, IMovieList, IMovieItem } from '../../modules/movie';

interface Props { }

const MovieList: React.FC<Props> = () => {
  const { list }: MovieState = useSelector((state: StoreState) => state.movie);

  const memorizedMovieList = useMemo((): ReactElement[] | null => {
    const listCopy = (list as IMovieList).items as IMovieItem[];
    return listCopy?.map((item: IMovieItem) => <MovieItem
      key={item.id}
      item={item}
    />);
  }, [list]);

  return <S.MovieListWrap>{memorizedMovieList}</S.MovieListWrap>;
};

export default React.memo(MovieList);
