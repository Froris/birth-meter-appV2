import { createStore, applyMiddleware, compose } from 'redux';
import peopleListReducer from '../reducers/peopleListReducer';
import thunk from 'redux-thunk';

// Для объединения 'react devtools' и 'thunk' в createStore
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
  	peopleListReducer,
    composeEnchancers(applyMiddleware(thunk))
  );

  return store;
};