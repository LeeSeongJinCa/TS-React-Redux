import { createStore, Store, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import modules, { StoreState } from '../modules';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(): Store<StoreState> {
  const store = createStore(
    modules,
    composeEnhancers(applyMiddleware(ReduxThunk)),
  );
  return store;
}
