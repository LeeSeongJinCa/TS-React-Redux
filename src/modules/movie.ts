import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { apiGetGenre } from '../utils';

type GenreType = {
  id: number;
  name: string;
};

export const FETCHGENRE = 'GENRE' as const;
export const LOADINGGENRE = 'LOADINGGENRE' as const;

export const fetchGenre = (genres: GenreType[]) => ({
  type: FETCHGENRE,
  payload: { genres },
});
export const loadingGenre = () => ({
  type: LOADINGGENRE,
});

type MovieAction =
  | ReturnType<typeof fetchGenre>
  | ReturnType<typeof loadingGenre>;

export type MovieState = {
  genres: GenreType[];
  loading: boolean;
};

const initailState: MovieState = {
  genres: [],
  loading: false,
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
    case FETCHGENRE:
      return {
        ...state,
        genres: action.payload.genres,
        loading: false,
      };
    case LOADINGGENRE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default movie;
