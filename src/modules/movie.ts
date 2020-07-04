import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { apiGetGenre } from '../utils';

type GenreType = {
  id: number;
  name: string;
};

export const FETCH_GENRE = 'GENRE' as const;

export const fetchGenre = (genres: GenreType[]) => ({
  type: FETCH_GENRE,
  payload: { genres },
});

type MovieAction =
  | ReturnType<typeof fetchGenre>;

export type MovieState = {
  genres: GenreType[];
};

const initailState: MovieState = {
  genres: [],
};

export const fetchGenreThunk: ActionCreator<ThunkAction<
  Promise<void>,
  MovieAction,
  null,
  MovieAction
>> = () => async (dispatch) => {
  try {
    const res = await apiGetGenre();
    dispatch(fetchGenre(res.data.genres));
  } catch (err) {
    throw err;
  }
};

const movie = (state = initailState, action: MovieAction): MovieState => {
  switch (action.type) {
    case FETCH_GENRE:
      return {
        ...state,
        genres: action.payload.genres,
      };
    default:
      return state;
  }
};

export default movie;
