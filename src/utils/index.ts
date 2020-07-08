import axios from 'axios';

import { IInputsType } from '../static/todoForm';
import { ScheduleState } from '../modules/schedule';

/*
  ! About Todo
 * URL = 'http://localhost:3000';
 */

const LOCAL_URL = 'http://localhost:3000';
const apiTodoDefault = axios.create({ baseURL: LOCAL_URL, timeout: 2500 });

export const apiPostTodo = (
  { thing, typing, notification }: IInputsType,
  { startDate, endDate }: ScheduleState) => {
  return apiTodoDefault.post('todos', {
    thing,
    notification,
    startDate: new Date(startDate).getTime(),
    endDate: new Date(endDate).getTime(),
    type: typing,
  });
};

export const apiGetTodo = () => {
  return apiTodoDefault.get('todos');
};

export const apiDeleteTodo = (_id: string) => {
  return apiTodoDefault.delete(`todos/${_id}`);
};

/*
  ! About Movie API
 * @API_KEY = 'd00eab0751f997be4f9f7a42dba9ac92';
 * @BASE_URL = 'https://api.themoviedb.org/3';
 * @POSTER_URL, BACK_DROP_URL = `https://image.tmdb.org/t/p/original/${PATH}`
 */

const API_KEY = 'd00eab0751f997be4f9f7a42dba9ac92';
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3';
const apiMovieDefault = axios.create({ baseURL: MOVIE_BASE_URL, timeout: 2500 });

export const apiGetList = (listId: number) => {
  const url = `list/${listId}?api_key=${API_KEY}&language=en-US`;
  return apiMovieDefault.get(url);
};

export const apiGetGenre = () => {
  const url = `genre/movie/list?api_key=${API_KEY}&language=en-US`;
  return apiMovieDefault.get(url);
};
