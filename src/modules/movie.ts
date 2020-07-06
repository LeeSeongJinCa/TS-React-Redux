import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { apiGetGenre, apiGetList } from '../utils';

interface GenreType {
  id: number;
  name: string;
}

interface IMovieItem {
  poster_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  media_type: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

interface IMovieList {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: IMovieItem[];
}

export const FETCH_LIST = 'FETCHLIST' as const;
export const FETCH_GENRE = 'GENRE' as const;
export const LOADING = 'LOADING' as const;

export const fetchList = (list: IMovieList) => ({
  type: FETCH_LIST,
  payload: { list },
});
export const fetchGenre = (genres: GenreType[]) => ({
  type: FETCH_GENRE,
  payload: { genres },
});
export const loadingGenre = () => ({
  type: LOADING,
});

type MovieAction =
  | ReturnType<typeof fetchList>
  | ReturnType<typeof fetchGenre>
  | ReturnType<typeof loadingGenre>;

export type MovieState = {
  list: IMovieList | {};
  genres: GenreType[];
  loading: boolean;
};

const initailState: MovieState = {
  list: {},
  genres: [],
  loading: false,
};

export const fetchListThunk: ActionCreator<ThunkAction<
  Promise<void>,
  MovieAction,
  null,
  MovieAction
>> = (listId: number) => async (dispatch) => {
  dispatch(loadingGenre());
  try {
    const res = await apiGetList(listId);
    dispatch(fetchList(res.data));
  } catch (err) {
    throw err;
  }
};
export const fetchGenreThunk: ActionCreator<ThunkAction<
  Promise<void>,
  MovieAction,
  null,
  MovieAction
>> = () => async (dispatch) => {
  dispatch(loadingGenre());
  try {
    const res = await apiGetGenre();
    dispatch(fetchGenre(res.data.genres));
  } catch (err) {
    throw err;
  }
};

const movie = (state = initailState, action: MovieAction): MovieState => {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        list: action.payload.list,
        loading: false,
      };
    case FETCH_GENRE:
      return {
        ...state,
        genres: action.payload.genres,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default movie;
