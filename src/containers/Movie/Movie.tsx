import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Movie } from '../../components';
import { fetchListThunk, fetchGenreThunk } from '../../modules/movie';

interface Props { }

const MovieContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListThunk(1));
    dispatch(fetchGenreThunk());
  }, []);

  return <Movie />;
};

export default MovieContainer;
