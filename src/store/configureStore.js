import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import peopleListReducer from '../reducers/peopleListReducer';
import monthsReducer from '../reducers/monthsReducer';
import thunk from 'redux-thunk';

// Для объединения 'react devtools' и 'thunk' в createStore
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
  	combineReducers({
  		peopleList: peopleListReducer,
  		month: monthsReducer
  	}),
  	
    composeEnchancers(applyMiddleware(thunk))
  );

  return store; 
};